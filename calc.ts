import {Field} from './field';
import {Generation} from './gen';
import {MECHANICS} from './mechanics';
import {Move} from './move';
import {Pokemon} from './pokemon';

export function damage(
    gen: Generation, attacker: Readonly<Pokemon>, defender: Readonly<Pokemon>,
    move: Readonly<Move>, field: Readonly<Field>) {
  return MECHANICS[gen].damage(attacker, defender, move, field);
}
