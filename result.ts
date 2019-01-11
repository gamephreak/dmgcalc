import * as desc from './desc';
import {Field} from './field';
import {Generation} from './gen';
import {Move} from './move';
import {Pokemon} from './pokemon';

export class Result {
  constructor(
      readonly gen: Generation, readonly attacker: Readonly<Pokemon>,
      readonly defender: Readonly<Pokemon>, readonly move: Readonly<Move>,
      readonly field: Readonly<Field>, readonly damage: Readonly<number[]>,
      readonly rawDesc: Readonly<desc.RawDesc>) {
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
        this.gen, this.attacker, this.defender, this.move, this.field,
        this.damage, this.rawDesc, notation);
  }

  moveDesc(notation = '%') {
    return desc.displayMove(
        this.gen, this.attacker, this.defender, this.move, this.damage,
        notation);
  }

  recoveryDesc(notation = '%') {
    return desc
        .getRecovery(
            this.attacker, this.defender, this.move, this.damage, notation)
        .text;
  }

  recoilDesc(notation = '%') {
    return desc
        .getRecoil(
            this.gen, this.attacker, this.defender, this.move, this.damage,
            notation)
        .text;
  }
}
