'use strict';

const STATS = require('../stats').STATS;

function addBoost(boosts, boost) {
  return Math.min(6, Math.max(-6, boosts + boost));
}

function applyBoosts(p, gen, stats) {
  for (let stat of (stats || STATS[gen].slice(1))) { // HP cannot be boosted
    p.stats[stat] = getModifiedStat(p.stats[stat], p.boosts[boost], gen);
  }
  return p;
}

function getModifiedStat(stat, mod, gen) {
  if (mod > 0) {
    stat = Math.floor(stat * (2 + mod) / 2);
  } else if (mod < 0) {
    stat = Math.floor(stat * 2 / (2 - mod));
  } else {
    stat = stat;
  }

  return (gen && gen < 3) ? Math.min(999, Math.max(1, stat)) : stat;
}

function countBoosts(boosts) {
  let sum = 0;
  for (let i = 0; i < STATS.length; i++) {
    if (boosts[STATS[i]] > 0) {
      sum += boosts[STATS[i]];
    }
  }
  return sum;
}

function getSimpleModifiedStat(stat, mod, gen) {
  return getModifiedStat(stat, Math.min(6, Math.max(-6, mod * 2)), gen);
}

function getMoveEffectiveness(
    typeChart, move, type, isGhostRevealed, isGravity) {
  if (isGhostRevealed && type === 'Ghost' &&
      (move.type === 'Normal' || move.type === 'Fighting')) {
    return 1;
  } else if (isGravity && type === 'Flying' && move.type === 'Ground') {
    return 1;
  } else if (move.name === 'Freeze-Dry' && type === 'Water') {
    return 2;
  } else if (move.name === 'Flying Press') {
    return typeChart['Fighting'][type] * typeChart['Flying'][type];
  } else {
    return typeChart[move.type][type];
  }
}

function getAirLockWeather(attacker, defender, weather) {
  return (attacker.ability === 'Air Lock' ||
          defender.ability === 'Air Lock' ||
          attacker.ability === 'Cloud Nine' ||
          defender.ability === 'Cloud Nine') ? '' : weather;
}

function getForecastType(pokemon, weather) {
  if (pokemon.ability === 'Forecast' && pokemon.name === 'Castform') {
    switch (weather) {
      case 'Sun':
      case 'Harsh Sunlight':
        return'Fire';
        break;
      case 'Rain':
      case 'Heavy Rain':
        return 'Water';
        break;
      case 'Hail':
        return 'Ice';
        break;
      default:
        return 'Normal';
    }
  }
  return undefined;
}

function getIntimidateBoost(source, target) {
  const ABILITIES = ['Clear Body', 'White Smoke', 'Hyper Cutter', 'Full Metal Body'];
  if (source.ability === 'Intimidate' && include(ABILIITES, target.ability)) {
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

function getKlutzItem(pokemon) {
  return (pokemon.ability === 'Klutz') ? '' : pokemon.item;
}

function applyDownloadBoost(source, target) {
  if (source.ability === 'Download') {
    if (target.stats.spd <= target.stats.def) {
      source.boosts.spa = addBoost(source.boosts.spa, 1);
    } else {
      source.boosts.atk = addBoost(source.boosts.atk, 1);
    }
  }
}

function getFinalSpeed(pokemon, weather) {
  let speed = getModifiedStat(pokemon.stats.spe, pokemon.boosts.spe);
  if (pokemon.item === 'Choice Scarf') {
    speed = Math.floor(speed * 1.5);
  } else if (pokemon.item === 'Macho Brace' || pokemon.item === 'Iron Ball') {
    speed = Math.floor(speed / 2);
  }

  if ((pokemon.ability === 'Chlorophyll' && include(weather, 'Sun')) ||
      (pokemon.ability === 'Sand Rush' && weather === 'Sand') ||
      (pokemon.ability === 'Swift Swim' && include(weather, 'Rain')) ||
      (pokemon.ability === 'Slush Rush' && weather === 'Hail')) {
    speed *= 2;
  }

  return speed;
}

exports.addBoost = addBoost;
exports.applyBoosts = applyBoosts;
exports.applyDownloadBoost = applyDownloadBoost;
exports.countBoosts = countBoosts;
exports.getKlutzItem = getKlutzItem;
exports.getModifiedStat = getModifiedStat;
exports.getSimpleModifiedStat = getSimpleModifiedStat;
exports.getMoveEffectiveness = getMoveEffectiveness;
exports.getAirLockWeather = getAirLockWeather;
exports.getForecastType = getForecastType;
exports.getFinalSpeed = getFinalSpeed;
exports.getIntimidateBoost = getIntimidateBoost;
