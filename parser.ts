import {ABILITIES_BY_ID} from './data/abilities';
import {ALIASES} from './data/aliases';
import {ITEMS_BY_ID} from './data/items';
import {MOVES_BY_ID} from './data/moves';
import {NATURES, NATURES_BY_ID} from './data/natures';
import {POKEDEX_BY_ID} from './data/pokedex';
import {SETS} from './data/sets';
import {Field} from './field';
import {Move} from './move';
import {Pokemon} from './pokemon';
import * as stats from './stats';
import {include, toID} from './util';

const BOUNDS: {[key: string]: [number, number]} = {
  'level': [0, 100],
  'evs': [0, 252],
  'ivs': [0, 31],
  'dvs': [0, 15],
  'gen': [1, 7],
  'boosts': [-6, 6],
  'toxicCounter': [0, 15],
};

const FORMATS: Format[] = ['Singles', 'Doubles'];
const WEATHERS: Weather[] = [
  '', 'Sun', 'Rain', 'Sand', 'Hail', 'Harsh Sunshine', 'Heavy Rain',
  'Strong Winds'
];
const TERRAINS: Terrain[] = ['', 'Electric', 'Grassy', 'Misty', 'Psychic'];
const STATUSES: Status[] = [
  'Healthy', 'Poisoned', 'Badly Poisoned', 'Burned', 'Paralyzed', 'Asleep',
  'Frozen'
];

const FLAG = /^(?:--?)?(\w+)(?:=|:)([-0-9a-zA-Z_' ]+)$/i;
// clang-format off
const PHRASE = new RegExp(
    [
      /^(?:((?:\+|-)[1-6])?\s+)?/,
      /(?:(\d{1,3}(?:\+|-)?\s*(?:SpA|Atk))?\s+)?/,
      /(?:([A-Za-z][-0-9A-Za-z' ]+)(?:\s*@\s*([A-Za-z][-0-9A-Za-z' ]+))?)/,
      /\s*\[([-0-9A-Za-z' ]+)\]\s+vs\.?\s+/,
      /(?:((?:\+|-)[1-6])?\s+)?/,
      /(?:(\d{1,3}\s*HP)?\s*\/?\s*(\d{1,3}(?:\+|-)?\s*(?:SpD|Def))?\s+)?/,
      /(?:([A-Za-z][-0-9A-Za-z' ]+)(?:\s*@\s*([A-Za-z][-0-9A-Za-z' ]+))?)/,
      /\s*$/
    ].map(r => r.source).join(''), 'i');
// clang-format on

type Flags = {
  [id: string]: string
};

type Side = 'attacker'|'defender';
type ParsedMon = {
  name?: string; ivs: Partial<StatsTable>; evs: Partial<StatsTable>;
  boosts: Partial<StatsTable>;
  ability?: string;
  item?: string;
  level?: number;
  gender?: Gender;
  nature?: string;
  curHP?: number;
  status?: Status;
  toxicCounter?: number;
};

type Active =
    Partial<{useZ: boolean; isCrit: boolean; hits: number; times: number;}>;

type ParsedField = Partial<{
  format: Format; terrain: Terrain; weather: Weather; isGravity: boolean;
  isSR: boolean;
  spikes: number;
  isReflect: boolean;
  isLightScreen: boolean;
  isProtected: boolean;
  isAttackerSeeded: boolean;
  isDefenderSeeded: boolean;
  isForesight: boolean;
  isHelpingHand: boolean;
  isFriendGuard: boolean;
  isAuroraVeil: boolean;
}>;

type Parsed = {
  gen: Generation; attacker: ParsedMon; defender: ParsedMon; active: Active;
  move?: MoveInfo; field: ParsedField;
};

type Result = Readonly<{
  gen: Readonly<Generation>; move: Readonly<Move>; attacker: Readonly<Pokemon>;
  defender: Readonly<Pokemon>;
  field: Readonly<Field>;
}>;

export function parse(argv: string[]) {
  const phrase: string[] = [];
  const flags: Flags = {};

  for (const a of argv) {
    const m = a.match(FLAG);
    if (m) {
      flags[toID(m[1])] = m[2];
    } else {
      phrase.push(a);
    }
  }

  return finalize(fromFlagsAndPhrase(flags, phrase.join(' ')));
}

function fromFlagsAndPhrase(flags: Flags, phrase: string) {
  // tslint:disable-next-line:ban
  const gen = parseInt(flags['gen'], 10) || BOUNDS.gen[1];
  if (!gen || (gen < BOUNDS.gen[0] && gen > BOUNDS.gen[1])) {
    throw new Error(`Invalid generation: '${gen}'`);
  }

  let parsed: Parsed = {
    gen: gen as Generation,
    attacker: {'ivs': {}, 'evs': {}, 'boosts': {}},
    defender: {'ivs': {}, 'evs': {}, 'boosts': {}},
    active: {},
    field: {}
  };

  if (phrase) {
    parsed = parsePhrase(parsed, phrase, flags);
  }

  return fromFlags(parsed, flags);
}

function finalize(parsed: Parsed) {
  validateGen(parsed);

  // No logical defaults, so we must check that they've been set
  if (!parsed.move) {
    throw new Error('Move must be specified.');
  }
  if (!parsed.attacker.name) {
    throw new Error('Attacker Pokemon must be specified.');
  }
  if (!parsed.defender.name) {
    throw new Error('Defender Pokemon must be specified.');
  }

  if (parsed.gen >= 3) {
    fillFromSets(parsed.gen, parsed.attacker);
    fillFromSets(parsed.gen, parsed.defender);
    updateFromAbilityAndItem(parsed);
  }

  const move: Move = newMove(parsed.gen, parsed);

  const result: Result = {
    gen: parsed.gen,
    move,
    attacker: newPokemon(parsed.gen, parsed.attacker, move),
    defender: newPokemon(parsed.gen, parsed.defender),
    field: newField(parsed.field)
  };

  return result;
}

function parsePhrase(parsed: Parsed, s: string, flags: Flags) {
  const m = s.match(PHRASE);
  if (!m) {
    throw new Error(`Unable to parse: '${s}'`);
  }

  // +1
  // tslint:disable-next-line:ban
  let boost = parseInt(m[1], 10) || undefined;
  // We don't now which stat the boost applies to the this point - we need to
  // either see if any EVS are specified for an attacking stat or base it off
  // of the move being used.
  let assignedBoost = !boost;

  // 252- SpA
  if (m[2]) {
    // tslint:disable-next-line:ban
    const val = parseInt(m[2], 10);
    if (isNaN(val)) {
      throw new Error(`Could not parse number from: '${m[2]}'`);
    } else if (val < BOUNDS.evs[0] || val > BOUNDS.evs[1]) {
      throw new Error(`Value: '${m[2]}' out of bounds`);
    }

    const atk = m[2].toLowerCase().endsWith('atk');
    if (atk) {
      parsed.attacker.evs.atk = val;
      if (boost) {
        parsed.attacker.boosts.atk = boost;
      }
    } else {
      parsed.attacker.evs.spa = val;
      if (boost) {
        parsed.attacker.boosts.spa = boost;
      }
    }
    assignedBoost = true;

    let nature: string|undefined = flags[toID('attackerNature')];
    nature = nature && NATURES_BY_ID[toID(nature)];
    if (include(m[2], '-')) {
      if (nature) {
        if (NATURES[nature]![1] !== (atk ? 'atk' : 'spa')) {
          throw new Error(`Conflicting values given for attacker nature:\
              '${nature}' & '-'`);
        }
        parsed.attacker.nature = nature;
      } else {
        parsed.attacker.nature = atk ? 'Modest' : 'Adamant';
      }
    } else if (include(m[2], '+')) {
      if (nature) {
        if (NATURES[nature]![0] !== (atk ? 'atk' : 'spa')) {
          throw new Error(`Conflicting values given for attacker nature:\
              '${nature}' & '-'`);
        }
        parsed.attacker.nature = nature;
      } else {
        parsed.attacker.nature = atk ? 'Adamant' : 'Modest';
      }
    } else if (nature) {
      parsed.attacker.nature = nature;
    }
  }

  // Abomasnow
  parsed.attacker.name =
      verify(m[3].trim(), 'Pokemon', POKEDEX_BY_ID, parsed.gen).name;

  // Life Orb
  if (m[4]) {
    parsed.attacker.item = verify(m[4].trim(), 'item', ITEMS_BY_ID, parsed.gen);
  }

  // Blizzard
  parsed.move = verify(m[5].trim(), 'move', MOVES_BY_ID, parsed.gen);

  if (boost && !assignedBoost) {
    if (parsed.move!.category === 'Physical') {
      parsed.attacker.boosts.atk = boost;
    } else {
      // The move isn't guaranteed to Special at this point, but it doesn't
      // really matter because the boost won't matter for Status moves anyway.
      parsed.attacker.boosts.spa = boost;
    }
  }

  // +1
  // tslint:disable-next-line:ban
  boost = parseInt(m[6], 10) || undefined;
  assignedBoost = !boost;

  // 0 HP
  if (m[7]) {
    // tslint:disable-next-line:ban
    const val = parseInt(m[7], 10);
    if (isNaN(val)) {
      throw new Error(`Could not parse number from: '${m[7]}'`);
    } else if (val < BOUNDS.evs[0] || val > BOUNDS.evs[1]) {
      throw new Error(`Value: '${m[7]}' out of bounds`);
    }

    parsed.defender.evs.hp = val;
  }

  // 252- Def
  if (m[8]) {
    // tslint:disable-next-line:ban
    const val = parseInt(m[8], 10);
    if (isNaN(val)) {
      throw new Error(`Could not parse number from: '${m[8]}'`);
    } else if (val < BOUNDS.evs[0] || val > BOUNDS.evs[1]) {
      throw new Error(`Value: '${m[8]}' out of bounds.`);
    }

    const def = m[2].toLowerCase().endsWith('def');
    if (def) {
      parsed.defender.evs.def = val;
      if (boost) {
        parsed.defender.boosts.def = boost;
      }
    } else {
      parsed.defender.evs.spd = val;
      if (boost) {
        parsed.defender.boosts.spd = boost;
      }
    }
    assignedBoost = true;

    let nature = flags[toID('defenderNature')];
    nature = nature && NATURES_BY_ID[toID(nature)];
    if (include(m[8], '-')) {
      if (nature) {
        if (NATURES[nature][1] !== (def ? 'def' : 'spd')) {
          throw new Error(`Conflicting values given for defender nature:\
              '${nature}' & '-'`);
        }
        parsed.defender.nature = nature;
      } else {
        parsed.defender.nature = def ? 'Gentle' : 'Lax';
      }
    } else if (include(m[8], '+')) {
      if (nature) {
        if (NATURES[nature][0] !== (def ? 'def' : 'spd')) {
          throw new Error(`Conflicting values given for defender nature:\
              '${nature}' & '-'`);
        }
        parsed.defender.nature = nature;
      } else {
        parsed.defender.nature = def ? 'Lax' : 'Gentle';
      }
    } else if (nature) {
      parsed.defender.nature = nature;
    }
  }

  if (boost && !assignedBoost) {
    if (parsed.move!.category === 'Physical') {
      parsed.defender.boosts.def = boost;
    } else {
      parsed.defender.boosts.spd = boost;
    }
  }

  // Abomasnow
  parsed.defender.name =
      verify(m[9].trim(), 'Pokemon', POKEDEX_BY_ID, parsed.gen).name;

  // Life Orb
  if (m[10]) {
    parsed.defender.item =
        verify(m[10].trim(), 'item', ITEMS_BY_ID, parsed.gen);
  }

  return parsed;
}

function fromFlags(parsed: Parsed, flags: Flags) {
  fieldFromFlags(parsed, flags);

  pokemonFromFlags(parsed, flags, 'attacker');
  pokemonFromFlags(parsed, flags, 'defender');

  activeMoveFromFlags(parsed, flags);

  return parsed;
}

function fieldFromFlags(parsed: Parsed, flags: Flags) {
  const format = flags['format'];
  if (format) {
    if (!include(FORMATS, format)) {
      throw new Error(`Invalid format: '${format}'`);
    }
    parsed.field.format = format as Format;
  }

  const terrain = flags['terrain'];
  if (terrain) {
    if (!include(TERRAINS, terrain)) {
      throw new Error(`Invalid terrain: '${terrain}'`);
    }
    parsed.field.terrain = terrain as Terrain;
  }

  const weather = flags['weather'];
  if (weather) {
    if (!include(WEATHERS, weather)) {
      throw new Error(`Invalid weather: '${weather}'`);
    }
    parsed.field.weather = weather as Weather;
  }

  // tslint:disable-next-line:ban
  const spikes = parseInt(flags['spikes'], 10) || undefined;
  if (spikes) {
    const max = parsed.gen === 1 ? 0 : (parsed.gen === 2 ? 1 : 3);
    if (spikes < 0 || spikes > max) {
      throw new Error(`Invalid amount of spikes: '${spikes}`);
    } else {
      parsed.field.spikes = spikes;
    }
  }

  setField(parsed.field, 'Gravity', flags);
  setField(parsed.field, 'SR', flags);
  setField(parsed.field, 'Reflect', flags);
  setField(parsed.field, 'LightScreen', flags);
  setField(parsed.field, 'Protected', flags);
  setField(parsed.field, 'AttackerSeeded', flags);
  setField(parsed.field, 'DefenderSeeded', flags);
  setField(parsed.field, 'Foresight', flags);
  setField(parsed.field, 'HelpingHand', flags);
  setField(parsed.field, 'FriendGuard', flags);
  setField(parsed.field, 'AuroraVeil', flags);
}

function pokemonFromFlags(parsed: Parsed, flags: Flags, side: Side) {
  let val = flags[toID(side + 'Name')];
  if (val) {
    const name = verify(val, 'Pokemon', POKEDEX_BY_ID, parsed.gen);
    if (!conflicting('Pokemon', parsed[side].name, name)) {
      parsed[side].name = name;
    }
  }

  val = flags[toID(side + 'Item')];
  if (val) {
    const item = verify(val, 'item', ITEMS_BY_ID, parsed.gen);
    if (!conflicting('item', parsed[side].item, item)) {
      parsed[side].item = item;
    }
  }

  setIVs(parsed, flags, side);
  setEVs(parsed, flags, side);
  setBoosts(parsed, flags, side);

  // The following can't be set via phrase so there's no need to check conflicts
  val = flags[toID(side + 'Ability')];
  if (val) {
    parsed[side].ability = verify(val, 'ability', ABILITIES_BY_ID, parsed.gen);
  }
  val = flags[toID(side + 'Level')];
  if (val) {
    // tslint:disable-next-line:ban
    const level = parseInt(val, 10);
    if (isNaN(level)) {
      throw new Error(`Could not parse number from: '${val}'`);
    } else if (level < BOUNDS.level[0] || level > BOUNDS.level[1]) {
      throw new Error(`Level out of bounds for ${side}: '${level}'`);
    }
    parsed[side].level = level;
  }
  val = flags[toID(side + 'Status')];
  if (val && !include(STATUSES, val)) {
    throw new Error(`Invalid status for ${side}: '${val}'`);
  } else {
    parsed[side].status = val as Status;
  }
  val = flags[toID(side + 'ToxicCounter')];
  if (val) {
    // tslint:disable-next-line:ban
    const tc = parseInt(val, 10);
    if (isNaN(tc)) {
      throw new Error(`Could not parse number from: '${val}'`);
    } else if (tc < BOUNDS.toxicCounter[0] || tc > BOUNDS.toxicCounter[1]) {
      throw new Error(`Toxic counter out of bounds for ${side}: '${tc}'`);
    }
    parsed[side].toxicCounter = tc;
  }
  val = flags[toID(side + 'CurHP')];
  if (val) {
    // tslint:disable-next-line:ban
    const hp = parseInt(val, 10);
    if (isNaN(hp)) {
      throw new Error(`Could not parse number from: '${val}'`);
    }
    // NOTE: We don't validate this here, but if this value is greater than
    // the max computed HP the Pokemon constructor will simply set it to max.
    parsed[side].curHP = hp;
  }
  val = flags[toID(side + 'Gender')];
  if (val) {
    parsed[side].gender = val as Gender;
  }
}

function activeMoveFromFlags(parsed: Parsed, flags: Flags) {
  if (flags['move']) {
    const move = verify(flags['move'], 'move', MOVES_BY_ID, parsed.gen);
    if (parsed.move) {
      conflicting('move', parsed.move.name, move.name!);
    }
    parsed.move = move;
  }

  parsed.active.useZ =
      !!getFieldVariations(flags, ['Z', 'isZ', 'useZ', 'useZMove', 'isZMove']);
  if (parsed.active.useZ && parsed.gen < 7) {
    throw new Error(`Z Moves did not exist in gen ${parsed.gen}`);
  }
  parsed.active.isCrit = !!getFieldVariations(flags, ['Crit', 'isCrit']);
  parsed.active.hits =
      // tslint:disable-next-line:ban
      parseInt(
          getFieldVariations(
              flags, ['hits', 'numHits', 'moveHits', 'attackerMoveHits']),
          10) ||
      undefined;
  parsed.active.times =
      // tslint:disable-next-line:ban
      parseInt(
          getFieldVariations(
              flags,
              ['times', 'moveTimes', 'attackerMoveTimes', 'metronomeCount']),
          10) ||
      undefined;
}

function setField(field: ParsedField, key: string, flags: Flags) {
  const no = toID(key);
  const is = toID('is' + key);
  if (flags.hasOwnProperty(no) || flags.hasOwnProperty(is)) {
    field['is' + key as keyof ParsedField] = !!(flags[no] || flags[is]);
  }
}

function getFieldVariations(flags: Flags, variations: string[]) {
  for (const v of variations) {
    const k = toID(v);
    if (flags.hasOwnProperty(k)) {
      return flags[k];
    }
  }
  return '';
}

function setIVs(parsed: Parsed, flags: Flags, side: Side) {
  for (const stat of stats.STATS[parsed.gen]) {
    // tslint:disable-next-line:ban
    let val = parseInt(flags[toID(side + stat + 'IVs')], 10) || undefined;
    if (val) {
      if (val < BOUNDS.ivs[0] || val > BOUNDS.ivs[1]) {
        throw new Error(`${stat} IVs out of bounds for ${side}: '${val}'`);
      }
      conflicting(stat + ' IVs', parsed[side].ivs[stat], val);
      parsed[side].ivs[stat] = val;
    }

    // tslint:disable-next-line:ban
    val = parseInt(flags[toID(side + stat + 'DVs')], 10) || undefined;
    if (val) {
      if (parsed.gen >= 3) {
        throw new Error('DVs only exist in gens 1 & 2');
      }

      if (val < BOUNDS.dvs[0] || val > BOUNDS.dvs[1]) {
        throw new Error(`${stat} DVs out of bounds for ${side}: '${val}'`);
      }

      const iv = stats.DVToIV(val);
      conflicting(stat + ' IVs', parsed[side].ivs[stat], iv);
      parsed[side].ivs[stat] = iv;
      if (stat === 'spc') {
        // A single Spc DV determines both SpA and SpD.
        parsed[side].ivs.spa = iv;
        parsed[side].ivs.spd = iv;
      }
    }
  }

  // https://www.smogon.com/ingame/guides/rby_gsc_stats
  if (parsed.gen < 3) {
    const ivs = parsed[side].ivs;

    if (typeof ivs.hp !== 'undefined') {
      const actual = stats.IVToDV(ivs.hp);
      const expected = stats.getHPDV({
        'atk': getDV(ivs, 'atk'),
        'def': getDV(ivs, 'def'),
        'spc': getDV(ivs, 'spc'),
        'spe': getDV(ivs, 'spe')
      });
      if (actual !== expected) {
        throw new Error(`Computed HP DV of '${expected} does not match\
            provided HP DV of '${actual}'`);
      }
    }

    if (ivs.spa !== ivs.spd) {
      throw new Error(`SpA and SpD IVs are both determined by a single Spc IV\
          and thus must be the same value before gen 3`);
    }

    // BUG: Gender WRT gender ratio also matters for Atk DVs, but since our
    // Pokedex doesn't contain gender ratio information we don't validate it
  }
}

function setEVs(parsed: Parsed, flags: Flags, side: Side) {
  for (const stat of stats.STATS[parsed.gen]) {
    // tslint:disable-next-line:ban
    const val = parseInt(flags[toID(side + stat + 'EVs')], 10) || undefined;
    if (val) {
      if (val < BOUNDS.evs[0] || val > BOUNDS.evs[1]) {
        throw new Error(`${stat} EVs out of bounds for ${side}: '${val}'`);
      }
      conflicting(stat + ' EVs', parsed[side].evs[stat], val);
      parsed[side].evs[stat] = val;
    }
  }
}

function setBoosts(parsed: Parsed, flags: Flags, side: Side) {
  for (const stat of stats.STATS[parsed.gen].slice(1)) {  // can't boost HP
    // tslint:disable-next-line:ban
    const val = parseInt(flags[toID(side + stat + 'Boosts')], 10) || undefined;
    if (val) {
      if (val < BOUNDS.boosts[0] || val > BOUNDS.boosts[1]) {
        throw new Error(`${stat} boosts out of bounds for ${side}: '${val}'`);
      }
      conflicting(stat + ' boosts', parsed[side].boosts[stat], val);
      parsed[side].boosts[stat] = val;
    }
  }
}

function setFlagVariations(flags: Flags, variations: string[]) {
  for (const variation of variations) {
    const k = toID(variation);
    if (flags.hasOwnProperty(k)) {
      return flags[k];
    }
  }
  return '';
}

function fillFromSets(gen: Generation, pokemon: ParsedMon) {
  const sets = SETS[gen][pokemon.name!];
  const set = sets && sets[Object.keys(sets)[0]];

  if (!pokemon.ability) {
    pokemon.ability = set ? set.ability : '';
  }

  if (!pokemon.item) {
    pokemon.item = set ? set.item : '';
  }

  if (!pokemon.nature && !Object.keys(pokemon.ivs).length &&
      !Object.keys(pokemon.evs).length) {
    if (set) {
      pokemon.nature = set.nature;
      pokemon.ivs = set.ivs || pokemon.ivs;
      pokemon.evs = set.evs || pokemon.evs;
    }
  }
}

function updateFromAbilityAndItem(parsed: Parsed) {
  parsed.attacker.status =
      parsed.attacker.status || statusFromItem(parsed.attacker.item);
  parsed.defender.status =
      parsed.defender.status || statusFromItem(parsed.defender.item);

  // BUG: Which weather or terrain is actually active should take the defender's
  // ability and both Pokemon's speed into account.
  parsed.field.weather =
      parsed.field.weather || weatherFromAbility(parsed.attacker.ability);
  parsed.field.terrain =
      parsed.field.terrain || terrainFromAbility(parsed.attacker.ability);
}

function statusFromItem(item: string|undefined) {
  if (item === 'Flame Orb') {
    return 'Burned';
  } else if (item === 'Toxic Orb') {
    return 'Badly Poisoned';
  } else {
    return 'Healthy';
  }
}

function weatherFromAbility(ability: string|undefined) {
  switch (ability) {
    case 'Drought':
      return 'Sun';
    case 'Drizzle':
      return 'Rain';
    case 'Sand Stream':
      return 'Sand';
    case 'Snow Warning':
      return 'Hail';
    case 'Desolate Land':
      return 'Harsh Sunshine';
    case 'Primordial Sea':
      return 'Heavy Rain';
    case 'Delta Stream':
      return 'Strong Winds';
    default:
      return '';
  }
}

function terrainFromAbility(ability: string|undefined) {
  switch (ability) {
    case 'Electric Surge':
      return 'Electric';
    case 'Grassy Surge':
      return 'Grassy';
    case 'Misty Surge':
      return 'Misty';
    case 'Psychic Surge':
      return 'Psychic';
    default:
      return '';
  }
}

function validateGen(parsed: Parsed) {
  const NO_FIELD = [
    'spikes', 'isProtected', 'isForesight',  // Gen 2
    'isHelpingHand',                         // Gen 3
    'isGravity', 'isSR',                     // Gen 4
    'isFriendGuard',                         // Gen 5
    'isAuroraVeil'                           // Gen 7
  ];

  const gen = parsed.gen;
  switch (gen) {
    case 1: {
      const invalid = ['item', 'ability', 'nature'];
      ensureNone(gen, 'attacker', parsed.attacker, invalid);
      ensureNone(gen, 'defender', parsed.defender, invalid);
      ensureNone(gen, 'field', parsed.field, NO_FIELD);
      break;
    }
    case 2: {
      const invalid = ['ability', 'nature'];
      ensureNone(gen, 'attacker', parsed.attacker, invalid);
      ensureNone(gen, 'defender', parsed.defender, invalid);
      ensureNone(gen, 'field', parsed.field, NO_FIELD.slice(3));
      break;
    }
    case 3:
      ensureNone(gen, 'field', parsed.field, NO_FIELD.slice(4));
      break;
    case 4:
      ensureNone(gen, 'field', parsed.field, NO_FIELD.slice(6));
      break;
    case 5:
    case 6:
      ensureNone(gen, 'field', parsed.field, NO_FIELD.slice(7));
      break;
    default:
      // nothing is invalid
  }

  if (gen < 3 && parsed.field.format && parsed.field.format !== 'Singles') {
    throw new Error(`'Singles' is the only valid format in gen ${gen}`);
  }

  if (gen < 6 && parsed.field.terrain) {
    throw new Error(
        `'${parsed.field.terrain}' does not exist as terrain in gen ${gen}`);
  }

  if (parsed.field.weather) {
    if ((gen === 1) || (gen < 3 && parsed.field.weather === 'Hail') ||
        (gen < 6 &&
         include(
             ['Harsh Sunshine', 'Heavy Rain', 'Strong Winds'],
             parsed.field.weather))) {
      throw new Error(
          `'${parsed.field.weather}' does not exist as weather in gen ${gen}`);
    }
  }
}

function ensureNone(gen: Generation, type: string, obj: {}, keys: string[]) {
  const bad = [];
  for (const k of keys) {
    if (obj.hasOwnProperty(k)) {
      bad.push(k);
    }
  }

  if (bad.length) {
    throw new Error(
        `Properties not valid on ${type} in gen ${gen}: ${bad.join()}`);
  }
}

function newPokemon(gen: Generation, p: ParsedMon, move?: MoveInfo) {
  const name = Pokemon.getForme(gen, p.name!, p.item, move ? move.name! : '');
  return new Pokemon(
      gen, name, p.level, p.gender, p.ability, p.item, p.nature, p.ivs, p.evs,
      p.boosts, p.curHP, p.status, p.toxicCounter);
}

function newField(f: ParsedField) {
  return new Field(
      f.format, f.terrain, f.weather, f.isGravity, f.isSR, f.spikes,
      f.isReflect, f.isLightScreen, f.isProtected, f.isAttackerSeeded,
      f.isDefenderSeeded, f.isForesight, f.isHelpingHand, f.isFriendGuard,
      f.isAuroraVeil);
}

function newMove(gen: Generation, p: Parsed) {
  return new Move(
      p.gen, p.move!, p.attacker.ability || '', p.attacker.item || '',
      p.active.useZ, p.active.isCrit, p.active.hits, p.active.times);
}

function getDV(ivs: Partial<StatsTable>, stat: Stat) {
  return stats.IVToDV(ivs.hasOwnProperty(stat) ? ivs[stat]! : BOUNDS.ivs[1]);
}

function verify(
    // tslint:disable-next-line:no-any
    s: string, type: string, table: Array<{[x: string]: any}>,
    gen: Generation) {
  let id = toID(s);
  if (ALIASES[id]) {
    id = toID(ALIASES[id]);
  }

  const val = table[gen][id];
  if (!val) {
    throw new Error(`Could not locate gen ${gen} ${type}: '${s}'`);
  }

  // tslint:disable-next-line:no-any
  return val as any;
}

// tslint:disable-next-line:no-any
function conflicting(type: string, a: any, b: any) {
  if (a !== b) {
    throw new Error(`Conflicting values given for ${type}: '${a}' & '${b}'`);
  }
  return false;
}
