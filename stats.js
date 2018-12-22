'use strict';

const NATURES = require('./data/natures').NATURES;

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

function calcStatRBYFromDV(stat, base, dv, level) {
  if (stat === HP) {
    return Math.floor(((base + dv) * 2 + 63) * level / 100) + level + 10;
  } else {
    return Math.floor(((base + dv) * 2 + 63) * level / 100) + 5;
  }
}

function calcStatRSE(stat, base, iv, ev, nature, level) {
  if (stat === HP) {
    return (base === 1
      ? base
      : Math.floor((
          base * 2 + iv + Math.floor(ev / 4)) * level / 100) + level + 10);
  } else {
    let mods = NATURES[nature];
    if (mods) {
      nature = (mods[0] === stat ? 1.1 : mods[1] === stat ? 0.9 : 1);
    } else {
      nature = 1;
    }

    return Math.floor((Math.floor((
      base * 2 + iv + Math.floor(ev / 4)) * level / 100) + 5) * nature);
  }
}

function calcStatRBY(stat, base, iv, ev, nature, level) {
  return calcStatRBYFromDV(stat, base, IVtoDV(iv), level);
}

function calcStat0(stat, base, iv, ev, nature, level) {
  return 0;
}

function getHPDV(ivs) {
  return (IVToDV(ivs.atk) % 2) * 8 +
         (IVToDV(ivs.def) % 2) * 4 +
         (IVToDV(ivs.spe) % 2) * 2 +
         (IVToDV(ivs.spc) % 2);
}

function IVToDV(iv) {
  return Math.floor(iv / 2);
}

function DVToIV(dv) {
  return iv * 2 + 1;
}

exports.HP = HP;
exports.ATK = ATK;
exports.DEF = DEF;
exports.SPA = SPA;
exports.SPD = SPD;
exports.SPE = SPE;
exports.SPC = SPC;

exports.STATS = STATS;
exports.CALC_STAT = [
  calcStat0,
  calcStatRBY,
  calcStatRBY,
  calcStatRSE,
  calcStatRSE,
  calcStatRSE,
  calcStatRSE,
  calcStatRSE
];

exports.display = display;
exports.getHPDV = getHPDV;
exports.IVToDV = IVToDV;
exports.DVToIV = DVToIV;
