'use strict';

const util = require('../util');
const include = util.include;

const RBY = [];

const GSC = [
  'Berry',
  'Berry Juice',
  'Black Belt',
  'Black Glasses',
  'Bright Powder',
  'Charcoal',
  'Dragon Fang',
  'Focus Band',
  'Gold Berry',
  'Hard Stone',
  'King\'s Rock',
  'Leftovers',
  'Light Ball',
  'Magnet',
  'Metal Coat',
  'Metal Powder',
  'Miracle Seed',
  'Mystic Water',
  'Never-Melt Ice',
  'Pink Bow',
  'Poison Barb',
  'Polkadot Bow',
  'Sharp Beak',
  'Silver Powder',
  'Soft Sand',
  'Soothe Bell',
  'Spell Tag',
  'Stick',
  'Thick Club',
  'Twisted Spoon'
];

const RSE = GSC.concat([
  'Aguav Berry',
  'Apicot Berry',
  'Aspear Berry',
  'Belue Berry',
  'Bluk Berry',
  'Cheri Berry',
  'Chesto Berry',
  'Choice Band',
  'Cornn Berry',
  'Deep Sea Scale',
  'Deep Sea Tooth',
  'Durin Berry',
  'Enigma Berry',
  'Figy Berry',
  'Ganlon Berry',
  'Grepa Berry',
  'Hondew Berry',
  'Iapapa Berry',
  'Kelpsy Berry',
  'Lansat Berry',
  'Leppa Berry',
  'Liechi Berry',
  'Mago Berry',
  'Magost Berry',
  'Mental Herb',
  'Nanab Berry',
  'Nomel Berry',
  'Oran Berry',
  'Pamtre Berry',
  'Pecha Berry',
  'Persim Berry',
  'Petaya Berry',
  'Pinap Berry',
  'Pomeg Berry',
  'Qualot Berry',
  'Rabuta Berry',
  'Rawst Berry',
  'Razz Berry',
  'Salac Berry',
  'Sea Incense',
  'Silk Scarf',
  'Sitrus Berry',
  'Soul Dew',
  'Spelon Berry',
  'Starf Berry',
  'Tamato Berry',
  'Watmel Berry',
  'Wepear Berry',
  'White Herb',
  'Wiki Berry'
]);

RSE.splice(RSE.indexOf('Berry'), 1);
RSE.splice(RSE.indexOf('Gold Berry'), 1);
RSE.splice(RSE.indexOf('Pink Bow'), 1);
RSE.splice(RSE.indexOf('Polkadot Bow'), 1);

const DPP = RSE.concat([
  'Adamant Orb',
  'Babiri Berry',
  'Black Sludge',
  'Big Root',
  'Charti Berry',
  'Chilan Berry',
  'Choice Scarf',
  'Choice Specs',
  'Chople Berry',
  'Coba Berry',
  'Colbur Berry',
  'Custap Berry',
  'Destiny Knot',
  'Draco Plate',
  'Dread Plate',
  'Earth Plate',
  'Expert Belt',
  'Fist Plate',
  'Flame Orb',
  'Flame Plate',
  'Focus Sash',
  'Grip Claw',
  'Griseous Orb',
  'Haban Berry',
  'Icicle Plate',
  'Insect Plate',
  'Iron Ball',
  'Iron Plate',
  'Jaboca Berry',
  'Kasib Berry',
  'Kebia Berry',
  'Lagging Tail',
  'Life Orb',
  'Lustrous Orb',
  'Macho Brace',
  'Meadow Plate',
  'Metronome',
  'Micle Berry',
  'Mind Plate',
  'Muscle Band',
  'Occa Berry',
  'Odd Incense',
  'Passho Berry',
  'Payapa Berry',
  'Quick Powder',
  'Razor Fang',
  'Reaper Cloth',
  'Rindo Berry',
  'Rock Incense',
  'Rose Incense',
  'Rowap Berry',
  'Shed Shell',
  'Shuca Berry',
  'Sky Plate',
  'Smooth Rock',
  'Splash Plate',
  'Spooky Plate',
  'Sticky Barb',
  'Stone Plate',
  'Tanga Berry',
  'Toxic Orb',
  'Toxic Plate',
  'Wacan Berry',
  'Wave Incense',
  'Wide Lens',
  'Wise Glasses',
  'Yache Berry',
  'Zap Plate',
  'Zoom Lens'
]);

const BW = DPP.concat([
  'Air Balloon',
  'Binding Band',
  'Bug Gem',
  'Burn Drive',
  'Chill Drive',
  'Dark Gem',
  'Dragon Gem',
  'Douse Drive',
  'Electric Gem',
  'Eviolite',
  'Fighting Gem',
  'Fire Gem',
  'Float Stone',
  'Flying Gem',
  'Ghost Gem',
  'Grass Gem',
  'Ground Gem',
  'Ice Gem',
  'Normal Gem',
  'Poison Gem',
  'Psychic Gem',
  'Red Card',
  'Ring Target',
  'Rock Gem',
  'Shock Drive',
  'Steel Gem',
  'Water Gem'
]);

const MEGA_STONES = {
  'Absolite': 'Absol',
  'Abomasite': 'Abomasnow',
  'Aerodactylite': 'Aerodactyl',
  'Aggronite': 'Aggron',
  'Alakazite': 'Alakazam',
  'Altarianite': 'Altaria',
  'Ampharosite': 'Ampharos',
  'Audinite': 'Audino',
  'Banettite': 'Banette',
  'Beedrillite': 'Beedrill',
  'Blastoisinite': 'Blastoise',
  'Blazikenite': 'Blaziken',
  'Cameruptite': 'Camerupt',
  'Charizardite X': 'Charizard',
  'Charizardite Y': 'Charizard',
  'Diancite': 'Diancie',
  'Galladite': 'Gallade',
  'Garchompite': 'Garchomp',
  'Gardevoirite': 'Gardevoir',
  'Gengarite': 'Gengar',
  'Glalitite': 'Glalie',
  'Gyaradosite': 'Gyarados',
  'Heracrossite': 'Heracross',
  'Houndoomite': 'Houndoom',
  'Kangaskhanite': 'Kangaskhan',
  'Latiasite': 'Latias',
  'Latiosite': 'Latios',
  'Lopunnite': 'Lopunny',
  'Lucarionite': 'Lucario',
  'Manectite': 'Manectric',
  'Mawilite': 'Mawile',
  'Medichamite': 'Medicham',
  'Metagrossite': 'Metagross',
  'Mewtwonite X': 'Mewtwo',
  'Mewtwonite Y': 'Mewtwo',
  'Pidgeotite': 'Pidgeot',
  'Pinsirite': 'Pinsir',
  'Sablenite': 'Sableye',
  'Salamencite': 'Salamence',
  'Sceptilite': 'Sceptile',
  'Scizorite': 'Scizor',
  'Sharpedonite': 'Sharpedo',
  'Slowbronite': 'Slowbro',
  'Steelixite': 'Steelix',
  'Swampertite': 'Swampert',
  'Tyranitarite': 'Tyranitar',
  'Venusaurite': 'Venusaur'
};
const XY = BW.concat(Object.keys(MEGA_STONES)).concat([
  'Assault Vest',
  'Blue Orb',
  'Fairy Gem',
  'Kee Berry',
  'Maranga Berry',
  'Pixie Plate',
  'Power Herb',
  'Red Orb',
  'Roseli Berry',
  'Safety Goggles'
]).sort();

const SM = XY.concat([
  'Adrenaline Orb',
  'Aloraichium Z',
  'Bug Memory',
  'Buginium Z',
  'Dark Memory',
  'Darkinium Z',
  'Decidium Z',
  'Dragon Memory',
  'Dragonium Z',
  'Eevium Z',
  'Electric Memory',
  'Electric Seed',
  'Electrium Z',
  'Enigmatic Card',
  'Fairium Z',
  'Fairy Memory',
  'Fighting Memory',
  'Fightinium Z',
  'Fire Memory',
  'Firium Z',
  'Flying Memory',
  'Flyinium Z',
  'Ghost Memory',
  'Ghostium Z',
  'Grass Memory',
  'Grassium Z',
  'Grassy Seed',
  'Ground Memory',
  'Groundium Z',
  'Ice Memory',
  'Icium Z',
  'Incinium Z',
  'Kommonium Z',
  'Lunalium Z',
  'Lycanium Z',
  'Marshadium Z',
  'Mewnium Z',
  'Mimikium Z',
  'Misty Seed',
  'Normalium Z',
  'Pikanium Z',
  'Pikashunium Z',
  'Pink Nectar',
  'Poison Memory',
  'Poisonium Z',
  'Primarium Z',
  'Protective Pads',
  'Psychic Memory',
  'Psychic Seed',
  'Psychium Z',
  'Purple Nectar',
  'Red Nectar',
  'Rock Memory',
  'Rockium Z',
  'Snorlium Z',
  'Solganium Z',
  'Steel Memory',
  'Steelium Z',
  'Tapunium Z',
  'Ultranecrozium Z',
  'Water Memory',
  'Waterium Z',
  'Yellow Nectar'
]);

const BERRIES = {
  'Apicot Berry': {t: 'Ground', p: 100},
  'Babiri Berry': {t: 'Steel', p: 80},
  'Belue Berry': {t: 'Electric', p: 100},
  'Charti Berry': {t: 'Rock', p: 80},
  'Chesto Berry': {t: 'Water', p: 80},
  'Chilan Berry': {t: 'Normal', p: 80},
  'Chople Berry': {t: 'Fighting', p: 80},
  'Coba Berry': {t: 'Flying', p: 80},
  'Colbur Berry': {t: 'Dark', p: 80},
  'Custap Berry': {t: 'Ghost', p: 100},
  'Durin Berry': {t: 'Water', p: 100},
  'Enigma Berry': {t: 'Bug', p: 100},
  'Ganlon Berry': {t: 'Ice', p: 100},
  'Haban Berry': {t: 'Dragon', p: 80},
  'Jaboca Berry': {t: 'Dragon', p: 100},
  'Kasib Berry': {t: 'Ghost', p: 80},
  'Kebia Berry': {t: 'Poison', p: 80},
  'Kee Berry': {t: 'Fairy', p: 100},
  'Lansat Berry': {t: 'Flying', p: 100},
  'Leppa Berry': {t: 'Fighting', p: 80},
  'Liechi Berry': {t: 'Grass', p: 100},
  'Lum Berry': {t: 'Flying', p: 80},
  'Maranga Berry': {t: 'Dark', p: 100},
  'Micle Berry': {t: 'Rock', p: 100},
  'Occa Berry': {t: 'Fire', p: 80},
  'Oran Berry': {t: 'Poison', p: 80},
  'Passho Berry': {t: 'Water', p: 80},
  'Payapa Berry': {t: 'Psychic', p: 80},
  'Petaya Berry': {t: 'Poison', p: 100},
  'Rawst Berry': {t: 'Grass', p: 80},
  'Rindo Berry': {t: 'Grass', p: 80},
  'Roseli Berry': {t: 'Fairy', p: 80},
  'Rowap Berry': {t: 'Dark', p: 100},
  'Salac Berry': {t: 'Fighting', p: 100},
  'Shuca Berry': {t: 'Ground', p: 80},
  'Sitrus Berry': {t: 'Psychic', p: 80},
  'Starf Berry': {t: 'Psychic', p: 100},
  'Tanga Berry': {t: 'Bug', p: 80},
  'Wacan Berry': {t: 'Electric', p: 80},
  'Watmel Berry': {t: 'Fire', p: 100},
  'Yache Berry': {t: 'Ice', p: 80}
};

const SEED_BOOSTED_STAT = {
  'Electric Seed': 'def,
  'Grassy Seed': 'def',
  'Misty Seed': 'spd',
  'Psychic Seed': 'spd'
};

function getItemBoostType(item) {
  switch (item) {
  case 'Draco Plate':
  case 'Dragon Fang':
    return 'Dragon';
  case 'Dread Plate':
  case 'Black Glasses':
    return 'Dark';
  case 'Earth Plate':
  case 'Soft Sand':
    return 'Ground';
  case 'Fist Plate':
  case 'Black Belt':
    return 'Fighting';
  case 'Flame Plate':
  case 'Charcoal':
    return 'Fire';
  case 'Icicle Plate':
  case 'Never-Melt Ice':
    return 'Ice';
  case 'Insect Plate':
  case 'Silver Powder':
    return 'Bug';
  case 'Iron Plate':
  case 'Metal Coat':
    return 'Steel';
  case 'Meadow Plate':
  case 'Rose Incense':
  case 'Miracle Seed':
    return 'Grass';
  case 'Mind Plate':
  case 'Odd Incense':
  case 'Twisted Spoon':
    return 'Psychic';
  case 'Pixie Plate':
    return 'Fairy';
  case 'Sky Plate':
  case 'Sharp Beak':
    return 'Flying';
  case 'Splash Plate':
  case 'Sea Incense':
  case 'Wave Incense':
  case 'Mystic Water':
    return 'Water';
  case 'Spooky Plate':
  case 'Spell Tag':
    return 'Ghost';
  case 'Stone Plate':
  case 'Rock Incense':
  case 'Hard Stone':
    return 'Rock';
  case 'Toxic Plate':
  case 'Poison Barb':
    return 'Poison';
  case 'Zap Plate':
  case 'Magnet':
    return 'Electric';
  case 'Silk Scarf':
  case 'Pink Bow':
  case 'Polkadot Bow':
    return 'Normal';
  default:
    return '';
  }
}

function getBerryResistType(berry) {
  switch (berry) {
  case 'Chilan Berry':
    return 'Normal';
  case 'Occa Berry':
    return 'Fire';
  case 'Passho Berry':
    return 'Water';
  case 'Wacan Berry':
    return 'Electric';
  case 'Rindo Berry':
    return 'Grass';
  case 'Yache Berry':
    return 'Ice';
  case 'Chople Berry':
    return 'Fighting';
  case 'Kebia Berry':
    return 'Poison';
  case 'Shuca Berry':
    return 'Ground';
  case 'Coba Berry':
    return 'Flying';
  case 'Payapa Berry':
    return 'Psychic';
  case 'Tanga Berry':
    return 'Bug';
  case 'Charti Berry':
    return 'Rock';
  case 'Kasib Berry':
    return 'Ghost';
  case 'Haban Berry':
    return 'Dragon';
  case 'Colbur Berry':
    return 'Dark';
  case 'Babiri Berry':
    return 'Steel';
  case 'Roseli Berry':
    return 'Fairy';
  default:
    return '';
  }
}

function getFlingPower(item) {
  if (include(item, 'Plate')) {
    return 90;
  } else if (include(item, 'Berry')) {
    return 10;
  }

  switch (item) {
    case 'Iron Ball':
      return 130;
    case 'Hard Stone':
      return 100;
    case 'Deep Sea Tooth':
    case 'Thick Club':
      return 90;
    case 'Assault Vest':
    case 'Weakness Policy':
      return 80;
    case 'Poison Barb':
    case 'Dragon Fang':
      return 70;
    case 'Adamant Orb':
    case 'Lustrous Orb':
    case 'Macho Brace':
    case 'Stick':
      return 60;
    case 'Sharp Beak':
      return 50;
    case 'Eviolite':
      return 40;
    case 'Black Belt':
    case 'Black Sludge':
    case 'Black Glasses':
    case 'Charcoal':
    case 'Deep Sea Scale':
    case 'Flame Orb':
    case 'King\'s Rock':
    case 'Life Orb':
    case 'Light Ball':
    case 'Magnet':
    case 'Metal Coat':
    case 'Miracle Seed':
    case 'Mystic Water':
    case 'Never-Melt Ice':
    case 'Razor Fang':
    case 'Soul Dew':
    case 'Spell Tag':
    case 'Toxic Orb':
    case 'Twisted Spoon':
      return 30;
    case 'Air Balloon':
    case 'Choice Band':
    case 'Choice Scarf':
    case 'Choice Specs':
    case 'Destiny Knot':
    case 'Electric Seed':
    case 'Expert Belt':
    case 'Focus Band':
    case 'Focus Sash':
    case 'Grassy Seed':
    case 'Lagging tail':
    case 'leftovers':
    case 'Mental Herb':
    case 'Metal Powder':
    case 'Misty Seed':
    case 'Muscle Band':
    case 'Power Herb':
    case 'Psychic Seed':
    case 'Quick Powder':
    case 'Reaper Cloth':
    case 'Red Card':
    case 'Ring Target':
    case 'Shed Shell':
    case 'Silk Scarf':
    case 'Silver Powder':
    case 'Smooth Rock':
    case 'Soft Sand':
    case 'Soothe Bell':
    case 'White Herb':
    case 'Wide Lens':
    case 'Wise Glasses':
    case 'Zoom Lens':
      return 10;
    default:
      return 0;
  }
}

function getNaturalGift(gen, item) {
  let t = 'Normal';
  let p = 1;

  let gift = BERRIES[item];
  if (gift) {
    t = gift.t;
    p = gen < 6 ? gift.p - 20 : gift.p;
  }

  return {t, p};
}

function getTechnoBlast(item) {
  switch (item) {
  case 'Burn Drive':
    return 'Fire';
  case 'Chill Drive':
    return 'Ice';
  case 'Douse Drive':
    return 'Water';
  case 'Shock Drive':
    return 'Electric';
  default:
    return '';
  }
}

function getMultiAttack(item) {
  if (include(item, 'Memory')) {
    return item.substring(0, item.indexOf(' '));
  }
  return '';
}

const ITEMS = [[], RBY, GSC, RSE, DPP, BW, XY, SM];
const ITEMS_BY_ID = [];

for (let items of ITEMS) {
  let map = {};
  for (let i of items) {
    map[util.toID(i)] = i;
  }
  ITEMS_BY_ID.push(map);
}

exports.ITEMS = ITEMS;
exports.ITEMS_BY_ID = ITEMS_BY_ID;

exports.MEGA_STONES = MEGA_STONES;
exports.SEED_BOOSTED_STAT = SEED_BOOSTED_STAT;

exports.getItemBoostType = getItemBoostType;
exports.getBerryResistType = getBerryResistType;
exports.getFlingPower = getFlingPower;
exports.getNaturalGift = getNaturalGift;
exports.getTechnoBlast = getTechnoBlast;
exports.getMultiAttack = getMultiAttack;
