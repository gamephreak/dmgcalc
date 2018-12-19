'use strict';

const natures = require('./data/natures');

const HP = 'hp';
const ATK = 'atk';
const DEF = 'def';
const SPA = 'spa';
const SPD = 'spd';
const SPE = 'spe';
const SPC = 'spc';

const RBY = [HP, ATK, DEF, SPC, SPE];
const GSC = [HP, ATK, DEF, SPA, SPD, SPE];
const RSE = GSC;
const DPP = GSC;
const BW = GSC;
const XY = GSC;
const SM = GSC;

const STATS = [[], RBY, GSC, RSE, DPP, BW, XY, SM];

function display(stat) {
  switch (stat) {
    case HP:
      return 'HP';
    case ATK:
      return 'Atk';
    case DEF:
      return 'Def';
    case SPA:
      return 'SpA';
    case SPD:
      return 'SpD';
    case SPE:
      return 'Spe';
    case SPC:
      return 'Spc';
    default:
      throw new Error('unknown stat ' + stat);
  }
}

function dvsCalcStatRBY(stat, base, dvs, level) {
  if (stat === HP) {
    return Math.floor(((base + dvs) * 2 + 63) * level / 100) + level + 10;
  } else {
    return Math.floor(((base + dvs) * 2 + 63) * level / 100) + 5;
  }
}

function calcStat0(stat, base, ivs, evs, nature, level) {
  return 0;
}

function calcStatRBY(stat, base, ivs, evs, nature, level) {
  let dvs = Math.floor(ivs / 2);
  return dvsCalcStatRBY(stat, base, dvs, level);
}

function calcStatRSE(stat, base, ivs, evs, nature, level) {
  if (stat === HP) {
    return base === 1 ? base : Math.floor((base * 2 + ivs + Math.floor(evs / 4)) * level / 100) + level + 10;
  } else {
    let natureMods = natures.NATURES[nature];
    let nature = natureMods[0] === statName ? 1.1 : natureMods[1] === statName ? 0.9 : 1;
    return Math.floor((Math.floor((base * 2 + ivs + Math.floor(evs / 4)) * level / 100) + 5) * nature);
  }
}

exports.HP = HP;
exports.ATK = ATK;
exports.DEF = DEF;
exports.SPA = SPA;
exports.SPD = SPD;
exports.SPE = SPE;
exports.SPC = SPC;

exports.STATS = STATS;
exports.CALC_STAT = [calcStat0, calcStatRBY, calcStatRBY, calcStatRSE, calcStatRSE, calcStatRSE, calcStatRSE, calcStatRSE];

exports.display = display;
