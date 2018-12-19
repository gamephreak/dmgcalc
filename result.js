'use strict';

const desc = require('./desc');

class Result {
  constructor(gen, attacker, defender, move, field, damage, rawDesc) {
    this.gen = gen;
    this.attacker = attacker;
    this.defender = defender;
    this.move = move;
    this.field = field;

    this.damage = damage;
    this.rawDesc = rawDesc;
  }

  get desc(notation = '%') {
    return this.fullDesc(notation);
  }

  fullDesc(notation = '%') {
    return desc.display(
        this.gen, this.attacker, this.defender, this.move,
        this.field, this.damage, this.rawDesc, notation);
  }

  moveDesc(notation = '%') {
    return desc.display(
        this.gen, this.attacker, this.defender, this.move,
        this.damage, this.rawDesc, notation);
  }

  recoveryDesc(notation = '%') {
    return desc.display(
        this.gen, this.attacker, this.defender, this.move,
        this.field, this.damage, this.rawDesc, notation);
  }

  recoilDesc(notation = '%') {
    return desc.display(
        this.attacker, this.defender, this.move,
        this.damage, this.rawDesc, notation);
  }
}

exports.Result = Result;
