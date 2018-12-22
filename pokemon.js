'use strict';

const $ = {};
$.extend = require('jquery-extend');
const include = require('./util').include;

const POKEDEX = require('./data/pokedex').POKEDEX;
const stats = require('./stats');

class Pokemon {
  constructor(
      gen, name, level, gender, ability, item, nature,
      ivs, evs, boosts, curHP, status, toxicCounter) {
    this.gen = gen;
    this.name = name;
    this.species = POKEDEX[gen][name];

    this.level = level || 100;
    this.gender = gender || this.species.gender || '';
    this.item = item || '';
    this.ability = ability || this.species.ability || '';
    this.nature = nature || 'Hardy';

    this.ivs = this.withDefault_(ivs, 31);
    this.evs = this.withDefault_(evs, gen >= 3 ? 0 : 252);
    this.boosts = this.withDefault_(boosts, 0);

    if (gen < 3) {
      this.ivs.hp = stats.getHPDV(ivs);
    }

    this.stats = {};
    for (let stat of stats.STATS[gen]) {
      this.stats[stat] = this.calcStat_(gen, stat);
    }

    this.curHP = (curHP && curHP <= this.maxHP) ? curHP: this.maxHP;
    this.status = status || 'Healthy';
    this.toxicCounter || 0;
  }

  get type1() {
    return this.species.type1;
  }

  get type2() {
    return this.species.type2 || '';
  }

  get maxHP() {
    return this.stats.hp;
  }

  hasType(type) {
    return this.type1 === type || this.type2 === type;
  }

  copy() {
    return new Pokemon(
      this.gen, this.name, this.level, this.gender, this.ability,
      this.item, this.nature, this.ivs, this.evs, this.boosts, this.curHP,
      this.status, this.toxicCounter);
  }

  calcStat_(gen, stat) {
    return stats.CALC_STAT[gen](
        stat, this.species.baseStats[stat],
        this.ivs[stat], this.evs[stat], this.nature, this.level);
  }

  withDefault_(current, val) {
    return $.extend(true, {}, {
      'hp': val,
      'atk': val,
      'def': val,
      'spa': val,
      'spd': val,
      'spc': val,
      'spe': val
    }, current);
  }

  static getForme(gen, speciesName, item, moveName) {
    let species = POKEDEX[gen][speciesName];
    if (!species || !species.formes) {
      return speciesName;
    }

    let i = 0;
    if (item) {
      if ((include(item, 'ite') && !include(item, 'ite Y')) ||
          (speciesName === 'Groudon' && item === 'Red Orb') ||
          (speciesName === 'Kyogre' && item === 'Blue Orb') ||
          (speciesName === 'Meloetta' && moveName === 'Relic Song') ||
          (speciesName === 'Rayquaza' && moveName === 'Dragon Ascent')) {
        i = 1;
      } else if (include(item, 'ite Y')) {
        i =  2;
      }
    }

    return species.formes[i];
  }
}

exports.Pokemon = Pokemon;
