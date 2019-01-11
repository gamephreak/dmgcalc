import {TYPE_CHART, TypeChart} from '../data/types';
import {RawDesc} from '../desc';
import {Field} from '../field';
import {Generation} from '../gen';
import {Move} from '../move';
import {Pokemon} from '../pokemon';
import {Result} from '../result';

import * as util from './util';

const RBY = 1;

export function damage(
    attacker: Readonly<Pokemon>, defender: Readonly<Pokemon>,
    move: Readonly<Move>, field: Readonly<Field>) {
  const attacker_ = attacker;
  const defender_ = defender;

  attacker = util.applyBoosts(attacker.copy(), RBY);
  defender = util.applyBoosts(defender.copy(), RBY);

  const damage: number[] = [];
  const desc: RawDesc = {
    'attackerName': attacker.name,
    'moveName': move.name,
    'defenderName': defender.name
  };

  const result = new Result(RBY, attacker, defender, move, field, damage, desc);

  if (move.bp === 0) {
    damage.push(0);
    return result;
  }

  let lv = attacker.level;
  if (move.name === 'Seismic Toss' || move.name === 'Night Shade') {
    damage.push(lv);
    return result;
  }

  const typeChart = TYPE_CHART[RBY] as TypeChart;

  const typeEffect1: number = typeChart[move.type]![defender.type1]!;
  const typeEffect2: number =
      defender.type2 ? typeChart[move.type]![defender.type2]! : 1;
  const typeEffectiveness = typeEffect1 * typeEffect2;

  if (typeEffectiveness === 0) {
    damage.push(0);
    return result;
  }

  if (move.hits > 1) {
    desc.hits = move.hits;
  }
  const isPhysical = typeChart[move.type]!.category === 'Physical';
  const attackStat = isPhysical ? 'atk' : 'spc';
  const defenseStat = isPhysical ? 'def' : 'spc';
  let atk = attacker.stats[attackStat]!;
  let def = defender.stats[defenseStat]!;

  if (move.isCrit) {
    lv *= 2;
    atk = attacker_.stats[attackStat]!;
    def = defender_.stats[defenseStat]!;
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

  let baseDamage = Math.min(
                       997,
                       Math.floor(
                           Math.floor(
                               Math.floor(2 * lv / 5 + 2) * Math.max(1, atk) *
                               move.bp / Math.max(1, def)) /
                           50)) +
      2;

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
