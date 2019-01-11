import {damage} from './calc';
import {Field} from './field';
import {Move} from './move';
import {parse} from './parser';
import {Pokemon} from './pokemon';
import {Result} from './result';

function argv(s: string) {
  const re = /([^\s'"]+(['"])([^\2]*?)\2)|[^\s'"]+|(['"])([^\4]*?)\4/gi;
  const args = [];

  let m;
  do {
    m = re.exec(s);
    if (m !== null) {
      args.push(m[1] || m[5] || m[0]);
    }
  } while (m !== null);

  return args;
}

export function calc(args: string): Result;
export function calc(args: string[]): Result;
export function calc(
    gen: Generation, attacker: Readonly<Pokemon>, defender: Readonly<Pokemon>,
    move: Readonly<Move>, field: Readonly<Field>): Result;
// tslint:disable-next-line:no-any
export function calc(...args: any): Result {
  let gen: Generation, attacker: Readonly<Pokemon>, defender: Readonly<Pokemon>,
      move: Readonly<Move>, field: Readonly<Field>;
  if (args.length === 1) {
    if (typeof args[0] === 'string') {
      args = argv(args[0]);
    } else {
      args = args[0];
    }
  }

  if (args.length === 5 && args[1] instanceof Pokemon) {
    gen = args[0];
    attacker = args[1];
    defender = args[2];
    move = args[3];
    field = args[4];
  } else {
    const parsed = parse(args);
    gen = parsed.gen;
    attacker = parsed.attacker;
    defender = parsed.defender;
    move = parsed.move;
    field = parsed.field;
  }

  return damage(gen, attacker, defender, move, field);
}

export {parse} from './parser';

export {ABILITIES} from './data/abilities';
export {CALC_STAT} from './stats';
export {ITEMS} from './data/items';
export {MOVES} from './data/moves';
export {POKEDEX} from './data/pokedex';
export {SETS} from './data/sets';

export {Field} from './field';
export {Move} from './move';
export {Pokemon} from './pokemon';
export {Result} from './result';
