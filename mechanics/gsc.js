'use strict';

const GSC = 1;

const TYPE_CHART = require('../data/types').TYPE_CHART[GSC];
const items = require('../data/items');
const util = require('./util');
const Result = require('../result').Result;

function damage(attacker, defender, move, field) {
  let attacker_ = attacker;
  let defender_ = defender;

  attacker = applyBoosts(attacker.copy(), GSC);
  defender = applyBoosts(defender.copy(), GSC);
  move = move.copy();

  let damage = [];
  let desc = {
    'attackerName': attacker.name,
    'moveName': move.name,
    'defenderName': defender.name
  };

  let result = new Result(GSC, attacker, defender, move, field, damage, desc);

  if (move.bp === 0) {
    damage.push(0);
    return result;
  }

  if (field.isProtected) {
    damage.push(0);
    desc.isProtected = true;
    return result;
  }

  let typeEffect1 = util.getMoveEffectiveness(
      TYPE_CHART, move, defender.type1, field.isForesight);
  let typeEffect2 = (defender.type2
      ? util.getMoveEffectiveness(
          TYPE_CHART, move, defender.type2, field.isForesight)
      : 1);
  let typeEffectiveness = typeEffect1 * typeEffect2;

  if (typeEffectiveness === 0) {
    damage.push(0);
    return result;
  }

  let lv = attacker.level;
  if (move.name === 'Seismic Toss' || move.name === 'Night Shade') {
    damage.push(lv);
    return result;
  }

  if (move.hits > 1) {
    desc.hits = move.hits;
  }

  // Flail and Reversal are variable BP and never crit
  if (move.name === 'Flail' || move.name === 'Reversal') {
    move.isCrit = false;
    let p = Math.floor(48 * attacker.curHP / attacker.maxHP);
    move.bp = (p <= 1 ? 200 :
               p <= 4 ? 150 :
               p <= 9 ? 100 :
               p <= 16 ? 80 :
               p <= 32 ? 40 :
               20);
    desc.moveBP = move.bp;
  }

  let isPhysical = TYPE_CHART[move.type].category === 'Physical';
  let attackStat = isPhysical ? 'atk' : 'spa';
  let defenseStat = isPhysical ? 'def' : 'spd';
  let atk = attacker.stats[attackStat];
  let def = attacker.stats[defenseStat];

  // ignore Reflect, Light Screen, stat stages, and burns if attack is a crit
  // and attacker does not have stat stage advantage
  let ignoreMods = move.isCrit &&
      attacker.boosts[attackStat] <= defender.boosts[defenseStat];

  if (ignoreMods) {
    atk = attacker_.stats[attackStat];
    def = defender_.stats[defenseStat];
  } else {
    if (attacker.boosts[attackStat] !== 0) {
      desc.attackBoost = attacker.boosts[attackStat];
    }

    if (defender.boosts[defenseStat] !== 0) {
      desc.defenseBoost = defender.boosts[defenseStat];
    }

    if (isPhysical && attacker.status === 'Burned') {
      atk = Math.floor(atk / 2);
      desc.isBurned = true;
    }
  }

  if (move.name === 'Explosion' || move.name === 'Self-Destruct') {
    def = Math.floor(def / 2);
  }

  if (!ignoreMods) {
    if (isPhysical && field.isReflect) {
      def *= 2;
      desc.isReflect = true;
    } else if (!isPhysical && field.isLightScreen) {
      def *= 2;
      desc.isLightScreen = true;
    }
  }

  if ((attacker.name === 'Pikachu' &&
       attacker.item === 'Light Ball' && !isPhysical) ||
      ((attacker.name === 'Cubone' || attacker.name === 'Marowak') &&
        attacker.item === 'Thick Club' && isPhysical)) {
    atk *= 2;
    desc.attackerItem = attacker.item;
  }

  if (atk > 255 || def > 255) {
    atk = Math.floor(atk / 4) % 256;
    def = Math.floor(def / 4) % 256;
  }

  if (defender.name === 'Ditto' && defender.item === 'Metal Powder') {
    def = Math.floor(def * 1.5);
    desc.defenderItem = defender.item;
  }

  let baseDamage = Math.floor(Math.floor(Math.floor(2 * lv / 5 + 2) *
                   Math.max(1, atk) * move.bp / Math.max(1, def)) / 50);

  if (move.isCrit) {
    baseDamage *= 2;
    desc.isCritical = true;
  }

  if (items.getItemBoostType(attacker.item) === move.type) {
    baseDamage = Math.floor(baseDamage * 1.1);
    desc.attackerItem = attacker.item;
  }

  baseDamage = Math.min(997, baseDamage) + 2;

  if ((field.weather === 'Sun' && move.type === 'Fire') ||
      (field.weather === 'Rain' && move.type === 'Water')) {
    baseDamage = Math.floor(baseDamage * 1.5);
    desc.weather = field.weather;
  } else if ((field.weather === 'Sun' && move.type === 'Water') ||
             (field.weather === 'Rain' &&
              (move.type === 'Fire' || move.name === 'Solar Beam'))) {
    baseDamage = Math.floor(baseDamage / 2);
    desc.weather = field.weather;
  }

  if (attacker.hasType(move.type)) {
    baseDamage = Math.floor(baseDamage * 1.5);
  }

  baseDamage = Math.floor(baseDamage * typeEffectiveness);

  // Flail and Reversal don't use random factor
  if (move.name === 'Flail' || move.name === 'Reversal') {
    return {'damage': [baseDamage], 'desc': buildDescription(desc)};
  }

  let damage = [];
  for (let i = 217; i <= 255; i++) {
    damage[i - 217] = Math.floor(baseDamage * i / 255);
  }

  return result;
}

exports.damage = damage;
