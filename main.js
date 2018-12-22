'use strict';

exports.calc = require('./calc').damage;
exports.Pokemon = require('./pokemon').Pokemon;
exports.Move = require('./move').Move;
exports.Field = require('./field').Field;
exports.Result = require('/.result').Result;

exports.Data = {
  ABILITIES: require('./data/abilities').ABILITIES
  ITEMS: require('./data/items').ITEMS,
  MOVES: require('./data/moves').MOVES,
  POKEDEX: require('./data/pokedex').POKEDEX
};
