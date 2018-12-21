'use strict';

const RBY = 1;

const TYPE_CHART = require('../data/types').TYPE_CHART[RBY];
const util = require('./util');
const Result = require('../result').Result;

function damage(attacker, defender, move, field) {
  let attacker_ = attacker;
  let defender_ = defender;

  attacker = applyBoosts(attacker.copy(), RBY);
  defender = applyBoosts(defender.copy(), RBY);

  let damage = [];
  let desc = {
    'attackerName': attacker.name,
    'moveName': move.name,
    'defenderName': defender.name
  };

  let result = new Result(RBY, attacker, defender, move, field, damage, desc);

  if (move.bp === 0) {
    damage.push(0);
    return result;
  }

  let lv = attacker.level;
  if (move.name === 'Seismic Toss' || move.name === 'Night Shade') {
    damage.push(lv);
    return result;
  }

  let typeEffect1 = TYPE_CHART[move.type][defender.type1];
  let typeEffect2 = defender.type2 ? TYPE_CHART[move.type][defender.type2] : 1;
  let typeEffectiveness = typeEffect1 * typeEffect2;

  if (typeEffectiveness === 0) {
    damage.push(0);
    return result;
  }

  if (move.hits > 1) {
    desc.hits = move.hits;
  }
  let isPhysical = TYPE_CHART[move.type].category === 'Physical';
  let attackStat = isPhysical ? 'atk' : 'spc';
  let defenseStat = isPhysical ? 'def' : 'spc';
  let atk = attacker.stats[attackStat];
  let def = attacker.stats[defenseStat];

  if (move.isCrit) {
    lv *= 2;
    atk = attacker_.stats[attackStat];
    def = defender_.stats[defenseStat];
    desc.isCritical = true;
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

  if (!move.isCrit) {
    if (isPhysical && field.isReflect) {
      def *= 2;
      desc.isReflect = true;
    } else if (!isPhysical && field.isLightScreen) {
      def *= 2;
      desc.isLightScreen = true;
    }
  }
  if (atk > 255 || def > 255) {
    atk = Math.floor(atk / 4) % 256;
    def = Math.floor(def / 4) % 256;
  }

  let baseDamage =
      Math.min(997, Math.floor(Math.floor(Math.floor(2 * lv / 5 + 2) *
              Math.max(1, atk) * move.bp / Math.max(1, def)) / 50)) + 2;

  if (attacker.hasType(move.type)) {
    baseDamage = Math.floor(baseDamage * 1.5);
  }
  baseDamage = Math.floor(baseDamage * typeEffectiveness);

  // If baseDamage >= 768, don't apply random factor?
  // upokecenter says this, but nobody else does
  for (let i = 217; i <= 255; i++) {
    damage[i - 217] = Math.floor(baseDamage * i / 255);
  }

  return result;
}

exports.damage = damage;
