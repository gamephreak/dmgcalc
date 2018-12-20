'use strict';

function getModifiedStat(stat, mod) {
  if (mod > 0) {
    return Math.floor(stat * (2 + mod) / 2);
  } else if (mod < 0) {
    return Math.floor(stat * 2 / (2 - mod));
  } else {
    return stat;
  }
}

exports.getModifiedStat = getModifiedStat;
