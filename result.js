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

  get desc() {
    return this.fullDesc();
  }

  fullDesc(notation = '%') {
    return desc.display(
        this.gen, this.attacker, this.defender, this.move,
        this.field, this.damage, this.rawDesc, notation);
  }

  moveDesc(notation = '%') {
    return desc.displayMove(
        this.gen, this.attacker, this.defender,
        this.move, this.damage, notation);
  }

  recoveryDesc(notation = '%') {
    return desc.getRecovery(
        this.attacker, this.defender, this.move, this.damage, notation).desc;
  }

  recoilDesc(notation = '%') {
    return desc.getRecoil(
        this.gen, this.attacker, this.defender,
        this.move, this.damage, notation).desc;
  }
}

exports.Result = Result;
