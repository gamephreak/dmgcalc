'use strict';

const STATS = require('../data/stats').STATS;

function addBoost(boosts, boost) {
  return Math.min(6, Math.max(-6, boosts + boost));
}

function applyBoosts(gen, p) {
  for (let stat of STATS[gen].slice(1)) { // HP cannot be boosted
    p.stats[stat] = getModifiedStat(gen, p.stats[stat], p.boosts[boost]);
  }
  return p;
}

function getModifiedStat(gen, stat, mod) {
  if (mod > 0) {
    stat = Math.floor(stat * (2 + mod) / 2);
  } else if (mod < 0) {
    stat = Math.floor(stat * 2 / (2 - mod));
  } else {
    stat = stat;
  }

  return gen < 3 ? Math.min(999, Math.max(1, stat)) : stat;
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
  return ((attacker.ability === 'Air Lock' || defender.ability === 'Air Lock') ||
          (attacker.ability === 'Cloud Nine') || defender.ability === 'Cloud Nine') ? '' : weather;
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
  if (source.ability === 'Intimidate' &&
    ['Clear Body', 'White Smoke', 'Hyper Cutter', 'Full Metal Body'].indexOf(target.ability) === -1) {
    if (['Contrary', 'Defiant'].indexOf(target.ability) !== -1) {
      return 1;
    } else if (target.ability === 'Simple') {
      return -2;
    } else {
      return -1;
    }
  }
  return 0;
}

exports.addBoost = applyBoost;
exports.applyBoosts = applyBoosts;
exports.getModifiedStat = getModifiedStat;
exports.getMoveEffectiveness = getMoveEffectiveness;
exports.getAirLockWeather = getAirLockWeather;
exports.getForecastType = exports.getForecastTypp;
exports.getIntimidateBoost = getIntimidateBoost;
