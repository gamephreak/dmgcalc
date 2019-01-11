import {Gender, POKEDEX_BY_ID} from './data/pokedex';
import {PokemonSet} from './data/sets';
import {Type} from './data/types';
import {Generation} from './gen';
import {Stat, StatsTable} from './stats';
import {toID} from './util';

type ImportedSet = PokemonSet&{
  name?: string, species: string,
  gender?: Gender,
  shiny?: boolean,
  happiness?: number,
  pokeball?: string,
  hpType?: string,
};
type Team = ImportedSet[];

const STAT_IDS: {[id: string]: Stat} = {
  'HP': 'hp',
  'hp': 'hp',
  'Atk': 'atk',
  'atk': 'atk',
  'Def': 'def',
  'def': 'def',
  'SpA': 'spa',
  'SAtk': 'spa',
  'SpAtk': 'spa',
  'spa': 'spa',
  'spc': 'spa',
  'Spc': 'spa',
  'SpD': 'spd',
  'SDef': 'spd',
  'SpDef': 'spd',
  'spd': 'spd',
  'Spe': 'spe',
  'Spd': 'spe',
  'spe': 'spe',
};

const HIDDEN_POWERS:
    {[type in Type]?: {ivs: Partial<StatsTable>, dvs: Partial<StatsTable>}} = {
      'Bug': {
        ivs: {'atk': 30, 'def': 30, 'spd': 30},
        dvs: {'atk': 13, 'def': 13},
      },
      'Dark': {
        ivs: {},
        dvs: {},
      },
      'Dragon': {
        ivs: {'atk': 30},
        dvs: {'def': 14},
      },
      'Electric': {
        ivs: {'spa': 30},
        dvs: {'atk': 14},
      },
      'Fighting': {
        ivs: {'def': 30, 'spa': 30, 'spd': 30, 'spe': 30},
        dvs: {'atk': 12, 'def': 12},
      },
      'Fire': {
        ivs: {'atk': 30, 'spa': 30, 'spe': 30},
        dvs: {'atk': 14, 'def': 12},
      },
      'Flying': {
        ivs: {'hp': 30, 'atk': 30, 'def': 30, 'spa': 30, 'spd': 30},
        dvs: {'atk': 12, 'def': 13},
      },
      'Ghost': {
        ivs: {'def': 30, 'spd': 30},
        dvs: {'atk': 13, 'def': 14},
      },
      'Grass': {
        ivs: {'atk': 30, 'spa': 30},
        dvs: {'atk': 14, 'def': 14},
      },
      'Ground': {
        ivs: {'spa': 30, 'spd': 30},
        dvs: {'atk': 12},
      },
      'Ice': {
        ivs: {'atk': 30, 'def': 30},
        dvs: {'def': 13},
      },
      'Poison': {
        ivs: {'def': 30, 'spa': 30, 'spd': 30},
        dvs: {'atk': 12, 'def': 14},
      },
      'Psychic': {
        ivs: {'atk': 30, 'spe': 30},
        dvs: {'def': 12},
      },
      'Rock': {
        ivs: {'def': 30, 'spd': 30, 'spe': 30},
        dvs: {'atk': 13, 'def': 12},
      },
      'Steel': {
        ivs: {'spd': 30},
        dvs: {'atk': 13},
      },
      'Water': {
        ivs: {'atk': 30, 'def': 30, 'spa': 30},
        dvs: {'atk': 14, 'def': 13},
      },
    };

// TODO handle packed teams
export function importTeam(gen: Generation, buffer: string) {
  const text = buffer.split('\n');
  const team: Team = [];
  let curSet: ImportedSet|undefined = undefined;

  for (let i = 0; i < text.length; i++) {
    let line = text[i].trim();
    if (line === '' || line === '---') {
      curSet = undefined;
    } else if (!curSet) {
      let item: string|undefined;
      let gender: Gender|undefined;
      let species: string|undefined;
      let name: string|undefined;

      const atIndex = line.lastIndexOf(' @ ');
      if (atIndex !== -1) {
        item = line.substr(atIndex + 3);
        if (toID(item) === 'noitem') item = undefined;
        line = line.substr(0, atIndex);
      }
      if (line.substr(line.length - 4) === ' (M)') {
        gender = 'male';
        line = line.substr(0, line.length - 4);
      }
      if (line.substr(line.length - 4) === ' (F)') {
        gender = 'female';
        line = line.substr(0, line.length - 4);
      }

      const parenIndex = line.lastIndexOf(' (');
      if (line.substr(line.length - 1) === ')' && parenIndex !== -1) {
        line = line.substr(0, line.length - 1);

        species = line.substr(parenIndex + 2);
        line = line.substr(0, parenIndex);
        name = line;
      } else {
        species = line;
      }

      const before = species;
      species = POKEDEX_BY_ID[gen][toID(species)].name;
      if (!species) {
        throw new Error(`Unknown species ${species}`);
      }

      curSet = {name, species, gender, item, moves: [], level: 100};
      team.push(curSet!);
    } else if (line.substr(0, 7) === 'Trait: ') {
      line = line.substr(7);
      curSet.ability = line;
    } else if (line.substr(0, 9) === 'Ability: ') {
      line = line.substr(9);
      curSet.ability = line;
    } else if (line === 'Shiny: Yes') {
      curSet.shiny = true;
    } else if (line.substr(0, 7) === 'Level: ') {
      line = line.substr(7);
      curSet.level = +line;
    } else if (line.substr(0, 11) === 'Happiness: ') {
      line = line.substr(11);
      curSet.happiness = +line;
    } else if (line.substr(0, 5) === 'EVs: ') {
      line = line.substr(5);
      const evLines = line.split('/');
      curSet.evs = {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0};
      for (let j = 0; j < evLines.length; j++) {
        const evLine = evLines[j].trim();
        const spaceIndex = evLine.indexOf(' ');
        if (spaceIndex === -1) continue;
        const statid = STAT_IDS[evLine.substr(spaceIndex + 1)];
        // tslint:disable-next-line:ban
        const statval = parseInt(evLine.substr(0, spaceIndex), 10);
        if (!statid) continue;
        curSet.evs[statid] = statval;
      }
    } else if (line.substr(0, 5) === 'IVs: ') {
      line = line.substr(5);
      const ivLines = line.split(' / ');
      curSet.ivs = {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31};
      for (let j = 0; j < ivLines.length; j++) {
        const ivLine = ivLines[j];
        const spaceIndex = ivLine.indexOf(' ');
        if (spaceIndex === -1) continue;
        const statid = STAT_IDS[ivLine.substr(spaceIndex + 1)];
        // tslint:disable-next-line:ban
        let statval = parseInt(ivLine.substr(0, spaceIndex), 10);
        if (!statid) continue;
        if (isNaN(statval)) statval = 31;
        curSet.ivs[statid] = statval;
      }
    } else if (line.match(/^[A-Za-z]+ (N|n)ature/)) {
      let natureIndex = line.indexOf(' Nature');
      if (natureIndex === -1) natureIndex = line.indexOf(' nature');
      if (natureIndex === -1) continue;
      line = line.substr(0, natureIndex);
      if (line !== 'undefined') curSet.nature = line;
    } else if (line.substr(0, 1) === '-' || line.substr(0, 1) === '~') {
      line = line.substr(1);
      if (line.substr(0, 1) === ' ') line = line.substr(1);
      if (!curSet.moves) curSet.moves = [];
      if (line.substr(0, 14) === 'Hidden Power [') {
        const hptype = line.substr(14, line.length - 15) as Type;
        line = 'Hidden Power ' + hptype;
        if (!curSet.ivs && HIDDEN_POWERS[hptype]) {
          curSet.ivs = {};
          let stat: Stat;
          // tslint:disable-next-line:forin
          for (stat in HIDDEN_POWERS[hptype]!.ivs) {
            curSet.ivs[stat] = HIDDEN_POWERS[hptype]!.ivs[stat];
          }
        }
      }
      if (line === 'Frustration') {
        curSet.happiness = 0;
      }
      curSet.moves.push(line);
    }
  }

  return team;
}
