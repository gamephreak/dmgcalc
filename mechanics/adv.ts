import * as items from '../data/items';
import {NATURES} from '../data/natures';
import {TYPE_CHART, TypeChart} from '../data/types';
import {RawDesc} from '../desc';
import {Field} from '../field';
import {Generation} from '../gen';
import {Move} from '../move';
import {Pokemon} from '../pokemon';
import {Result} from '../result';
import {display, Stat} from '../stats';
import {include} from '../util';

import * as util from './util';

const RSE = 3;

export function damage(
    attacker_: Readonly<Pokemon>, defender_: Readonly<Pokemon>,
    move_: Readonly<Move>, field_: Readonly<Field>) {
  const attacker = attacker_.copy();
  const defender = defender_.copy();
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

  attacker.boosts.atk += util.addBoost(
      attacker.boosts.atk, util.getIntimidateBoost(defender, attacker));
  defender.boosts.atk += util.addBoost(
      defender.boosts.atk, util.getIntimidateBoost(attacker, attacker));

  const damage: number[] = [];
  const desc: RawDesc = {
    'attackerName': attacker.name,
    'moveName': move.name,
    'defenderName': defender.name
  };

  const result = new Result(RSE, attacker, defender, move, field, damage, desc);

  if (move.bp === 0) {
    damage.push(0);
    return result;
  }

  if (field.isProtected) {
    damage.push(0);
    desc.isProtected = true;
    return result;
  }

  if (move.name === 'Weather Ball') {
    switch (field.weather) {
      case 'Sun':
        move.type = 'Fire';
        break;
      case 'Rain':
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
    desc.moveBP = move.bp;
  }

  const typeChart = TYPE_CHART[RSE] as TypeChart;
  const typeEffect1 = util.getMoveEffectiveness(
      typeChart, move, defender.type1, field.isForesight);
  const typeEffect2 =
      (defender.type2 ?
           util.getMoveEffectiveness(
               typeChart, move, defender.type2, field.isForesight) :
           1);
  const typeEffectiveness = typeEffect1 * typeEffect2;

  if (typeEffectiveness === 0) {
    damage.push(0);
    return result;
  }

  if ((include(defender.ability, 'Flash Fire') && move.type === 'Fire') ||
      (defender.ability === 'Levitate' && move.type === 'Ground') ||
      (defender.ability === 'Volt Absorb' && move.type === 'Electric') ||
      (defender.ability === 'Water Absorb' && move.type === 'Water') ||
      (defender.ability === 'Wonder Guard' && typeEffectiveness <= 1) ||
      (defender.ability === 'Soundproof' && move.isSound)) {
    desc.defenderAbility = defender.ability;
    damage.push(0);
    return result;
  }

  desc.HPEVs = defender.evs.hp + ' HP';

  const lv = attacker.level;
  if (move.name === 'Seismic Toss' || move.name === 'Night Shade') {
    damage.push(lv);
    return result;
  }

  if (move.hits > 1) {
    desc.hits = move.hits;
  }

  let bp;
  switch (move.name) {
    case 'Flail':
    case 'Reversal':
      bp = util.getFlailReversalPower(attacker);
      desc.moveBP = bp;
      break;
    case 'Eruption':
    case 'Water Spout':
      bp = Math.max(1, Math.floor(150 * attacker.curHP / attacker.maxHP));
      desc.moveBP = bp;
      break;
    case 'Low Kick':
      bp = util.getLowKickGrassKnotPower(defender.weight);
      desc.moveBP = bp;
      break;
    default:
      bp = move.bp;
  }

  const isPhysical = typeChart[move.type]!.category === 'Physical';
  const attackStat = isPhysical ? 'atk' : 'spa';
  desc.attackEVs = attacker.evs[attackStat] +
      (NATURES[attacker.nature][0] === attackStat ?
           '+' :
           NATURES[attacker.nature][1] === attackStat ? '-' : '') +
      ' ' + display(attackStat);
  const defenseStat = isPhysical ? 'def' : 'spd';
  desc.defenseEVs = defender.evs[defenseStat] +
      (NATURES[defender.nature][0] === defenseStat ?
           '+' :
           NATURES[defender.nature][1] === defenseStat ? '-' : '') +
      ' ' + display(defenseStat);
  let atk = attacker_.stats[attackStat];
  let def = defender_.stats[defenseStat];

  if (isPhysical &&
      (attacker.ability === 'Huge Power' ||
       attacker.ability === 'Pure Power')) {
    atk *= 2;
    desc.attackerAbility = attacker.ability;
  }

  if (attacker.item !== 'Sea Incense' &&
      items.getItemBoostType(attacker.item) === move.type) {
    atk = Math.floor(atk * 1.1);
    desc.attackerItem = attacker.item;
  } else if (attacker.item === 'Sea Incense' && move.type === 'Water') {
    atk = Math.floor(atk * 1.05);
    desc.attackerItem = attacker.item;
  } else if (
      (isPhysical && attacker.item === 'Choice Band') ||
      (!isPhysical && attacker.item === 'Soul Dew' &&
       (attacker.name === 'Latios' || attacker.name === 'Latias'))) {
    atk = Math.floor(atk * 1.5);
    desc.attackerItem = attacker.item;
  } else if (
      (!isPhysical && attacker.item === 'Deep Sea Tooth' &&
       attacker.name === 'Clamperl') ||
      (!isPhysical && attacker.item === 'Light Ball' &&
       attacker.name === 'Pikachu') ||
      (isPhysical && attacker.item === 'Thick Club' &&
       (attacker.name === 'Cubone' || attacker.name === 'Marowak'))) {
    atk *= 2;
    desc.attackerItem = attacker.item;
  }

  if (!isPhysical && defender.item === 'Soul Dew' &&
      (defender.name === 'Latios' || defender.name === 'Latias')) {
    def = Math.floor(def * 1.5);
    desc.defenderItem = defender.item;
  } else if (
      (!isPhysical && defender.item === 'Deep Sea Scale' &&
       defender.name === 'Clamperl') ||
      (isPhysical && defender.item === 'Metal Powder' &&
       defender.name === 'Ditto')) {
    def *= 2;
    desc.defenderItem = defender.item;
  }

  if (defender.ability === 'Thick Fat' &&
      (move.type === 'Fire' || move.type === 'Ice')) {
    atk = Math.floor(atk / 2);
    desc.defenderAbility = defender.ability;
  } else if (
      isPhysical && defender.ability === 'Marvel Scale' &&
      defender.status !== 'Healthy') {
    def = Math.floor(def * 1.5);
    desc.defenderAbility = defender.ability;
  }

  if (isPhysical &&
          (attacker.ability === 'Hustle' ||
           (attacker.ability === 'Guts' && attacker.status !== 'Healthy')) ||
      (!isPhysical &&
       (attacker.ability === 'Plus' || attacker.ability === 'Minus'))) {
    atk = Math.floor(atk * 1.5);
    desc.attackerAbility = attacker.ability;
  } else if (
      attacker.curHP <= attacker.maxHP / 3 &&
      ((attacker.ability === 'Overgrow' && move.type === 'Grass') ||
       (attacker.ability === 'Blaze' && move.type === 'Fire') ||
       (attacker.ability === 'Torrent' && move.type === 'Water') ||
       (attacker.ability === 'Swarm' && move.type === 'Bug'))) {
    bp = Math.floor(bp * 1.5);
    desc.attackerAbility = attacker.ability;
  }

  if (move.name === 'Explosion' || move.name === 'Self-Destruct') {
    def = Math.floor(def / 2);
  }

  const isCritical = move.isCrit &&
      !(defender.ability === 'Battle Armor' ||
        defender.ability === 'Shell Armor');

  const attackBoost = attacker.boosts[attackStat];
  const defenseBoost = defender.boosts[defenseStat];
  if (attackBoost > 0 || (!isCritical && attackBoost < 0)) {
    atk = util.getModifiedStat(atk, attackBoost, RSE);
    desc.attackBoost = attackBoost;
  }
  if (defenseBoost < 0 || (!isCritical && defenseBoost > 0)) {
    def = util.getModifiedStat(def, defenseBoost, RSE);
    desc.defenseBoost = defenseBoost;
  }

  let baseDamage =
      Math.floor(Math.floor(Math.floor(2 * lv / 5 + 2) * atk * bp / def) / 50);

  if (attacker.status === 'Burned' && isPhysical &&
      attacker.ability !== 'Guts') {
    baseDamage = Math.floor(baseDamage / 2);
    desc.isBurned = true;
  }

  if (!isCritical) {
    const screenMultiplier = field.format !== 'Singles' ? (2 / 3) : (1 / 2);
    if (isPhysical && field.isReflect) {
      baseDamage = Math.floor(baseDamage * screenMultiplier);
      desc.isReflect = true;
    } else if (!isPhysical && field.isLightScreen) {
      baseDamage = Math.floor(baseDamage * screenMultiplier);
      desc.isLightScreen = true;
    }
  }

  if (field.format !== 'Singles' && move.isSpread) {
    // some sources say 3/4, some say 2/3, some say 1/2...
    // using 3/4 for now since that's what DPP+ use
    baseDamage = Math.floor(baseDamage * 3 / 4);
  }

  if ((field.weather === 'Sun' && move.type === 'Fire') ||
      (field.weather === 'Rain' && move.type === 'Water')) {
    baseDamage = Math.floor(baseDamage * 1.5);
    desc.weather = field.weather;
  } else if (
      (field.weather === 'Sun' && move.type === 'Water') ||
      (field.weather === 'Rain' && move.type === 'Fire') ||
      (move.name === 'Solar Beam' &&
       include(['Rain', 'Sand', 'Hail'], field.weather))) {
    baseDamage = Math.floor(baseDamage / 2);
    desc.weather = field.weather;
  }

  if (attacker.ability === 'Flash Fire (activated)' && move.type === 'Fire') {
    baseDamage = Math.floor(baseDamage * 1.5);
    desc.attackerAbility = 'Flash Fire';
  }

  baseDamage = Math.max(1, baseDamage) + 2;

  if (isCritical) {
    baseDamage *= 2;
    desc.isCritical = true;
  }

  if (move.name === 'Weather Ball' && field.weather !== '') {
    baseDamage *= 2;
    desc.moveBP = move.bp * 2;
  }

  if (field.isHelpingHand) {
    baseDamage = Math.floor(baseDamage * 1.5);
    desc.isHelpingHand = true;
  }

  if (move.type === attacker.type1 || move.type === attacker.type2) {
    baseDamage = Math.floor(baseDamage * 1.5);
  }

  baseDamage = Math.floor(baseDamage * typeEffectiveness);

  for (let i = 85; i <= 100; i++) {
    damage[i - 85] = Math.max(1, Math.floor(baseDamage * i / 100));
  }

  return result;
}
