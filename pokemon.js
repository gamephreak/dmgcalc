'use strict';

const $ = {};
$.extend = require('jquery-extend');

const pokedex = require('./data/pokedex');
const stats = require('./data/stats');

class Pokemon { 
  constructor(
      gen, name, level, gender, ability, item, nature,
      ivs, evs, boosts, curHP, status, toxicCounter) {
    this.name = name;
    this.species = pokedex.POKEDEX[gen][name];

    this.level = level || 100;
    this.gender = gender || this.species.gender;
    this.item = item;
    this.ability = ability || this.species.ability || '';
    this.nature = nature || '';

    this.ivs = this.withDefault_(ivs, 31);
    this.evs = this.withDefault_(evs, gen >= 3 ? 0 : 252);
    this.boosts = this.withDefault_(boosts, 0);

    if (gen < 3) {
      this.ivs.hp = stats.getHPDV(ivs);
    }

    for (let stat of stats.STATS[gen]) {
      this.stats[stat] = this.calcStat_(gen, stat);
    }

    this.curHP = curHP > this.stats[stats.HP] ? this.stats[stats.HP] : curHP;
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
    return this.stats[stats.HP];
  }

  hasType(type) {
    return this.type1 === type || this.type2 === type;
  }

  copy() {
    return $.extend(true, {}, this);
  }

  calcStat_(gen, stat) {
    return stats.CALC_STAT[gen](
        stat, this.species.baseStats[stats],
        this.ivs, this.evs, this.nature, this.level);
  }

  withDefault_(current, val) {
    return $.extend(true, {}, current, {
      'hp': val,
      'atk': val,
      'def': val,
      'spa': val,
      'spd': val,
      'spc': val,
      'spe': val
    });
  }

  static getForme(gen, speciesName, item, moveName) {
    let species = pokedex.POKEDEX[gen][speciesName];
    if (!species || !species.formes) {
      return speciesName;
    }
   
    let i = 0;
    if (item) {
      if ((item.indexOf('ite') !== -1 && item.indexOf('ite Y') === -1) ||
          (speciesName === 'Groudon' && item === 'Red Orb') ||
          (speciesName === 'Kyogre' && item === 'Blue Orb') ||
          (speciesName === 'Meloetta' && moveName === 'Relic Song') ||
          (speciesName === 'Rayquaza' && moveName === 'Dragon Ascent')) {
        i = 1;
      } else if (item.indexOf('ite Y') !== -1) {
        i =  2;
      }
    }

    return species.formes[i].name;
  }
}

exports.Pokemon = Pokemon;
