import {Pokemon, ObservedPokemon} from './pokemon';
import {Field} from './field';
import {Generation} from './gen';

export type Tier = '' | 'ubers' | 'ou' | 'uu' | 'ru' | 'pu' | 'nu' | 'lc';

export type State = {
  gen: Generation;
  tier: Tier;
  notation: string;

  attacker: Readonly<Pokemon[]>;
  attackerField: Readonly<Field>;

  defender: Readonly<ObservedPokemon[]>;
  // NOTE: defender considered attacker for isAttackerSeeded
  defenderField: Readonly<Field>;
};
