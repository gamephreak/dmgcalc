import {toID} from '../util';

const RBY: string[] = [];

const GSC: string[] = [];

const ADV: string[] = [
  'Air Lock',
  'Arena Trap',
  'Battle Armor',
  'Blaze',
  'Chlorophyll',
  'Clear Body',
  'Cloud Nine',
  'Color Change',
  'Compound Eyes',
  'Cute Charm',
  'Damp',
  'Drizzle',
  'Drought',
  'Early Bird',
  'Effect Spore',
  'Flame Body',
  'Flash Fire (activated)',
  'Flash Fire',
  'Forecast',
  'Guts',
  'Huge Power',
  'Hustle',
  'Hyper Cutter',
  'Illuminate',
  'Immunity',
  'Inner Focus',
  'Insomnia',
  'Intimidate',
  'Keen Eye',
  'Levitate',
  'Lightning Rod',
  'Limber',
  'Liquid Ooze',
  'Magma Armor',
  'Magnet Pull',
  'Marvel Scale',
  'Minus',
  'Natural Cure',
  'Oblivious',
  'Overgrow',
  'Own Tempo',
  'Pickup',
  'Plus',
  'Poison Point',
  'Pressure',
  'Pure Power',
  'Rain Dish',
  'Rock Head',
  'Rough Skin',
  'Run Away',
  'Sand Stream',
  'Sand Veil',
  'Serene Grace',
  'Shadow Tag',
  'Shed Skin',
  'Shell Armor',
  'Shield Dust',
  'Soundproof',
  'Speed Boost',
  'Static',
  'Stench',
  'Sticky Hold',
  'Sturdy',
  'Suction Cups',
  'Swarm',
  'Swift Swim',
  'Synchronize',
  'Thick Fat',
  'Torrent',
  'Trace',
  'Truant',
  'Vital Spirit',
  'Volt Absorb',
  'Water Absorb',
  'Water Veil',
  'White Smoke',
  'Wonder Guard'
];

const DPP: string[] = ADV.concat([
  'Adaptability', 'Aftermath',   'Anger Point',  'Anticipation', 'Bad Dreams',
  'Download',     'Dry Skin',    'Filter',       'Flower Gift',  'Forewarn',
  'Frisk',        'Gluttony',    'Heatproof',    'Honey Gather', 'Hydration',
  'Ice Body',     'Iron Fist',   'Klutz',        'Leaf Guard',   'Magic Guard',
  'Mold Breaker', 'Motor Drive', 'Mountaineer',  'Multitype',    'No Guard',
  'Normalize',    'Persistent',  'Poison Heal',  'Quick Feet',   'Reckless',
  'Rivalry',      'Scrappy',     'Simple',       'Skill Link',   'Slow Start',
  'Sniper',       'Snow Cloak',  'Snow Warning', 'Solar Power',  'Solid Rock',
  'Stall',        'Steadfast',   'Storm Drain',  'Super Luck',   'Tangled Feet',
  'Technician',   'Tinted Lens', 'Unaware',      'Unburden'
]);

const BW: string[] = DPP.concat([
  'Analytic',    'Big Pecks',     'Contrary',     'Cursed Body',
  'Defeatist',   'Defiant',       'Flare Boost',  'Friend Guard',
  'Harvest',     'Healer',        'Heavy Metal',  'Illusion',
  'Imposter',    'Infiltrator',   'Iron Barbs',   'Justified',
  'Light Metal', 'Lightning Rod', 'Magic Bounce', 'Moody',
  'Moxie',       'Multiscale',    'Mummy',        'Overcoat',
  'Pickpocket',  'Poison Touch',  'Prankster',    'Rattled',
  'Regenerator', 'Sand Force',    'Sand Rush',    'Sap Sipper',
  'Sheer Force', 'Storm Drain',   'Telepathy',    'Teravolt',
  'Toxic Boost', 'Turboblaze',    'Unnerve',      'Victory Star',
  'Weak Armor',  'Wonder Skin',   'Zen Mode'
]);

const XY: string[] = BW.concat([
  'Aerilate',      'Aura Break',    'Aroma Veil',    'Bulletproof',
  'Cheek Pouch',   'Competitive',   'Dark Aura',     'Delta Stream',
  'Desolate Land', 'Fairy Aura',    'Flower Veil',   'Fur Coat',
  'Gale Wings',    'Gooey',         'Grass Pelt',    'Magician',
  'Mega Launcher', 'Parental Bond', 'Pixilate',      'Primordial Sea',
  'Protean',       'Refrigerate',   'Stance Change', 'Strong Jaw',
  'Sweet Veil',    'Symbiosis',     'Tough Claws'
]);

const SM: string[] = XY.concat([
  'Battery',         'Battle Bond',      'Beast Boost',     'Berserk',
  'Comatose',        'Corrosion',        'Dancer',          'Dazzling',
  'Disguise',        'Electric Surge',   'Emergency Exit',  'Fluffy',
  'Full Metal Body', 'Galvanize',        'Grass Pelt',      'Grassy Surge',
  'Innards Out',     'Liquid Voice',     'Long Reach',      'Merciless',
  'Misty Surge',     'Neuroforce',       'Power Construct', 'Power of Alchemy',
  'Prism Armor',     'Psychic Surge',    'Queenly Majesty', 'RKS System',
  'Receiver',        'Schooling',        'Shadow Shield',   'Shields Down',
  'Slush Rush',      'Stamina',          'Stakeout',        'Steelworker',
  'Soul-Heart',      'Surge Surfer',     'Tangling Hair',   'Triage',
  'Water Bubble',    'Water Compaction', 'Wimp Out'
]);

export const ABILITIES: string[][] = [[], RBY, GSC, ADV, DPP, BW, XY, SM];
export const ABILITIES_BY_ID: Array<{[id: string]: string}> = [];

for (const abilities of ABILITIES) {
  const map: {[id: string]: string} = {};
  for (const a of abilities) {
    map[toID(a)] = a;
  }
  ABILITIES_BY_ID.push(map);
}
