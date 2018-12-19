'use strict';

const bw = require('./bw');

exports.damage = bw.makeDamage(7, require('../data/types').TYPE_CHART[7]);
