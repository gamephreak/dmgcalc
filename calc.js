'use strict';

const MECHANICS = require('./mechanics').MECHANICS;

function damage(gen, attacker, defender, move, field) {
 return MECHANICS[gen].damage(attacker, defender, move, field);
}

exports.damage = damage;
