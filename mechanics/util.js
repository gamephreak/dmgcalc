'use strict';

const STATS = require('../data/stats').STATS;

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

exports.applyBoosts = applyBoosts;
exports.getModifiedStat = getModifiedStat;
exports.getMoveEffectiveness = getMoveEffectiveness;
