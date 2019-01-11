import {TypeChart} from '../data/types';
import {Field} from '../field';
import {Move} from '../move';
import {Pokemon} from '../pokemon';
import {STATS} from '../stats';
import {include} from '../util';

export function addBoost(boosts: number, boost: number) {
  return Math.min(6, Math.max(-6, boosts + boost));
}

export function applyBoosts(p: Pokemon, gen: Generation, stats?: Stat[]) {
  for (const stat of (stats || STATS[gen].slice(1))) {  // HP cannot be boosted
    p.stats[stat] = getModifiedStat(p.stats[stat]!, p.boosts[stat] || 0, gen);
  }
  return p;
}

export function getModifiedStat(stat: number, mod: number, gen: Generation) {
  if (mod > 0) {
    stat = Math.floor(stat * (2 + mod) / 2);
  } else if (mod < 0) {
    stat = Math.floor(stat * 2 / (2 - mod));
  } else {
    stat = stat;
  }

  return (gen && gen < 3) ? Math.min(999, Math.max(1, stat)) : stat;
}

export function getSimpleModifiedStat(
    stat: number, mod: number, gen: Generation) {
  return getModifiedStat(stat, Math.min(6, Math.max(-6, mod * 2)), gen);
}

export function countBoosts(boosts: Partial<StatsTable>) {
  let sum = 0;
  let stat: Stat;
  // tslint:disable-next-line
  for (stat in boosts) {
    const boost: number = boosts[stat] || 0;
    if (boost > 0) {
      sum += boost;
    }
  }
  return sum;
}

export function getMoveEffectiveness(
    typeChart: TypeChart, move: Move, type: Type, isGhostRevealed: boolean,
    isGravity?: boolean) {
  if (isGhostRevealed && type === 'Ghost' &&
      (move.type === 'Normal' || move.type === 'Fighting')) {
    return 1;
  } else if (isGravity && type === 'Flying' && move.type === 'Ground') {
    return 1;
  } else if (move.name === 'Freeze-Dry' && type === 'Water') {
    return 2;
  } else if (move.name === 'Flying Press') {
    return typeChart['Fighting']![type]! * typeChart['Flying']![type]!;
  } else {
    return typeChart[move.type]![type]!;
  }
}

export function getAirLockWeather(
    attacker: Pokemon, defender: Pokemon, weather: Weather) {
  return (attacker.ability === 'Air Lock' || defender.ability === 'Air Lock' ||
          attacker.ability === 'Cloud Nine' ||
          defender.ability === 'Cloud Nine') ?
      '' :
      weather;
}

export function getForecastType(pokemon: Pokemon, weather: Weather) {
  if (pokemon.ability === 'Forecast' && pokemon.name === 'Castform') {
    switch (weather) {
      case 'Sun':
      case 'Harsh Sunshine':
        return 'Fire';
      case 'Rain':
      case 'Heavy Rain':
        return 'Water';
      case 'Hail':
        return 'Ice';
      default:
        return 'Normal';
    }
  }
  return undefined;
}

export function getIntimidateBoost(source: Pokemon, target: Pokemon) {
  const ABILITIES =
      ['Clear Body', 'White Smoke', 'Hyper Cutter', 'Full Metal Body'];
  if (source.ability === 'Intimidate' && include(ABILITIES, target.ability)) {
    if (target.ability === 'Contrary' || target.ability === 'Defiant') {
      return 1;
    } else if (target.ability === 'Simple') {
      return -2;
    } else {
      return -1;
    }
  }
  return 0;
}

export function getKlutzItem(pokemon: Pokemon) {
  return (pokemon.ability === 'Klutz') ? '' : pokemon.item;
}

export function applyDownloadBoost(source: Pokemon, target: Pokemon) {
  if (source.ability === 'Download') {
    if (target.stats.spd <= target.stats.def) {
      source.boosts.spa = addBoost(source.boosts.spa, 1);
    } else {
      source.boosts.atk = addBoost(source.boosts.atk, 1);
    }
  }
}

export function getFinalSpeed(
    pokemon: Pokemon, weather: Weather, gen: Generation) {
  let speed = getModifiedStat(pokemon.stats.spe, pokemon.boosts.spe, gen);
  if (pokemon.item === 'Choice Scarf') {
    speed = Math.floor(speed * 1.5);
  } else if (pokemon.item === 'Macho Brace' || pokemon.item === 'Iron Ball') {
    speed = Math.floor(speed / 2);
  }

  if (pokemon.ability === 'Quick Feet' && pokemon.status !== 'Healthy') {
    speed = Math.floor(speed * 1.5);
  }

  if ((pokemon.ability === 'Chlorophyll' && include(weather, 'Sun')) ||
      (pokemon.ability === 'Sand Rush' && weather === 'Sand') ||
      (pokemon.ability === 'Swift Swim' && include(weather, 'Rain')) ||
      (pokemon.ability === 'Slush Rush' && weather === 'Hail')) {
    speed *= 2;
  }

  return speed;
}

export function isGrounded(pokemon: Readonly<Pokemon>, field: Readonly<Field>) {
  return field.isGravity ||
      (!pokemon.hasType('Flying') && pokemon.ability !== 'Levitate' &&
       pokemon.item !== 'Air Balloon');
}

export function getFlailReversalPower(attacker: Pokemon) {
  const p = Math.floor(48 * attacker.curHP / attacker.maxHP);
  // clang-format off
  return (p <= 1  ? 200 :
          p <= 4  ? 150 :
          p <= 9  ? 100 :
          p <= 16 ?  80 :
          p <= 32 ?  40 :
                     20);
  // clang-format on
}

export function getLowKickGrassKnotPower(w: number) {
  // clang-format off
  return (w >= 200 ? 120 :
          w >= 100 ? 100 :
          w >=  50 ?  80 :
          w >=  25 ?  60 :
          w >=  10 ?  40 :
                      20);
  // clang-format on
}
