import * as items from '../data/items';
import {ZMOVES} from '../data/moves';
import {NATURES} from '../data/natures';
import {POKEDEX} from '../data/pokedex';
import {TYPE_CHART, TypeChart} from '../data/types';
import {Field} from '../field';
import {Move} from '../move';
import {Pokemon} from '../pokemon';
import {Result} from '../result';
import {display} from '../stats';
import {include} from '../util';

import * as util from './util';

const BW = 5;

export function makeDamage(gen: Generation) {
  if (gen < BW) {
    throw new Error(`Damage mechanics invalid for gen ${gen}`);
  }
  return (attacker: Readonly<Pokemon>, defender: Readonly<Pokemon>,
          move: Readonly<Move>, field: Readonly<Field>) => {
    return damage_(gen, attacker, defender, move, field);
  };
}

export const damage = makeDamage(BW);

export function damage_(
    gen: Generation, attacker_: Readonly<Pokemon>, defender_: Readonly<Pokemon>,
    move_: Readonly<Move>, field_: Readonly<Field>) {
  let attacker = attacker_.copy();
  let defender = defender_.copy();
  const move = move_.copy();
  const field = field_.copy();

  field.weather = util.getAirLockWeather(attacker, defender, field.weather);

  const attackerForecastType = util.getForecastType(attacker, field.weather);
  if (attackerForecastType) {
    attacker.type1 = attackerForecastType;
    attacker.type2 = undefined;
  }

  const defenderForecastType = util.getForecastType(defender, field.weather);
  if (defenderForecastType) {
    defender.type1 = defenderForecastType;
    defender.type2 = undefined;
  }

  attacker.item = util.getKlutzItem(attacker);
  defender.item = util.getKlutzItem(defender);

  applySeedBoost(attacker, field.terrain);
  applySeedBoost(defender, field.terrain);

  const DEFENDING: Stat[] = ['def', 'spd'];
  attacker = util.applyBoosts(attacker, gen, DEFENDING);
  defender = util.applyBoosts(defender, gen, DEFENDING);

  attacker.stats.spe = util.getFinalSpeed(attacker, field.weather, gen);
  defender.stats.spe = util.getFinalSpeed(defender, field.weather, gen);

  attacker.boosts.atk += util.addBoost(
      attacker.boosts.atk, util.getIntimidateBoost(defender, attacker));
  defender.boosts.atk += util.addBoost(
      defender.boosts.atk, util.getIntimidateBoost(attacker, attacker));

  util.applyDownloadBoost(attacker, defender);
  util.applyDownloadBoost(defender, attacker);

  const ATTACKING: Stat[] = ['atk', 'spa'];
  attacker = util.applyBoosts(attacker, gen, ATTACKING);
  defender = util.applyBoosts(defender, gen, ATTACKING);

  applyInfiltrator(attacker, field);

  let damage: number[] = [];
  const desc: RawDesc = {
    'attackerName': attacker.name,
    'moveName': move.name,
    'defenderName': defender.name
  };

  const result = new Result(gen, attacker, defender, move, field, damage, desc);

  if (move.bp === 0) {
    damage.push(0);
    return result;
  }

  if (field.isProtected && !move.bypassesProtect && !move.isZ) {
    damage.push(0);
    desc.isProtected = true;
    return result;
  }

  const MOVES = [
    'Light That Burns the Sky', 'Menacing Moonraze Maelstrom', 'Moongeist Beam',
    'Photon Geyser', 'Searing Sunraze Smash', 'Sunsteel Strike'
  ];

  let defAbility = defender.ability;
  if (!include(
          ['Full Metal Body', 'Prism Armor', 'Shadow Shield'], defAbility)) {
    if (include(['Mold Breaker', 'Teravolt', 'Turboblaze'], attacker.ability)) {
      defAbility = '';
      desc.attackerAbility = attacker.ability;
    }
    if (include(MOVES, move.name)) {
      defAbility = '';
    }
  }

  const isCritical = move.isCrit &&
      !(defAbility === 'Battle Armor' || defAbility === 'Shell Armor');

  if (move.name === 'Weather Ball') {
    switch (field.weather) {
      case 'Sun':
      case 'Harsh Sunshine':
        move.type = 'Fire';
        break;
      case 'Rain':
      case 'Heavy Rain':
        move.type = 'Water';
        break;
      case 'Sand':
        move.type = 'Rock';
        break;
      case 'Hail':
        move.type = 'Ice';
        break;
      default:
        move.type = 'Normal';
    }

    desc.weather = field.weather;
    desc.moveType = move.type;
  } else if (move.name === 'Judgment' && include(attacker.item, 'Plate')) {
    move.type = items.getItemBoostType(attacker.item!)!;
  } else if (move.name === 'Techno Blast' && include(attacker.item, 'Drive')) {
    move.type = items.getTechnoBlast(attacker.item!)!;
  } else if (move.name === 'Multi-Attack' && include(attacker.item, 'Memory')) {
    move.type = items.getMultiAttack(attacker.item!)!;
  } else if (move.name === 'Natural Gift' && include(attacker.item, 'Berry')) {
    const gift = items.getNaturalGift(gen, attacker.item!);
    move.type = gift.t;
    move.bp = gift.p;
    desc.attackerItem = attacker.item;
    desc.moveBP = move.bp;
    desc.moveType = move.type;
  } else if (move.name === 'Nature Power') {
    switch (field.terrain) {
      case 'Electric':
      case 'Psychic':
        move.type = field.terrain;
        break;
      case 'Grassy':
        move.type = 'Grass';
        break;
      case 'Misty':
        move.type = 'Psychic';
        break;
      default:
        move.type = 'Normal';
    }
  } else if (move.name === 'Revelation Dance') {
    move.type = attacker.type1;
  }

  const isAerilate = attacker.ability === 'Aerilate' && move.type === 'Normal';
  const isPixilate = attacker.ability === 'Pixilate' && move.type === 'Normal';
  const isRefrigerate =
      attacker.ability === 'Refrigerate' && move.type === 'Normal';
  const isGalvanize =
      attacker.ability === 'Galvanize' && move.type === 'Normal';
  if (!move.isZ) {
    const isLiquidVoice = attacker.ability === 'Liquid Voice' && move.isSound;
    const isNormalize =
        attacker.ability === 'Normalize' && move.type !== 'Normal';

    if (isAerilate) {
      move.type = 'Flying';
    } else if (isGalvanize) {
      move.type = 'Electric';
    } else if (isLiquidVoice) {
      move.type = 'Water';
    } else if (isPixilate) {
      move.type = 'Fairy';
    } else if (isRefrigerate) {
      move.type = 'Ice';
    } else if (isNormalize) {
      move.type = 'Normal';
    }

    if (isGalvanize || isLiquidVoice || isPixilate || isRefrigerate ||
        isAerilate || isNormalize) {
      desc.attackerAbility = attacker.ability;
    }
  }

  if ((attacker.ability === 'Gale Wings' && move.type === 'Flying' &&
       (gen >= 7 ? attacker.curHP === attacker.maxHP : true)) ||
      (attacker.ability === 'Triage' && move.givesHealth)) {
    move.hasPriority = true;
    desc.attackerAbility = attacker.ability;
  }

  const hitGhost = attacker.ability === 'Scrappy' || field.isForesight;
  const typeChart = TYPE_CHART[gen] as TypeChart;
  const typeEffect1 = util.getMoveEffectiveness(
      typeChart, move, defender.type1, hitGhost, field.isGravity);
  const typeEffect2 =
      (defender.type2 ?
           util.getMoveEffectiveness(
               typeChart, move, defender.type2, hitGhost, field.isGravity) :
           1);
  let typeEffectiveness = typeEffect1 * typeEffect2;

  const resistedKnockOffDamage =
      (!defender.item ||
       (defender.name === 'Giratina-Origin' &&
        defender.item === 'Griseous Orb') ||
       (include(defender.name, 'Arceus') && include(defender.item, 'Plate')) ||
       (include(defender.name, 'Genesect') &&
        include(defender.item, 'Drive')) ||
       (defender.ability === 'RKS System' &&
        include(defender.item, 'Memory')) ||
       (include(defender.item, ' Z') ||
        // This last case only applies when the Pokemon is holding the Mega
        // Stone that matches its species (or when it's already a
        // Mega-Evolution)
        (items.MEGA_STONES[defender.item] &&
         include(defender.name, items.MEGA_STONES[defender.item]))));

  if (typeEffectiveness === 0 && move.name === 'Thousand Arrows') {
    typeEffectiveness = 1;
  }

  if (defender.item === 'Ring Target' && typeEffectiveness === 0) {
    if (typeChart[move.type]![defender.type1]! === 0) {
      typeEffectiveness = typeEffect2;
    } else if (
        typeof defender.type2 !== 'undefined' &&
        typeChart[move.type]![defender.type2]! === 0) {
      typeEffectiveness = typeEffect1;
    }
  }

  if (typeEffectiveness === 0) {
    damage.push(0);
    return result;
  }

  if (move.name === 'Sky Drop' &&
      (defender.hasType('Flying') || (gen >= 6 && defender.weight >= 200) ||
       field.isGravity)) {
    damage.push(0);
    return result;
  }
  if (move.name === 'Synchronoise' && !defender.hasType(attacker.type1) &&
      (!attacker.type2 || !defender.hasType(attacker.type2))) {
    damage.push(0);
    return result;
  }
  if (move.name === 'Dream Eater' &&
      (defender.status !== 'Asleep' && defender.ability !== 'Comatose')) {
    damage.push(0);
    return result;
  }

  if ((defAbility === 'Wonder Guard' && typeEffectiveness <= 1) ||
      (move.type === 'Grass' && defAbility === 'Sap Sipper') ||
      (move.type === 'Fire' && include(defAbility, 'Flash Fire')) ||
      (move.type === 'Water' &&
       include(['Dry Skin', 'Storm Drain', 'Water Absorb'], defAbility)) ||
      (move.type === 'Electric' &&
       include(['Lightning Rod', 'Motor Drive', 'Volt Absorb'], defAbility)) ||
      (move.type === 'Ground' && !field.isGravity &&
       move.name !== 'Thousand Arrows' && defAbility === 'Levitate') ||
      (move.isBullet && defAbility === 'Bulletproof') ||
      (move.isSound && defAbility === 'Soundproof') ||
      (move.hasPriority &&
       include(['Queenly Majesty', 'Dazzling'], defAbility))) {
    desc.defenderAbility = defAbility;
    damage.push(0);
    return result;
  }

  if (field.weather === 'Strong Winds' && defender.hasType('Flying') &&
      typeChart[move.type]!['Flying']! > 1) {
    typeEffectiveness /= 2;
    desc.weather = field.weather;
  }

  if (move.type === 'Ground' && !field.isGravity &&
      move.name !== 'Thousand Arrows' && defender.item === 'Air Balloon') {
    desc.defenderItem = defender.item;
    damage.push(0);
    return result;
  }

  if (move.hasPriority && field.terrain === 'Psychic' &&
      util.isGrounded(defender, field)) {
    desc.terrain = field.terrain;
    damage.push(0);
    return result;
  }

  desc.HPEVs = defender.evs.hp + ' HP';

  if (move.name === 'Seismic Toss' || move.name === 'Night Shade') {
    let lv = attacker.level;
    if (attacker.ability === 'Parental Bond') {
      lv *= 2;
    }
    damage.push(lv);
    return result;
  }

  if (move.name === 'Final Gambit') {
    damage.push(attacker.curHP);
    return result;
  }

  if (move.name === 'Guardian of Alola') {
    damage.push(
        field.isProtected ? Math.floor(defender.curHP / 4) :
                            Math.floor(defender.curHP * 3 / 4));
    return result;
  }

  if (move.name === 'Nature\'s Madness') {
    damage.push(field.isProtected ? 0 : Math.floor(defender.curHP / 2));
    return result;
  }

  if (move.name === 'Spectral Thief') {
    let stat: Stat;
    for (stat in defender.boosts) {
      if (defender.boosts[stat]! > 0) {
        attacker.boosts[stat] = util.addBoost(
            attacker.boosts[stat] || 0,
            (attacker.ability === 'Contrary' ? -(defender.boosts[stat] || 0) :
                                               (defender.boosts[stat] || 0)));
        attacker.stats[stat] = util.getModifiedStat(
            attacker_.stats[stat]!, attacker.boosts[stat] || 0, gen);
      }
    }
  }

  if (move.hits > 1) {
    desc.hits = move.hits;
  }

  const turnOrder = attacker.stats.spe > defender.stats.spe ? 'FIRST' : 'LAST';

  let basePower: number;

  switch (move.name) {
    case 'Payback':
      basePower = turnOrder === 'LAST' ? 100 : 50;
      desc.moveBP = basePower;
      break;
    case 'Electro Ball':
      const r = Math.floor(attacker.stats.spe / defender.stats.spe);
      basePower = r >= 4 ? 150 : r >= 3 ? 120 : r >= 2 ? 80 : 60;
      desc.moveBP = basePower;
      break;
    case 'Gyro Ball':
      basePower = Math.min(
          150, Math.floor(25 * defender.stats.spe / attacker.stats.spe));
      desc.moveBP = basePower;
      break;
    case 'Punishment':
      basePower = Math.min(200, 60 + 20 * util.countBoosts(defender.boosts));
      desc.moveBP = basePower;
      break;
    case 'Low Kick':
    case 'Grass Knot':
      const w = defender.weight * getWeightFactor(defender);
      basePower = util.getLowKickGrassKnotPower(w);
      desc.moveBP = basePower;
      break;
    case 'Hex':
      basePower = move.bp * (defender.status !== 'Healthy' ? 2 : 1);
      desc.moveBP = basePower;
      break;
    case 'Heavy Slam':
    case 'Heat Crash':
      const wr = attacker.weight * getWeightFactor(attacker) /
          (defender.weight * getWeightFactor(defender));
      basePower =
          wr >= 5 ? 120 : wr >= 4 ? 100 : wr >= 3 ? 80 : wr >= 2 ? 60 : 40;
      desc.moveBP = basePower;
      break;
    case 'Stored Power':
    case 'Power Trip':
      basePower = 20 + 20 * util.countBoosts(attacker.boosts);
      desc.moveBP = basePower;
      break;
    case 'Acrobatics':
      basePower = attacker.item === 'Flying Gem' || !attacker.item ? 110 : 55;
      desc.moveBP = basePower;
      break;
    case 'Wake-Up Slap':
      basePower = move.bp * (defender.status === 'Asleep' ? 2 : 1);
      desc.moveBP = basePower;
      break;
    case 'Weather Ball':
      basePower =
          (field.weather !== '' && field.weather !== 'Strong Winds') ? 100 : 50;
      desc.moveBP = basePower;
      break;
    case 'Fling':
      basePower = items.getFlingPower(attacker.item);
      desc.moveBP = basePower;
      desc.attackerItem = attacker.item;
      break;
    case 'Eruption':
    case 'Water Spout':
      basePower =
          Math.max(1, Math.floor(150 * attacker.curHP / attacker.maxHP));
      desc.moveBP = basePower;
      break;
    case 'Flail':
    case 'Reversal':
      basePower = util.getFlailReversalPower(attacker);
      desc.moveBP = basePower;
      break;
    case 'Nature Power':
      switch (field.terrain) {
        case 'Misty':
          basePower = 95;
          break;
        case 'Electric':
        case 'Grassy':
        case 'Psychic':
          basePower = 90;
          break;
        default:
          basePower = 80;
      }
      break;
    case 'Water Shuriken':
      basePower = (attacker.name === 'Greninja-Ash' &&
                   attacker.ability === 'Battle Bond') ?
          20 :
          15;
      desc.moveBP = basePower;
      break;
    case 'Wring Out':
      basePower =
          Math.max(1, Math.ceil(defender.curHP * 120 / defender.maxHP - 0.5));
      desc.moveBP = basePower;
      break;
    default:
      basePower = move.bp;
  }

  const bpMods: number[] = [];
  if ((attacker.ability === 'Technician' && basePower <= 60) ||
      (attacker.ability === 'Flare Boost' && attacker.status === 'Burned' &&
       move.category === 'Special') ||
      (attacker.ability === 'Toxic Boost' &&
       include(attacker.status, 'Poisoned') && move.category === 'Physical')) {
    bpMods.push(0x1800);
    desc.attackerAbility = attacker.ability;
  } else if (attacker.ability === 'Analytic' && turnOrder !== 'FIRST') {
    bpMods.push(0x14CD);
    desc.attackerAbility = attacker.ability;
  } else if (
      attacker.ability === 'Sand Force' && field.weather === 'Sand' &&
      include(['Rock', 'Ground', 'Steel'], move.type)) {
    bpMods.push(0x14CD);
    desc.attackerAbility = attacker.ability;
    desc.weather = field.weather;
  } else if (
      (attacker.ability === 'Reckless' &&
       (typeof move.hasRecoil === 'number' || move.hasRecoil === 'crash')) ||
      (attacker.ability === 'Iron Fist' && move.isPunch)) {
    bpMods.push(0x1333);
    desc.attackerAbility = attacker.ability;
  }

  if (defAbility === 'Heatproof' && move.type === 'Fire') {
    bpMods.push(0x800);
    desc.defenderAbility = defAbility;
  } else if (defAbility === 'Dry Skin' && move.type === 'Fire') {
    bpMods.push(0x1400);
    desc.defenderAbility = defAbility;
  } else if (
      defAbility === 'Fluffy' && move.type === 'Fire' &&
      (!move.makesContact || attacker.ability === 'Long Reach')) {
    bpMods.push(0x2000);
    desc.defenderAbility = defAbility;
  } else if (
      defAbility === 'Fluffy' && move.type !== 'Fire' &&
      (move.makesContact && attacker.ability !== 'Long Reach')) {
    bpMods.push(0x800);
    desc.defenderAbility = defAbility;
  }

  if (attacker.ability === 'Sheer Force' && move.hasSecondaryEffect) {
    bpMods.push(0x14CD);
    desc.attackerAbility = attacker.ability;
  }

  if (attacker.ability === 'Rivalry' && attacker.gender !== 'genderless' &&
      defender.gender !== 'genderless') {
    if (attacker.gender === defender.gender) {
      bpMods.push(0x1400);
      desc.rivalry = 'buffed';
    } else {
      bpMods.push(0xCCD);
      desc.rivalry = 'nerfed';
    }
    desc.attackerAbility = attacker.ability;
  }

  const isSTAB = attacker.hasType(move.type);

  if (items.getItemBoostType(attacker.item) === move.type) {
    bpMods.push(0x1333);
    desc.attackerItem = attacker.item;
  } else if (
      (attacker.item === 'Muscle Band' && move.category === 'Physical') ||
      (attacker.item === 'Wise Glasses' && move.category === 'Special')) {
    bpMods.push(0x1199);
    desc.attackerItem = attacker.item;
  } else if (
      ((attacker.item === 'Adamant Orb' && attacker.name === 'Dialga') ||
       (attacker.item === 'Lustrous Orb' && attacker.name === 'Palkia') ||
       (attacker.item === 'Griseous Orb' &&
        attacker.name === 'Giratina-Origin')) &&
      isSTAB) {
    bpMods.push(0x1333);
    desc.attackerItem = attacker.item;
  } else if (attacker.item === move.type + ' Gem') {
    bpMods.push(gen >= 6 ? 0x14CD : 0x1800);
    desc.attackerItem = attacker.item;
  } else if (attacker.item === 'Soul Dew' && isLati(attacker) && isSTAB) {
    bpMods.push(gen >= 7 ? 0x1333 : 0x1000);
    desc.attackerItem = attacker.item;
  }

  const FACADE_STATUS = ['Paralyzed', 'Poisoned', 'Badly Poisoned', 'Burned'];
  if ((move.name === 'Facade' && include(FACADE_STATUS, attacker.status) ||
       (move.name === 'Brine' && defender.curHP <= defender.maxHP / 2) ||
       (move.name === 'Venoshock' &&
        (defender.status === 'Poisoned' ||
         defender.status === 'Badly Poisoned')))) {
    bpMods.push(0x2000);
    desc.moveBP = move.bp * 2;
  } else if (
      move.name === 'Solar Beam' &&
      include(['Rain', 'Heavy Rain', 'Sand', 'Hail'], field.weather)) {
    bpMods.push(0x800);
    desc.moveBP = move.bp / 2;
    desc.weather = field.weather;
  } else if (gen >= 6 && move.name === 'Knock Off' && !resistedKnockOffDamage) {
    bpMods.push(0x1800);
    desc.moveBP = move.bp * 1.5;
  } else if (include(ZMOVES, move.name)) {
    // show z-move power in desc
    desc.moveBP = move.bp;
  }

  if (field.isHelpingHand) {
    bpMods.push(0x1800);
    desc.isHelpingHand = true;
  }

  if (isAerilate || isPixilate || isRefrigerate || isGalvanize) {
    bpMods.push(gen >= 7 ? 0x1333 : 0x14CD);
    desc.attackerAbility = attacker.ability;
  } else if (
      (attacker.ability === 'Mega Launcher' && move.isPulse) ||
      (attacker.ability === 'Strong Jaw' && move.isBite)) {
    bpMods.push(0x1800);
    desc.attackerAbility = attacker.ability;
  } else if (attacker.ability === 'Tough Claws' && move.makesContact) {
    bpMods.push(0x14CD);
    desc.attackerAbility = attacker.ability;
  } else if (attacker.ability === 'Neuroforce' && typeEffectiveness > 1) {
    bpMods.push(0x1400);
    desc.attackerAbility = attacker.ability;
  }

  const isAttackerAura = attacker.ability === (move.type + ' Aura');
  const isDefenderAura = defAbility === (move.type + ' Aura');
  if (isAttackerAura || isDefenderAura) {
    if (attacker.ability === 'Aura Break' || defAbility === 'Aura Break') {
      bpMods.push(0x0C00);
      desc.attackerAbility = attacker.ability;
      desc.defenderAbility = defAbility;
    } else {
      bpMods.push(0x1547);
      if (isAttackerAura) {
        desc.attackerAbility = attacker.ability;
      }
      if (isDefenderAura) {
        desc.defenderAbility = defAbility;
      }
    }
  }

  basePower = Math.max(1, pokeRound(basePower * chainMods(bpMods) / 0x1000));

  const attackSource = move.name === 'Foul Play' ? defender : attacker;
  const attackSource_ = move.name === 'Foul Play' ? defender_ : attacker_;
  if (move.usesHighestAttackStat) {
    move.category = attackSource.stats.atk > attackSource.stats.spa ?
        'Physical' :
        'Special';
  }

  const attackStat = move.category === 'Physical' ? 'atk' : 'spa';
  desc.attackEVs = attacker.evs[attackStat] +
      (NATURES[attacker.nature][0] === attackStat ?
           '+' :
           NATURES[attacker.nature][1] === attackStat ? '-' : '') +
      ' ' + display(attackStat);

  let attack: number;
  if (attackSource.boosts[attackStat] === 0 ||
      (isCritical && attackSource.boosts[attackStat] < 0)) {
    attack = attackSource_.stats[attackStat];
  } else if (defAbility === 'Unaware') {
    attack = attackSource_.stats[attackStat];
    desc.defenderAbility = defAbility;
  } else {
    attack = attackSource.stats[attackStat];
    desc.attackBoost = attackSource.boosts[attackStat];
  }

  // NOTE: unlike all other attack modifiers, Hustle gets applied directly
  if (attacker.ability === 'Hustle' && move.category === 'Physical') {
    attack = pokeRound(attack * 3 / 2);
    desc.attackerAbility = attacker.ability;
  }

  const atkMods: number[] = [];
  if ((defAbility === 'Thick Fat' &&
       (move.type === 'Fire' || move.type === 'Ice')) ||
      (defAbility === 'Water Bubble' && move.type === 'Fire')) {
    atkMods.push(0x800);
    desc.defenderAbility = defAbility;
  }

  if ((attacker.ability === 'Guts' && attacker.status !== 'Healthy' &&
       move.category === 'Physical') ||
      attacker.curHP <= attacker.maxHP / 3 &&
          (attacker.ability === 'Overgrow' && move.type === 'Grass' ||
           attacker.ability === 'Blaze' && move.type === 'Fire' ||
           attacker.ability === 'Torrent' && move.type === 'Water' ||
           attacker.ability === 'Swarm' && move.type === 'Bug') ||
      (move.category === 'Special' && attacker.ability === 'Plus' ||
       attacker.ability === 'Minus')) {
    atkMods.push(0x1800);
    desc.attackerAbility = attacker.ability;
  } else if (
      attacker.ability === 'Flash Fire (activated)' && move.type === 'Fire') {
    atkMods.push(0x1800);
    desc.attackerAbility = 'Flash Fire';
  } else if (
      (attacker.ability === 'Solar Power' && include(field.weather, 'Sun') &&
       move.category === 'Special') ||
      (attacker.ability === 'Flower Gift' && include(field.weather, 'Sun') &&
       move.category === 'Physical')) {
    atkMods.push(0x1800);
    desc.attackerAbility = attacker.ability;
    desc.weather = field.weather;
  } else if (
      (attacker.ability === 'Defeatist' &&
       attacker.curHP <= attacker.maxHP / 2) ||
      (attacker.ability === 'Slow Start' && move.category === 'Physical')) {
    atkMods.push(0x800);
    desc.attackerAbility = attacker.ability;
  } else if (
      (attacker.ability === 'Huge Power' ||
       attacker.ability === 'Pure Power') &&
      move.category === 'Physical') {
    atkMods.push(0x2000);
    desc.attackerAbility = attacker.ability;
  }

  if (attacker.item === 'Thick Club' &&
          (include(['Cubone', 'Marowak', 'Marowak-Alola'], attacker.name) &&
           move.category === 'Physical') ||
      (attacker.item === 'Deep Sea Tooth' && attacker.name === 'Clamperl' &&
       move.category === 'Special') ||
      (attacker.item === 'Light Ball' && attacker.name === 'Pikachu') &&
          !move.isZ) {
    atkMods.push(0x2000);
    desc.attackerItem = attacker.item;
  } else if (
      (gen < 7 && attacker.item === 'Soul Dew' && (isLati(attacker)) &&
       move.category === 'Special') ||
      (!move.isZ &&
       ((attacker.item === 'Choice Band' && move.category === 'Physical') ||
        (attacker.item === 'Choice Specs' && move.category === 'Special')))) {
    atkMods.push(0x1800);
    desc.attackerItem = attacker.item;
  }

  attack = Math.max(1, pokeRound(attack * chainMods(atkMods) / 0x1000));

  const hitsPhysical = move.category === 'Physical' || move.dealsPhysicalDamage;

  const defenseStat = hitsPhysical ? 'def' : 'spd';
  desc.defenseEVs = defender.evs[defenseStat] +
      (NATURES[defender.nature][0] === defenseStat ?
           '+' :
           NATURES[defender.nature][1] === defenseStat ? '-' : '') +
      ' ' + display(defenseStat);

  let defense: number;
  if (defender.boosts[defenseStat] === 0 ||
      (isCritical && defender.boosts[defenseStat] > 0) ||
      move.ignoresDefenseBoosts) {
    defense = defender_.stats[defenseStat];
  } else if (attacker.ability === 'Unaware') {
    defense = defender_.stats[defenseStat];
    desc.attackerAbility = attacker.ability;
  } else {
    defense = defender.stats[defenseStat];
    desc.defenseBoost = defender.boosts[defenseStat];
  }

  // NOTE: unlike all other defense modifiers, Sandstorm SpD boost gets
  // applied directly
  if (field.weather === 'Sand' && defender.hasType('Rock') && !hitsPhysical) {
    defense = pokeRound(defense * 3 / 2);
    desc.weather = field.weather;
  }

  const defMods: number[] = [];
  if (defAbility === 'Marvel Scale' && defender.status !== 'Healthy' &&
      hitsPhysical) {
    defMods.push(0x1800);
    desc.defenderAbility = defAbility;
  } else if (
      defAbility === 'Flower Gift' && include(field.weather, 'Sun') &&
      !hitsPhysical) {
    defMods.push(0x1800);
    desc.defenderAbility = defAbility;
    desc.weather = field.weather;
  }

  if (field.terrain === 'Grassy' && defAbility === 'Grass Pelt' &&
      hitsPhysical) {
    defMods.push(0x1800);
    desc.defenderAbility = defAbility;
  }

  if (gen < 7 &&
          (!hitsPhysical && isLati(defender) && defender.item === 'Soul Dew') ||
      (defender.item === 'Eviolite' && POKEDEX[gen][defender.name].canEvolve) ||
      (!hitsPhysical && defender.item === 'Assault Vest')) {
    defMods.push(0x1800);
    desc.defenderItem = defender.item;
  }

  if ((defender.item === 'Metal Powder' && defender.name === 'Ditto' &&
       hitsPhysical) ||
      (defender.item === 'Deep Sea Scale' && defender.name === 'Clamperl' &&
       !hitsPhysical)) {
    defMods.push(0x2000);
    desc.defenderItem = defender.item;
  }

  if (defAbility === 'Fur Coat' && hitsPhysical) {
    defMods.push(0x2000);
    desc.defenderAbility = defAbility;
  }

  defense = Math.max(1, pokeRound(defense * chainMods(defMods) / 0x1000));

  let baseDamage = getBaseDamage(attacker.level, basePower, attack, defense);
  if (field.format !== 'Singles' && move.isSpread) {
    baseDamage = pokeRound(baseDamage * 0xC00 / 0x1000);
  }

  if ((include(field.weather, 'Sun') && move.type === 'Fire') ||
      (include(field.weather, 'Rain') && move.type === 'Water')) {
    baseDamage = pokeRound(baseDamage * 0x1800 / 0x1000);
    desc.weather = field.weather;
  } else if (
      (field.weather === 'Sun' && move.type === 'Water') ||
      (field.weather === 'Rain' && move.type === 'Fire')) {
    baseDamage = pokeRound(baseDamage * 0x800 / 0x1000);
    desc.weather = field.weather;
  } else if (
      (field.weather === 'Harsh Sunshine' && move.type === 'Water') ||
      (field.weather === 'Heavy Rain' && move.type === 'Fire')) {
    damage.push(0);
    return result;
  }

  if (util.isGrounded(attacker, field)) {
    if (field.terrain === 'Electric' && move.type === 'Electric') {
      baseDamage = pokeRound(baseDamage * 0x1800 / 0x1000);
      desc.terrain = field.terrain;
    } else if (field.terrain === 'Grassy' && move.type === 'Grass') {
      baseDamage = pokeRound(baseDamage * 0x1800 / 0x1000);
      desc.terrain = field.terrain;
    } else if (field.terrain === 'Psychic' && move.type === 'Psychic') {
      baseDamage = pokeRound(baseDamage * 0x1800 / 0x1000);
      desc.terrain = field.terrain;
    }
  }

  if (util.isGrounded(defender, field)) {
    if (field.terrain === 'Misty' && move.type === 'Dragon') {
      baseDamage = pokeRound(baseDamage * 0x800 / 0x1000);
      desc.terrain = field.terrain;
    } else if (field.terrain === 'Grassy' && [
                 'Bulldoze', 'Earthquake'
               ].indexOf(move.name) !== -1) {
      baseDamage = pokeRound(baseDamage * 0x800 / 0x1000);
      desc.terrain = field.terrain;
    }
  }

  if (hasTerrainSeed(defender)) {
    const terrain = defender.item!.substring(0, defender.item!.indexOf(' '));
    if (field.terrain === terrain &&
        items.SEED_BOOSTED_STAT[defender.item!] === defenseStat) {
      // NOTE: the last condition applies so the calc doesn't show a seed
      // where it wouldn't affect the outcome (like Grassy Seed when being
      // hit by a special move)
      desc.defenderItem = defender.item;
    }
  }

  if (isCritical) {
    baseDamage = Math.floor(baseDamage * (gen >= 6 ? 1.5 : 2));
    desc.isCritical = isCritical;
  }

  // NOTE: the random factor is applied between the crit mod and the stab mod,
  // so don't apply anything below this until we're inside the loop
  let stabMod = 0x1000;
  if (isSTAB) {
    if (attacker.ability === 'Adaptability') {
      stabMod = 0x2000;
      desc.attackerAbility = attacker.ability;
    } else {
      stabMod = 0x1800;
    }
  } else if (attacker.ability === 'Protean') {
    stabMod = 0x1800;
    desc.attackerAbility = attacker.ability;
  }

  const applyBurn =
      (attacker.status === 'Burned' && move.category === 'Physical' &&
       attacker.ability !== 'Guts' && !move.ignoresBurn);
  desc.isBurned = applyBurn;

  const finalMods: number[] = [];
  if (field.isReflect && move.category === 'Physical' && !isCritical &&
      !field.isAuroraVeil) {
    finalMods.push(
        field.format !== 'Singles' ? (gen >= 6 ? 0xAAC : 0xA8F) : 0x800);
    desc.isReflect = true;
  } else if (
      field.isLightScreen && move.category === 'Special' && !isCritical &&
      !field.isAuroraVeil) {
    finalMods.push(
        field.format !== 'Singles' ? (gen >= 6 ? 0xAAC : 0xA8F) : 0x800);
    desc.isLightScreen = true;
  }

  if ((defender.ability === 'Multiscale' ||
       defender.ability === 'Shadow Shield') &&
      defender.curHP === defender.maxHP && !field.isSR &&
      (!field.spikes || defender.hasType('Flying'))) {
    finalMods.push(0x800);
    desc.defenderAbility = defender.ability;
  }

  if (attacker.ability === 'Tinted Lens' && typeEffectiveness < 1) {
    finalMods.push(0x2000);
    desc.attackerAbility = attacker.ability;
  }

  if (attacker.ability === 'Water Bubble' && move.type === 'Water') {
    finalMods.push(0x2000);
    desc.attackerAbility = attacker.ability;
  }

  if (attacker.ability === 'Steelworker' && move.type === 'Steel') {
    finalMods.push(0x1800);
    desc.attackerAbility = attacker.ability;
  }

  if (field.isFriendGuard) {
    finalMods.push(0xC00);
    desc.isFriendGuard = true;
  }

  if (field.isAuroraVeil && !isCritical) {
    // 0.5x damage from physical and special attacks in singles,
    // 0.66x damage in Doubles
    finalMods.push(field.format === 'Singles' ? 0x800 : 0xAAC);
    desc.isAuroraVeil = true;
  }

  if (attacker.ability === 'Sniper' && isCritical) {
    finalMods.push(0x1800);
    desc.attackerAbility = attacker.ability;
  }

  if (include(['Solid Rock', 'Filter', 'Prism Armor'], defender.ability) &&
      typeEffectiveness > 1) {
    finalMods.push(0xC00);
    desc.defenderAbility = defender.ability;
  }

  if (attacker.item === 'Expert Belt' && typeEffectiveness > 1 && !move.isZ) {
    finalMods.push(0x1333);
    desc.attackerItem = attacker.item;
  } else if (attacker.item === 'Life Orb' && !move.isZ) {
    finalMods.push(0x14CC);
    desc.attackerItem = attacker.item;
  }

  if (items.getBerryResistType(defender.item) === move.type &&
      (typeEffectiveness > 1 || move.type === 'Normal') &&
      attacker.ability !== 'Unnerve') {
    finalMods.push(0x800);
    desc.defenderItem = defender.item;
  }

  if (field.isProtected && move.isZ) {
    // NOTE: Although only possible while hacking, Z-Moves fully damage through
    // protect without a Z-Crystal
    if (include(attacker.item, ' Z')) {
      finalMods.push(0x400);
      desc.isProtected = true;
    }
  }

  const finalMod = chainMods(finalMods);

  for (let i = 0; i < 16; i++) {
    damage[i] = getFinalDamage(
        baseDamage, i, typeEffectiveness, applyBurn, stabMod, finalMod);
    // is 2nd hit half BP? half attack? half damage range?
    // keeping it as a flat multiplier until I know the specifics
    if (attacker.ability === 'Parental Bond' && move.hits === 1 &&
        (field.format === 'Singles' || !move.isSpread)) {
      // in gen 7, 2nd hit was reduced from 50% to 25%
      const bondFactor = gen < 7 ? 3 / 2 : 5 / 4;
      damage[i] = Math.floor(damage[i] * bondFactor);
      desc.attackerAbility = attacker.ability;
    }
  }

  if (move.dropsStats && typeof move.usedTimes !== 'undefined' &&
      move.usedTimes > 1) {
    let simpleMultiplier = 1;
    if (attacker.ability === 'Simple') {
      simpleMultiplier = 2;
    }

    desc.moveTurns = 'over ' + move.usedTimes + ' turns';
    const hasWhiteHerb = attacker.item === 'White Herb';
    let usedWhiteHerb = false;
    let dropCount = attacker.boosts[attackStat];

    for (let times = 0; times < move.usedTimes; times++) {
      const newAttack =
          util.getModifiedStat(attacker_.stats[attackStat], dropCount, gen);
      let damageMultiplier = 0;

      damage = damage.map(affectedAmount => {
        if (times) {
          const newBaseDamage =
              getBaseDamage(attacker.level, basePower, newAttack, defense);
          const newFinalDamage = getFinalDamage(
              newBaseDamage, damageMultiplier, typeEffectiveness, applyBurn,
              stabMod, finalMod);
          damageMultiplier++;
          return affectedAmount + newFinalDamage;
        }

        return affectedAmount;
      });

      if (attacker.ability === 'Contrary') {
        dropCount = Math.min(6, dropCount + move.dropsStats);
        desc.attackerAbility = attacker.ability;
      } else {
        dropCount =
            Math.max(-6, dropCount - (move.dropsStats * simpleMultiplier));
        if (attacker.ability === 'Simple') {
          desc.attackerAbility = attacker.ability;
        }
      }

      // NOTE: the Pokémon hits THEN the stat rises / lowers
      if (hasWhiteHerb && attacker.boosts[attackStat] < 0 && !usedWhiteHerb) {
        dropCount += move.dropsStats * simpleMultiplier;
        usedWhiteHerb = true;
        desc.attackerItem = attacker.item;
      }
    }
  }

  if (attacker.item === 'Metronome' &&
      typeof move.metronomeCount !== 'undefined' && move.metronomeCount > 1) {
    let boostTurns: number;
    if (move.dropsStats) {
      boostTurns = move.usedTimes!;
    } else {
      boostTurns = move.metronomeCount;
    }

    for (let metronome = 0; metronome < boostTurns; metronome++) {
      const totalMetronomeBoost = 1 + metronome / 10;
      damage = damage.map(damageRoll => {
        return pokeRound(damageRoll * totalMetronomeBoost);
      });
    }

    desc.attackerItem = 'Metronome';
  }

  desc.attackBoost = attacker.boosts[attackStat];

  return result;
}

function applyInfiltrator(attacker: Readonly<Pokemon>, field: Field) {
  if (attacker.ability === 'Infiltrator') {
    field.isReflect = false;
    field.isLightScreen = false;
    field.isAuroraVeil = false;
  }
}

function applySeedBoost(pokemon: Pokemon, terrain: Terrain) {
  if (terrain && include(pokemon.item, 'Seed')) {
    const terrainSeed = pokemon.item!.substring(0, pokemon.item!.indexOf(' '));
    if (terrainSeed === terrain) {
      const boost = pokemon.ability === 'Contrary' ? -1 : 1;
      if (terrainSeed === 'Grassy' || terrainSeed === 'Electric') {
        pokemon.boosts.def = util.addBoost(pokemon.boosts.def, boost);
      } else {
        pokemon.boosts.spd = util.addBoost(pokemon.boosts.spd, boost);
      }
    }
  }
}

function getWeightFactor(pokemon: Readonly<Pokemon>) {
  switch (pokemon.ability) {
    case 'Heavy Metal':
      return 2;
    case 'Light Metal':
      return 0.5;
    default:
      return 1;
  }
}

function isLati(pokemon: Readonly<Pokemon>) {
  return include(
      ['Latios', 'Latias', 'Latios-Mega', 'Latias-Mega'], pokemon.name);
}

function hasTerrainSeed(pokemon: Readonly<Pokemon>) {
  return include(
      ['Electric Seed', 'Misty Seed', 'Grassy Seed', 'Psychic Seed'],
      pokemon.item);
}

// GameFreak rounds DOWN on .5
function pokeRound(num: number) {
  return (num % 1 > 0.5) ? Math.ceil(num) : Math.floor(num);
}

function getBaseDamage(
    level: number, basePower: number, attack: number, defense: number) {
  return Math.floor(
      Math.floor(
          (Math.floor((2 * level) / 5 + 2) * basePower * attack) / defense) /
          50 +
      2);
}

function getFinalDamage(
    baseAmount: number, i: number, effectiveness: number, isBurned: boolean,
    stabMod: number, finalMod: number) {
  let damageAmount = Math.floor(
      pokeRound(Math.floor(baseAmount * (85 + i) / 100) * stabMod / 0x1000) *
      effectiveness);

  if (isBurned) {
    damageAmount = Math.floor(damageAmount / 2);
  }

  return pokeRound(Math.max(1, damageAmount * finalMod / 0x1000));
}

function chainMods(mods: number[]) {
  let m = 0x1000;
  for (let i = 0; i < mods.length; i++) {
    if (mods[i] !== 0x1000) {
      m = ((m * mods[i]) + 0x800) >> 12;
    }
  }
  return m;
}
