'use strict';

const bw = require('./bw');

exports.damage = bw.makeDamage(6, require('../data/types').TYPE_CHART[6]);
