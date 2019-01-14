import {Type, TYPE_CHART, TypeChart} from './data/types';
import {Field, Terrain, Weather} from './field';
import {Generation} from './gen';
import {isGrounded} from './mechanics/util';
import {Move} from './move';
import {Pokemon} from './pokemon';
import * as util from './util';

const include = util.include;

export type RawDesc = {
  HPEVs?: string;
  attackBoost?: number;
  attackEVs?: string;
  attackerAbility?: string;
  attackerItem?: string; attackerName: string;
  defenderAbility?: string;
  defenderItem?: string; defenderName: string;
  defenseBoost?: number;
  defenseEVs?: string;
  hits?: number;
  isAuroraVeil?: boolean;
  isFriendGuard?: boolean;
  isHelpingHand?: boolean;
  isCritical?: boolean;
  isLightScreen?: boolean;
  isBurned?: boolean;
  isProtected?: boolean;
  isReflect?: boolean;
  moveBP?: number; moveName: string;
  moveTurns?: string;
  moveType?: Type;
  rivalry?: 'buffed' | 'nerfed';
  terrain?: Terrain;
  weather?: Weather;
};

export function display(
    gen: Generation, attacker: Readonly<Pokemon>, defender: Readonly<Pokemon>,
    move: Readonly<Move>, field: Readonly<Field>, damage: Readonly<number[]>,
    rawDesc: Readonly<RawDesc>, notation = '%', err = true) {
  const minDamage = damage[0] * move.hits;
  const maxDamage = damage[damage.length - 1] * move.hits;

  const minDisplay = util.fraction(notation, minDamage, defender.maxHP);
  const maxDisplay = util.fraction(notation, maxDamage, defender.maxHP);

  const desc = buildDescription(rawDesc);
  const damageText =
      `${minDamage}-${maxDamage} (${minDisplay} - ${maxDisplay}${notation})`;

  if (move.bp === 0) {
    return `${desc}: ${damageText}`;
  }

  const koChanceText =
      getKOChanceText(gen, attacker, defender, move, field, damage, err);

  return koChanceText ? `${desc}: ${damageText} -- ${koChanceText}` :
                        `${desc}: ${damageText}`;
}

export function displayMove(
    gen: Generation, attacker: Readonly<Pokemon>, defender: Readonly<Pokemon>,
    move: Readonly<Move>, damage: Readonly<number[]>, notation = '%') {
  const minDamage = damage[0] * move.hits;
  const maxDamage = damage[damage.length - 1] * move.hits;

  const minDisplay = util.fraction(notation, minDamage, defender.maxHP);
  const maxDisplay = util.fraction(notation, maxDamage, defender.maxHP);

  const recoveryText =
      getRecovery(attacker, defender, move, damage, notation).text;
  const recoilText =
      getRecoil(gen, attacker, defender, move, damage, notation).text;

  return `${minDisplay} - ${maxDisplay}${notation}${recoveryText}${recoilText}`;
}

export function getRecovery(
    attacker: Readonly<Pokemon>, defender: Readonly<Pokemon>,
    move: Readonly<Move>, damage: Readonly<number[]>, notation = '%') {
  const minDamage = damage[0] * move.hits;
  const maxDamage = damage[damage.length - 1] * move.hits;

  let recovery = [0, 0];
  let text = '';

  if (move.givesHealth) {
    let minHealthRecovered =
        util.fraction(notation, minDamage * move.percentHealed!, attacker.maxHP);
    let maxHealthRecovered =
        util.fraction(notation, maxDamage * move.percentHealed!, attacker.maxHP);

    if (notation === '%' ? minHealthRecovered > 100 : minHealthRecovered > 48) {
      minHealthRecovered = util.fraction(
          notation, defender.maxHP * move.percentHealed!, attacker.maxHP);
      maxHealthRecovered = util.fraction(
          notation, defender.maxHP * move.percentHealed!, attacker.maxHP);
    }

    recovery = [minHealthRecovered, maxHealthRecovered];
    text = recovery.length === 2 ?
        ` (${recovery[0]}  - ${recovery[1]}${notation} recovered)` :
        '';
  }

  return {recovery, text};
}

export function getRecoil(
    gen: Generation, attacker: Readonly<Pokemon>, defender: Readonly<Pokemon>,
    move: Readonly<Move>, damage: Readonly<number[]>, notation = '%') {
  const minDamage = damage[0] * move.hits;
  const maxDamage = damage[damage.length - 1] * move.hits;

  let dmg: [number, number]|number = [0, 0];
  let text = '';

  const damageOverflow =
      minDamage > defender.curHP || maxDamage > defender.curHP;
  if (typeof move.hasRecoil === 'number') {
    // TODO: handle Rock Head?
    let minRecoilDamage, maxRecoilDamage;
    if (damageOverflow) {
      minRecoilDamage = util.fraction(
          notation, defender.curHP * move.hasRecoil, attacker.maxHP, 100);
      maxRecoilDamage = util.fraction(
          notation, defender.curHP * move.hasRecoil, attacker.maxHP, 100);
    } else {
      minRecoilDamage = util.fraction(
          notation, Math.min(minDamage, defender.curHP) * move.hasRecoil,
          attacker.maxHP, 100);
      maxRecoilDamage = util.fraction(
          notation, Math.min(maxDamage, defender.curHP) * move.hasRecoil,
          attacker.maxHP, 100);
    }

    dmg = [minRecoilDamage, maxRecoilDamage];
    text =
        ` (${minRecoilDamage} - ${maxRecoilDamage}${notation} recoil damage)`;
  } else if (move.hasRecoil === 'crash') {
    const genMultiplier = gen === 2 ? 12.5 : gen >= 3 ? 50 : 1;

    let minRecoilDamage, maxRecoilDamage;
    if (damageOverflow && gen !== 2) {
      minRecoilDamage = util.fraction(
          notation, defender.curHP * genMultiplier, attacker.maxHP, 100);
      maxRecoilDamage = util.fraction(
          notation, defender.curHP * genMultiplier, attacker.maxHP, 100);
    } else {
      minRecoilDamage = util.fraction(
          notation, Math.min(minDamage, defender.maxHP) * genMultiplier,
          attacker.maxHP, 100);
      maxRecoilDamage = util.fraction(
          notation, Math.min(maxDamage, defender.maxHP) * genMultiplier,
          attacker.maxHP, 100);
    }

    dmg = [minRecoilDamage, maxRecoilDamage];
    switch (gen) {
      case 1:
        dmg = util.fraction(notation, 1, attacker.maxHP);
        text = ' (1hp damage on miss)';
        break;
      case 2:
      case 3:
      case 4:
        if (defender.hasType('Ghost')) {
          if (gen === 4) {
            const gen4CrashDamage =
                Math.floor(defender.maxHP * 0.5 / attacker.maxHP * 100);
            dmg = notation === '%' ? gen4CrashDamage :
                                     Math.floor(gen4CrashDamage / 100 * 48);
            text = ` (${gen4CrashDamage}% crash damage)`;
          } else {
            dmg = 0;
            text = ' (no crash damage on Ghost types)';
          }
        } else {
          text = ` (${minRecoilDamage} - ${maxRecoilDamage}${notation}\
              crash damage on miss)`;
        }
        break;
      case 4:
        text = ` (${minRecoilDamage} - ${maxRecoilDamage}${notation}\
            crash damage on miss)`;
        break;
      default:
        dmg = notation === '%' ? 24 : 50;
        text = ' (50% crash damage)';
    }

  } else if (move.hasRecoil === 'Struggle') {
    dmg = notation === '%' ? 12 : 25;
    text = ' (25% struggle damage)';
  } else if (move.hasRecoil) {
    dmg = notation === '%' ? 24 : 50;
    text = ' (50% recoil damage)';
  }

  return {dmg, text};
}

function getHazards(
    gen: Generation, defender: Readonly<Pokemon>, field: Readonly<Field>) {
  let damage = 0;
  const texts = [];

  if (field.isSR &&
      !include(['Magic Guard', 'Mountaineer'], defender.ability)) {
    const typeChart = TYPE_CHART[gen] as TypeChart;
    const effectiveness = typeChart['Rock']![defender.type1]! *
        (defender.type2 ? typeChart['Rock']![defender.type2]! : 1);
    damage += Math.floor(effectiveness * defender.maxHP / 8);
    texts.push('Stealth Rock');
  }

  if (!defender.hasType('Flying') &&
      !include(['Magic Guard', 'Levitate'], defender.ability) &&
      defender.item !== 'Air Balloon') {
    if (field.spikes === 1) {
      damage += Math.floor(defender.maxHP / 8);
      texts.push(gen === 2 ? 'Spikes' : '1 layer of Spikes');
    } else if (field.spikes === 2) {
      damage += Math.floor(defender.maxHP / 6);
      texts.push('2 layers of Spikes');
    } else if (field.spikes === 3) {
      damage += Math.floor(defender.maxHP / 4);
      texts.push('3 layers of Spikes');
    }
  }

  if (isNaN(damage)) {
    damage = 0;
  }

  return {damage, texts};
}

function getEndOfTurn(
    gen: Generation, attacker: Readonly<Pokemon>, defender: Readonly<Pokemon>,
    move: Readonly<Move>, field: Readonly<Field>) {
  let damage = 0;
  const texts = [];

  switch (field.weather) {
    case 'Sun':
    case 'Harsh Sunshine':
      if (defender.ability === 'Dry Skin' ||
          defender.ability === 'Solar Power') {
        damage -= Math.floor(defender.maxHP / 8);
        texts.push(defender.ability + ' damage');
      }
      break;
    case 'Rain':
    case 'Heavy Rain':
      if (defender.ability === 'Dry Skin') {
        damage += Math.floor(defender.maxHP / 8);
        texts.push('Dry Skin recovery');
      } else if (defender.ability === 'Rain Dish') {
        damage += Math.floor(defender.maxHP / 16);
        texts.push('Rain Dish recovery');
      }

      break;
    case 'Sand': {
      const SAND_SAFE =
          ['Magic Guard', 'Overcoat', 'Sand Force', 'Sand Rush', 'Sand Veil'];
      if (!include(['Rock', 'Ground', 'Steel'], defender.type1) &&
          !include(['Rock', 'Ground', 'Steel'], defender.type2) &&
          !include(SAND_SAFE, defender.ability) &&
          defender.item !== 'Safety Goggles') {
        damage -= Math.floor(defender.maxHP / 16);
        texts.push('sandstorm damage');
      }
      break;
    }
    case 'Hail': {
      const HAIL_SAFE = ['Magic Guard', 'Overcoat', 'Snow Cloak'];
      if (defender.ability === 'Ice Body') {
        damage += Math.floor(defender.maxHP / 16);
        texts.push('Ice Body recovery');
      } else if (
          defender.type1 !== 'Ice' && defender.type2 !== 'Ice' &&
          !include(HAIL_SAFE, defender.ability) &&
          defender.item !== 'Safety Goggles') {
        damage -= Math.floor(defender.maxHP / 16);
        texts.push('hail damage');
      }
      break;
    }
    default:  // exhaustive
  }

  const loseItem =
      move.name === 'Knock Off' && defender.ability !== 'Sticky Hold';
  if (defender.item === 'Leftovers' && !loseItem) {
    damage += Math.floor(defender.maxHP / 16);
    texts.push('Leftovers recovery');
  } else if (defender.item === 'Black Sludge' && !loseItem) {
    if (defender.type1 === 'Poison' || defender.type2 === 'Poison') {
      damage += Math.floor(defender.maxHP / 16);
      texts.push('Black Sludge recovery');
    } else if (
        defender.ability !== 'Magic Guard' && defender.ability !== 'Klutz') {
      damage -= Math.floor(defender.maxHP / 8);
      texts.push('Black Sludge damage');
    }
  } else if (defender.item === 'Sticky Barb') {
    damage -= Math.floor(defender.maxHP / 8);
    texts.push('Sticky Barb damage');
  }

  if (field.isDefenderSeeded) {
    if (defender.ability !== 'Magic Guard') {
      // 1/16 in gen 1, 1/8 in gen 2 onwards
      damage -= gen >= 2 ? Math.floor(defender.maxHP / 8) :
                           Math.floor(defender.maxHP / 16);
      texts.push('Leech Seed damage');
    }
  }

  if (field.isAttackerSeeded && attacker.ability !== 'Magic Guard') {
    if (attacker.ability === 'Liquid Ooze') {
      damage -= gen >= 2 ? Math.floor(attacker.maxHP / 8) :
                           Math.floor(attacker.maxHP / 16);
      texts.push('Liquid Ooze damage');
    } else {
      damage += gen >= 2 ? Math.floor(attacker.maxHP / 8) :
                           Math.floor(attacker.maxHP / 16);
      texts.push('Leech Seed recovery');
    }
  }

  if (field.terrain === 'Grassy') {
    if (isGrounded(defender, field)) {
      damage += Math.floor(defender.maxHP / 16);
      texts.push('Grassy Terrain recovery');
    }
  }

  switch (defender.status) {
    case 'Poisoned':
      if (defender.ability === 'Poison Heal') {
        damage += Math.floor(defender.maxHP / 8);
        texts.push('Poison Heal');
      } else if (defender.ability !== 'Magic Guard') {
        damage -= Math.floor(defender.maxHP / 8);
        texts.push('poison damage');
      }
      break;
    case 'Badly Poisoned':
      if (defender.ability === 'Poison Heal') {
        damage += Math.floor(defender.maxHP / 8);
        texts.push('Poison Heal');
      } else if (defender.ability !== 'Magic Guard') {
        texts.push('toxic damage');
      }
      break;
    case 'Burned':
      if (defender.ability === 'Heatproof') {
        damage -= gen > 6 ? Math.floor(defender.maxHP / 32) :
                            Math.floor(defender.maxHP / 16);
        texts.push('reduced burn damage');
      } else if (defender.ability !== 'Magic Guard') {
        damage -= gen > 6 ? Math.floor(defender.maxHP / 16) :
                            Math.floor(defender.maxHP / 8);
        texts.push('burn damage');
      }
      break;
    default:
      if ((defender.status === 'Asleep' || defender.ability === 'Comatose') &&
          attacker.ability === 'Bad Dreams' &&
          defender.ability !== 'Magic Guard') {
        damage -= Math.floor(defender.maxHP / 8);
        texts.push('Bad Dreams');
      }
  }

  const TRAPPING = [
    'Bind', 'Clamp', 'Fire Spin', 'Infestation', 'Magma Storm', 'Sand Tomb',
    'Whirlpool', 'Wrap'
  ];
  if (include(TRAPPING, move.name) && defender.ability !== 'Magic Guard') {
    if (attacker.item === 'Binding Band') {
      damage -= gen > 5 ? Math.floor(defender.maxHP / 6) :
                          Math.floor(defender.maxHP / 8);
      texts.push('trapping damage');
    } else {
      damage -= gen > 5 ? Math.floor(defender.maxHP / 8) :
                          Math.floor(defender.maxHP / 16);
      texts.push('trapping damage');
    }
  }

  if ((move.name === 'Fire Pledge (Grass Pledge Boosted)' ||
       move.name === 'Grass Pledge (Fire Pledge Boosted)') &&
      !defender.hasType('Fire') && defender.ability !== 'Magic Guard') {
    damage -= Math.floor(defender.maxHP / 8);
    texts.push('Sea of Fire damage');
  }

  return {damage, texts};
}

function getKOChanceText(
    gen: Generation, attacker: Readonly<Pokemon>, defender: Readonly<Pokemon>,
    move: Readonly<Move>, field: Readonly<Field>, damage: Readonly<number[]>,
    err: boolean) {
  if (isNaN(damage[0])) {
    util.error(err, 'damage[0] must be a number.');
    return '';
  }
  if (damage[damage.length - 1] === 0) {
    return '';
  }
  if (damage[0] >= defender.maxHP &&
      (move.usedTimes === 1 && move.metronomeCount === 1)) {
    return 'guaranteed OHKO';
  }

  const hazards = getHazards(gen, defender, field);
  const eot = getEndOfTurn(gen, attacker, defender, move, field);
  const toxic = (defender.status === 'Badly Poisoned' &&
                 defender.ability !== 'Magic Guard') ?
      defender.toxicCounter :
      0;

  // multi-hit moves have too many possibilities for brute-forcing to work,
  // so reduce it to an approximate distribution
  let qualifier = '';
  if (move.hits > 1) {
    qualifier = 'approx. ';
    damage = squashMultihit(gen, damage, move.hits, err);
  }

  const afterText =
      (hazards.texts.length > 0 || eot.texts.length > 0 ?
           ` after ${serializeText(hazards.texts.concat(eot.texts))}` :
           '');

  let c;
  if ((move.usedTimes === 1 && move.metronomeCount === 1) || move.isZ) {
    c = getKOChance(
        damage, defender.curHP - hazards.damage, 0, 1, 1, defender.maxHP,
        toxic);
    if (c === 1) {
      return `guaranteed OHKO${afterText}`;
    } else if (c > 0) {
      c = qualifier + Math.round(c * 1000) / 10;
      return `${c}% chance to OHKO${afterText}`;
    }

    let i;
    for (i = 2; i <= 4; i++) {
      c = getKOChance(
          damage, defender.curHP - hazards.damage, eot.damage, i, 1,
          defender.maxHP, toxic);
      if (c === 1) {
        return `guaranteed ${i}HKO${afterText}`;
      } else if (c > 0) {
        c = qualifier + Math.round(c * 1000) / 10;
        return `${c}% chance to ${i}HKO${afterText}`;
      }
    }

    for (i = 5; i <= 9; i++) {
      if (predictTotal(damage[0], eot.damage, i, 1, toxic, defender.maxHP) >=
          defender.curHP - hazards.damage) {
        return `guaranteed ${i}HKO${afterText}`;
      } else if (
          predictTotal(
              damage[damage.length - 1], eot.damage, i, 1, toxic,
              defender.maxHP) >= defender.curHP - hazards.damage) {
        return `possible ${i}HKO${afterText}`;
      }
    }

  } else {
    const usedTimes = move.usedTimes || 1;  // BUG: ???
    c = getKOChance(
        damage, defender.maxHP - hazards.damage, eot.damage, usedTimes || 1,
        usedTimes, defender.maxHP, toxic);
    if (c === 1) {
      return `guaranteed KO in ${usedTimes} turns${afterText}`;
    } else if (c > 0) {
      c = qualifier + Math.round(c * 1000) / 10;
      return `${c}% chance to ${usedTimes}HKO${afterText}`;
    }

    if (predictTotal(
            damage[0], eot.damage, usedTimes, usedTimes, toxic,
            defender.maxHP) >= defender.curHP - hazards.damage) {
      return `guaranteed KO in ${usedTimes} turns${afterText}`;
    } else if (
        predictTotal(
            damage[damage.length - 1], eot.damage, usedTimes, usedTimes, toxic,
            defender.maxHP) >= defender.curHP - hazards.damage) {
      return `possible KO in ${usedTimes} turns${afterText}`;
    }
    return `not a KO`;
  }

  return '';
}

function getKOChance(
    damage: Readonly<number[]>, hp: number, eot: number, hits: number,
    moveHits: number, maxHP: number, toxic: number) {
  const n = damage.length;
  const minDamage = damage[0];
  const maxDamage = damage[n - 1];

  let i;
  if (hits === 1) {
    for (i = 0; i < n; i++) {
      if (damage[i] >= hp) {
        return (n - i) / n;
      }
    }
  } else {
    for (let j = 0; j < n; j++) {
      if (damage[j] >= hp) {
        return j / n;
      }
    }
  }

  if (predictTotal(maxDamage, eot, hits, moveHits, toxic, maxHP) < hp) {
    return 0;
  } else if (predictTotal(minDamage, eot, hits, moveHits, toxic, maxHP) >= hp) {
    return 1;
  }

  let toxicDamage = 0;
  if (toxic > 0) {
    toxicDamage = Math.floor(toxic * maxHP / 16);
    toxic++;
  }

  let sum = 0;
  for (i = 0; i < n; i++) {
    const c = getKOChance(
        damage, hp - damage[i] + eot - toxicDamage, eot, hits - 1, moveHits,
        maxHP, toxic);
    if (c === 1) {
      sum += (n - i);
      break;
    } else {
      sum += c;
    }
  }

  return sum / n;
}

function predictTotal(
    damage: number, eot: number, hits: number, moveHits: number, toxic: number,
    maxHP: number) {
  let toxicDamage = 0;
  if (toxic > 0) {
    for (let i = 0; i < hits - 1; i++) {
      toxicDamage += Math.floor((toxic + i) * maxHP / 16);
    }
  }

  let total;
  if (hits > 1 && moveHits === 1) {
    total = (damage * hits) - (eot * (hits - 1)) + toxicDamage;
  } else {
    total = damage - (eot * (hits - 1)) + toxicDamage;
  }

  return total;
}

function squashMultihit(
    gen: Generation, d: Readonly<number[]>, hits: number, err: boolean) {
  if (d.length === 1) {
    return [d[0] * hits];
  } else if (gen === 1) {
    const r = [];
    for (let i = 0; i < d.length; i++) {
      r[i] = d[i] * hits;
    }
    return r;
  } else if (d.length === 16) {
    switch (hits) {
      case 2:
        return [
          2 * d[0], d[2] + d[3], d[4] + d[4], d[4] + d[5], d[5] + d[6],
          d[6] + d[6], d[6] + d[7], d[7] + d[7], d[8] + d[8], d[8] + d[9],
          d[9] + d[9], d[9] + d[10], d[10] + d[11], d[11] + d[11],
          d[12] + d[13], 2 * d[15]
        ];
      case 3:
        return [
          3 * d[0], d[3] + d[3] + d[4], d[4] + d[4] + d[5], d[5] + d[5] + d[6],
          d[5] + d[6] + d[6], d[6] + d[6] + d[7], d[6] + d[7] + d[7],
          d[7] + d[7] + d[8], d[7] + d[8] + d[8], d[8] + d[8] + d[9],
          d[8] + d[9] + d[9], d[9] + d[9] + d[10], d[9] + d[10] + d[10],
          d[10] + d[11] + d[11], d[11] + d[12] + d[12], 3 * d[15]
        ];
      case 4:
        return [
          4 * d[0], 4 * d[4], d[4] + d[5] + d[5] + d[5],
          d[5] + d[5] + d[6] + d[6], 4 * d[6], d[6] + d[6] + d[7] + d[7],
          4 * d[7], d[7] + d[7] + d[7] + d[8], d[7] + d[8] + d[8] + d[8],
          4 * d[8], d[8] + d[8] + d[9] + d[9], 4 * d[9],
          d[9] + d[9] + d[10] + d[10], d[10] + d[10] + d[10] + d[11], 4 * d[11],
          4 * d[15]
        ];
      case 5:
        return [
          5 * d[0], d[4] + d[4] + d[4] + d[5] + d[5],
          d[5] + d[5] + d[5] + d[5] + d[6], d[5] + d[6] + d[6] + d[6] + d[6],
          d[6] + d[6] + d[6] + d[6] + d[7], d[6] + d[6] + d[7] + d[7] + d[7],
          5 * d[7], d[7] + d[7] + d[7] + d[8] + d[8],
          d[7] + d[7] + d[8] + d[8] + d[8], 5 * d[8],
          d[8] + d[8] + d[8] + d[9] + d[9], d[8] + d[9] + d[9] + d[9] + d[9],
          d[9] + d[9] + d[9] + d[9] + d[10],
          d[9] + d[10] + d[10] + d[10] + d[10],
          d[10] + d[10] + d[11] + d[11] + d[11], 5 * d[15]
        ];
      default:
        util.error(err, `Unexpected # of hits: ${hits}`);
        return d;
    }
  } else if (d.length === 39) {
    switch (hits) {
      case 2:
        return [
          2 * d[0], 2 * d[7], 2 * d[10], 2 * d[12], 2 * d[14], d[15] + d[16],
          2 * d[17], d[18] + d[19], d[19] + d[20], 2 * d[21], d[22] + d[23],
          2 * d[24], 2 * d[26], 2 * d[28], 2 * d[31], 2 * d[38]
        ];
      case 3:
        return [
          3 * d[0], 3 * d[9], 3 * d[12], 3 * d[13], 3 * d[15], 3 * d[16],
          3 * d[17], 3 * d[18], 3 * d[20], 3 * d[21], 3 * d[22], 3 * d[23],
          3 * d[25], 3 * d[26], 3 * d[29], 3 * d[38]
        ];
      case 4:
        return [
          4 * d[0], 2 * d[10] + 2 * d[11], 4 * d[13], 4 * d[14],
          2 * d[15] + 2 * d[16], 2 * d[16] + 2 * d[17], 2 * d[17] + 2 * d[18],
          2 * d[18] + 2 * d[19], 2 * d[19] + 2 * d[20], 2 * d[20] + 2 * d[21],
          2 * d[21] + 2 * d[22], 2 * d[22] + 2 * d[23], 4 * d[24], 4 * d[25],
          2 * d[27] + 2 * d[28], 4 * d[38]
        ];
      case 5:
        return [
          5 * d[0], 5 * d[11], 5 * d[13], 5 * d[15], 5 * d[16], 5 * d[17],
          5 * d[18], 5 * d[19], 5 * d[19], 5 * d[20], 5 * d[21], 5 * d[22],
          5 * d[23], 5 * d[25], 5 * d[27], 5 * d[38]
        ];
      default:
        util.error(err, `Unexpected # of hits: ${hits}`);
        return d;
    }
  } else {
    util.error(err, `Unexpected # of possible damage values: ${d.length}`);
    return d;
  }
}

function buildDescription(desc: Readonly<RawDesc>) {
  let output = '';
  if (desc.attackBoost) {
    if (desc.attackBoost > 0) {
      output += '+';
    }
    output += desc.attackBoost + ' ';
  }

  output = appendIfSet(output, desc.attackEVs);
  output = appendIfSet(output, desc.attackerItem);
  output = appendIfSet(output, desc.attackerAbility);
  output = appendIfSet(output, desc.rivalry);

  if (desc.isBurned) {
    output += 'burned ';
  }

  output += desc.attackerName + ' ';

  if (desc.isHelpingHand) {
    output += 'Helping Hand ';
  }

  output += desc.moveName + ' ';

  if (desc.moveBP && desc.moveType) {
    output += '(' + desc.moveBP + ' BP ' + desc.moveType + ') ';
  } else if (desc.moveBP) {
    output += '(' + desc.moveBP + ' BP) ';
  } else if (desc.moveType) {
    output += '(' + desc.moveType + ') ';
  }

  if (desc.hits) {
    output += '(' + desc.hits + ' hits) ';
  }

  output = appendIfSet(output, desc.moveTurns);
  output += 'vs. ';

  if (desc.defenseBoost) {
    if (desc.defenseBoost > 0) {
      output += '+';
    }
    output += desc.defenseBoost + ' ';
  }

  output = appendIfSet(output, desc.HPEVs);

  if (desc.defenseEVs) {
    output += '/ ' + desc.defenseEVs + ' ';
  }

  output = appendIfSet(output, desc.defenderItem);
  output = appendIfSet(output, desc.defenderAbility);

  if (desc.isProtected) {
    output += 'protected ';
  }

  output += desc.defenderName;

  if (desc.weather && desc.terrain) {
    // do nothing
  } else if (desc.weather) {
    output += ' in ' + desc.weather;
  } else if (desc.terrain) {
    output += ' in ' + desc.terrain + ' Terrain';
  }

  if (desc.isReflect) {
    output += ' through Reflect';
  } else if (desc.isLightScreen) {
    output += ' through Light Screen';
  }

  if (desc.isFriendGuard) {
    output += ' with an ally\'s Friend Guard';
  }

  if (desc.isAuroraVeil) {
    output += ' with an ally\'s Aurora Veil';
  }

  if (desc.isCritical) {
    output += ' on a critical hit';
  }

  return output;
}

function serializeText(arr: string[]) {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 2) {
    return arr[0] + ' and ' + arr[1];
  } else {
    let text = '';
    for (let i = 0; i < arr.length - 1; i++) {
      text += arr[i] + ', ';
    }
    return text + 'and ' + arr[arr.length - 1];
  }
}

function appendIfSet(str: string, toAppend: string|undefined) {
  return toAppend ? str + toAppend + ' ' : str;
}
