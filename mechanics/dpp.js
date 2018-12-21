'use strict';

const DPP = 4;

const TYPE_CHART = require('../data/types').TYPE_CHART[DPP];
const NATURES = require('../data/natures').NATURES;
const items = require('../data/items');
const stats = require('../data/stats');
const util = require('./util');
const include = require('../util').include;
const Result = require('../result').Result;

function damage(attacker, defender, move, field) {
  let attacker_ = attacker;
  let defender_ = defender;

  attacker = attacker.copy();
  defender = defender.copy();
  move = move.copy();
  field = field.copy();

  field.weather = getAirLockWeather(attacker, defender, field.weather);

  let attackerForecastType = util.getForecastType(attacker, field.weather);
  if (attackerForecastType) {
    attacker.type1 = attackerForecastType;
    attacker.type2 = '';
  }

  let defenderForecastType = util.getForecastType(defender, field.weather);
  if (defenderForecastType) {
    defender.type1 = defenderForecastType;
    defender.type2 = '';
  }

  attacker.item = util.getKlutzItem(attacker);
  defender.item = util.getKlutzItem(defender);

  attacker.boosts.atk += util.addBoost(
      attacker.boosts.atk, util.getIntimidateBoost(defender, attacker));
  defender.boosts.atk += util.addBoost(
      defender.boosts.atk, util.getIntimidateBoost(attacker, attacker));

  util.applyDownloadBoost(attacker);
  util.applyDownloadBoost(defender);

  attacker.stats.spe = util.getFinalSpeed(attacker, field.weather);
  defender.stats.spe = util.getFinalSpeed(defender, field.weather);

  let damage = [];
  let desc = {
    'attackerName': attacker.name,
    'moveName': move.name,
    'defenderName': defender.name
  };

  let result = new Result(DPP, attacker, defender, move, field, damage, desc);

  if (move.bp === 0) {
    damage.push(0);
    return result;
  }

  if (field.isProtected && !move.bypassesProtect) {
    damage.push(0);
    desc.isProtected = true;
    return result;
  }

  let defAbility = defender.ability;
  if (attacker.ability === 'Mold Breaker') {
    defAbility = '';
    desc.attackerAbility = attacker.ability;
  }

  let isCritical = move.isCrit &&
    !(defAbility === 'Battle Armor' ||
      defAbility === 'Shell Armor');

  if (move.name === 'Weather Ball') {
    switch (weather) {
      case 'Sun':
        move.type = 'Fire';
        move.bp *= 2;
        break;
      case 'Rain':
        move.type = 'Water';
        move.bp *= 2;
        break;
      case 'Sand':
        move.type = 'Rock';
        move.bp *= 2;
        break;
      case 'Hail':
        move.type = 'Ice';
        move.bp *= 2;
        break;
      default:
        move.type = 'Normal';
    }

    desc.weather = field.weather;
    desc.moveType = move.type;
    desc.moveBP = move.bp;
  } else if (move.name === 'Judgment' &&
             include(attacker.item, 'Plate')) {
    move.type = items.getItemBoostType(attacker.item);
  } else if (move.name === 'Natural Gift' &&
             include(attacker.item, 'Berry')) {
    let gift = items.getNaturalGift(attacker.item);
    move.type = gift.t;
    move.bp = gift.p;
    desc.attackerItem = attacker.item;
    desc.moveBP = move.bp;
    desc.moveType = move.type;
  }

  if (attacker.ability === 'Normalize') {
    move.type = 'Normal';
    desc.attackerAbility = attacker.ability;
  }

  let hitGhost = attacker.ability === 'Scrappy' || field.isForesight;
  let typeEffect1 = util.getMoveEffectiveness(
      TYPE_CHART, move, defender.type1, hisGhost, field.isGravity);
  let typeEffect2 = (defender.type2
      ? util.getMoveEffectiveness(
          TYPE_CHART, move, defender.type2, hitGhost, field.isGravity)
      : 1);
  let typeEffectiveness = typeEffect1 * typeEffect2;

  if (typeEffectiveness === 0) {
    damage.push(0);
    return result;
  }

  if ((defAbility === 'Wonder Guard' && typeEffectiveness <= 1) ||
      (move.type === 'Fire' && include(defAbility, 'Flash Fire')) ||
      (move.type === 'Water' &&
        (defAbility === 'Dry Skin' || defAbility === 'Water Absorb')) ||
      (move.type === 'Electric' &&
        (defAbility === 'Motor Drive' || defAbility === 'Volt Absorb')) ||
      (move.type === 'Ground' &&
       !field.isGravity && defAbility === 'Levitate') ||
      (move.isSound && defAbility === 'Soundproof')) {
    desc.defenderAbility = defAbility;
    damage.push(0);
    return result;
  }

  desc.HPEVs = defender.evs.hp + ' HP';

  let lv = attacker.level;
  if (move.name === 'Seismic Toss' || move.name === 'Night Shade') {
    damage.push(lv);
    return result;
  }

  if (move.hits > 1) {
    desc.hits = move.hits;
  }

  let turnOrder = attacker.stats.spe > defender.stats.spe ? 'FIRST' : 'LAST';

  switch (move.name) {
  case 'Brine':
    if (defender.curHP <= (defender.maxHP / 2)) {
      move.bp *= 2;
      desc.moveBP = move.bp;
    }
    break;
  case 'Eruption':
  case 'Water Spout':
    move.bp =
        Math.max(1, Math.floor(move.bp * attacker.curHP / attacker.maxHP));
    desc.moveBP = move.bp;
    break;
  case 'Facade': {
    const FACADE_STATUS = ['Paralyzed', 'Poisoned', 'Badly Poisoned', 'Burned'];
    if (include(FACADE_STATUS, attacker.status)) {
      move.bp *= 2;
      desc.moveBP = move.bp;
    }
    break;
  }
  case 'Flail':
  case 'Reversal':
    let p = Math.floor(48 * attacker.curHP / attacker.maxHP);
    move.bp = p <= 1 ? 200 :
              p <= 4 ? 150 :
              p <= 9 ? 100 :
              p <= 16 ? 80 :
              p <= 32 ? 40 :
              20;
    desc.moveBP = move.bp;
    break;
  case 'Fling':
    move.bp = items.getFlingPower(attacker.item);
    desc.moveBP = move.bp;
    desc.attackerItem = attacker.item;
    break;
  case 'Grass Knot':
  case 'Low Kick':
    let w = defender.weight;
    move.bp = w >= 200 ? 120 :
              w >= 100 ? 100 :
              w >= 50 ? 80 :
              w >= 25 ? 60 :
              w >= 10 ? 40 :
              20;
    desc.moveBP = move.bp;
    break;
  case 'Gyro Ball':
    move.bp =
        Math.min(150, Math.floor(25 * defender.stats[SP] / attacker.stats[SP]));
    desc.moveBP = move.bp;
    break;
  case 'Payback':
    if (turnOrder !== 'FIRST') {
      move.bp *= 2;
      desc.moveBP = move.bp;
    }
    break;
  case 'Punishment':
    let boostCount = util.countBoosts(defender.boosts);
    if (boostCount > 0) {
      move.bp = Math.min(200, move.bp + 20 * boostCount);
      desc.moveBP = move.bp;
    }
    break;
  case 'Wake-Up Slap':
    if (defender.status === 'Asleep') {
      move.bp *= 2;
      desc.moveBP = move.bp;
    }
    break;
  case 'Wring Out':
    move.bp = Math.floor(defender.curHP * 120 / defender.maxHP) + 1;
    desc.moveBP = move.bp;
    break;
  }

  let basePower = move.bp;

  if (field.isHelpingHand) {
    basePower = Math.floor(basePower * 1.5);
    desc.isHelpingHand = true;
  }

  let isPhysical = move.category === 'Physical';
  if ((attacker.item === 'Muscle Band' && isPhysical) ||
      (attacker.item === 'Wise Glasses' && !isPhysical)) {
    basePower = Math.floor(basePower * 1.1);
    desc.attackerItem = attacker.item;
  } else if (getItemBoostType(attacker.item) === move.type ||
             (((attacker.item === 'Adamant Orb' &&
                attacker.name === 'Dialga') ||
               (attacker.item === 'Lustrous Orb' &&
                attacker.name === 'Palkia') ||
               (attacker.item === 'Griseous Orb' &&
                attacker.name === 'Giratina-Origin')) &&
             (attacker.hasType(move.type)))) {
    basePower = Math.floor(basePower * 1.2);
    desc.attackerItem = attacker.item;
  }

  if ((attacker.ability === 'Reckless' && move.hasRecoil) ||
      (attacker.ability === 'Iron Fist' && move.isPunch)) {
    basePower = Math.floor(basePower * 1.2);
    desc.attackerAbility = attacker.ability;
  } else if ((attacker.curHP <= attacker.maxHP / 3 &&
            ((attacker.ability === 'Overgrow' && move.type === 'Grass') ||
             (attacker.ability === 'Blaze' && move.type === 'Fire') ||
             (attacker.ability === 'Torrent' && move.type === 'Water') ||
             (attacker.ability === 'Swarm' && move.type === 'Bug'))) ||
             (attacker.ability === 'Technician' && move.bp <= 60)) {
    basePower = Math.floor(basePower * 1.5);
    desc.attackerAbility = attacker.ability;
  }

  if ((defAbility === 'Thick Fat' &&
        (move.type === 'Fire' || move.type === 'Ice')) ||
      (defAbility === 'Heatproof' && move.type === 'Fire')) {
    basePower = Math.floor(basePower * 0.5);
    desc.defenderAbility = defAbility;
  } else if (defAbility === 'Dry Skin' && move.type === 'Fire') {
    basePower = Math.floor(basePower * 1.25);
    desc.defenderAbility = defAbility;
  }

  let attackStat = isPhysical ? 'atk' : 'sa';
  desc.attackEVs = attacker.evs[attackStat] +
      (NATURES[attacker.nature][0] === attackStat
        ? '+'
        : NATURES[attacker.nature][1] === attackStat ? '-' : '') +
      ' ' + stats.display(attackStat);

  let attack;
  let attackBoost = attacker.boosts[attackStat];
  let rawAttack = attacker_.stats[attackStat];
  if (attackBoost === 0 || (isCritical && attackBoost < 0)) {
    attack = rawAttack;
  } else if (defAbility === 'Unaware') {
    attack = rawAttack;
    desc.defenderAbility = defAbility;
  } else if (attacker.ability === 'Simple') {
    attack = util.getSimpleModifiedStat(rawAttack, attackBoost, DPP);
    desc.attackerAbility = attacker.ability;
    desc.attackBoost = attackBoost;
  } else {
    attack = util.getModifiedStat(rawAttack, attackBoost, DPP);
    desc.attackBoost = attackBoost;
  }

  if (isPhysical && (attacker.ability === 'Pure Power' ||
                     attacker.ability === 'Huge Power')) {
    attack *= 2;
    desc.attackerAbility = attacker.ability;
  } else if (field.weather === 'Sun' && (isPhysical
      ? attacker.ability === 'Flower Gift'
      : attacker.ability === 'Solar Power')) {
    attack = Math.floor(attack * 1.5);
    desc.attackerAbility = attacker.ability;
    desc.weather = field.weather;
  } else if (isPhysical && (attacker.ability === 'Hustle' ||
      (attacker.ability === 'Guts' && attacker.status !== 'Healthy')) ||
      (!isPhysical && (attacker.ability === 'Plus' ||
                       attacker.ability === 'Minus'))) {
    attack = Math.floor(attack * 1.5);
    desc.attackerAbility = attacker.ability;
  }

  if ((isPhysical
      ? attacker.item === 'Choice Band'
      : attacker.item === 'Choice Specs') ||
      (!isPhysical && (attacker.item === 'Soul Dew' &&
        (attacker.name === 'Latios' || attacker.name === 'Latias')))) {
    attack = Math.floor(attack * 1.5);
    desc.attackerItem = attacker.item;
  } else if ((attacker.item === 'Light Ball' && attacker.name === 'Pikachu') ||
             (isPhysical && (attacker.item === 'Thick Club' &&
               (attacker.name === 'Cubone' || attacker.name === 'Marowak'))) ||
             (!isPhysical && (attacker.item === 'Deep Sea Tooth' &&
                              attacker.name === 'Clamperl'))) {
    attack *= 2;
    desc.attackerItem = attacker.item;
  }

  let defenseStat = isPhysical ? 'def' : 'spd';
  desc.defenseEVs = defender.evs[defenseStat] +
      (NATURES[defender.nature][0] === defenseStat
        ? '+'
        : NATURES[defender.nature][1] === defenseStat ? '-' : '') +
      ' ' + stats.display(defenseStat);

  let defense;
  let defenseBoost = defender.boosts[defenseStat];
  let rawDefense = defender_.stats[defenseStat];
  if (defenseBoost === 0 || (isCritical && defenseBoost > 0)) {
    defense = rawDefense;
  } else if (attacker.ability === 'Unaware') {
    defense = rawDefense;
    desc.attackerAbility = attacker.ability;
  } else if (defAbility === 'Simple') {
    defense = util.getSimpleModifiedStat(rawDefense, defenseBoost, DPP);
    desc.defenderAbility = defAbility;
    desc.defenseBoost = defenseBoost;
  } else {
    defense = util.getModifiedStat(rawDefense, defenseBoost, DPP);
    desc.defenseBoost = defenseBoost;
  }

  if (isPhysical && (defAbility === 'Marvel Scale' &&
                     defender.status !== 'Healthy')) {
    defense = Math.floor(defense * 1.5);
    desc.defenderAbility = defAbility;
  } else if (!isPhysical && (defAbility === 'Flower Gift' &&
                             field.weather === 'Sun')) {
    defense = Math.floor(defense * 1.5);
    desc.defenderAbility = defAbility;
    desc.weather = field.weather;
  }

  if (!isPhysical && (defender.item === 'Soul Dew' &&
        (defender.name === 'Latios' || defender.name === 'Latias')) {
    defense = Math.floor(defense * 1.5);
    desc.defenderItem = defender.item;
  } else if ((!isPhysical && (defender.item === 'Deep Sea Scale' &&
                              defender.name === 'Clamperl')) ||
             (isPhysical && (defender.item === 'Metal Powder' &&
                             defender.name === 'Ditto'))) {
    defense *= 2;
    desc.defenderItem = defender.item;
  }

  if (!isPhysical && field.weather === 'Sand' && defender.hasType('Rock')) {
    defense = Math.floor(defense * 1.5);
    desc.weather = field.weather;
  }

  if (move.name === 'Explosion' || move.name === 'Self-Destruct') {
    defense = Math.floor(defense * 0.5);
  }

  if (defense < 1) {
    defense = 1;
  }

  let baseDamage = Math.floor(Math.floor(Math.floor(
      2 * attacker.level / 5 + 2) * basePower * attack / 50) / defense);

  if (isPhysical && (attacker.status === 'Burned' &&
                     attacker.ability !== 'Guts')) {
    baseDamage = Math.floor(baseDamage * 0.5);
    desc.isBurned = true;
  }

  if (!isCritical) {
    let screenMultiplier = field.format !== 'Singles' ? (2 / 3) : (1 / 2);
    if (isPhysical && field.isReflect) {
      baseDamage = Math.floor(baseDamage * screenMultiplier);
      desc.isReflect = true;
    } else if (!isPhysical && field.isLightScreen) {
      baseDamage = Math.floor(baseDamage * screenMultiplier);
      desc.isLightScreen = true;
    }
  }

  if (field.format !== 'Singles' && move.isSpread) {
    baseDamage = Math.floor(baseDamage * 3 / 4);
  }

  if ((field.weather === 'Sun' && move.type === 'Fire') ||
      (field.weather === 'Rain' && move.type === 'Water')) {
    baseDamage = Math.floor(baseDamage * 1.5);
    desc.weather = field.weather;
  } else if ((field.weather === 'Sun' && move.type === 'Water') ||
             (field.weather === 'Rain' && move.type === 'Fire') ||
            (include(['Rain', 'Sand', 'Hail'], field.weather) &&
              move.name === 'Solar Beam')) {
    baseDamage = Math.floor(baseDamage * 0.5);
    desc.weather = field.weather;
  }

  if (attacker.ability === 'Flash Fire (activated)' && move.type === 'Fire') {
    baseDamage = Math.floor(baseDamage * 1.5);
    desc.attackerAbility = 'Flash Fire';
  }

  baseDamage += 2;

  if (isCritical) {
    if (attacker.ability === 'Sniper') {
      baseDamage *= 3;
      desc.attackerAbility = attacker.ability;
    } else {
      baseDamage *= 2;
    }
    desc.isCritical = isCritical;
  }

  if (attacker.item === 'Life Orb') {
    baseDamage = Math.floor(baseDamage * 1.3);
    desc.attackerItem = attacker.item;
  }

  // NOTE: the random factor is applied between the LO mod and the STAB mod,
  // so don't apply anything below this until we're inside the loop
  let stabMod = 1;
  if (move.type === attacker.type1 || move.type === attacker.type2) {
    if (attacker.ability === 'Adaptability') {
      stabMod = 2;
      desc.attackerAbility = attacker.ability;
    } else {
      stabMod = 1.5;
    }
  }

  let filterMod = 1;
  if ((defAbility === 'Filter' || defAbility === 'Solid Rock') &&
      typeEffectiveness > 1) {
    filterMod = 0.75;
    desc.defenderAbility = defAbility;
  }
  let ebeltMod = 1;
  if (attacker.item === 'Expert Belt' && typeEffectiveness > 1) {
    ebeltMod = 1.2;
    desc.attackerItem = attacker.item;
  }
  let tintedMod = 1;
  if (attacker.ability === 'Tinted Lens' && typeEffectiveness < 1) {
    tintedMod = 2;
    desc.attackerAbility = attacker.ability;
  }
  let berryMod = 1;
  if (items.getBerryResistType(defender.item) === move.type &&
      (typeEffectiveness > 1 || move.type === 'Normal')) {
    berryMod = 0.5;
    desc.defenderItem = defender.item;
  }

  for (let i = 0; i < 16; i++) {
    damage[i] = Math.floor(baseDamage * (85 + i) / 100);
    damage[i] = Math.floor(damage[i] * stabMod);
    damage[i] = Math.floor(damage[i] * typeEffect1);
    damage[i] = Math.floor(damage[i] * typeEffect2);
    damage[i] = Math.floor(damage[i] * filterMod);
    damage[i] = Math.floor(damage[i] * ebeltMod);
    damage[i] = Math.floor(damage[i] * tintedMod);
    damage[i] = Math.floor(damage[i] * berryMod);
    damage[i] = Math.max(1, damage[i]);
  }

  return result;
}

exports.damage = damage;
