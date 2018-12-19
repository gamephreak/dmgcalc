'use strict';

const mechanics = require('./mechanics');

function damage(gen, attacker, defender, move, field) {
 return mechanics.MECHANICS[gen].damage(attacker, defender, move, field);
}

exports.damage = damage;
