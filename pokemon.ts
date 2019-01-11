import {Gender, POKEDEX, Species} from './data/pokedex';
import {Type} from './data/types';
import {Generation} from './gen';
import {calcStat, DVToIV, getHPDV, Stat, STATS, StatsTable} from './stats';
import {extend, include} from './util';

export type Status = 'Healthy'|'Paralyzed'|'Poisoned'|'Badly Poisoned'|'Burned'|
    'Asleep'|'Frozen';

export class Pokemon {
  name: string;
  type1: Type;
  type2?: Type;
  weight: number;
  level: number;
  gender?: Gender;
  ability?: string;
  item?: string;
  nature: string;
  ivs: StatsTable;
  evs: StatsTable;
  boosts: StatsTable;
  stats: StatsTable;
  curHP: number;
  status: Status;
  toxicCounter: number;

  private gen: Generation;
  private species: Species;

  constructor(
      gen: Generation, name: string, level?: number, gender?: Gender,
      ability?: string, item?: string, nature?: string,
      ivs?: Partial<StatsTable>, evs?: Partial<StatsTable>,
      boosts?: Partial<StatsTable>, curHP?: number, status?: Status,
      toxicCounter?: number) {
    this.gen = gen;
    this.name = name;
    this.species = POKEDEX[gen][name];

    this.type1 = this.species.type1;
    this.type2 = this.species.type2;
    this.weight = this.species.weight;

    this.level = level || 100;
    this.gender = gender || this.species.gender;
    this.item = item;
    this.ability = ability || this.species.ability ||
        (this.species.abilities && this.species.abilities['0']);
    this.nature = nature || 'Serious';

    this.ivs = this.withDefault_(gen, ivs, 31);
    this.evs = this.withDefault_(gen, evs, gen >= 3 ? 0 : 252);
    this.boosts = this.withDefault_(gen, boosts, 0);

    if (gen < 3 && typeof this.ivs.spc !== 'undefined') {
      this.ivs.hp = DVToIV(getHPDV({
        atk: this.ivs.atk,
        def: this.ivs.def,
        spe: this.ivs.spe,
        spc: this.ivs.spc
      }));
    }

    this.stats = {} as StatsTable;
    for (const stat of STATS[gen]) {
      this.stats[stat] = this.calcStat_(gen, stat);
    }

    this.curHP = (curHP && curHP <= this.maxHP) ? curHP : this.maxHP;
    this.status = status || 'Healthy';
    this.toxicCounter = toxicCounter || 0;
  }

  get maxHP() {
    return this.stats.hp;
  }

  hasType(type: Type) {
    return this.type1 === type || this.type2 === type;
  }

  copy() {
    return new Pokemon(
        this.gen, this.name, this.level, this.gender, this.ability, this.item,
        this.nature, this.ivs, this.evs, this.boosts, this.curHP, this.status,
        this.toxicCounter);
  }

  calcStat_(gen: Generation, stat: Stat) {
    return calcStat(
        gen, stat, this.species.baseStats[stat]!, this.ivs[stat]!,
        this.evs[stat]!, this.level, this.nature);
  }

  withDefault_(
      gen: Generation, current: Partial<StatsTable>|undefined, val: number) {
    return extend(
        true, {}, {'hp': val, 'atk': val, 'def': val, 'spe': val},
        gen < 3 ? {'spc': val} : {'spa': val, 'spd': val}, current);
  }

  static getForme(
      gen: Generation, speciesName: string, item?: string, moveName?: string) {
    const species = POKEDEX[gen][speciesName];
    if (!species || !species.formes) {
      return speciesName;
    }

    let i = 0;
    if (item &&
            ((include(item, 'ite') && !include(item, 'ite Y')) ||
             (speciesName === 'Groudon' && item === 'Red Orb') ||
             (speciesName === 'Kyogre' && item === 'Blue Orb')) ||
        (moveName &&
             (speciesName === 'Meloetta' && moveName === 'Relic Song') ||
         (speciesName === 'Rayquaza' && moveName === 'Dragon Ascent'))) {
      i = 1;
    } else if (item && include(item, 'ite Y')) {
      i = 2;
    }

    return species.formes[i];
  }
}
