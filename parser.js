'use strict'

const $ = {};
$.extend = require('jquery-extend');
const util = require('./util');
const toID = util.toID;
const include = require('./util').include;

const Pokemon = require('./pokemon').Pokemon;
const Field = require('./field').Field;
const Move = require('./move').Move;
const POKEDEX_BY_ID = require('./data/pokedex').POKEDEX_BY_ID;
const ABILITIES_BY_ID = require('./data/abilities').ABILITIES_BY_ID;
const natures = require('./data/natures');
const NATURES = natures.NATURES;
const NATURES_BY_ID = natures.NATURES_BY_ID;
const ITEMS_BY_ID = require('./data/items').ITEMS_BY_ID;
const MOVES_BY_ID = require('./data/moves').MOVES_BY_ID;
const SETS = require('./data/sets').SETS;
const STATS = require('./stats').STATS;

const BOUNDS = {
  'level': [0, 100],
  'evs': [0, 252],
  'ivs': [0, 31],
  'dvs': [0, 15],
  'gen': [1, 7],
  'boosts': [-6, 6],
  'toxicCounter': [0, 15],
};

const FORMATS = ['Singles', 'Doubles'];
const WEATHER = [
  'None', 'Sun', 'Rain', 'Sand', 'Hail',
  'Harsh Sunshine', 'Heavy Rain', 'Strong Winds'
];
const TERRAIN = ['Electric', 'Grassy', 'Misty', 'Psychic'];
const STATUSES = [
  'Healthy', 'Poisoned', 'Badly Poisoned',
  'Burned', 'Paralyzed', 'Asleep', 'Frozen'
];

const FLAG = /^(?:--?)?(\w+)(?:=|:)([-0-9a-zA-Z_' ]+)$/i;
const PHRASE = new RegExp([
  /^(?:((?:\+|-)[1-6])?\s+)?/,
  /(?:(\d{1,3}(?:\+|-)?\s*(?:SpA|Atk))?\s+)?/,
  /(?:([A-Za-z][-0-9A-Za-z' ]+)(?:\s*@\s*([A-Za-z][-0-9A-Za-z' ]+))?)/,
  /\s*\[([-0-9A-Za-z' ]+)\]\s+vs\.?\s+/,
  /(?:((?:\+|-)[1-6])?\s+)?/,
  /(?:(\d{1,3}\s*HP)?\s*\/?\s*(\d{1,3}(?:\+|-)?\s*(?:SpD|Def))?\s+)?/,
  /(?:([A-Za-z][-0-9A-Za-z' ]+)(?:\s*@\s*([A-Za-z][-0-9A-Za-z' ]+))?)/,
  /\s*$/
].map(r => r.source).join(''), 'i');

function parse(argv) {
  let phrase = [];
  let flags = {};

  for (let a of argv) {
    let m = a.match(FLAG);
    if (m) {
      flags[toID(m[1])] = m[2];
    } else {
      phrase.push(a);
    }
  }

  return finalize(fromFlagsAndPhrase(flags, phrase.join(' ')));
}

function fromFlagsAndPhrase(flags, phrase) {
  let parsed = {};

  let gen = parseInt(flags['gen']) || BOUNDS.gen[1];
  if (!gen || (gen < BOUNDS.gen[0] && gen > BOUNDS.gen[1])) {
    throw new Error(`Invalid generation: '${gen}'`);
  }

  parsed.gen = gen;
  parsed.attacker = {'ivs': {}, 'evs': {}, 'boosts': {}};
  parsed.defender = {'ivs': {}, 'evs': {}, 'boosts': {}};
  parsed.active = {};
  parsed.field = {};

  if (phrase) {
    parsed = parsePhrase(parsed, phrase, flags);
  }

  return fromFlags(parsed, flags);
}

function finalize(parsed) {
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
    fillAbilityAndSpread(parsed.gen, parsed.attacker);
    fillAbilityAndSpread(parsed.gen, parsed.defender);
    updateFromAbilityAndItem(parsed);
  }

  let result = {};
  result.gen = parsed.gen;
  result.move = newMove(parsed.gen, parsed);
  result.attacker = newPokemon(parsed.gen, parsed.attacker, result.move);
  result.defender = newPokemon(parsed.gen, parsed.defender);
  result.field = newField(parsed.field);

  return result;
}

function parsePhrase(parsed, s, flags) {
  let m = s.match(PHRASE);
  if (!m) {
    throw new Error(`Unable to parse: '${s}'`);
  }

  // +1
  let boost = parseInt(m[1]) || undefined;
  // We don't now which stat the boost applies to the this point - we need to
  // either see if any EVS are specified for an attacking stat or base it off
  // of the move being used.
  let assignedBoost = !boost;

  // 252- SpA
  if (m[2]) {
    let val = parseInt(m[2]);
    if (isNaN(val)) {
      throw new Error(`Could not parse number from: '${m[2]}'`);
    } else if (val < BOUNDS.evs || val > BOUNDS.evs) {
      throw new Error(`Value: '${m[2]}' out of bounds`);
    }

    let atk = m[2].toLowerCase().endsWith('atk');
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

    let nature = flags[toID('attackerNature')];
    nature = nature && NATURES_BY_ID[toID(nature)];
    if (include(m[2], '-')) {
      if (nature) {
        if (NATURES[nature][1] != (atk ? 'atk' : 'spa')) {
          throw new Error(`Conflicting values given for attacker nature:\
              '${nature}' & '-'`);
        }
        parsed.attacker.nature = nature;
      } else {
        parsed.attacker.nature = atk ? 'Modest' : 'Adamant';
      }
    } else if (include(m[2], '+')) {
      if (nature) {
        if (NATURES[nature][0] != (atk ? 'atk' : 'spa')) {
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
  parsed.attacker.name = verify(
      m[3].trim(), 'Pokemon', POKEDEX_BY_ID, parsed.gen).name;

  // Life Orb
  if (m[4]) {
    parsed.attacker.item = verify(
        m[4].trim(), 'item', ITEMS_BY_ID, parsed.gen);
  }

  // Blizzard
  parsed.move = verify(m[5].trim(), 'move', MOVES_BY_ID, parsed.gen);

  if (boost && !assignedBoost) {
    if (parse.move.category === 'Physical') {
      parsed.attacker.boosts.atk = boost;
    } else {
      // The move isn't guaranteed to Special at this point, but it doesn't
      // really matter because the boost won't matter for Status moves anyway.
      parsed.attacker.boosts.spa = boost;
    }
  }

  // +1
  boost = parseInt(m[6]) || undefined;
  assignedBoost = !boost;

  // 0 HP
  if (m[7]) {
    let val = parseInt(m[7]);
    if (isNaN(val)) {
      throw new Error(`Could not parse number from: '{m[7]}'`);
    } else if (val < BOUNDS.evs || val > BOUNDS.evs) {
      throw new Error(`Value: '${m[7]}' out of bounds`);
    }

    parsed.defender.evs.hp = val;
  }

  // 252- Def
  if (m[8]) {
    let val = parseInt(m[8]);
    if (isNaN(val)) {
      throw new Error(`Could not parse number from: '${m[8]}'`);
    } else if (val < BOUNDS.evs || val > BOUNDS.evs) {
      throw new Error(`Value: '${m[8]}' out of bounds.`);
    }

    let def = m[2].toLowerCase().endsWith('def');
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
        if (NATURES[nature][1] != (def ? 'def' : 'spd')) {
          throw new Error(`Conflicting values given for defender nature:\
              '${nature}' & '-'`);
        }
        parsed.defender.nature = nature;
      } else {
        parsed.defender.nature = def ? 'Gentle' : 'Lax';
      }
    } else if (include(m[8], '+')) {
      if (nature) {
        if (NATURES[nature][0] != (def ? 'def' : 'spd')) {
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
    if (parse.move.category === 'Physical') {
      parsed.defender.boosts.def = boost;
    } else {
      parsed.defender.boosts.spd = boost;
    }
  }

  // Abomasnow
  parsed.defender.name = verify(
      m[9].trim(), 'Pokemon', POKEDEX_BY_ID, parsed.gen).name;

  return parsed;
}

function fromFlags(parsed, flags) {
  fieldFromFlags(parsed, flags);

  pokemonFromFlags(parsed, flags, 'attacker');
  pokemonFromFlags(parsed, flags, 'defender');

  activeMoveFromFlags(parsed, flags);

  return parsed;
}

function fieldFromFlags(parsed, flags) {
  let format = flags['format'];
  if (format) {
    if (!include(FORMATS, format)) {
      throw new Error(`Invalid format: '${format}'`);
    }
    parsed.field.format = format;
  }

  let terrain = flags['terrain'];
  if (terrain) {
    if (!include(TERRAINS, terrain)) {
      throw new Error(`Invalid terrain: '${terrain}'`);
    }
    parsed.field.terrain = terrain;
  }

  let weather = flags['weather'];
  if (weather) {
    if (!include(WEATHERS, weather)) {
      throw new Error(`Invalid weather: '${weather}'`);
    }
    parsed.field.weather = weather;
  }

  let spikes = parseInt(flags['spikes']) || undefined;
  if (spikes) {
    let max = parsed.gen === 1 ? 0 : (parsed.gen === 2 ? 1 : 3);
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

function pokemonFromFlags(parsed, flags, side) {
  let val = flags[toID(side + 'Name')];
  if (val) {
    let name = verify(val, 'Pokemon', POKEDEX_BY_ID, parsed.gen);
    if (!conflicting('Pokemon', parsed[side].name, name)) {
      parsed[side].name = name;
    }
  }

  val = flags[toID(side + 'Item')];
  if (val) {
    let item = verify(val, 'item', ITEMS_BY_ID, parsed.gen);
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
    parsed[side].ability = verify(
        val, 'ability', ABILITIES_BY_ID, parsed.gen);
  }
  val = flags[toID(side + 'Level')];
  if (val) {
    if (val < BOUNDS.level[0] || val > BOUNDS.level[1]) {
      throw new Error(`Level out of bounds for ${side}: '${val}'`);
    }
    parsed[side].level = val;
  }
  val = flags[toID(side + 'Status')];
  if (val && !include(STAUSES, val)) {
    throw new Error(`Invalid status for ${side}: '${val}'`);
  } else {
    parsed[side].status = val;
  }
  val = flags[toID(side + 'ToxicCounter')];
  if (val) {
    if (val < BOUNDS.toxicCounter[0] || val > BOUNDS.toxicCounter[1]) {
      throw new Error(`Toxic counter out of bounds for ${side}: '${val}'`);
    }
    parsed[side].toxicCounter = val;
  }
  val = flags[toID(side + 'CurHP')];
  if (val) {
    // NOTE: We don't validate this here, but if this value is greater than
    // the max computed HP the Pokemon constructor will simply set it to max.
    parsed[side].curHP = val;
  }
  val = flags[toID(side + 'Gender')];
  if (val) {
    parsed[side].gender = val;
  }
}

function activeMoveFromFlags(parsed, flags) {
  if (flags['move']) {
    let move = verify(flags['move'], 'move', MOVES_BY_ID, parsed.gen);
    if (parsed.move) {
      conflicting('move', parsed.move.name, move.name);
    }
    parsed.move = move;
  }

  parsed.active.useZ = getFieldVariations(
      flags, ['Z', 'isZ', 'useZ', 'useZMove', 'isZMove']);
  if (parsed.active.useZ && gen < 7) {
    throw new Error(`Z Moves did not exist in gen ${gen}`);
  }
  parsed.active.isCrit = getFieldVariations(flags, ['Crit', 'isCrit']);
  parsed.active.hits = parseInt(getFieldVariations(
      flags, ['hits', 'numHits', 'moveHits', 'attackerMoveHits'])) || undefined;
  parsed.active.times = parseInt(getFieldVariations(
      flags, ['times', 'moveTimes', 'attackerMoveTimes', 'metronomeCount'])) ||
      undefined;
}

function setField(field, key, flags) {
  let no = toID(key);
  let is = toID('is' + key);
  if (flags.hasOwnProperty(no) || flags.hasOwnProperty(is)) {
    field['is' + key] = !!(flags[no] || flags[is]);
  }
}

function getFieldVariations(flags, variations) {
  for (let v of variations) {
    let k = toID(v);
    if (flags.hasOwnProperty(k)) {
      return flags[k];
    }
  }
}

function setIVs(parsed, flags, side) {
  for (let stat of STATS[parsed.gen]) {
    let val = parseInt(flags[toID(side + stat + 'IVs')]) || undefined;
    if (val) {
      if (val < BOUNDS.ivs[0] || val > BOUNDS.ivs[1]) {
        throw new Error(`${stat} IVs out of bounds for ${side}: '${val}'`);
      }
      conflicting(stat + ' IVs', parsed[side].ivs[stat], val);
      parsed[side].ivs[stat] = val;
    }

    val = parseInt(flags[toID(side + stat + 'DVs')]) || undefined;
    if (val) {
      if (parsed.gen >= 3) {
        throw new Error('DVs only exist in gens 1 & 2');
      }

      if (val < BOUNDS.dvs[0] || val > BOUNDS.dvs[1]) {
        throw new Error(`${stat} DVs out of bounds for ${side}: '${val}'`);
      }

      let iv = stats.DVToIV(val);
      conflicting(stat + ' IVs', parsed[side].ivs[stat], iv);
      parsed[side].ivs[stat] = iv;
      if (stat == 'spc') {
        // A single Spc DV determines both SpA and SpD.
        parsed[side].ivs.spa = iv;
        parsed[side].ivs.spd = dv;
      }
    }
  }

  // https://www.smogon.com/ingame/guides/rby_gsc_stats
  if (parsed.gen < 3) {
    let ivs = parsed[side].ivs;

    if (ivs.hasOwnProperty('hp')) {
      let actual = stats.IVToDV(ivs.hp);
      let expected = stats.getHPDV({
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

    if (ivs.spa != ivs.spd) {
      throw new Error(`SpA and SpD IVs are both determined by a single Spc IV\
          and thus must be the same value before gen 3`);
    }

    // BUG: Gender WRT gender ratio also matters for Atk DVs, but since our
    // Pokedex doesn't contain gender ratio information we don't validate it
  }
}

function setEVs(parsed, flags, side) {
  for (let stat of STATS[parsed.gen]) {
    let val = parseInt(flags[toID(side + stat + 'EVs')]) || undefined;
    if (val) {
      if (val < BOUNDS.evs[0] || val > BOUNDS.evs[1]) {
        throw new Error(`${stat} EVs out of bounds for ${side}: '${val}'`);
      }
      conflicting(stat + ' EVs', parsed[side].evs[stat], val);
      parsed[side].evs[stat] = val;
    }
  }
}

function setBoosts(parsed, flags, side) {
  for (let stat of STATS[parsed.gen].slice(1)) { // can't boost HP
    let val = parseInt(flags[toID(side + stat + 'Boosts')]) || undefined;
    if (val) {
      if (val < BOUNDS.boosts[0] || val > BOUNDS.boosts[1]) {
        throw new Error(`${stat} boosts out of bounds for ${side}: '${val}'`);
      }
      conflicting(stat + ' boosts', parsed[side].boosts[stat], val);
      parsed[side].boosts[stat] = val;
    }
  }
}

function setFlagVariations(flags, variations) {
  for (let variation of variations) {
    let k = toID(variation);
    if (flags.hasOwnProperty(k)) {
      return flags[k];
    }
  }
}

function fillAbilityAndSpread(gen, pokemon) {
  let set = SETS[gen][pokemon.name];
  set = set && Object.values(set)[0];

  if (!pokemon.ability) {
    pokemon.ability = set ? set.ability : '';
  }

  if (!pokemon.nature &&
    !Object.values(pokemon.ivs).length &&
    !Object.values(pokemon.evs).length) {
    if (set) {
      pokemon.nature = set.nature;
      pokemon.ivs = set.ivs || pokemon.ivs;
      pokemon.evs = set.evs || pokemon.evs;
    }
  }
}

function updateFromAbilityAndItem(parsed) {
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

function statusFromItem(item) {
  if (item === 'Flame Orb') {
    return 'Burned';
  } else if (item === 'Toxic Orb') {
    return 'Badly Poisoned';
  } else {
    return 'Healthy';
  }
}

function weatherFromAbility(ability) {
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

function terrainFromAbility(ability) {
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

function validateGen(parsed) {
  const NO_FIELD = [
      'spikes', 'isProtected', 'isForesight', // Gen 2
      'isHelpingHand', // Gen 3
      'isGravity', 'isSR',  // Gen 4
      'isFriendGuard', // Gen 5
      'isAuroraVeil' // Gen 7
  ];

  let gen = parsed.gen;
  switch (gen) {
    case 1:
      let invalid = ['item', 'ability', 'nature'];
      ensureNone(gen, 'attacker', parsed.attacker, invalid);
      ensureNone(gen, 'defender', parsed.defender, invalid);
      ensureNone(gen, 'field', parsed.field, NO_FIELD);
      break;
    case 2:
      invalid = ['ability', 'nature'];
      ensureNone(gen, 'attacker', parsed.attacker, invalid);
      ensureNone(gen, 'defender', parsed.defender, invalid);
      ensureNone(gen, 'field', parsed.field, NO_FIELD.slice(3));
      break;
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
  }

  if (gen < 3 && parsed.format && parsed.format != 'Singles') {
    throw new Error(`'Singles' is the only valid format in gen ${gen}`);
  }

  if (gen < 6 && parsed.terrain) {
    throw new Error(
        `'${parsed.terrain}' does not exist as terrain in gen ${gen}`);
  }

  if (parsed.weather && parsed.weather != 'None') {

    if ((gen === 1) ||
        (gen < 3 && parsed.weather === 'Hail') ||
        (gen < 6 && include(['Harsh Sunshine', 'Heavy Rain', 'Strong Winds'],
            parsed.weather))) {
      throw new Error(
          `'${parsed.weather}' does not exist as weather in gen ${gen}`);
    }
  }
}

function ensureNone(gen, type, obj, keys) {
  let bad = [];
  for (let k of keys) {
    if (obj.hasOwnProperty(k)) {
      bad.push(k);
    }
  }

  if (bad.length) {
    throw new Error(
        `Properties not valid on ${type} in gen ${gen}: ${bad.join()}`);
  }
}

function newPokemon(gen, p, move) {
  let name = Pokemon.getForme(gen, p.name, p.item, move ? move.name : '');
  return new Pokemon(
    gen, name, p.level, p.gender, p.ability, p.item, p.nature,
    p.ivs, p.evs, p.boosts, p.curHP, p.status, p.toxicCounter);
}

function newField(f) {
  return new Field(
    f.format, f.terrain, f.weather, f.isGravity, f.isSR, f.spikes,
    f.isReflect, f.isLightScreen, f.isProtected, f.isAttackerSeeded,
    f.isDefenderSeeded, f.isForesign, f.isHelpingHand, f.isFriendGuard,
    f.isAuroraVeil);
}

function newMove(gen, p) {
  return new Move(
      p.gen, p.move, p.attacker.ability, p.attacker.item,
      p.active.useZ, p.active.isCrit, p.active.hits, p.active.times);
}

function getDV(ivs, stat) {
  return stats.IVToDV(ivs.hasOwnProperty(stat)? ivs[stat] : BOUNDS.ivs[1]);
}

function verify(s, type, table, gen) {
  let val = table[gen][toID(s)];
  if (!val) {
    throw new Error(`Could not locate gen ${gen} ${type}: '${s}'`);
  }
  return val;
}

function conflicting(type, a, b) {
  if (a != b) {
    throw new Error(`Conflicting values given for ${type}: '${a}' & '${b}'`);
  }
  return false;
}

exports.parse = parse;
