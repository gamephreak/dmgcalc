'use strict';

const util = require('../util');

const NATURES = {
  'Adamant': ['atk', 'spa'],
  'Bashful': ['', ''],
  'Bold': ['def', 'atk'],
  'Brave': ['atk', 'spe'],
  'Calm': ['spd', 'atk'],
  'Careful': ['spd', 'spa'],
  'Docile': ['', ''],
  'Gentle': ['spd', 'def'],
  'Hardy': ['', ''],
  'Hasty': ['spe', 'def'],
  'Impish': ['def', 'spa'],
  'Jolly': ['spe', 'spa'],
  'Lax': ['def', 'spd'],
  'Lonely': ['atk', 'def'],
  'Mild': ['spa', 'def'],
  'Modest': ['spa', 'atk'],
  'Naive': ['spe', 'spd'],
  'Naughty': ['atk', 'spd'],
  'Quiet': ['spa', 'spe'],
  'Quirky': ['', ''],
  'Rash': ['spa', 'spd'],
  'Relaxed': ['def', 'spe'],
  'Sassy': ['spd', 'spe'],
  'Serious': ['', ''],
  'Timid': ['spe', 'atk']
};

const NATURES_BY_ID = {};
for (let n of Object.keys(NATURES)) {
  NATURES_BY_ID[util.toID(n)] = n;
}

exports.NATURES = NATURES;
exports.NATURS_BY_ID = NATURES_BY_ID;
