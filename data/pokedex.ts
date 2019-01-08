import {extend, toID} from '../util';

const RBY: {[name: string]: Species} = {
  'Abra': {
    'type1': 'Psychic',
    'baseStats': {
      'hp': 25,
      'atk': 20,
      'def': 15,
      'spa': 105,
      'spd': 55,
      'spe': 90,
      'spc': 105
    },
    'weight': 19.5,
    'canEvolve': true
  },
  'Aerodactyl': {
    'type1': 'Rock',
    'type2': 'Flying',
    'baseStats': {
      'hp': 80,
      'atk': 105,
      'def': 65,
      'spa': 60,
      'spd': 75,
      'spe': 130,
      'spc': 60
    },
    'weight': 59.0
  },
  'Alakazam': {
    'type1': 'Psychic',
    'baseStats': {
      'hp': 55,
      'atk': 50,
      'def': 45,
      'spa': 135,
      'spd': 85,
      'spe': 120,
      'spc': 135
    },
    'weight': 48.0
  },
  'Arbok': {
    'type1': 'Poison',
    'baseStats': {
      'hp': 60,
      'atk': 85,
      'def': 69,
      'spa': 65,
      'spd': 79,
      'spe': 80,
      'spc': 65
    },
    'weight': 65.0
  },
  'Arcanine': {
    'type1': 'Fire',
    'baseStats': {
      'hp': 90,
      'atk': 110,
      'def': 80,
      'spa': 100,
      'spd': 80,
      'spe': 95,
      'spc': 80
    },
    'weight': 155.0
  },
  'Articuno': {
    'type1': 'Ice',
    'type2': 'Flying',
    'baseStats': {
      'hp': 90,
      'atk': 85,
      'def': 100,
      'spa': 95,
      'spd': 125,
      'spe': 85,
      'spc': 125
    },
    'weight': 55.4
  },
  'Beedrill': {
    'type1': 'Bug',
    'type2': 'Poison',
    'baseStats': {
      'hp': 65,
      'atk': 80,
      'def': 40,
      'spa': 45,
      'spd': 80,
      'spe': 75,
      'spc': 45
    },
    'weight': 29.5
  },
  'Bellsprout': {
    'type1': 'Grass',
    'type2': 'Poison',
    'baseStats': {
      'hp': 50,
      'atk': 75,
      'def': 35,
      'spa': 70,
      'spd': 30,
      'spe': 40,
      'spc': 70
    },
    'weight': 4.0,
    'canEvolve': true
  },
  'Blastoise': {
    'type1': 'Water',
    'baseStats': {
      'hp': 79,
      'atk': 83,
      'def': 100,
      'spa': 85,
      'spd': 105,
      'spe': 78,
      'spc': 85
    },
    'weight': 85.5
  },
  'Bulbasaur': {
    'type1': 'Grass',
    'type2': 'Poison',
    'baseStats': {
      'hp': 45,
      'atk': 49,
      'def': 49,
      'spa': 65,
      'spd': 65,
      'spe': 45,
      'spc': 65
    },
    'weight': 6.9,
    'canEvolve': true
  },
  'Butterfree': {
    'type1': 'Bug',
    'type2': 'Flying',
    'baseStats': {
      'hp': 60,
      'atk': 45,
      'def': 50,
      'spa': 80,
      'spd': 80,
      'spe': 70,
      'spc': 80
    },
    'weight': 32.0
  },
  'Caterpie': {
    'type1': 'Bug',
    'baseStats': {
      'hp': 45,
      'atk': 30,
      'def': 35,
      'spa': 20,
      'spd': 20,
      'spe': 45,
      'spc': 20
    },
    'weight': 2.9,
    'canEvolve': true
  },
  'Chansey': {
    'type1': 'Normal',
    'baseStats': {
      'hp': 250,
      'atk': 5,
      'def': 5,
      'spa': 35,
      'spd': 105,
      'spe': 50,
      'spc': 105
    },
    'weight': 34.6
  },
  'Charizard': {
    'type1': 'Fire',
    'type2': 'Flying',
    'baseStats': {
      'hp': 78,
      'atk': 84,
      'def': 78,
      'spa': 109,
      'spd': 85,
      'spe': 100,
      'spc': 85
    },
    'weight': 90.5
  },
  'Charmander': {
    'type1': 'Fire',
    'baseStats': {
      'hp': 39,
      'atk': 52,
      'def': 43,
      'spa': 60,
      'spd': 50,
      'spe': 65,
      'spc': 50
    },
    'weight': 8.5,
    'canEvolve': true
  },
  'Charmeleon': {
    'type1': 'Fire',
    'baseStats': {
      'hp': 58,
      'atk': 64,
      'def': 58,
      'spa': 80,
      'spd': 65,
      'spe': 80,
      'spc': 65
    },
    'weight': 19.0,
    'canEvolve': true
  },
  'Clefable': {
    'type1': 'Normal',
    'baseStats': {
      'hp': 95,
      'atk': 70,
      'def': 73,
      'spa': 85,
      'spd': 90,
      'spe': 60,
      'spc': 85
    },
    'weight': 40.0
  },
  'Clefairy': {
    'type1': 'Normal',
    'baseStats': {
      'hp': 70,
      'atk': 45,
      'def': 48,
      'spa': 60,
      'spd': 65,
      'spe': 35,
      'spc': 60
    },
    'weight': 7.5,
    'canEvolve': true
  },
  'Cloyster': {
    'type1': 'Water',
    'type2': 'Ice',
    'baseStats': {
      'hp': 50,
      'atk': 95,
      'def': 180,
      'spa': 85,
      'spd': 45,
      'spe': 70,
      'spc': 85
    },
    'weight': 132.5
  },
  'Cubone': {
    'type1': 'Ground',
    'baseStats': {
      'hp': 50,
      'atk': 50,
      'def': 95,
      'spa': 40,
      'spd': 50,
      'spe': 35,
      'spc': 40
    },
    'weight': 6.5,
    'canEvolve': true
  },
  'Dewgong': {
    'type1': 'Water',
    'type2': 'Ice',
    'baseStats': {
      'hp': 90,
      'atk': 70,
      'def': 80,
      'spa': 70,
      'spd': 95,
      'spe': 70,
      'spc': 95
    },
    'weight': 120.0
  },
  'Diglett': {
    'type1': 'Ground',
    'baseStats': {
      'hp': 10,
      'atk': 55,
      'def': 25,
      'spa': 35,
      'spd': 45,
      'spe': 95,
      'spc': 45
    },
    'weight': 0.8,
    'canEvolve': true
  },
  'Ditto': {
    'type1': 'Normal',
    'baseStats': {
      'hp': 48,
      'atk': 48,
      'def': 48,
      'spa': 48,
      'spd': 48,
      'spe': 48,
      'spc': 48
    },
    'weight': 4.0
  },
  'Dodrio': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats': {
      'hp': 60,
      'atk': 110,
      'def': 70,
      'spa': 60,
      'spd': 60,
      'spe': 100,
      'spc': 60
    },
    'weight': 85.2
  },
  'Doduo': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats': {
      'hp': 35,
      'atk': 85,
      'def': 45,
      'spa': 35,
      'spd': 35,
      'spe': 75,
      'spc': 35
    },
    'weight': 39.2,
    'canEvolve': true
  },
  'Dragonair': {
    'type1': 'Dragon',
    'baseStats': {
      'hp': 61,
      'atk': 84,
      'def': 65,
      'spa': 70,
      'spd': 70,
      'spe': 70,
      'spc': 70
    },
    'weight': 16.5,
    'canEvolve': true
  },
  'Dragonite': {
    'type1': 'Dragon',
    'type2': 'Flying',
    'baseStats': {
      'hp': 91,
      'atk': 134,
      'def': 95,
      'spa': 100,
      'spd': 100,
      'spe': 80,
      'spc': 100
    },
    'weight': 210.0
  },
  'Dratini': {
    'type1': 'Dragon',
    'baseStats': {
      'hp': 41,
      'atk': 64,
      'def': 45,
      'spa': 50,
      'spd': 50,
      'spe': 50,
      'spc': 50
    },
    'weight': 3.3,
    'canEvolve': true
  },
  'Drowzee': {
    'type1': 'Psychic',
    'baseStats': {
      'hp': 60,
      'atk': 48,
      'def': 45,
      'spa': 43,
      'spd': 90,
      'spe': 42,
      'spc': 90
    },
    'weight': 32.4,
    'canEvolve': true
  },
  'Dugtrio': {
    'type1': 'Ground',
    'baseStats': {
      'hp': 35,
      'atk': 80,
      'def': 50,
      'spa': 50,
      'spd': 70,
      'spe': 120,
      'spc': 70
    },
    'weight': 33.3
  },
  'Eevee': {
    'type1': 'Normal',
    'baseStats': {
      'hp': 55,
      'atk': 55,
      'def': 50,
      'spa': 45,
      'spd': 65,
      'spe': 55,
      'spc': 65
    },
    'weight': 6.5,
    'canEvolve': true
  },
  'Ekans': {
    'type1': 'Poison',
    'baseStats': {
      'hp': 35,
      'atk': 60,
      'def': 44,
      'spa': 40,
      'spd': 54,
      'spe': 55,
      'spc': 40
    },
    'weight': 6.9,
    'canEvolve': true
  },
  'Electabuzz': {
    'type1': 'Electric',
    'baseStats': {
      'hp': 65,
      'atk': 83,
      'def': 57,
      'spa': 95,
      'spd': 85,
      'spe': 105,
      'spc': 85
    },
    'weight': 30.0,
  },
  'Electrode': {
    'type1': 'Electric',
    'baseStats': {
      'hp': 60,
      'atk': 50,
      'def': 70,
      'spa': 80,
      'spd': 80,
      'spe': 140,
      'spc': 80
    },
    'weight': 66.6
  },
  'Exeggcute': {
    'type1': 'Grass',
    'type2': 'Psychic',
    'baseStats': {
      'hp': 60,
      'atk': 40,
      'def': 80,
      'spa': 60,
      'spd': 45,
      'spe': 40,
      'spc': 60
    },
    'weight': 2.5,
    'canEvolve': true
  },
  'Exeggutor': {
    'type1': 'Grass',
    'type2': 'Psychic',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 85,
      'spa': 125,
      'spd': 65,
      'spe': 55,
      'spc': 125
    },
    'weight': 120.0
  },
  'Farfetch\'d': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats': {
      'hp': 52,
      'atk': 65,
      'def': 55,
      'spa': 58,
      'spd': 62,
      'spe': 60,
      'spc': 58
    },
    'weight': 15.0
  },
  'Fearow': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats': {
      'hp': 65,
      'atk': 90,
      'def': 65,
      'spa': 61,
      'spd': 61,
      'spe': 100,
      'spc': 61
    },
    'weight': 38.0
  },
  'Flareon': {
    'type1': 'Fire',
    'baseStats': {
      'hp': 65,
      'atk': 130,
      'def': 60,
      'spa': 95,
      'spd': 110,
      'spe': 65,
      'spc': 110
    },
    'weight': 25.0
  },
  'Gastly': {
    'type1': 'Ghost',
    'type2': 'Poison',
    'baseStats': {
      'hp': 30,
      'atk': 35,
      'def': 30,
      'spa': 100,
      'spd': 35,
      'spe': 80,
      'spc': 100
    },
    'weight': 0.1,
    'ability': 'Levitate',
    'canEvolve': true
  },
  'Gengar': {
    'type1': 'Ghost',
    'type2': 'Poison',
    'baseStats': {
      'hp': 60,
      'atk': 65,
      'def': 60,
      'spa': 130,
      'spd': 75,
      'spe': 110,
      'spc': 130
    },
    'weight': 40.5,
    'ability': 'Levitate'
  },
  'Geodude': {
    'type1': 'Rock',
    'type2': 'Ground',
    'baseStats': {
      'hp': 40,
      'atk': 80,
      'def': 100,
      'spa': 30,
      'spd': 30,
      'spe': 20,
      'spc': 30
    },
    'weight': 20.0,
    'canEvolve': true
  },
  'Gloom': {
    'type1': 'Grass',
    'type2': 'Poison',
    'baseStats': {
      'hp': 60,
      'atk': 65,
      'def': 70,
      'spa': 85,
      'spd': 75,
      'spe': 40,
      'spc': 85
    },
    'weight': 8.6,
    'canEvolve': true
  },
  'Golbat': {
    'type1': 'Poison',
    'type2': 'Flying',
    'baseStats': {
      'hp': 75,
      'atk': 80,
      'def': 70,
      'spa': 65,
      'spd': 75,
      'spe': 90,
      'spc': 75
    },
    'weight': 55.0,
  },
  'Goldeen': {
    'type1': 'Water',
    'baseStats': {
      'hp': 45,
      'atk': 67,
      'def': 60,
      'spa': 35,
      'spd': 50,
      'spe': 63,
      'spc': 50
    },
    'weight': 15.0,
    'canEvolve': true
  },
  'Golduck': {
    'type1': 'Water',
    'baseStats': {
      'hp': 80,
      'atk': 82,
      'def': 78,
      'spa': 95,
      'spd': 80,
      'spe': 85,
      'spc': 80
    },
    'weight': 76.6
  },
  'Golem': {
    'type1': 'Rock',
    'type2': 'Ground',
    'baseStats': {
      'hp': 80,
      'atk': 110,
      'def': 130,
      'spa': 55,
      'spd': 65,
      'spe': 45,
      'spc': 55
    },
    'weight': 300.0
  },
  'Graveler': {
    'type1': 'Rock',
    'type2': 'Ground',
    'baseStats': {
      'hp': 55,
      'atk': 95,
      'def': 115,
      'spa': 45,
      'spd': 45,
      'spe': 35,
      'spc': 45
    },
    'weight': 105.0,
    'canEvolve': true
  },
  'Grimer': {
    'type1': 'Poison',
    'baseStats': {
      'hp': 80,
      'atk': 80,
      'def': 50,
      'spa': 40,
      'spd': 50,
      'spe': 25,
      'spc': 40
    },
    'weight': 30.0,
    'canEvolve': true
  },
  'Growlithe': {
    'type1': 'Fire',
    'baseStats': {
      'hp': 55,
      'atk': 70,
      'def': 45,
      'spa': 70,
      'spd': 50,
      'spe': 60,
      'spc': 50
    },
    'weight': 19.0,
    'canEvolve': true
  },
  'Gyarados': {
    'type1': 'Water',
    'type2': 'Flying',
    'baseStats': {
      'hp': 95,
      'atk': 125,
      'def': 79,
      'spa': 60,
      'spd': 100,
      'spe': 81,
      'spc': 100
    },
    'weight': 235.0
  },
  'Haunter': {
    'type1': 'Ghost',
    'type2': 'Poison',
    'baseStats': {
      'hp': 45,
      'atk': 50,
      'def': 45,
      'spa': 115,
      'spd': 55,
      'spe': 95,
      'spc': 115
    },
    'weight': 0.1,
    'ability': 'Levitate',
    'canEvolve': true
  },
  'Hitmonchan': {
    'type1': 'Fighting',
    'baseStats': {
      'hp': 50,
      'atk': 105,
      'def': 79,
      'spa': 35,
      'spd': 110,
      'spe': 76,
      'spc': 35
    },
    'weight': 50.2
  },
  'Hitmonlee': {
    'type1': 'Fighting',
    'baseStats': {
      'hp': 50,
      'atk': 120,
      'def': 53,
      'spa': 35,
      'spd': 110,
      'spe': 87,
      'spc': 35
    },
    'weight': 49.8
  },
  'Horsea': {
    'type1': 'Water',
    'baseStats': {
      'hp': 30,
      'atk': 40,
      'def': 70,
      'spa': 70,
      'spd': 25,
      'spe': 60,
      'spc': 70
    },
    'weight': 8.0,
    'canEvolve': true
  },
  'Hypno': {
    'type1': 'Psychic',
    'baseStats': {
      'hp': 85,
      'atk': 73,
      'def': 70,
      'spa': 73,
      'spd': 115,
      'spe': 67,
      'spc': 115
    },
    'weight': 75.6
  },
  'Ivysaur': {
    'type1': 'Grass',
    'type2': 'Poison',
    'baseStats': {
      'hp': 60,
      'atk': 62,
      'def': 63,
      'spa': 80,
      'spd': 80,
      'spe': 60,
      'spc': 80
    },
    'weight': 13.0,
    'canEvolve': true
  },
  'Jigglypuff': {
    'type1': 'Normal',
    'baseStats': {
      'hp': 115,
      'atk': 45,
      'def': 20,
      'spa': 45,
      'spd': 25,
      'spe': 20,
      'spc': 25
    },
    'weight': 5.5,
    'canEvolve': true
  },
  'Jolteon': {
    'type1': 'Electric',
    'baseStats': {
      'hp': 65,
      'atk': 65,
      'def': 60,
      'spa': 110,
      'spd': 95,
      'spe': 130,
      'spc': 110
    },
    'weight': 24.5
  },
  'Jynx': {
    'type1': 'Ice',
    'type2': 'Psychic',
    'baseStats': {
      'hp': 65,
      'atk': 50,
      'def': 35,
      'spa': 115,
      'spd': 95,
      'spe': 95,
      'spc': 95
    },
    'weight': 40.6
  },
  'Kabuto': {
    'type1': 'Rock',
    'type2': 'Water',
    'baseStats': {
      'hp': 30,
      'atk': 80,
      'def': 90,
      'spa': 55,
      'spd': 45,
      'spe': 55,
      'spc': 45
    },
    'weight': 11.5,
    'canEvolve': true
  },
  'Kabutops': {
    'type1': 'Rock',
    'type2': 'Water',
    'baseStats': {
      'hp': 60,
      'atk': 115,
      'def': 105,
      'spa': 65,
      'spd': 70,
      'spe': 80,
      'spc': 70
    },
    'weight': 40.5
  },
  'Kadabra': {
    'type1': 'Psychic',
    'baseStats': {
      'hp': 40,
      'atk': 35,
      'def': 30,
      'spa': 120,
      'spd': 70,
      'spe': 105,
      'spc': 120
    },
    'weight': 56.5,
    'canEvolve': true
  },
  'Kakuna': {
    'type1': 'Bug',
    'type2': 'Poison',
    'baseStats': {
      'hp': 45,
      'atk': 25,
      'def': 50,
      'spa': 25,
      'spd': 25,
      'spe': 35,
      'spc': 25
    },
    'weight': 10.0,
    'ability': 'Shed Skin',
    'canEvolve': true
  },
  'Kangaskhan': {
    'type1': 'Normal',
    'baseStats': {
      'hp': 105,
      'atk': 95,
      'def': 80,
      'spa': 40,
      'spd': 80,
      'spe': 90,
      'spc': 40
    },
    'weight': 80.0
  },
  'Kingler': {
    'type1': 'Water',
    'baseStats': {
      'hp': 55,
      'atk': 130,
      'def': 115,
      'spa': 50,
      'spd': 50,
      'spe': 75,
      'spc': 50
    },
    'weight': 60.0
  },
  'Koffing': {
    'type1': 'Poison',
    'baseStats': {
      'hp': 40,
      'atk': 65,
      'def': 95,
      'spa': 60,
      'spd': 45,
      'spe': 35,
      'spc': 60
    },
    'weight': 1.0,
    'ability': 'Levitate',
    'canEvolve': true
  },
  'Krabby': {
    'type1': 'Water',
    'baseStats': {
      'hp': 30,
      'atk': 105,
      'def': 90,
      'spa': 25,
      'spd': 25,
      'spe': 50,
      'spc': 25
    },
    'weight': 6.5,
    'canEvolve': true
  },
  'Lapras': {
    'type1': 'Water',
    'type2': 'Ice',
    'baseStats': {
      'hp': 130,
      'atk': 85,
      'def': 80,
      'spa': 85,
      'spd': 95,
      'spe': 60,
      'spc': 95
    },
    'weight': 220.0
  },
  'Lickitung': {
    'type1': 'Normal',
    'baseStats': {
      'hp': 90,
      'atk': 55,
      'def': 75,
      'spa': 60,
      'spd': 75,
      'spe': 30,
      'spc': 60
    },
    'weight': 65.5,
    'canEvolve': true
  },
  'Machamp': {
    'type1': 'Fighting',
    'baseStats': {
      'hp': 90,
      'atk': 130,
      'def': 80,
      'spa': 65,
      'spd': 85,
      'spe': 55,
      'spc': 65
    },
    'weight': 130.0,
    'canEvolve': true
  },
  'Machoke': {
    'type1': 'Fighting',
    'baseStats': {
      'hp': 80,
      'atk': 100,
      'def': 70,
      'spa': 50,
      'spd': 60,
      'spe': 45,
      'spc': 50
    },
    'weight': 70.5,
    'canEvolve': true
  },
  'Machop': {
    'type1': 'Fighting',
    'baseStats': {
      'hp': 70,
      'atk': 80,
      'def': 50,
      'spa': 35,
      'spd': 35,
      'spe': 35,
      'spc': 35
    },
    'weight': 19.5,
    'canEvolve': true
  },
  'Magikarp': {
    'type1': 'Water',
    'baseStats': {
      'hp': 20,
      'atk': 10,
      'def': 55,
      'spa': 15,
      'spd': 20,
      'spe': 80,
      'spc': 20
    },
    'weight': 10.0,
    'canEvolve': true
  },
  'Magmar': {
    'type1': 'Fire',
    'baseStats': {
      'hp': 65,
      'atk': 95,
      'def': 57,
      'spa': 100,
      'spd': 85,
      'spe': 93,
      'spc': 85
    },
    'weight': 44.5,
    'canEvolve': true
  },
  'Magnemite': {
    'type1': 'Electric',
    'baseStats': {
      'hp': 25,
      'atk': 35,
      'def': 70,
      'spa': 95,
      'spd': 55,
      'spe': 45,
      'spc': 95
    },
    'weight': 6.0,
    'canEvolve': true
  },
  'Magneton': {
    'type1': 'Electric',
    'baseStats': {
      'hp': 50,
      'atk': 60,
      'def': 95,
      'spa': 120,
      'spd': 70,
      'spe': 70,
      'spc': 120
    },
    'weight': 60.0,
    'canEvolve': true
  },
  'Mankey': {
    'type1': 'Fighting',
    'baseStats': {
      'hp': 40,
      'atk': 80,
      'def': 35,
      'spa': 35,
      'spd': 45,
      'spe': 70,
      'spc': 35
    },
    'weight': 28.0,
    'canEvolve': true
  },
  'Marowak': {
    'type1': 'Ground',
    'baseStats': {
      'hp': 60,
      'atk': 80,
      'def': 110,
      'spa': 50,
      'spd': 80,
      'spe': 45,
      'spc': 50
    },
    'weight': 45.0
  },
  'Meowth': {
    'type1': 'Normal',
    'baseStats': {
      'hp': 40,
      'atk': 45,
      'def': 35,
      'spa': 40,
      'spd': 40,
      'spe': 90,
      'spc': 40
    },
    'weight': 4.2,
    'canEvolve': true
  },
  'Metapod': {
    'type1': 'Bug',
    'baseStats': {
      'hp': 50,
      'atk': 20,
      'def': 55,
      'spa': 25,
      'spd': 25,
      'spe': 30,
      'spc': 25
    },
    'weight': 9.9,
    'ability': 'Shed Skin',
    'canEvolve': true
  },
  'Mew': {
    'type1': 'Psychic',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100,
      'spc': 100
    },
    'weight': 4.0,
    'ability': 'Synchronize'
  },
  'Mewtwo': {
    'type1': 'Psychic',
    'baseStats': {
      'hp': 106,
      'atk': 110,
      'def': 90,
      'spa': 154,
      'spd': 90,
      'spe': 130,
      'spc': 154
    },
    'weight': 122.0
  },
  'Moltres': {
    'type1': 'Fire',
    'type2': 'Flying',
    'baseStats': {
      'hp': 90,
      'atk': 100,
      'def': 90,
      'spa': 125,
      'spd': 85,
      'spe': 90,
      'spc': 125
    },
    'weight': 60.0
  },
  'Mr. Mime': {
    'type1': 'Psychic',
    'baseStats': {
      'hp': 40,
      'atk': 45,
      'def': 65,
      'spa': 100,
      'spd': 120,
      'spe': 90,
      'spc': 100
    },
    'weight': 54.5
  },
  'Muk': {
    'type1': 'Poison',
    'baseStats': {
      'hp': 105,
      'atk': 105,
      'def': 75,
      'spa': 65,
      'spd': 100,
      'spe': 50,
      'spc': 65
    },
    'weight': 30.0
  },
  'Nidoking': {
    'type1': 'Poison',
    'type2': 'Ground',
    'baseStats': {
      'hp': 81,
      'atk': 92,
      'def': 77,
      'spa': 85,
      'spd': 75,
      'spe': 85,
      'spc': 75
    },
    'weight': 62.0
  },
  'Nidoqueen': {
    'type1': 'Poison',
    'type2': 'Ground',
    'baseStats': {
      'hp': 90,
      'atk': 82,
      'def': 87,
      'spa': 75,
      'spd': 85,
      'spe': 76,
      'spc': 75
    },
    'weight': 60.0
  },
  'Nidoran-F': {
    'type1': 'Poison',
    'baseStats': {
      'hp': 55,
      'atk': 47,
      'def': 52,
      'spa': 40,
      'spd': 40,
      'spe': 41,
      'spc': 40
    },
    'weight': 7.0,
    'canEvolve': true
  },
  'Nidoran-M': {
    'type1': 'Poison',
    'baseStats': {
      'hp': 46,
      'atk': 57,
      'def': 40,
      'spa': 40,
      'spd': 40,
      'spe': 50,
      'spc': 40
    },
    'weight': 9.0,
    'canEvolve': true
  },
  'Nidorina': {
    'type1': 'Poison',
    'baseStats': {
      'hp': 70,
      'atk': 62,
      'def': 67,
      'spa': 55,
      'spd': 55,
      'spe': 56,
      'spc': 55
    },
    'weight': 20.0,
    'canEvolve': true
  },
  'Nidorino': {
    'type1': 'Poison',
    'baseStats': {
      'hp': 61,
      'atk': 72,
      'def': 57,
      'spa': 55,
      'spd': 55,
      'spe': 65,
      'spc': 55
    },
    'weight': 19.5,
    'canEvolve': true
  },
  'Ninetales': {
    'type1': 'Fire',
    'baseStats': {
      'hp': 73,
      'atk': 76,
      'def': 75,
      'spa': 81,
      'spd': 100,
      'spe': 100,
      'spc': 100
    },
    'weight': 19.9
  },
  'Oddish': {
    'type1': 'Grass',
    'type2': 'Poison',
    'baseStats': {
      'hp': 45,
      'atk': 50,
      'def': 55,
      'spa': 75,
      'spd': 65,
      'spe': 30,
      'spc': 75
    },
    'weight': 5.4,
    'canEvolve': true
  },
  'Omanyte': {
    'type1': 'Rock',
    'type2': 'Water',
    'baseStats': {
      'hp': 35,
      'atk': 40,
      'def': 100,
      'spa': 90,
      'spd': 55,
      'spe': 35,
      'spc': 90
    },
    'weight': 7.5,
    'canEvolve': true
  },
  'Omastar': {
    'type1': 'Rock',
    'type2': 'Water',
    'baseStats': {
      'hp': 70,
      'atk': 60,
      'def': 125,
      'spa': 115,
      'spd': 70,
      'spe': 55,
      'spc': 115
    },
    'weight': 35.0
  },
  'Onix': {
    'type1': 'Rock',
    'type2': 'Ground',
    'baseStats': {
      'hp': 35,
      'atk': 45,
      'def': 160,
      'spa': 30,
      'spd': 45,
      'spe': 70,
      'spc': 30
    },
    'weight': 210.0,
    'canEvolve': true
  },
  'Paras': {
    'type1': 'Bug',
    'type2': 'Grass',
    'baseStats': {
      'hp': 35,
      'atk': 70,
      'def': 55,
      'spa': 45,
      'spd': 55,
      'spe': 25,
      'spc': 55
    },
    'weight': 5.4,
    'canEvolve': true
  },
  'Parasect': {
    'type1': 'Bug',
    'type2': 'Grass',
    'baseStats': {
      'hp': 60,
      'atk': 95,
      'def': 80,
      'spa': 60,
      'spd': 80,
      'spe': 30,
      'spc': 80
    },
    'weight': 29.5
  },
  'Persian': {
    'type1': 'Normal',
    'baseStats': {
      'hp': 65,
      'atk': 70,
      'def': 60,
      'spa': 65,
      'spd': 65,
      'spe': 115,
      'spc': 65
    },
    'weight': 32.0
  },
  'Pidgeot': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats': {
      'hp': 83,
      'atk': 80,
      'def': 75,
      'spa': 70,
      'spd': 70,
      'spe': 91,
      'spc': 70
    },
    'weight': 39.5
  },
  'Pidgeotto': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats': {
      'hp': 63,
      'atk': 60,
      'def': 55,
      'spa': 50,
      'spd': 50,
      'spe': 71,
      'spc': 50
    },
    'weight': 30.0,
    'canEvolve': true
  },
  'Pidgey': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats': {
      'hp': 40,
      'atk': 45,
      'def': 40,
      'spa': 35,
      'spd': 35,
      'spe': 56,
      'spc': 35
    },
    'weight': 1.8,
    'canEvolve': true
  },
  'Pikachu': {
    'type1': 'Electric',
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 30,
      'spa': 50,
      'spd': 40,
      'spe': 90,
      'spc': 50
    },
    'weight': 6.0,
    'canEvolve': true
  },
  'Pinsir': {
    'type1': 'Bug',
    'baseStats': {
      'hp': 65,
      'atk': 125,
      'def': 100,
      'spa': 55,
      'spd': 70,
      'spe': 85,
      'spc': 55
    },
    'weight': 55.0
  },
  'Poliwag': {
    'type1': 'Water',
    'baseStats': {
      'hp': 40,
      'atk': 50,
      'def': 40,
      'spa': 40,
      'spd': 40,
      'spe': 90,
      'spc': 40
    },
    'weight': 12.4,
    'canEvolve': true
  },
  'Poliwhirl': {
    'type1': 'Water',
    'baseStats': {
      'hp': 65,
      'atk': 65,
      'def': 65,
      'spa': 50,
      'spd': 50,
      'spe': 90,
      'spc': 50
    },
    'weight': 20.0,
    'canEvolve': true
  },
  'Poliwrath': {
    'type1': 'Water',
    'type2': 'Fighting',
    'baseStats': {
      'hp': 90,
      'atk': 85,
      'def': 95,
      'spa': 70,
      'spd': 90,
      'spe': 70,
      'spc': 70
    },
    'weight': 54.0,
    'canEvolve': true
  },
  'Ponyta': {
    'type1': 'Fire',
    'baseStats': {
      'hp': 50,
      'atk': 85,
      'def': 55,
      'spa': 65,
      'spd': 65,
      'spe': 90,
      'spc': 65
    },
    'weight': 30.0,
    'canEvolve': true
  },
  'Porygon': {
    'type1': 'Normal',
    'baseStats': {
      'hp': 65,
      'atk': 60,
      'def': 70,
      'spa': 85,
      'spd': 75,
      'spe': 40,
      'spc': 75
    },
    'weight': 36.5
  },
  'Primeape': {
    'type1': 'Fighting',
    'baseStats': {
      'hp': 65,
      'atk': 105,
      'def': 60,
      'spa': 60,
      'spd': 70,
      'spe': 95,
      'spc': 60
    },
    'weight': 32.0
  },
  'Psyduck': {
    'type1': 'Water',
    'baseStats': {
      'hp': 50,
      'atk': 52,
      'def': 48,
      'spa': 65,
      'spd': 50,
      'spe': 55,
      'spc': 50
    },
    'weight': 19.6,
    'canEvolve': true
  },
  'Raichu': {
    'type1': 'Electric',
    'baseStats': {
      'hp': 60,
      'atk': 90,
      'def': 55,
      'spa': 90,
      'spd': 80,
      'spe': 100,
      'spc': 90
    },
    'weight': 30.0
  },
  'Rapidash': {
    'type1': 'Fire',
    'baseStats': {
      'hp': 65,
      'atk': 100,
      'def': 70,
      'spa': 80,
      'spd': 80,
      'spe': 105,
      'spc': 80
    },
    'weight': 95.0
  },
  'Raticate': {
    'type1': 'Normal',
    'baseStats': {
      'hp': 55,
      'atk': 81,
      'def': 60,
      'spa': 50,
      'spd': 70,
      'spe': 97,
      'spc': 50
    },
    'weight': 18.5
  },
  'Rattata': {
    'type1': 'Normal',
    'baseStats': {
      'hp': 30,
      'atk': 56,
      'def': 35,
      'spa': 25,
      'spd': 35,
      'spe': 72,
      'spc': 25
    },
    'weight': 3.5,
    'canEvolve': true
  },
  'Rhydon': {
    'type1': 'Ground',
    'type2': 'Rock',
    'baseStats': {
      'hp': 105,
      'atk': 130,
      'def': 120,
      'spa': 45,
      'spd': 45,
      'spe': 40,
      'spc': 45
    },
    'weight': 120.0,
    'canEvolve': true
  },
  'Rhyhorn': {
    'type1': 'Ground',
    'type2': 'Rock',
    'baseStats': {
      'hp': 80,
      'atk': 85,
      'def': 95,
      'spa': 30,
      'spd': 30,
      'spe': 25,
      'spc': 30
    },
    'weight': 115.0
  },
  'Sandshrew': {
    'type1': 'Ground',
    'baseStats': {
      'hp': 50,
      'atk': 75,
      'def': 85,
      'spa': 20,
      'spd': 30,
      'spe': 40,
      'spc': 30
    },
    'weight': 12.0,
    'canEvolve': true
  },
  'Sandslash': {
    'type1': 'Ground',
    'baseStats': {
      'hp': 75,
      'atk': 100,
      'def': 110,
      'spa': 45,
      'spd': 55,
      'spe': 65,
      'spc': 55
    },
    'weight': 29.5
  },
  'Scyther': {
    'type1': 'Bug',
    'type2': 'Flying',
    'baseStats': {
      'hp': 70,
      'atk': 110,
      'def': 80,
      'spa': 55,
      'spd': 80,
      'spe': 105,
      'spc': 55
    },
    'weight': 56.0
  },
  'Seadra': {
    'type1': 'Water',
    'baseStats': {
      'hp': 55,
      'atk': 65,
      'def': 95,
      'spa': 95,
      'spd': 45,
      'spe': 85,
      'spc': 95
    },
    'weight': 25.0
  },
  'Seaking': {
    'type1': 'Water',
    'baseStats': {
      'hp': 80,
      'atk': 92,
      'def': 65,
      'spa': 65,
      'spd': 80,
      'spe': 68,
      'spc': 80
    },
    'weight': 39.0
  },
  'Seel': {
    'type1': 'Water',
    'baseStats': {
      'hp': 65,
      'atk': 45,
      'def': 55,
      'spa': 45,
      'spd': 70,
      'spe': 45,
      'spc': 70
    },
    'weight': 90.0,
    'canEvolve': true
  },
  'Shellder': {
    'type1': 'Water',
    'baseStats': {
      'hp': 30,
      'atk': 65,
      'def': 100,
      'spa': 45,
      'spd': 25,
      'spe': 40,
      'spc': 45
    },
    'weight': 4.0,
    'canEvolve': true
  },
  'Slowbro': {
    'type1': 'Water',
    'type2': 'Psychic',
    'baseStats': {
      'hp': 95,
      'atk': 75,
      'def': 110,
      'spa': 100,
      'spd': 80,
      'spe': 30,
      'spc': 80
    },
    'weight': 78.5
  },
  'Slowpoke': {
    'type1': 'Water',
    'type2': 'Psychic',
    'baseStats': {
      'hp': 90,
      'atk': 65,
      'def': 65,
      'spa': 40,
      'spd': 40,
      'spe': 15,
      'spc': 40
    },
    'weight': 36.0,
    'canEvolve': true
  },
  'Snorlax': {
    'type1': 'Normal',
    'baseStats': {
      'hp': 160,
      'atk': 110,
      'def': 65,
      'spa': 65,
      'spd': 110,
      'spe': 30,
      'spc': 65
    },
    'weight': 460.0
  },
  'Spearow': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats': {
      'hp': 40,
      'atk': 60,
      'def': 30,
      'spa': 31,
      'spd': 31,
      'spe': 70,
      'spc': 31
    },
    'weight': 2.0,
    'canEvolve': true
  },
  'Squirtle': {
    'type1': 'Water',
    'baseStats': {
      'hp': 44,
      'atk': 48,
      'def': 65,
      'spa': 50,
      'spd': 64,
      'spe': 43,
      'spc': 50
    },
    'weight': 9.0,
    'canEvolve': true
  },
  'Starmie': {
    'type1': 'Water',
    'type2': 'Psychic',
    'baseStats': {
      'hp': 60,
      'atk': 75,
      'def': 85,
      'spa': 100,
      'spd': 85,
      'spe': 115,
      'spc': 100
    },
    'weight': 80.0
  },
  'Staryu': {
    'type1': 'Water',
    'baseStats': {
      'hp': 30,
      'atk': 45,
      'def': 55,
      'spa': 70,
      'spd': 55,
      'spe': 85,
      'spc': 70
    },
    'weight': 34.5,
    'canEvolve': true
  },
  'Tangela': {
    'type1': 'Grass',
    'baseStats': {
      'hp': 65,
      'atk': 55,
      'def': 115,
      'spa': 100,
      'spd': 40,
      'spe': 60,
      'spc': 100
    },
    'weight': 35.0
  },
  'Tauros': {
    'type1': 'Normal',
    'baseStats': {
      'hp': 75,
      'atk': 100,
      'def': 95,
      'spa': 40,
      'spd': 70,
      'spe': 110,
      'spc': 70
    },
    'weight': 88.4
  },
  'Tentacool': {
    'type1': 'Water',
    'type2': 'Poison',
    'baseStats': {
      'hp': 40,
      'atk': 40,
      'def': 35,
      'spa': 50,
      'spd': 100,
      'spe': 70,
      'spc': 100
    },
    'weight': 45.5,
    'canEvolve': true
  },
  'Tentacruel': {
    'type1': 'Water',
    'type2': 'Poison',
    'baseStats': {
      'hp': 80,
      'atk': 70,
      'def': 65,
      'spa': 80,
      'spd': 120,
      'spe': 100,
      'spc': 120
    },
    'weight': 55.0
  },
  'Vaporeon': {
    'type1': 'Water',
    'baseStats': {
      'hp': 130,
      'atk': 65,
      'def': 60,
      'spa': 110,
      'spd': 95,
      'spe': 65,
      'spc': 110
    },
    'weight': 29.0
  },
  'Venomoth': {
    'type1': 'Bug',
    'type2': 'Poison',
    'baseStats': {
      'hp': 70,
      'atk': 65,
      'def': 60,
      'spa': 90,
      'spd': 75,
      'spe': 90,
      'spc': 90
    },
    'weight': 12.5
  },
  'Venonat': {
    'type1': 'Bug',
    'type2': 'Poison',
    'baseStats': {
      'hp': 60,
      'atk': 55,
      'def': 50,
      'spa': 40,
      'spd': 55,
      'spe': 45,
      'spc': 40
    },
    'weight': 30.0,
    'canEvolve': true
  },
  'Venusaur': {
    'type1': 'Grass',
    'type2': 'Poison',
    'baseStats': {
      'hp': 80,
      'atk': 82,
      'def': 83,
      'spa': 100,
      'spd': 100,
      'spe': 80,
      'spc': 100
    },
    'weight': 100.0
  },
  'Victreebel': {
    'type1': 'Grass',
    'type2': 'Poison',
    'baseStats': {
      'hp': 80,
      'atk': 105,
      'def': 65,
      'spa': 100,
      'spd': 60,
      'spe': 70,
      'spc': 100
    },
    'weight': 15.5
  },
  'Vileplume': {
    'type1': 'Grass',
    'type2': 'Poison',
    'baseStats': {
      'hp': 75,
      'atk': 80,
      'def': 85,
      'spa': 100,
      'spd': 90,
      'spe': 50,
      'spc': 100
    },
    'weight': 18.6
  },
  'Voltorb': {
    'type1': 'Electric',
    'baseStats': {
      'hp': 40,
      'atk': 30,
      'def': 50,
      'spa': 55,
      'spd': 55,
      'spe': 100,
      'spc': 55
    },
    'weight': 10.4,
    'canEvolve': true
  },
  'Vulpix': {
    'type1': 'Fire',
    'baseStats': {
      'hp': 38,
      'atk': 41,
      'def': 40,
      'spa': 50,
      'spd': 65,
      'spe': 65,
      'spc': 65
    },
    'weight': 9.9,
    'canEvolve': true
  },
  'Wartortle': {
    'type1': 'Water',
    'baseStats': {
      'hp': 59,
      'atk': 63,
      'def': 80,
      'spa': 65,
      'spd': 80,
      'spe': 58,
      'spc': 65
    },
    'weight': 22.5,
    'canEvolve': true
  },
  'Weedle': {
    'type1': 'Bug',
    'type2': 'Poison',
    'baseStats': {
      'hp': 40,
      'atk': 35,
      'def': 30,
      'spa': 20,
      'spd': 20,
      'spe': 50,
      'spc': 20
    },
    'weight': 3.2,
    'canEvolve': true
  },
  'Weepinbell': {
    'type1': 'Grass',
    'type2': 'Poison',
    'baseStats': {
      'hp': 65,
      'atk': 90,
      'def': 50,
      'spa': 85,
      'spd': 45,
      'spe': 55,
      'spc': 85
    },
    'weight': 6.4,
    'canEvolve': true
  },
  'Weezing': {
    'type1': 'Poison',
    'baseStats': {
      'hp': 65,
      'atk': 90,
      'def': 120,
      'spa': 85,
      'spd': 70,
      'spe': 60,
      'spc': 85
    },
    'weight': 9.5,
    'ability': 'Levitate'
  },
  'Wigglytuff': {
    'type1': 'Normal',
    'baseStats': {
      'hp': 140,
      'atk': 70,
      'def': 45,
      'spa': 75,
      'spd': 50,
      'spe': 45,
      'spc': 50
    },
    'weight': 12.0
  },
  'Zapdos': {
    'type1': 'Electric',
    'type2': 'Flying',
    'baseStats': {
      'hp': 90,
      'atk': 90,
      'def': 85,
      'spa': 125,
      'spd': 90,
      'spe': 100,
      'spc': 125
    },
    'weight': 52.6
  },
  'Zubat': {
    'type1': 'Poison',
    'type2': 'Flying',
    'baseStats': {
      'hp': 40,
      'atk': 45,
      'def': 35,
      'spa': 30,
      'spd': 40,
      'spe': 55,
      'spc': 40
    },
    'weight': 7.5,
    'canEvolve': true
  }
};

const GSC: {[name: string]: Species} = extend(true, {}, RBY, {
  'Articuno': {'gender': 'genderless'},
  'Chansey': {'canEvolve': true},
  'Ditto': {'gender': 'genderless'},
  'Electrode': {'gender': 'genderless'},
  'Golbat': {'canEvolve': true},
  'Mew': {'gender': 'genderless'},
  'Mewtwo': {'gender': 'genderless'},
  'Moltres': {'gender': 'genderless'},
  'Scyther': {'canEvolve': true},
  'Seadra': {'canEvolve': true},
  'Zapdos': {'gender': 'genderless'},
  'Magnemite': {'gender': 'genderless', 'type2': 'Steel'},
  'Magneton': {'type2': 'Steel', 'gender': 'genderless'},
  'Aipom': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 55, 'atk': 70, 'def': 55, 'spa': 40, 'spd': 55, 'spe': 85},
    'weight': 11.5
  },
  'Ampharos': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 90, 'atk': 75, 'def': 75, 'spa': 115, 'spd': 90, 'spe': 55},
    'weight': 61.5
  },
  'Ariados': {
    'type1': 'Bug',
    'type2': 'Poison',
    'baseStats':
        {'hp': 70, 'atk': 90, 'def': 70, 'spa': 60, 'spd': 60, 'spe': 40},
    'weight': 33.5
  },
  'Azumarill': {
    'type1': 'Water',
    'baseStats':
        {'hp': 100, 'atk': 50, 'def': 80, 'spa': 50, 'spd': 80, 'spe': 50},
    'weight': 28.5
  },
  'Bayleef': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 60, 'atk': 62, 'def': 80, 'spa': 63, 'spd': 80, 'spe': 60},
    'weight': 15.8,
    'canEvolve': true
  },
  'Bellossom': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 75, 'atk': 80, 'def': 85, 'spa': 90, 'spd': 100, 'spe': 50},
    'weight': 5.8
  },
  'Blissey': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 255, 'atk': 10, 'def': 10, 'spa': 75, 'spd': 135, 'spe': 55},
    'weight': 46.8
  },
  'Celebi': {
    'type1': 'Psychic',
    'type2': 'Grass',
    'baseStats':
        {'hp': 100, 'atk': 100, 'def': 100, 'spa': 100, 'spd': 100, 'spe': 100},
    'weight': 5.0,
    'ability': 'Natural Cure',
    'gender': 'genderless'
  },
  'Chikorita': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 45, 'atk': 49, 'def': 65, 'spa': 49, 'spd': 65, 'spe': 45},
    'weight': 6.4,
    'canEvolve': true
  },
  'Chinchou': {
    'type1': 'Water',
    'type2': 'Electric',
    'baseStats':
        {'hp': 75, 'atk': 38, 'def': 38, 'spa': 56, 'spd': 56, 'spe': 67},
    'weight': 12.0,
    'canEvolve': true
  },
  'Cleffa': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 50, 'atk': 25, 'def': 28, 'spa': 45, 'spd': 55, 'spe': 15},
    'weight': 3.0,
    'canEvolve': true
  },
  'Corsola': {
    'type1': 'Water',
    'type2': 'Rock',
    'baseStats':
        {'hp': 55, 'atk': 55, 'def': 85, 'spa': 65, 'spd': 85, 'spe': 35},
    'weight': 5.0
  },
  'Crobat': {
    'type1': 'Poison',
    'type2': 'Flying',
    'baseStats':
        {'hp': 85, 'atk': 90, 'def': 80, 'spa': 70, 'spd': 80, 'spe': 130},
    'weight': 75.0
  },
  'Croconaw': {
    'type1': 'Water',
    'baseStats':
        {'hp': 65, 'atk': 80, 'def': 80, 'spa': 59, 'spd': 63, 'spe': 58},
    'weight': 25.0,
    'canEvolve': true
  },
  'Cyndaquil': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 39, 'atk': 52, 'def': 43, 'spa': 60, 'spd': 50, 'spe': 65},
    'weight': 7.9,
    'canEvolve': true
  },
  'Delibird': {
    'type1': 'Ice',
    'type2': 'Flying',
    'baseStats':
        {'hp': 45, 'atk': 55, 'def': 45, 'spa': 65, 'spd': 45, 'spe': 75},
    'weight': 16.0
  },
  'Donphan': {
    'type1': 'Ground',
    'baseStats':
        {'hp': 90, 'atk': 120, 'def': 120, 'spa': 60, 'spd': 60, 'spe': 50},
    'weight': 120.0
  },
  'Dunsparce': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 100, 'atk': 70, 'def': 70, 'spa': 65, 'spd': 65, 'spe': 45},
    'weight': 14.0
  },
  'Elekid': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 45, 'atk': 63, 'def': 37, 'spa': 65, 'spd': 55, 'spe': 95},
    'weight': 23.5,
    'canEvolve': true
  },
  'Entei': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 115, 'atk': 115, 'def': 85, 'spa': 90, 'spd': 75, 'spe': 100},
    'weight': 198.0,
    'ability': 'Pressure',
    'gender': 'genderless'
  },
  'Espeon': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 65, 'atk': 65, 'def': 60, 'spa': 130, 'spd': 95, 'spe': 110},
    'weight': 26.5
  },
  'Feraligatr': {
    'type1': 'Water',
    'baseStats':
        {'hp': 85, 'atk': 105, 'def': 100, 'spa': 79, 'spd': 83, 'spe': 78},
    'weight': 88.8
  },
  'Flaaffy': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 70, 'atk': 55, 'def': 55, 'spa': 80, 'spd': 60, 'spe': 45},
    'weight': 13.3,
    'canEvolve': true
  },
  'Forretress': {
    'type1': 'Bug',
    'type2': 'Steel',
    'baseStats':
        {'hp': 75, 'atk': 90, 'def': 140, 'spa': 60, 'spd': 60, 'spe': 40},
    'weight': 125.8
  },
  'Furret': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 85, 'atk': 76, 'def': 64, 'spa': 45, 'spd': 55, 'spe': 90},
    'weight': 32.5
  },
  'Girafarig': {
    'type1': 'Normal',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 70, 'atk': 80, 'def': 65, 'spa': 90, 'spd': 65, 'spe': 85},
    'weight': 41.5
  },
  'Gligar': {
    'type1': 'Ground',
    'type2': 'Flying',
    'baseStats':
        {'hp': 65, 'atk': 75, 'def': 105, 'spa': 35, 'spd': 65, 'spe': 85},
    'weight': 64.8
  },
  'Granbull': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 90, 'atk': 120, 'def': 75, 'spa': 60, 'spd': 60, 'spe': 45},
    'weight': 48.7
  },
  'Heracross': {
    'type1': 'Bug',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 80, 'atk': 125, 'def': 75, 'spa': 40, 'spd': 95, 'spe': 85},
    'weight': 54.0
  },
  'Hitmontop': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 50, 'atk': 95, 'def': 95, 'spa': 35, 'spd': 110, 'spe': 70},
    'weight': 48.0
  },
  'Ho-Oh': {
    'type1': 'Fire',
    'type2': 'Flying',
    'baseStats':
        {'hp': 106, 'atk': 130, 'def': 90, 'spa': 110, 'spd': 154, 'spe': 90},
    'weight': 199.0,
    'gender': 'genderless'
  },
  'Hoothoot': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 60, 'atk': 30, 'def': 30, 'spa': 36, 'spd': 56, 'spe': 50},
    'weight': 21.2,
    'canEvolve': true
  },
  'Hoppip': {
    'type1': 'Grass',
    'type2': 'Flying',
    'baseStats':
        {'hp': 35, 'atk': 35, 'def': 40, 'spa': 35, 'spd': 55, 'spe': 50},
    'weight': 0.5,
    'canEvolve': true
  },
  'Houndoom': {
    'type1': 'Dark',
    'type2': 'Fire',
    'baseStats':
        {'hp': 75, 'atk': 90, 'def': 50, 'spa': 110, 'spd': 80, 'spe': 95},
    'weight': 35.0
  },
  'Houndour': {
    'type1': 'Dark',
    'type2': 'Fire',
    'baseStats':
        {'hp': 45, 'atk': 60, 'def': 30, 'spa': 80, 'spd': 50, 'spe': 65},
    'weight': 10.8,
    'canEvolve': true
  },
  'Igglybuff': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 90, 'atk': 30, 'def': 15, 'spa': 40, 'spd': 20, 'spe': 15},
    'weight': 1.0,
    'canEvolve': true
  },
  'Jumpluff': {
    'type1': 'Grass',
    'type2': 'Flying',
    'baseStats':
        {'hp': 75, 'atk': 55, 'def': 70, 'spa': 55, 'spd': 85, 'spe': 110},
    'weight': 3.0
  },
  'Kingdra': {
    'type1': 'Water',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 75, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 85},
    'weight': 152.0
  },
  'Lanturn': {
    'type1': 'Water',
    'type2': 'Electric',
    'baseStats':
        {'hp': 125, 'atk': 58, 'def': 58, 'spa': 76, 'spd': 76, 'spe': 67},
    'weight': 22.5
  },
  'Larvitar': {
    'type1': 'Rock',
    'type2': 'Ground',
    'baseStats':
        {'hp': 50, 'atk': 64, 'def': 50, 'spa': 45, 'spd': 50, 'spe': 41},
    'weight': 72.0,
    'canEvolve': true
  },
  'Ledian': {
    'type1': 'Bug',
    'type2': 'Flying',
    'baseStats':
        {'hp': 55, 'atk': 35, 'def': 50, 'spa': 55, 'spd': 110, 'spe': 85},
    'weight': 35.6
  },
  'Ledyba': {
    'type1': 'Bug',
    'type2': 'Flying',
    'baseStats':
        {'hp': 40, 'atk': 20, 'def': 30, 'spa': 40, 'spd': 80, 'spe': 55},
    'weight': 10.8,
    'canEvolve': true
  },
  'Lugia': {
    'type1': 'Psychic',
    'type2': 'Flying',
    'baseStats':
        {'hp': 106, 'atk': 90, 'def': 130, 'spa': 90, 'spd': 154, 'spe': 110},
    'weight': 216.0,
    'gender': 'genderless'
  },
  'Magby': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 45, 'atk': 75, 'def': 37, 'spa': 70, 'spd': 55, 'spe': 83},
    'weight': 21.4,
    'canEvolve': true
  },
  'Magcargo': {
    'type1': 'Fire',
    'type2': 'Rock',
    'baseStats':
        {'hp': 50, 'atk': 50, 'def': 120, 'spa': 80, 'spd': 80, 'spe': 30},
    'weight': 55.0
  },
  'Mantine': {
    'type1': 'Water',
    'type2': 'Flying',
    'baseStats':
        {'hp': 65, 'atk': 40, 'def': 70, 'spa': 80, 'spd': 140, 'spe': 70},
    'weight': 220.0
  },
  'Mareep': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 55, 'atk': 40, 'def': 40, 'spa': 65, 'spd': 45, 'spe': 35},
    'weight': 7.8,
    'canEvolve': true
  },
  'Marill': {
    'type1': 'Water',
    'baseStats':
        {'hp': 70, 'atk': 20, 'def': 50, 'spa': 20, 'spd': 50, 'spe': 40},
    'weight': 8.5,
    'canEvolve': true
  },
  'Meganium': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 80, 'atk': 82, 'def': 100, 'spa': 83, 'spd': 100, 'spe': 80},
    'weight': 100.5
  },
  'Miltank': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 95, 'atk': 80, 'def': 105, 'spa': 40, 'spd': 70, 'spe': 100},
    'weight': 75.5
  },
  'Misdreavus': {
    'type1': 'Ghost',
    'baseStats':
        {'hp': 60, 'atk': 60, 'def': 60, 'spa': 85, 'spd': 85, 'spe': 85},
    'weight': 1.0,
    'ability': 'Levitate'
  },
  'Murkrow': {
    'type1': 'Dark',
    'type2': 'Flying',
    'baseStats':
        {'hp': 60, 'atk': 85, 'def': 42, 'spa': 85, 'spd': 42, 'spe': 91},
    'weight': 2.1
  },
  'Natu': {
    'type1': 'Psychic',
    'type2': 'Flying',
    'baseStats':
        {'hp': 40, 'atk': 50, 'def': 45, 'spa': 70, 'spd': 45, 'spe': 70},
    'weight': 2.0,
    'canEvolve': true
  },
  'Noctowl': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 100, 'atk': 50, 'def': 50, 'spa': 76, 'spd': 96, 'spe': 70},
    'weight': 40.8
  },
  'Octillery': {
    'type1': 'Water',
    'baseStats':
        {'hp': 75, 'atk': 105, 'def': 75, 'spa': 105, 'spd': 75, 'spe': 45},
    'weight': 28.5
  },
  'Phanpy': {
    'type1': 'Ground',
    'baseStats':
        {'hp': 90, 'atk': 60, 'def': 60, 'spa': 40, 'spd': 40, 'spe': 40},
    'weight': 33.5,
    'canEvolve': true
  },
  'Pichu': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 20, 'atk': 40, 'def': 15, 'spa': 35, 'spd': 35, 'spe': 60},
    'weight': 2.0,
    'canEvolve': true
  },
  'Piloswine': {
    'type1': 'Ice',
    'type2': 'Ground',
    'baseStats':
        {'hp': 100, 'atk': 100, 'def': 80, 'spa': 60, 'spd': 60, 'spe': 50},
    'weight': 55.8
  },
  'Pineco': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 50, 'atk': 65, 'def': 90, 'spa': 35, 'spd': 35, 'spe': 15},
    'weight': 7.2,
    'canEvolve': true
  },
  'Politoed': {
    'type1': 'Water',
    'baseStats':
        {'hp': 90, 'atk': 75, 'def': 75, 'spa': 90, 'spd': 100, 'spe': 70},
    'weight': 33.9
  },
  'Porygon': {'canEvolve': true, 'gender': 'genderless'},
  'Porygon2': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 85, 'atk': 80, 'def': 90, 'spa': 105, 'spd': 95, 'spe': 60},
    'weight': 32.5,
    'gender': 'genderless'
  },
  'Pupitar': {
    'type1': 'Rock',
    'type2': 'Ground',
    'baseStats':
        {'hp': 70, 'atk': 84, 'def': 70, 'spa': 65, 'spd': 70, 'spe': 51},
    'weight': 152.0,
    'ability': 'Shed Skin',
    'canEvolve': true
  },
  'Quagsire': {
    'type1': 'Water',
    'type2': 'Ground',
    'baseStats':
        {'hp': 95, 'atk': 85, 'def': 85, 'spa': 65, 'spd': 65, 'spe': 35},
    'weight': 75.0
  },
  'Quilava': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 58, 'atk': 64, 'def': 58, 'spa': 80, 'spd': 65, 'spe': 80},
    'weight': 19.0,
    'canEvolve': true
  },
  'Qwilfish': {
    'type1': 'Water',
    'type2': 'Poison',
    'baseStats':
        {'hp': 65, 'atk': 95, 'def': 75, 'spa': 55, 'spd': 55, 'spe': 85},
    'weight': 3.9
  },
  'Raikou': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 90, 'atk': 85, 'def': 75, 'spa': 115, 'spd': 100, 'spe': 115},
    'weight': 178.0,
    'ability': 'Pressure',
    'gender': 'genderless'
  },
  'Remoraid': {
    'type1': 'Water',
    'baseStats':
        {'hp': 35, 'atk': 65, 'def': 35, 'spa': 65, 'spd': 35, 'spe': 65},
    'weight': 12.0,
    'canEvolve': true
  },
  'Scizor': {
    'type1': 'Bug',
    'type2': 'Steel',
    'baseStats':
        {'hp': 70, 'atk': 130, 'def': 100, 'spa': 55, 'spd': 80, 'spe': 65},
    'weight': 118.0,
    'ability': 'Technician'
  },
  'Sentret': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 35, 'atk': 46, 'def': 34, 'spa': 35, 'spd': 45, 'spe': 20},
    'weight': 6.0,
    'canEvolve': true
  },
  'Shuckle': {
    'type1': 'Bug',
    'type2': 'Rock',
    'baseStats':
        {'hp': 20, 'atk': 10, 'def': 230, 'spa': 10, 'spd': 230, 'spe': 5},
    'weight': 20.5
  },
  'Skarmory': {
    'type1': 'Steel',
    'type2': 'Flying',
    'baseStats':
        {'hp': 65, 'atk': 80, 'def': 140, 'spa': 40, 'spd': 70, 'spe': 70},
    'weight': 50.5
  },
  'Skiploom': {
    'type1': 'Grass',
    'type2': 'Flying',
    'baseStats':
        {'hp': 55, 'atk': 45, 'def': 50, 'spa': 45, 'spd': 65, 'spe': 80},
    'weight': 1.0,
    'canEvolve': true
  },
  'Slowking': {
    'type1': 'Water',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 95, 'atk': 75, 'def': 80, 'spa': 100, 'spd': 110, 'spe': 30},
    'weight': 79.5
  },
  'Slugma': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 40, 'atk': 40, 'def': 40, 'spa': 70, 'spd': 40, 'spe': 20},
    'weight': 35.0,
    'canEvolve': true
  },
  'Smeargle': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 55, 'atk': 20, 'def': 35, 'spa': 20, 'spd': 45, 'spe': 75},
    'weight': 58.0
  },
  'Smoochum': {
    'type1': 'Ice',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 45, 'atk': 30, 'def': 15, 'spa': 85, 'spd': 65, 'spe': 65},
    'weight': 6.0,
    'canEvolve': true
  },
  'Sneasel': {
    'type1': 'Dark',
    'type2': 'Ice',
    'baseStats':
        {'hp': 55, 'atk': 95, 'def': 55, 'spa': 35, 'spd': 75, 'spe': 115},
    'weight': 28.0,
    'canEvolve': true
  },
  'Snubbull': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 60, 'atk': 80, 'def': 50, 'spa': 40, 'spd': 40, 'spe': 30},
    'weight': 7.8,
    'canEvolve': true
  },
  'Spinarak': {
    'type1': 'Bug',
    'type2': 'Poison',
    'baseStats':
        {'hp': 40, 'atk': 60, 'def': 40, 'spa': 40, 'spd': 40, 'spe': 30},
    'weight': 8.5,
    'canEvolve': true
  },
  'Stantler': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 73, 'atk': 95, 'def': 62, 'spa': 85, 'spd': 65, 'spe': 85},
    'weight': 71.2
  },
  'Steelix': {
    'type1': 'Steel',
    'type2': 'Ground',
    'baseStats':
        {'hp': 75, 'atk': 85, 'def': 200, 'spa': 55, 'spd': 65, 'spe': 30},
    'weight': 400.0
  },
  'Sudowoodo': {
    'type1': 'Rock',
    'baseStats':
        {'hp': 70, 'atk': 100, 'def': 115, 'spa': 30, 'spd': 65, 'spe': 30},
    'weight': 38.0
  },
  'Suicune': {
    'type1': 'Water',
    'baseStats':
        {'hp': 100, 'atk': 75, 'def': 115, 'spa': 90, 'spd': 115, 'spe': 85},
    'weight': 187.0,
    'ability': 'Pressure',
    'gender': 'genderless'
  },
  'Sunflora': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 75, 'atk': 75, 'def': 55, 'spa': 105, 'spd': 85, 'spe': 30},
    'weight': 8.5
  },
  'Sunkern': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 30, 'atk': 30, 'def': 30, 'spa': 30, 'spd': 30, 'spe': 30},
    'weight': 1.8,
    'canEvolve': true
  },
  'Swinub': {
    'type1': 'Ice',
    'type2': 'Ground',
    'baseStats':
        {'hp': 50, 'atk': 50, 'def': 40, 'spa': 30, 'spd': 30, 'spe': 50},
    'weight': 6.5,
    'canEvolve': true
  },
  'Teddiursa': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 60, 'atk': 80, 'def': 50, 'spa': 50, 'spd': 50, 'spe': 40},
    'weight': 8.8,
    'canEvolve': true
  },
  'Togepi': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 35, 'atk': 20, 'def': 65, 'spa': 40, 'spd': 65, 'spe': 20},
    'weight': 1.5,
    'canEvolve': true
  },
  'Togetic': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 55, 'atk': 40, 'def': 85, 'spa': 80, 'spd': 105, 'spe': 40},
    'weight': 3.2
  },
  'Totodile': {
    'type1': 'Water',
    'baseStats':
        {'hp': 50, 'atk': 65, 'def': 64, 'spa': 44, 'spd': 48, 'spe': 43},
    'weight': 9.5,
    'canEvolve': true
  },
  'Typhlosion': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 78, 'atk': 84, 'def': 78, 'spa': 109, 'spd': 85, 'spe': 100},
    'weight': 79.5
  },
  'Tyranitar': {
    'type1': 'Rock',
    'type2': 'Dark',
    'baseStats':
        {'hp': 100, 'atk': 134, 'def': 110, 'spa': 95, 'spd': 100, 'spe': 61},
    'weight': 202.0
  },
  'Tyrogue': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 35, 'atk': 35, 'def': 35, 'spa': 35, 'spd': 35, 'spe': 35},
    'weight': 21.0,
    'canEvolve': true
  },
  'Umbreon': {
    'type1': 'Dark',
    'baseStats':
        {'hp': 95, 'atk': 65, 'def': 110, 'spa': 60, 'spd': 130, 'spe': 65},
    'weight': 27.0
  },
  'Unown': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 48, 'atk': 72, 'def': 48, 'spa': 72, 'spd': 48, 'spe': 48},
    'weight': 5.0,
    'ability': 'Levitate',
    'gender': 'genderless'
  },
  'Ursaring': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 90, 'atk': 130, 'def': 75, 'spa': 75, 'spd': 75, 'spe': 55},
    'weight': 125.8
  },
  'Wobbuffet': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 190, 'atk': 33, 'def': 58, 'spa': 33, 'spd': 58, 'spe': 33},
    'weight': 28.5
  },
  'Wooper': {
    'type1': 'Water',
    'type2': 'Ground',
    'baseStats':
        {'hp': 55, 'atk': 45, 'def': 45, 'spa': 25, 'spd': 25, 'spe': 15},
    'weight': 8.5,
    'canEvolve': true
  },
  'Xatu': {
    'type1': 'Psychic',
    'type2': 'Flying',
    'baseStats':
        {'hp': 65, 'atk': 75, 'def': 70, 'spa': 95, 'spd': 70, 'spe': 95},
    'weight': 15.0
  },
  'Yanma': {
    'type1': 'Bug',
    'type2': 'Flying',
    'baseStats':
        {'hp': 65, 'atk': 65, 'def': 45, 'spa': 75, 'spd': 45, 'spe': 95},
    'weight': 38.0
  },
});

const ADV: {[name: string]: Species} = extend(true, {}, GSC, {
  'Abra': {'abilities': {'0': 'Synchronize', '1': 'Inner Focus'}},
  'Aerodactyl': {'abilities': {'0': 'Rock Head', '1': 'Pressure'}},
  'Alakazam': {'abilities': {'0': 'Synchronize', '1': 'Inner Focus'}},
  'Arbok': {'abilities': {'0': 'Intimidate', '1': 'Shed Skin'}},
  'Arcanine': {'abilities': {'0': 'Intimidate', '1': 'Flash Fire'}},
  'Articuno': {'abilities': {'0': 'Pressure'}},
  'Beedrill': {'abilities': {'0': 'Swarm'}},
  'Bellsprout': {'abilities': {'0': 'Chlorophyll'}},
  'Blastoise': {'abilities': {'0': 'Torrent'}},
  'Bulbasaur': {'abilities': {'0': 'Overgrow'}},
  'Butterfree': {'abilities': {'0': 'Compound Eyes'}},
  'Caterpie': {'abilities': {'0': 'Shield Dust'}},
  'Chansey': {'abilities': {'0': 'Natural Cure', '1': 'Serene Grace'}},
  'Charizard': {'abilities': {'0': 'Blaze'}},
  'Charmander': {'abilities': {'0': 'Blaze'}},
  'Charmeleon': {'abilities': {'0': 'Blaze'}},
  'Clefable': {'abilities': {'0': 'Cute Charm', '1': 'Magic Guard'}},
  'Clefairy': {'abilities': {'0': 'Cute Charm', '1': 'Magic Guard'}},
  'Cloyster': {'abilities': {'0': 'Shell Armor', '1': 'Skill Link'}},
  'Cubone': {'abilities': {'0': 'Rock Head', '1': 'Lightning Rod'}},
  'Dewgong': {'abilities': {'0': 'Thick Fat', '1': 'Hydration'}},
  'Diglett': {'abilities': {'0': 'Sand Veil', '1': 'Arena Trap'}},
  'Ditto': {'abilities': {'0': 'Limber'}},
  'Dodrio': {'abilities': {'0': 'Run Away', '1': 'Early Bird'}},
  'Doduo': {'abilities': {'0': 'Run Away', '1': 'Early Bird'}},
  'Dragonair': {'abilities': {'0': 'Shed Skin'}},
  'Dragonite': {'abilities': {'0': 'Inner Focus'}},
  'Dratini': {'abilities': {'0': 'Shed Skin'}},
  'Drowzee': {'abilities': {'0': 'Insomnia', '1': 'Forewarn'}},
  'Dugtrio': {'abilities': {'0': 'Sand Veil', '1': 'Arena Trap'}},
  'Eevee': {'abilities': {'0': 'Run Away', '1': 'Adaptability'}},
  'Ekans': {'abilities': {'0': 'Intimidate', '1': 'Shed Skin'}},
  'Electabuzz': {'abilities': {'0': 'Static'}},
  'Electrode': {'abilities': {'0': 'Soundproof', '1': 'Static'}},
  'Exeggcute': {'abilities': {'0': 'Chlorophyll'}},
  'Exeggutor': {'abilities': {'0': 'Chlorophyll'}},
  'Farfetch\'d': {'abilities': {'0': 'Keen Eye', '1': 'Inner Focus'}},
  'Fearow': {'abilities': {'0': 'Keen Eye'}},
  'Flareon': {'abilities': {'0': 'Flash Fire'}},
  'Gastly': {'abilities': {'0': 'Levitate'}},
  'Gengar': {'abilities': {'0': 'Levitate'}},
  'Geodude': {'abilities': {'0': 'Rock Head', '1': 'Sturdy'}},
  'Gloom': {'abilities': {'0': 'Chlorophyll'}},
  'Golbat': {'abilities': {'0': 'Inner Focus'}},
  'Goldeen': {'abilities': {'0': 'Swift Swim', '1': 'Water Veil'}},
  'Golduck': {'abilities': {'0': 'Damp', '1': 'Cloud Nine'}},
  'Golem': {'abilities': {'0': 'Rock Head', '1': 'Sturdy'}},
  'Graveler': {'abilities': {'0': 'Rock Head', '1': 'Sturdy'}},
  'Grimer': {'abilities': {'0': 'Stench', '1': 'Sticky Hold'}},
  'Growlithe': {'abilities': {'0': 'Intimidate', '1': 'Flash Fire'}},
  'Gyarados': {'abilities': {'0': 'Intimidate'}},
  'Haunter': {'abilities': {'0': 'Levitate'}},
  'Hitmonchan': {'abilities': {'0': 'Keen Eye', '1': 'Iron Fist'}},
  'Hitmonlee': {'abilities': {'0': 'Limber', '1': 'Reckless'}},
  'Horsea': {'abilities': {'0': 'Swift Swim', '1': 'Sniper'}},
  'Hypno': {'abilities': {'0': 'Insomnia', '1': 'Forewarn'}},
  'Ivysaur': {'abilities': {'0': 'Overgrow'}},
  'Jigglypuff': {'abilities': {'0': 'Cute Charm'}},
  'Jolteon': {'abilities': {'0': 'Volt Absorb'}},
  'Jynx': {'abilities': {'0': 'Oblivious', '1': 'Forewarn'}},
  'Kabuto': {'abilities': {'0': 'Swift Swim', '1': 'Battle Armor'}},
  'Kabutops': {'abilities': {'0': 'Swift Swim', '1': 'Battle Armor'}},
  'Kadabra': {'abilities': {'0': 'Synchronize', '1': 'Inner Focus'}},
  'Kakuna': {'abilities': {'0': 'Shed Skin'}},
  'Kangaskhan': {'abilities': {'0': 'Early Bird', '1': 'Scrappy'}},
  'Kingler': {'abilities': {'0': 'Hyper Cutter', '1': 'Shell Armor'}},
  'Koffing': {'abilities': {'0': 'Levitate'}},
  'Krabby': {'abilities': {'0': 'Hyper Cutter', '1': 'Shell Armor'}},
  'Lapras': {'abilities': {'0': 'Water Absorb', '1': 'Shell Armor'}},
  'Lickitung': {'abilities': {'0': 'Own Tempo', '1': 'Oblivious'}},
  'Machamp': {'abilities': {'0': 'Guts', '1': 'No Guard'}},
  'Machoke': {'abilities': {'0': 'Guts', '1': 'No Guard'}},
  'Machop': {'abilities': {'0': 'Guts', '1': 'No Guard'}},
  'Magikarp': {'abilities': {'0': 'Swift Swim'}},
  'Magmar': {'abilities': {'0': 'Flame Body'}},
  'Magnemite': {'abilities': {'0': 'Magnet Pull', '1': 'Sturdy'}},
  'Magneton': {'abilities': {'0': 'Magnet Pull', '1': 'Sturdy'}},
  'Mankey': {'abilities': {'0': 'Vital Spirit', '1': 'Anger Point'}},
  'Marowak': {'abilities': {'0': 'Rock Head', '1': 'Lightning Rod'}},
  'Meowth': {'abilities': {'0': 'Pickup', '1': 'Technician'}},
  'Metapod': {'abilities': {'0': 'Shed Skin'}},
  'Mew': {'abilities': {'0': 'Synchronize'}},
  'Mewtwo': {'abilities': {'0': 'Pressure'}},
  'Moltres': {'abilities': {'0': 'Pressure'}},
  'Mr. Mime': {'abilities': {'0': 'Soundproof', '1': 'Filter'}},
  'Muk': {'abilities': {'0': 'Stench', '1': 'Sticky Hold'}},
  'Nidoking': {'abilities': {'0': 'Poison Point', '1': 'Rivalry'}},
  'Nidoqueen': {'abilities': {'0': 'Poison Point', '1': 'Rivalry'}},
  'Nidoran-F': {'abilities': {'0': 'Poison Point', '1': 'Rivalry'}},
  'Nidoran-M': {'abilities': {'0': 'Poison Point', '1': 'Rivalry'}},
  'Nidorina': {'abilities': {'0': 'Poison Point', '1': 'Rivalry'}},
  'Nidorino': {'abilities': {'0': 'Poison Point', '1': 'Rivalry'}},
  'Ninetales': {'abilities': {'0': 'Flash Fire'}},
  'Oddish': {'abilities': {'0': 'Chlorophyll'}},
  'Omanyte': {'abilities': {'0': 'Swift Swim', '1': 'Shell Armor'}},
  'Omastar': {'abilities': {'0': 'Swift Swim', '1': 'Shell Armor'}},
  'Onix': {'abilities': {'0': 'Rock Head', '1': 'Sturdy'}},
  'Paras': {'abilities': {'0': 'Effect Spore', '1': 'Dry Skin'}},
  'Parasect': {'abilities': {'0': 'Effect Spore', '1': 'Dry Skin'}},
  'Persian': {'abilities': {'0': 'Limber', '1': 'Technician'}},
  'Pidgeot': {'abilities': {'0': 'Keen Eye', '1': 'Tangled Feet'}},
  'Pidgeotto': {'abilities': {'0': 'Keen Eye', '1': 'Tangled Feet'}},
  'Pidgey': {'abilities': {'0': 'Keen Eye', '1': 'Tangled Feet'}},
  'Pikachu': {'abilities': {'0': 'Static'}},
  'Pinsir': {'abilities': {'0': 'Hyper Cutter', '1': 'Mold Breaker'}},
  'Poliwag': {'abilities': {'0': 'Water Absorb', '1': 'Damp'}},
  'Poliwhirl': {'abilities': {'0': 'Water Absorb', '1': 'Damp'}},
  'Poliwrath': {'abilities': {'0': 'Water Absorb', '1': 'Damp'}},
  'Ponyta': {'abilities': {'0': 'Run Away', '1': 'Flash Fire'}},
  'Porygon': {'abilities': {'0': 'Trace', '1': 'Download'}},
  'Primeape': {'abilities': {'0': 'Vital Spirit', '1': 'Anger Point'}},
  'Psyduck': {'abilities': {'0': 'Damp', '1': 'Cloud Nine'}},
  'Raichu': {'abilities': {'0': 'Static'}},
  'Rapidash': {'abilities': {'0': 'Run Away', '1': 'Flash Fire'}},
  'Raticate': {'abilities': {'0': 'Run Away', '1': 'Guts'}},
  'Rattata': {'abilities': {'0': 'Run Away', '1': 'Guts'}},
  'Rhydon': {'abilities': {'0': 'Lightning Rod', '1': 'Rock Head'}},
  'Rhyhorn': {'abilities': {'0': 'Lightning Rod', '1': 'Rock Head'}},
  'Sandshrew': {'abilities': {'0': 'Sand Veil'}},
  'Sandslash': {'abilities': {'0': 'Sand Veil'}},
  'Scyther': {'abilities': {'0': 'Swarm', '1': 'Technician'}},
  'Seadra': {'abilities': {'0': 'Poison Point', '1': 'Sniper'}},
  'Seaking': {'abilities': {'0': 'Swift Swim', '1': 'Water Veil'}},
  'Seel': {'abilities': {'0': 'Thick Fat', '1': 'Hydration'}},
  'Shellder': {'abilities': {'0': 'Shell Armor', '1': 'Skill Link'}},
  'Slowbro': {'abilities': {'0': 'Oblivious', '1': 'Own Tempo'}},
  'Slowpoke': {'abilities': {'0': 'Oblivious', '1': 'Own Tempo'}},
  'Snorlax': {'abilities': {'0': 'Immunity', '1': 'Thick Fat'}},
  'Spearow': {'abilities': {'0': 'Keen Eye'}},
  'Squirtle': {'abilities': {'0': 'Torrent'}},
  'Starmie': {'abilities': {'0': 'Illuminate', '1': 'Natural Cure'}},
  'Staryu': {'abilities': {'0': 'Illuminate', '1': 'Natural Cure'}},
  'Tangela': {'abilities': {'0': 'Chlorophyll', '1': 'Leaf Guard'}},
  'Tauros': {'abilities': {'0': 'Intimidate', '1': 'Anger Point'}},
  'Tentacool': {'abilities': {'0': 'Clear Body', '1': 'Liquid Ooze'}},
  'Tentacruel': {'abilities': {'0': 'Clear Body', '1': 'Liquid Ooze'}},
  'Vaporeon': {'abilities': {'0': 'Water Absorb'}},
  'Venomoth': {'abilities': {'0': 'Shield Dust', '1': 'Tinted Lens'}},
  'Venonat': {'abilities': {'0': 'Compound Eyes', '1': 'Tinted Lens'}},
  'Venusaur': {'abilities': {'0': 'Overgrow'}},
  'Victreebel': {'abilities': {'0': 'Chlorophyll'}},
  'Vileplume': {'abilities': {'0': 'Chlorophyll'}},
  'Voltorb': {'abilities': {'0': 'Soundproof', '1': 'Static'}},
  'Vulpix': {'abilities': {'0': 'Flash Fire'}},
  'Wartortle': {'abilities': {'0': 'Torrent'}},
  'Weedle': {'abilities': {'0': 'Shield Dust'}},
  'Weepinbell': {'abilities': {'0': 'Chlorophyll'}},
  'Weezing': {'abilities': {'0': 'Levitate'}},
  'Wigglytuff': {'abilities': {'0': 'Cute Charm'}},
  'Zapdos': {'abilities': {'0': 'Pressure'}},
  'Zubat': {'abilities': {'0': 'Inner Focus'}},
  'Aipom': {'abilities': {'0': 'Run Away', '1': 'Pickup'}},
  'Ampharos': {'abilities': {'0': 'Static'}},
  'Ariados': {'abilities': {'0': 'Swarm', '1': 'Insomnia'}},
  'Azumarill': {'abilities': {'0': 'Thick Fat', '1': 'Huge Power'}},
  'Bayleef': {'abilities': {'0': 'Overgrow'}},
  'Bellossom': {'abilities': {'0': 'Chlorophyll'}},
  'Blissey': {'abilities': {'0': 'Natural Cure', '1': 'Serene Grace'}},
  'Celebi': {'abilities': {'0': 'Natural Cure'}},
  'Chikorita': {'abilities': {'0': 'Overgrow'}},
  'Chinchou': {'abilities': {'0': 'Volt Absorb', '1': 'Illuminate'}},
  'Cleffa': {'abilities': {'0': 'Cute Charm', '1': 'Magic Guard'}},
  'Corsola': {'abilities': {'0': 'Hustle', '1': 'Natural Cure'}},
  'Crobat': {'abilities': {'0': 'Inner Focus'}},
  'Croconaw': {'abilities': {'0': 'Torrent'}},
  'Cyndaquil': {'abilities': {'0': 'Blaze'}},
  'Delibird': {'abilities': {'0': 'Vital Spirit', '1': 'Hustle'}},
  'Donphan': {'abilities': {'0': 'Sturdy'}},
  'Dunsparce': {'abilities': {'0': 'Serene Grace', '1': 'Run Away'}},
  'Elekid': {'abilities': {'0': 'Static'}},
  'Entei': {'abilities': {'0': 'Pressure'}},
  'Espeon': {'abilities': {'0': 'Synchronize'}},
  'Feraligatr': {'abilities': {'0': 'Torrent'}},
  'Flaaffy': {'abilities': {'0': 'Static'}},
  'Forretress': {'abilities': {'0': 'Sturdy'}},
  'Furret': {'abilities': {'0': 'Run Away', '1': 'Keen Eye'}},
  'Girafarig': {'abilities': {'0': 'Inner Focus', '1': 'Early Bird'}},
  'Gligar': {'abilities': {'0': 'Hyper Cutter', '1': 'Sand Veil'}},
  'Granbull': {'abilities': {'0': 'Intimidate', '1': 'Quick Feet'}},
  'Heracross': {'abilities': {'0': 'Swarm', '1': 'Guts'}},
  'Hitmontop': {'abilities': {'0': 'Intimidate', '1': 'Technician'}},
  'Ho-Oh': {'abilities': {'0': 'Pressure'}},
  'Hoothoot': {'abilities': {'0': 'Insomnia', '1': 'Keen Eye'}},
  'Hoppip': {'abilities': {'0': 'Chlorophyll', '1': 'Leaf Guard'}},
  'Houndoom': {'abilities': {'0': 'Early Bird', '1': 'Flash Fire'}},
  'Houndour': {'abilities': {'0': 'Early Bird', '1': 'Flash Fire'}},
  'Igglybuff': {'abilities': {'0': 'Cute Charm'}},
  'Jumpluff': {'abilities': {'0': 'Chlorophyll', '1': 'Leaf Guard'}},
  'Kingdra': {'abilities': {'0': 'Swift Swim', '1': 'Sniper'}},
  'Lanturn': {'abilities': {'0': 'Volt Absorb', '1': 'Illuminate'}},
  'Larvitar': {'abilities': {'0': 'Guts'}},
  'Ledian': {'abilities': {'0': 'Swarm', '1': 'Early Bird'}},
  'Ledyba': {'abilities': {'0': 'Swarm', '1': 'Early Bird'}},
  'Lugia': {'abilities': {'0': 'Pressure'}},
  'Magby': {'abilities': {'0': 'Flame Body'}},
  'Magcargo': {'abilities': {'0': 'Magma Armor', '1': 'Flame Body'}},
  'Mantine': {'abilities': {'0': 'Swift Swim', '1': 'Water Absorb'}},
  'Mareep': {'abilities': {'0': 'Static'}},
  'Marill': {'abilities': {'0': 'Thick Fat', '1': 'Huge Power'}},
  'Meganium': {'abilities': {'0': 'Overgrow'}},
  'Miltank': {'abilities': {'0': 'Thick Fat', '1': 'Scrappy'}},
  'Misdreavus': {'abilities': {'0': 'Levitate'}},
  'Murkrow': {'abilities': {'0': 'Insomnia', '1': 'Super Luck'}},
  'Natu': {'abilities': {'0': 'Synchronize', '1': 'Early Bird'}},
  'Noctowl': {'abilities': {'0': 'Insomnia', '1': 'Keen Eye'}},
  'Octillery': {'abilities': {'0': 'Suction Cups', '1': 'Sniper'}},
  'Phanpy': {'abilities': {'0': 'Pickup'}},
  'Pichu': {'abilities': {'0': 'Static'}},
  'Piloswine': {'abilities': {'0': 'Oblivious', '1': 'Snow Cloak'}},
  'Pineco': {'abilities': {'0': 'Sturdy'}},
  'Politoed': {'abilities': {'0': 'Water Absorb', '1': 'Damp'}},
  'Porygon2': {'abilities': {'0': 'Trace', '1': 'Download'}},
  'Pupitar': {'abilities': {'0': 'Shed Skin'}},
  'Quagsire': {'abilities': {'0': 'Damp', '1': 'Water Absorb'}},
  'Quilava': {'abilities': {'0': 'Blaze'}},
  'Qwilfish': {'abilities': {'0': 'Poison Point', '1': 'Swift Swim'}},
  'Raikou': {'abilities': {'0': 'Pressure'}},
  'Remoraid': {'abilities': {'0': 'Hustle', '1': 'Sniper'}},
  'Scizor': {'abilities': {'0': 'Swarm', '1': 'Technician'}},
  'Sentret': {'abilities': {'0': 'Run Away', '1': 'Keen Eye'}},
  'Shuckle': {'abilities': {'0': 'Sturdy', '1': 'Gluttony'}},
  'Skarmory': {'abilities': {'0': 'Keen Eye', '1': 'Sturdy'}},
  'Skiploom': {'abilities': {'0': 'Chlorophyll', '1': 'Leaf Guard'}},
  'Slowking': {'abilities': {'0': 'Oblivious', '1': 'Own Tempo'}},
  'Slugma': {'abilities': {'0': 'Magma Armor', '1': 'Flame Body'}},
  'Smeargle': {'abilities': {'0': 'Own Tempo', '1': 'Technician'}},
  'Smoochum': {'abilities': {'0': 'Oblivious', '1': 'Forewarn'}},
  'Sneasel': {'abilities': {'0': 'Inner Focus', '1': 'Keen Eye'}},
  'Snubbull': {'abilities': {'0': 'Intimidate', '1': 'Run Away'}},
  'Spinarak': {'abilities': {'0': 'Swarm', '1': 'Insomnia'}},
  'Stantler': {'abilities': {'0': 'Intimidate', '1': 'Frisk'}},
  'Steelix': {'abilities': {'0': 'Rock Head', '1': 'Sturdy'}},
  'Sudowoodo': {'abilities': {'0': 'Sturdy', '1': 'Rock Head'}},
  'Suicune': {'abilities': {'0': 'Pressure'}},
  'Sunflora': {'abilities': {'0': 'Chlorophyll', '1': 'Solar Power'}},
  'Sunkern': {'abilities': {'0': 'Chlorophyll', '1': 'Solar Power'}},
  'Swinub': {'abilities': {'0': 'Oblivious', '1': 'Snow Cloak'}},
  'Teddiursa': {'abilities': {'0': 'Pickup', '1': 'Quick Feet'}},
  'Togepi': {'abilities': {'0': 'Hustle', '1': 'Serene Grace'}},
  'Togetic': {'abilities': {'0': 'Hustle', '1': 'Serene Grace'}},
  'Totodile': {'abilities': {'0': 'Torrent'}},
  'Typhlosion': {'abilities': {'0': 'Blaze'}},
  'Tyranitar': {'abilities': {'0': 'Sand Stream'}},
  'Tyrogue': {'abilities': {'0': 'Guts', '1': 'Steadfast'}},
  'Umbreon': {'abilities': {'0': 'Synchronize'}},
  'Unown': {'abilities': {'0': 'Levitate'}},
  'Ursaring': {'abilities': {'0': 'Guts', '1': 'Quick Feet'}},
  'Wobbuffet': {'abilities': {'0': 'Shadow Tag'}},
  'Wooper': {'abilities': {'0': 'Damp', '1': 'Water Absorb'}},
  'Xatu': {'abilities': {'0': 'Synchronize', '1': 'Early Bird'}},
  'Yanma': {'abilities': {'0': 'Speed Boost', '1': 'Compound Eyes'}},
  'Absol': {
    'type1': 'Dark',
    'baseStats':
        {'hp': 65, 'atk': 130, 'def': 60, 'spa': 75, 'spd': 60, 'spe': 75},
    'weight': 47,
    'abilities': {'0': 'Pressure', '1': 'Super Luck'}
  },
  'Aggron': {
    'type1': 'Steel',
    'type2': 'Rock',
    'baseStats':
        {'hp': 70, 'atk': 110, 'def': 180, 'spa': 60, 'spd': 60, 'spe': 50},
    'weight': 360,
    'abilities': {'0': 'Sturdy', '1': 'Rock Head'}
  },
  'Altaria': {
    'type1': 'Dragon',
    'type2': 'Flying',
    'baseStats':
        {'hp': 75, 'atk': 70, 'def': 90, 'spa': 70, 'spd': 105, 'spe': 80},
    'weight': 20.6,
    'abilities': {'0': 'Natural Cure'}
  },
  'Anorith': {
    'type1': 'Rock',
    'type2': 'Bug',
    'baseStats':
        {'hp': 45, 'atk': 95, 'def': 50, 'spa': 40, 'spd': 50, 'spe': 75},
    'weight': 12.5,
    'canEvolve': true,
    'abilities': {'0': 'Battle Armor'}
  },
  'Armaldo': {
    'type1': 'Rock',
    'type2': 'Bug',
    'baseStats':
        {'hp': 75, 'atk': 125, 'def': 100, 'spa': 70, 'spd': 80, 'spe': 45},
    'weight': 68.2,
    'abilities': {'0': 'Battle Armor'}
  },
  'Aron': {
    'type1': 'Steel',
    'type2': 'Rock',
    'baseStats':
        {'hp': 50, 'atk': 70, 'def': 100, 'spa': 40, 'spd': 40, 'spe': 30},
    'weight': 60,
    'canEvolve': true,
    'abilities': {'0': 'Sturdy', '1': 'Rock Head'}
  },
  'Azurill': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 50, 'atk': 20, 'def': 40, 'spa': 20, 'spd': 40, 'spe': 20},
    'weight': 2,
    'canEvolve': true,
    'abilities': {'0': 'Thick Fat', '1': 'Huge Power'}
  },
  'Bagon': {
    'type1': 'Dragon',
    'baseStats':
        {'hp': 45, 'atk': 75, 'def': 60, 'spa': 40, 'spd': 30, 'spe': 50},
    'weight': 42.1,
    'canEvolve': true,
    'abilities': {'0': 'Rock Head'}
  },
  'Baltoy': {
    'type1': 'Ground',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 40, 'atk': 40, 'def': 55, 'spa': 40, 'spd': 70, 'spe': 55},
    'weight': 21.5,
    'ability': 'Levitate',
    'canEvolve': true,
    'gender': 'genderless',
    'abilities': {'0': 'Levitate'}
  },
  'Banette': {
    'type1': 'Ghost',
    'baseStats':
        {'hp': 64, 'atk': 115, 'def': 65, 'spa': 83, 'spd': 63, 'spe': 65},
    'weight': 12.5,
    'abilities': {'0': 'Insomnia', '1': 'Frisk'}
  },
  'Barboach': {
    'type1': 'Water',
    'type2': 'Ground',
    'baseStats':
        {'hp': 50, 'atk': 48, 'def': 43, 'spa': 46, 'spd': 41, 'spe': 60},
    'weight': 1.9,
    'canEvolve': true,
    'abilities': {'0': 'Oblivious', '1': 'Anticipation'}
  },
  'Beautifly': {
    'type1': 'Bug',
    'type2': 'Flying',
    'baseStats':
        {'hp': 60, 'atk': 70, 'def': 50, 'spa': 90, 'spd': 50, 'spe': 65},
    'weight': 28.4,
    'abilities': {'0': 'Swarm'}
  },
  'Beldum': {
    'type1': 'Steel',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 40, 'atk': 55, 'def': 80, 'spa': 35, 'spd': 60, 'spe': 30},
    'weight': 95.2,
    'canEvolve': true,
    'gender': 'genderless',
    'abilities': {'0': 'Clear Body'}
  },
  'Blaziken': {
    'type1': 'Fire',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 80, 'atk': 120, 'def': 70, 'spa': 110, 'spd': 70, 'spe': 80},
    'weight': 52,
    'abilities': {'0': 'Blaze'}
  },
  'Breloom': {
    'type1': 'Grass',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 60, 'atk': 130, 'def': 80, 'spa': 60, 'spd': 60, 'spe': 70},
    'weight': 39.2,
    'abilities': {'0': 'Effect Spore', '1': 'Poison Heal'}
  },
  'Cacnea': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 50, 'atk': 85, 'def': 40, 'spa': 85, 'spd': 40, 'spe': 35},
    'weight': 51.3,
    'canEvolve': true,
    'abilities': {'0': 'Sand Veil'}
  },
  'Cacturne': {
    'type1': 'Grass',
    'type2': 'Dark',
    'baseStats':
        {'hp': 70, 'atk': 115, 'def': 60, 'spa': 115, 'spd': 60, 'spe': 55},
    'weight': 77.4,
    'abilities': {'0': 'Sand Veil'}
  },
  'Camerupt': {
    'type1': 'Fire',
    'type2': 'Ground',
    'baseStats':
        {'hp': 70, 'atk': 100, 'def': 70, 'spa': 105, 'spd': 75, 'spe': 40},
    'weight': 220,
    'abilities': {'0': 'Magma Armor', '1': 'Solid Rock'}
  },
  'Carvanha': {
    'type1': 'Water',
    'type2': 'Dark',
    'baseStats':
        {'hp': 45, 'atk': 90, 'def': 20, 'spa': 65, 'spd': 20, 'spe': 65},
    'weight': 20.8,
    'canEvolve': true,
    'abilities': {'0': 'Rough Skin'}
  },
  'Cascoon': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 50, 'atk': 35, 'def': 55, 'spa': 25, 'spd': 25, 'spe': 15},
    'weight': 11.5,
    'ability': 'Shed Skin',
    'canEvolve': true,
    'abilities': {'0': 'Shed Skin'}
  },
  'Castform': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 70, 'atk': 70, 'def': 70, 'spa': 70, 'spd': 70, 'spe': 70},
    'weight': 0.8,
    'ability': 'Forecast',
    'abilities': {'0': 'Forecast'}
  },
  'Chimecho': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 65, 'atk': 50, 'def': 70, 'spa': 95, 'spd': 80, 'spe': 65},
    'weight': 1,
    'ability': 'Levitate',
    'abilities': {'0': 'Levitate'}
  },
  'Clamperl': {
    'type1': 'Water',
    'baseStats':
        {'hp': 35, 'atk': 64, 'def': 85, 'spa': 74, 'spd': 55, 'spe': 32},
    'weight': 52.5,
    'canEvolve': true,
    'abilities': {'0': 'Shell Armor'}
  },
  'Claydol': {
    'type1': 'Ground',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 60, 'atk': 70, 'def': 105, 'spa': 70, 'spd': 120, 'spe': 75},
    'weight': 108,
    'ability': 'Levitate',
    'gender': 'genderless',
    'abilities': {'0': 'Levitate'}
  },
  'Combusken': {
    'type1': 'Fire',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 60, 'atk': 85, 'def': 60, 'spa': 85, 'spd': 60, 'spe': 55},
    'weight': 19.5,
    'canEvolve': true,
    'abilities': {'0': 'Blaze'}
  },
  'Corphish': {
    'type1': 'Water',
    'baseStats':
        {'hp': 43, 'atk': 80, 'def': 65, 'spa': 50, 'spd': 35, 'spe': 35},
    'weight': 11.5,
    'canEvolve': true,
    'abilities': {'0': 'Hyper Cutter', '1': 'Shell Armor'}
  },
  'Cradily': {
    'type1': 'Rock',
    'type2': 'Grass',
    'baseStats':
        {'hp': 86, 'atk': 81, 'def': 97, 'spa': 81, 'spd': 107, 'spe': 43},
    'weight': 60.4,
    'abilities': {'0': 'Suction Cups'}
  },
  'Crawdaunt': {
    'type1': 'Water',
    'type2': 'Dark',
    'baseStats':
        {'hp': 63, 'atk': 120, 'def': 85, 'spa': 90, 'spd': 55, 'spe': 55},
    'weight': 32.8,
    'abilities': {'0': 'Hyper Cutter', '1': 'Shell Armor'}
  },
  'Delcatty': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 70, 'atk': 65, 'def': 65, 'spa': 55, 'spd': 55, 'spe': 70},
    'weight': 32.6,
    'abilities': {'0': 'Cute Charm', '1': 'Normalize'}
  },
  'Deoxys': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 50, 'atk': 150, 'def': 50, 'spa': 150, 'spd': 50, 'spe': 150},
    'weight': 60.8,
    'ability': 'Pressure',
    'gender': 'genderless',
    'abilities': {'0': 'Pressure'}
  },
  'Deoxys-Attack': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 50, 'atk': 180, 'def': 20, 'spa': 180, 'spd': 20, 'spe': 150},
    'weight': 60.8,
    'ability': 'Pressure',
    'gender': 'genderless',
    'abilities': {'0': 'Pressure'}
  },
  'Deoxys-Defense': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 50, 'atk': 70, 'def': 160, 'spa': 70, 'spd': 160, 'spe': 90},
    'weight': 60.8,
    'ability': 'Pressure',
    'gender': 'genderless',
    'abilities': {'0': 'Pressure'}
  },
  'Deoxys-Speed': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 50, 'atk': 95, 'def': 90, 'spa': 95, 'spd': 90, 'spe': 180},
    'weight': 60.8,
    'ability': 'Pressure',
    'gender': 'genderless',
    'abilities': {'0': 'Pressure'}
  },
  'Dusclops': {
    'type1': 'Ghost',
    'baseStats':
        {'hp': 40, 'atk': 70, 'def': 130, 'spa': 60, 'spd': 130, 'spe': 25},
    'weight': 30.6,
    'canEvolve': true,
    'abilities': {'0': 'Pressure'}
  },
  'Duskull': {
    'type1': 'Ghost',
    'baseStats':
        {'hp': 20, 'atk': 40, 'def': 90, 'spa': 30, 'spd': 90, 'spe': 25},
    'weight': 15,
    'canEvolve': true,
    'abilities': {'0': 'Levitate'}
  },
  'Dustox': {
    'type1': 'Bug',
    'type2': 'Poison',
    'baseStats':
        {'hp': 60, 'atk': 50, 'def': 70, 'spa': 50, 'spd': 90, 'spe': 65},
    'weight': 31.6,
    'abilities': {'0': 'Shield Dust'}
  },
  'Electrike': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 40, 'atk': 45, 'def': 40, 'spa': 65, 'spd': 40, 'spe': 65},
    'weight': 15.2,
    'canEvolve': true,
    'abilities': {'0': 'Static', '1': 'Lightning Rod'}
  },
  'Exploud': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 104, 'atk': 91, 'def': 63, 'spa': 91, 'spd': 63, 'spe': 68},
    'weight': 84,
    'abilities': {'0': 'Soundproof'}
  },
  'Feebas': {
    'type1': 'Water',
    'baseStats':
        {'hp': 20, 'atk': 15, 'def': 20, 'spa': 10, 'spd': 55, 'spe': 80},
    'weight': 7.4,
    'canEvolve': true,
    'abilities': {'0': 'Swift Swim', '1': 'Oblivious'}
  },
  'Flygon': {
    'type1': 'Ground',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 80, 'atk': 100, 'def': 80, 'spa': 80, 'spd': 80, 'spe': 100},
    'weight': 82,
    'ability': 'Levitate',
    'abilities': {'0': 'Levitate'}
  },
  'Gardevoir': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 68, 'atk': 65, 'def': 65, 'spa': 125, 'spd': 115, 'spe': 80},
    'weight': 48.4,
    'abilities': {'0': 'Synchronize', '1': 'Trace'}
  },
  'Glalie': {
    'type1': 'Ice',
    'baseStats':
        {'hp': 80, 'atk': 80, 'def': 80, 'spa': 80, 'spd': 80, 'spe': 80},
    'weight': 256.5,
    'abilities': {'0': 'Inner Focus', '1': 'Ice Body'}
  },
  'Gorebyss': {
    'type1': 'Water',
    'baseStats':
        {'hp': 55, 'atk': 84, 'def': 105, 'spa': 114, 'spd': 75, 'spe': 52},
    'weight': 22.6,
    'abilities': {'0': 'Swift Swim'}
  },
  'Groudon': {
    'type1': 'Ground',
    'baseStats':
        {'hp': 100, 'atk': 150, 'def': 140, 'spa': 100, 'spd': 90, 'spe': 90},
    'weight': 950,
    'ability': 'Drought',
    'gender': 'genderless',
    'abilities': {'0': 'Drought'}
  },
  'Grovyle': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 50, 'atk': 65, 'def': 45, 'spa': 85, 'spd': 65, 'spe': 95},
    'weight': 21.6,
    'canEvolve': true,
    'abilities': {'0': 'Overgrow'}
  },
  'Grumpig': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 80, 'atk': 45, 'def': 65, 'spa': 90, 'spd': 110, 'spe': 80},
    'weight': 71.5,
    'abilities': {'0': 'Thick Fat', '1': 'Own Tempo'}
  },
  'Gulpin': {
    'type1': 'Poison',
    'baseStats':
        {'hp': 70, 'atk': 43, 'def': 53, 'spa': 43, 'spd': 53, 'spe': 40},
    'weight': 10.3,
    'canEvolve': true,
    'abilities': {'0': 'Liquid Ooze', '1': 'Sticky Hold'}
  },
  'Hariyama': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 144, 'atk': 120, 'def': 60, 'spa': 40, 'spd': 60, 'spe': 50},
    'weight': 253.8,
    'abilities': {'0': 'Thick Fat', '1': 'Guts'}
  },
  'Huntail': {
    'type1': 'Water',
    'baseStats':
        {'hp': 55, 'atk': 104, 'def': 105, 'spa': 94, 'spd': 75, 'spe': 52},
    'weight': 27,
    'abilities': {'0': 'Swift Swim'}
  },
  'Illumise': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 65, 'atk': 47, 'def': 55, 'spa': 73, 'spd': 75, 'spe': 85},
    'weight': 17.7,
    'abilities': {'0': 'Oblivious', '1': 'Tinted Lens'}
  },
  'Jirachi': {
    'type1': 'Steel',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 100, 'atk': 100, 'def': 100, 'spa': 100, 'spd': 100, 'spe': 100},
    'weight': 1.1,
    'ability': 'Serene Grace',
    'gender': 'genderless',
    'abilities': {'0': 'Serene Grace'}
  },
  'Kecleon': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 60, 'atk': 90, 'def': 70, 'spa': 60, 'spd': 120, 'spe': 40},
    'weight': 22,
    'abilities': {'0': 'Color Change'}
  },
  'Kirlia': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 38, 'atk': 35, 'def': 35, 'spa': 65, 'spd': 55, 'spe': 50},
    'weight': 20.2,
    'canEvolve': true,
    'abilities': {'0': 'Synchronize', '1': 'Trace'}
  },
  'Kyogre': {
    'type1': 'Water',
    'baseStats':
        {'hp': 100, 'atk': 100, 'def': 90, 'spa': 150, 'spd': 140, 'spe': 90},
    'weight': 352,
    'ability': 'Drizzle',
    'gender': 'genderless',
    'abilities': {'0': 'Drizzle'}
  },
  'Lairon': {
    'type1': 'Steel',
    'type2': 'Rock',
    'baseStats':
        {'hp': 60, 'atk': 90, 'def': 140, 'spa': 50, 'spd': 50, 'spe': 40},
    'weight': 120,
    'canEvolve': true,
    'abilities': {'0': 'Sturdy', '1': 'Rock Head'}
  },
  'Latias': {
    'type1': 'Dragon',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 80, 'atk': 80, 'def': 90, 'spa': 110, 'spd': 130, 'spe': 110},
    'weight': 40,
    'ability': 'Levitate',
    'abilities': {'0': 'Levitate'}
  },
  'Latios': {
    'type1': 'Dragon',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 80, 'atk': 90, 'def': 80, 'spa': 130, 'spd': 110, 'spe': 110},
    'weight': 60,
    'ability': 'Levitate',
    'abilities': {'0': 'Levitate'}
  },
  'Lileep': {
    'type1': 'Rock',
    'type2': 'Grass',
    'baseStats':
        {'hp': 66, 'atk': 41, 'def': 77, 'spa': 61, 'spd': 87, 'spe': 23},
    'weight': 23.8,
    'canEvolve': true,
    'abilities': {'0': 'Suction Cups'}
  },
  'Linoone': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 78, 'atk': 70, 'def': 61, 'spa': 50, 'spd': 61, 'spe': 100},
    'weight': 32.5,
    'abilities': {'0': 'Pickup', '1': 'Gluttony'}
  },
  'Lombre': {
    'type1': 'Water',
    'type2': 'Grass',
    'baseStats':
        {'hp': 60, 'atk': 50, 'def': 50, 'spa': 60, 'spd': 70, 'spe': 50},
    'weight': 32.5,
    'canEvolve': true,
    'abilities': {'0': 'Swift Swim', '1': 'Rain Dish'}
  },
  'Lotad': {
    'type1': 'Water',
    'type2': 'Grass',
    'baseStats':
        {'hp': 40, 'atk': 30, 'def': 30, 'spa': 40, 'spd': 50, 'spe': 30},
    'weight': 2.6,
    'canEvolve': true,
    'abilities': {'0': 'Swift Swim', '1': 'Rain Dish'}
  },
  'Loudred': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 84, 'atk': 71, 'def': 43, 'spa': 71, 'spd': 43, 'spe': 48},
    'weight': 40.5,
    'canEvolve': true,
    'abilities': {'0': 'Soundproof'}
  },
  'Ludicolo': {
    'type1': 'Water',
    'type2': 'Grass',
    'baseStats':
        {'hp': 80, 'atk': 70, 'def': 70, 'spa': 90, 'spd': 100, 'spe': 70},
    'weight': 55,
    'abilities': {'0': 'Swift Swim', '1': 'Rain Dish'}
  },
  'Lunatone': {
    'type1': 'Rock',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 70, 'atk': 55, 'def': 65, 'spa': 95, 'spd': 85, 'spe': 70},
    'weight': 168,
    'ability': 'Levitate',
    'gender': 'genderless',
    'abilities': {'0': 'Levitate'}
  },
  'Luvdisc': {
    'type1': 'Water',
    'baseStats':
        {'hp': 43, 'atk': 30, 'def': 55, 'spa': 40, 'spd': 65, 'spe': 97},
    'weight': 8.7,
    'abilities': {'0': 'Swift Swim'}
  },
  'Makuhita': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 72, 'atk': 60, 'def': 30, 'spa': 20, 'spd': 30, 'spe': 25},
    'weight': 86.4,
    'canEvolve': true,
    'abilities': {'0': 'Thick Fat', '1': 'Guts'}
  },
  'Manectric': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 70, 'atk': 75, 'def': 60, 'spa': 105, 'spd': 60, 'spe': 105},
    'weight': 40.2,
    'abilities': {'0': 'Static', '1': 'Lightning Rod'}
  },
  'Marshtomp': {
    'type1': 'Water',
    'type2': 'Ground',
    'baseStats':
        {'hp': 70, 'atk': 85, 'def': 70, 'spa': 60, 'spd': 70, 'spe': 50},
    'weight': 28,
    'canEvolve': true,
    'abilities': {'0': 'Torrent'}
  },
  'Masquerain': {
    'type1': 'Bug',
    'type2': 'Flying',
    'baseStats':
        {'hp': 70, 'atk': 60, 'def': 62, 'spa': 80, 'spd': 82, 'spe': 60},
    'weight': 3.6,
    'abilities': {'0': 'Intimidate'}
  },
  'Mawile': {
    'type1': 'Steel',
    'baseStats':
        {'hp': 50, 'atk': 85, 'def': 85, 'spa': 55, 'spd': 55, 'spe': 50},
    'weight': 11.5,
    'abilities': {'0': 'Hyper Cutter', '1': 'Intimidate'}
  },
  'Medicham': {
    'type1': 'Fighting',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 60, 'atk': 60, 'def': 75, 'spa': 60, 'spd': 75, 'spe': 80},
    'weight': 31.5,
    'abilities': {'0': 'Pure Power'}
  },
  'Meditite': {
    'type1': 'Fighting',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 30, 'atk': 40, 'def': 55, 'spa': 40, 'spd': 55, 'spe': 60},
    'weight': 11.2,
    'canEvolve': true,
    'abilities': {'0': 'Pure Power'}
  },
  'Metagross': {
    'type1': 'Steel',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 80, 'atk': 135, 'def': 130, 'spa': 95, 'spd': 90, 'spe': 70},
    'weight': 550,
    'gender': 'genderless',
    'abilities': {'0': 'Clear Body'}
  },
  'Metang': {
    'type1': 'Steel',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 60, 'atk': 75, 'def': 100, 'spa': 55, 'spd': 80, 'spe': 50},
    'weight': 202.5,
    'canEvolve': true,
    'gender': 'genderless',
    'abilities': {'0': 'Clear Body'}
  },
  'Mightyena': {
    'type1': 'Dark',
    'baseStats':
        {'hp': 70, 'atk': 90, 'def': 70, 'spa': 60, 'spd': 60, 'spe': 70},
    'weight': 37,
    'abilities': {'0': 'Intimidate', '1': 'Quick Feet'}
  },
  'Milotic': {
    'type1': 'Water',
    'baseStats':
        {'hp': 95, 'atk': 60, 'def': 79, 'spa': 100, 'spd': 125, 'spe': 81},
    'weight': 162,
    'abilities': {'0': 'Marvel Scale'}
  },
  'Minun': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 60, 'atk': 40, 'def': 50, 'spa': 75, 'spd': 85, 'spe': 95},
    'weight': 4.2,
    'abilities': {'0': 'Minus'}
  },
  'Mudkip': {
    'type1': 'Water',
    'baseStats':
        {'hp': 50, 'atk': 70, 'def': 50, 'spa': 50, 'spd': 50, 'spe': 40},
    'weight': 7.6,
    'canEvolve': true,
    'abilities': {'0': 'Torrent'}
  },
  'Nincada': {
    'type1': 'Bug',
    'type2': 'Ground',
    'baseStats':
        {'hp': 31, 'atk': 45, 'def': 90, 'spa': 30, 'spd': 30, 'spe': 40},
    'weight': 5.5,
    'canEvolve': true,
    'abilities': {'0': 'Compound Eyes'}
  },
  'Ninjask': {
    'type1': 'Bug',
    'type2': 'Flying',
    'baseStats':
        {'hp': 61, 'atk': 90, 'def': 45, 'spa': 50, 'spd': 50, 'spe': 160},
    'weight': 12,
    'abilities': {'0': 'Speed Boost'}
  },
  'Nosepass': {
    'type1': 'Rock',
    'baseStats':
        {'hp': 30, 'atk': 45, 'def': 135, 'spa': 45, 'spd': 90, 'spe': 30},
    'weight': 97,
    'canEvolve': true,
    'abilities': {'0': 'Sturdy', '1': 'Magnet Pull'}
  },
  'Numel': {
    'type1': 'Fire',
    'type2': 'Ground',
    'baseStats':
        {'hp': 60, 'atk': 60, 'def': 40, 'spa': 65, 'spd': 45, 'spe': 35},
    'weight': 24,
    'canEvolve': true,
    'abilities': {'0': 'Oblivious', '1': 'Simple'}
  },
  'Nuzleaf': {
    'type1': 'Grass',
    'type2': 'Dark',
    'baseStats':
        {'hp': 70, 'atk': 70, 'def': 40, 'spa': 60, 'spd': 40, 'spe': 60},
    'weight': 28,
    'canEvolve': true,
    'abilities': {'0': 'Chlorophyll', '1': 'Early Bird'}
  },
  'Pelipper': {
    'type1': 'Water',
    'type2': 'Flying',
    'baseStats':
        {'hp': 60, 'atk': 50, 'def': 100, 'spa': 85, 'spd': 70, 'spe': 65},
    'weight': 28,
    'abilities': {'0': 'Keen Eye'}
  },
  'Plusle': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 60, 'atk': 50, 'def': 40, 'spa': 85, 'spd': 75, 'spe': 95},
    'weight': 4.2,
    'abilities': {'0': 'Plus'}
  },
  'Poochyena': {
    'type1': 'Dark',
    'baseStats':
        {'hp': 35, 'atk': 55, 'def': 35, 'spa': 30, 'spd': 30, 'spe': 35},
    'weight': 13.6,
    'canEvolve': true,
    'abilities': {'0': 'Run Away', '1': 'Quick Feet'}
  },
  'Ralts': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 28, 'atk': 25, 'def': 25, 'spa': 45, 'spd': 35, 'spe': 40},
    'weight': 6.6,
    'canEvolve': true,
    'abilities': {'0': 'Synchronize', '1': 'Trace'}
  },
  'Rayquaza': {
    'type1': 'Dragon',
    'type2': 'Flying',
    'baseStats':
        {'hp': 105, 'atk': 150, 'def': 90, 'spa': 150, 'spd': 90, 'spe': 95},
    'weight': 206.5,
    'ability': 'Air Lock',
    'gender': 'genderless',
    'abilities': {'0': 'Air Lock'}
  },
  'Regice': {
    'type1': 'Ice',
    'baseStats':
        {'hp': 80, 'atk': 50, 'def': 100, 'spa': 100, 'spd': 200, 'spe': 50},
    'weight': 175,
    'gender': 'genderless',
    'abilities': {'0': 'Clear Body'}
  },
  'Regirock': {
    'type1': 'Rock',
    'baseStats':
        {'hp': 80, 'atk': 100, 'def': 200, 'spa': 50, 'spd': 100, 'spe': 50},
    'weight': 230,
    'gender': 'genderless',
    'abilities': {'0': 'Clear Body'}
  },
  'Registeel': {
    'type1': 'Steel',
    'baseStats':
        {'hp': 80, 'atk': 75, 'def': 150, 'spa': 75, 'spd': 150, 'spe': 50},
    'weight': 205,
    'gender': 'genderless',
    'abilities': {'0': 'Clear Body'}
  },
  'Relicanth': {
    'type1': 'Water',
    'type2': 'Rock',
    'baseStats':
        {'hp': 100, 'atk': 90, 'def': 130, 'spa': 45, 'spd': 65, 'spe': 55},
    'weight': 23.4,
    'abilities': {'0': 'Swift Swim', '1': 'Rock Head'}
  },
  'Roselia': {
    'type1': 'Grass',
    'type2': 'Poison',
    'baseStats':
        {'hp': 50, 'atk': 60, 'def': 45, 'spa': 100, 'spd': 80, 'spe': 65},
    'weight': 2,
    'abilities': {'0': 'Natural Cure', '1': 'Poison Point'}
  },
  'Sableye': {
    'type1': 'Dark',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 50, 'atk': 75, 'def': 75, 'spa': 65, 'spd': 65, 'spe': 50},
    'weight': 11,
    'abilities': {'0': 'Keen Eye', '1': 'Stall'}
  },
  'Salamence': {
    'type1': 'Dragon',
    'type2': 'Flying',
    'baseStats':
        {'hp': 95, 'atk': 135, 'def': 80, 'spa': 110, 'spd': 80, 'spe': 100},
    'weight': 102.6,
    'abilities': {'0': 'Intimidate'}
  },
  'Sceptile': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 70, 'atk': 85, 'def': 65, 'spa': 105, 'spd': 85, 'spe': 120},
    'weight': 52.2,
    'abilities': {'0': 'Overgrow'}
  },
  'Sealeo': {
    'type1': 'Ice',
    'type2': 'Water',
    'baseStats':
        {'hp': 90, 'atk': 60, 'def': 70, 'spa': 75, 'spd': 70, 'spe': 45},
    'weight': 87.6,
    'canEvolve': true,
    'abilities': {'0': 'Thick Fat', '1': 'Ice Body'}
  },
  'Seedot': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 40, 'atk': 40, 'def': 50, 'spa': 30, 'spd': 30, 'spe': 30},
    'weight': 4,
    'canEvolve': true,
    'abilities': {'0': 'Chlorophyll', '1': 'Early Bird'}
  },
  'Seviper': {
    'type1': 'Poison',
    'baseStats':
        {'hp': 73, 'atk': 100, 'def': 60, 'spa': 100, 'spd': 60, 'spe': 65},
    'weight': 52.5,
    'abilities': {'0': 'Shed Skin'}
  },
  'Sharpedo': {
    'type1': 'Water',
    'type2': 'Dark',
    'baseStats':
        {'hp': 70, 'atk': 120, 'def': 40, 'spa': 95, 'spd': 40, 'spe': 95},
    'weight': 88.8,
    'abilities': {'0': 'Rough Skin'}
  },
  'Shedinja': {
    'type1': 'Bug',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 1, 'atk': 90, 'def': 45, 'spa': 30, 'spd': 30, 'spe': 40},
    'weight': 1.2,
    'ability': 'Wonder Guard',
    'gender': 'genderless',
    'abilities': {'0': 'Wonder Guard'}
  },
  'Shelgon': {
    'type1': 'Dragon',
    'baseStats':
        {'hp': 65, 'atk': 95, 'def': 100, 'spa': 60, 'spd': 50, 'spe': 50},
    'weight': 110.5,
    'canEvolve': true,
    'abilities': {'0': 'Rock Head'}
  },
  'Shiftry': {
    'type1': 'Grass',
    'type2': 'Dark',
    'baseStats':
        {'hp': 90, 'atk': 100, 'def': 60, 'spa': 90, 'spd': 60, 'spe': 80},
    'weight': 59.6,
    'abilities': {'0': 'Chlorophyll', '1': 'Early Bird'}
  },
  'Shroomish': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 60, 'atk': 40, 'def': 60, 'spa': 40, 'spd': 60, 'spe': 35},
    'weight': 4.5,
    'canEvolve': true,
    'abilities': {'0': 'Effect Spore', '1': 'Poison Heal'}
  },
  'Shuppet': {
    'type1': 'Ghost',
    'baseStats':
        {'hp': 44, 'atk': 75, 'def': 35, 'spa': 63, 'spd': 33, 'spe': 45},
    'weight': 2.3,
    'canEvolve': true,
    'abilities': {'0': 'Insomnia', '1': 'Frisk'}
  },
  'Silcoon': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 50, 'atk': 35, 'def': 55, 'spa': 25, 'spd': 25, 'spe': 15},
    'weight': 10,
    'ability': 'Shed Skin',
    'canEvolve': true,
    'abilities': {'0': 'Shed Skin'}
  },
  'Skitty': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 50, 'atk': 45, 'def': 45, 'spa': 35, 'spd': 35, 'spe': 50},
    'weight': 11,
    'canEvolve': true,
    'abilities': {'0': 'Cute Charm', '1': 'Normalize'}
  },
  'Slaking': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 150, 'atk': 160, 'def': 100, 'spa': 95, 'spd': 65, 'spe': 100},
    'weight': 130.5,
    'ability': 'Truant',
    'abilities': {'0': 'Truant'}
  },
  'Slakoth': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 60, 'atk': 60, 'def': 60, 'spa': 35, 'spd': 35, 'spe': 30},
    'weight': 24,
    'ability': 'Truant',
    'canEvolve': true,
    'abilities': {'0': 'Truant'}
  },
  'Snorunt': {
    'type1': 'Ice',
    'baseStats':
        {'hp': 50, 'atk': 50, 'def': 50, 'spa': 50, 'spd': 50, 'spe': 50},
    'weight': 16.8,
    'canEvolve': true,
    'abilities': {'0': 'Inner Focus', '1': 'Ice Body'}
  },
  'Solrock': {
    'type1': 'Rock',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 70, 'atk': 95, 'def': 85, 'spa': 55, 'spd': 65, 'spe': 70},
    'weight': 154,
    'ability': 'Levitate',
    'gender': 'genderless',
    'abilities': {'0': 'Levitate'}
  },
  'Spheal': {
    'type1': 'Ice',
    'type2': 'Water',
    'baseStats':
        {'hp': 70, 'atk': 40, 'def': 50, 'spa': 55, 'spd': 50, 'spe': 25},
    'weight': 39.5,
    'canEvolve': true,
    'abilities': {'0': 'Thick Fat', '1': 'Ice Body'}
  },
  'Spinda': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 60, 'atk': 60, 'def': 60, 'spa': 60, 'spd': 60, 'spe': 60},
    'weight': 5,
    'abilities': {'0': 'Own Tempo', '1': 'Tangled Feet'}
  },
  'Spoink': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 60, 'atk': 25, 'def': 35, 'spa': 70, 'spd': 80, 'spe': 60},
    'weight': 30.6,
    'canEvolve': true,
    'abilities': {'0': 'Thick Fat', '1': 'Own Tempo'}
  },
  'Surskit': {
    'type1': 'Bug',
    'type2': 'Water',
    'baseStats':
        {'hp': 40, 'atk': 30, 'def': 32, 'spa': 50, 'spd': 52, 'spe': 65},
    'weight': 1.7,
    'canEvolve': true,
    'abilities': {'0': 'Swift Swim'}
  },
  'Swablu': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 45, 'atk': 40, 'def': 60, 'spa': 40, 'spd': 75, 'spe': 50},
    'weight': 1.2,
    'canEvolve': true,
    'abilities': {'0': 'Natural Cure'}
  },
  'Swalot': {
    'type1': 'Poison',
    'baseStats':
        {'hp': 100, 'atk': 73, 'def': 83, 'spa': 73, 'spd': 83, 'spe': 55},
    'weight': 80,
    'abilities': {'0': 'Liquid Ooze', '1': 'Sticky Hold'}
  },
  'Swampert': {
    'type1': 'Water',
    'type2': 'Ground',
    'baseStats':
        {'hp': 100, 'atk': 110, 'def': 90, 'spa': 85, 'spd': 90, 'spe': 60},
    'weight': 81.9,
    'abilities': {'0': 'Torrent'}
  },
  'Swellow': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 60, 'atk': 85, 'def': 60, 'spa': 50, 'spd': 50, 'spe': 125},
    'weight': 19.8,
    'abilities': {'0': 'Guts'}
  },
  'Taillow': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 40, 'atk': 55, 'def': 30, 'spa': 30, 'spd': 30, 'spe': 85},
    'weight': 2.3,
    'canEvolve': true,
    'abilities': {'0': 'Guts'}
  },
  'Torchic': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 45, 'atk': 60, 'def': 40, 'spa': 70, 'spd': 50, 'spe': 45},
    'weight': 2.5,
    'canEvolve': true,
    'abilities': {'0': 'Blaze'}
  },
  'Torkoal': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 70, 'atk': 85, 'def': 140, 'spa': 85, 'spd': 70, 'spe': 20},
    'weight': 80.4,
    'abilities': {'0': 'White Smoke'}
  },
  'Trapinch': {
    'type1': 'Ground',
    'baseStats':
        {'hp': 45, 'atk': 100, 'def': 45, 'spa': 45, 'spd': 45, 'spe': 10},
    'weight': 15,
    'canEvolve': true,
    'abilities': {'0': 'Hyper Cutter', '1': 'Arena Trap'}
  },
  'Treecko': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 40, 'atk': 45, 'def': 35, 'spa': 65, 'spd': 55, 'spe': 70},
    'weight': 5,
    'canEvolve': true,
    'abilities': {'0': 'Overgrow'}
  },
  'Tropius': {
    'type1': 'Grass',
    'type2': 'Flying',
    'baseStats':
        {'hp': 99, 'atk': 68, 'def': 83, 'spa': 72, 'spd': 87, 'spe': 51},
    'weight': 100,
    'abilities': {'0': 'Chlorophyll', '1': 'Solar Power'}
  },
  'Vibrava': {
    'type1': 'Ground',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 50, 'atk': 70, 'def': 50, 'spa': 50, 'spd': 50, 'spe': 70},
    'weight': 15.3,
    'ability': 'Levitate',
    'canEvolve': true,
    'abilities': {'0': 'Levitate'}
  },
  'Vigoroth': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 80, 'atk': 80, 'def': 80, 'spa': 55, 'spd': 55, 'spe': 90},
    'weight': 46.5,
    'ability': 'Vital Spirit',
    'canEvolve': true,
    'abilities': {'0': 'Vital Spirit'}
  },
  'Volbeat': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 65, 'atk': 73, 'def': 55, 'spa': 47, 'spd': 75, 'spe': 85},
    'weight': 17.7,
    'abilities': {'0': 'Illuminate', '1': 'Swarm'}
  },
  'Wailmer': {
    'type1': 'Water',
    'baseStats':
        {'hp': 130, 'atk': 70, 'def': 35, 'spa': 70, 'spd': 35, 'spe': 60},
    'weight': 130,
    'canEvolve': true,
    'abilities': {'0': 'Water Veil', '1': 'Oblivious'}
  },
  'Wailord': {
    'type1': 'Water',
    'baseStats':
        {'hp': 170, 'atk': 90, 'def': 45, 'spa': 90, 'spd': 45, 'spe': 60},
    'weight': 398,
    'abilities': {'0': 'Water Veil', '1': 'Oblivious'}
  },
  'Walrein': {
    'type1': 'Ice',
    'type2': 'Water',
    'baseStats':
        {'hp': 110, 'atk': 80, 'def': 90, 'spa': 95, 'spd': 90, 'spe': 65},
    'weight': 150.6,
    'abilities': {'0': 'Thick Fat', '1': 'Ice Body'}
  },
  'Whiscash': {
    'type1': 'Water',
    'type2': 'Ground',
    'baseStats':
        {'hp': 110, 'atk': 78, 'def': 73, 'spa': 76, 'spd': 71, 'spe': 60},
    'weight': 23.6,
    'abilities': {'0': 'Oblivious', '1': 'Anticipation'}
  },
  'Whismur': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 64, 'atk': 51, 'def': 23, 'spa': 51, 'spd': 23, 'spe': 28},
    'weight': 16.3,
    'canEvolve': true,
    'abilities': {'0': 'Soundproof'}
  },
  'Wingull': {
    'type1': 'Water',
    'type2': 'Flying',
    'baseStats':
        {'hp': 40, 'atk': 30, 'def': 30, 'spa': 55, 'spd': 30, 'spe': 85},
    'weight': 9.5,
    'canEvolve': true,
    'abilities': {'0': 'Keen Eye'}
  },
  'Wurmple': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 45, 'atk': 45, 'def': 35, 'spa': 20, 'spd': 30, 'spe': 20},
    'weight': 3.6,
    'canEvolve': true,
    'abilities': {'0': 'Shield Dust'}
  },
  'Wynaut': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 95, 'atk': 23, 'def': 48, 'spa': 23, 'spd': 48, 'spe': 23},
    'weight': 14,
    'canEvolve': true,
    'abilities': {'0': 'Shadow Tag'}
  },
  'Zangoose': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 73, 'atk': 115, 'def': 60, 'spa': 60, 'spd': 60, 'spe': 90},
    'weight': 40.3,
    'abilities': {'0': 'Immunity'}
  },
  'Zigzagoon': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 38, 'atk': 30, 'def': 41, 'spa': 30, 'spd': 41, 'spe': 60},
    'weight': 17.5,
    'canEvolve': true,
    'abilities': {'0': 'Pickup', '1': 'Gluttony'}
  }
});

const DPP: {[name: string]: Species} = extend(true, {}, ADV, {
  'Aipom': {'canEvolve': true},
  'Electabuzz': {'canEvolve': true},
  'Gligar': {'canEvolve': true},
  'Misdreavus': {'canEvolve': true},
  'Murkrow': {'canEvolve': true},
  'Piloswine': {'canEvolve': true},
  'Porygon2': {'canEvolve': true},
  'Rhyhorn': {'canEvolve': true},
  'Roselia': {'canEvolve': true},
  'Tangela': {'canEvolve': true},
  'Togetic': {'canEvolve': true},
  'Yanma': {'canEvolve': true},
  'Abomasnow': {
    'type1': 'Grass',
    'type2': 'Ice',
    'baseStats':
        {'hp': 90, 'atk': 92, 'def': 75, 'spa': 92, 'spd': 85, 'spe': 60},
    'weight': 135.5,
    'abilities': {'0': 'Snow Warning'}
  },
  'Ambipom': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 75, 'atk': 100, 'def': 66, 'spa': 60, 'spd': 66, 'spe': 115},
    'weight': 20.3,
    'abilities': {'0': 'Technician', '1': 'Pickup'}
  },
  'Arceus': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arceus-Bug': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arceus-Dark': {
    'type1': 'Dark',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arceus-Dragon': {
    'type1': 'Dragon',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arceus-Electric': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arceus-Fighting': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arceus-Fire': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arceus-Flying': {
    'type1': 'Flying',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arceus-Ghost': {
    'type1': 'Ghost',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arceus-Grass': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arceus-Ground': {
    'type1': 'Ground',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arceus-Ice': {
    'type1': 'Ice',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arceus-Poison': {
    'type1': 'Poison',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arceus-Psychic': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arceus-Rock': {
    'type1': 'Rock',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arceus-Steel': {
    'type1': 'Steel',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arceus-Water': {
    'type1': 'Water',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'gender': 'genderless',
    'abilities': {'0': 'Multitype'}
  },
  'Arghonaut': {
    'type1': 'Water',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 105, 'atk': 110, 'def': 95, 'spa': 70, 'spd': 100, 'spe': 75},
    'weight': 151,
    'abilities': {'0': 'Unaware'}
  },
  'Azelf': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 75, 'atk': 125, 'def': 70, 'spa': 125, 'spd': 70, 'spe': 115},
    'weight': 0.3,
    'ability': 'Levitate',
    'gender': 'genderless',
    'abilities': {'0': 'Levitate'}
  },
  'Bastiodon': {
    'type1': 'Rock',
    'type2': 'Steel',
    'baseStats':
        {'hp': 60, 'atk': 52, 'def': 168, 'spa': 47, 'spd': 138, 'spe': 30},
    'weight': 149.5,
    'abilities': {'0': 'Sturdy'}
  },
  'Bibarel': {
    'type1': 'Normal',
    'type2': 'Water',
    'baseStats':
        {'hp': 79, 'atk': 85, 'def': 60, 'spa': 55, 'spd': 60, 'spe': 71},
    'weight': 31.5,
    'abilities': {'0': 'Simple', '1': 'Unaware'}
  },
  'Bidoof': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 59, 'atk': 45, 'def': 40, 'spa': 35, 'spd': 40, 'spe': 31},
    'weight': 20,
    'canEvolve': true,
    'abilities': {'0': 'Simple', '1': 'Unaware'}
  },
  'Bonsly': {
    'type1': 'Rock',
    'baseStats':
        {'hp': 50, 'atk': 80, 'def': 95, 'spa': 10, 'spd': 45, 'spe': 10},
    'weight': 15,
    'canEvolve': true,
    'abilities': {'0': 'Sturdy', '1': 'Rock Head'}
  },
  'Breezi': {
    'type1': 'Poison',
    'type2': 'Flying',
    'baseStats':
        {'hp': 50, 'atk': 46, 'def': 69, 'spa': 60, 'spd': 50, 'spe': 75},
    'weight': 0.6,
    'abilities': {'0': 'Unburden', '1': 'Own Tempo'}
  },
  'Bronzong': {
    'type1': 'Steel',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 67, 'atk': 89, 'def': 116, 'spa': 79, 'spd': 116, 'spe': 33},
    'weight': 187,
    'gender': 'genderless',
    'abilities': {'0': 'Levitate', '1': 'Heatproof'}
  },
  'Bronzor': {
    'type1': 'Steel',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 57, 'atk': 24, 'def': 86, 'spa': 24, 'spd': 86, 'spe': 23},
    'weight': 60.5,
    'canEvolve': true,
    'gender': 'genderless',
    'abilities': {'0': 'Levitate', '1': 'Heatproof'}
  },
  'Budew': {
    'type1': 'Grass',
    'type2': 'Poison',
    'baseStats':
        {'hp': 40, 'atk': 30, 'def': 35, 'spa': 50, 'spd': 70, 'spe': 55},
    'weight': 1.2,
    'canEvolve': true,
    'abilities': {'0': 'Natural Cure', '1': 'Poison Point'}
  },
  'Buizel': {
    'type1': 'Water',
    'baseStats':
        {'hp': 55, 'atk': 65, 'def': 35, 'spa': 60, 'spd': 30, 'spe': 85},
    'weight': 29.5,
    'canEvolve': true,
    'abilities': {'0': 'Swift Swim'}
  },
  'Buneary': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 55, 'atk': 66, 'def': 44, 'spa': 44, 'spd': 56, 'spe': 85},
    'weight': 5.5,
    'canEvolve': true,
    'abilities': {'0': 'Run Away', '1': 'Klutz'}
  },
  'Burmy': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 40, 'atk': 29, 'def': 45, 'spa': 29, 'spd': 45, 'spe': 36},
    'weight': 3.4,
    'canEvolve': true,
    'abilities': {'0': 'Shed Skin'}
  },
  'Carnivine': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 74, 'atk': 100, 'def': 72, 'spa': 90, 'spd': 72, 'spe': 46},
    'weight': 27,
    'ability': 'Levitate',
    'abilities': {'0': 'Levitate'}
  },
  'Chatot': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 76, 'atk': 65, 'def': 45, 'spa': 92, 'spd': 42, 'spe': 91},
    'weight': 1.9,
    'abilities': {'0': 'Keen Eye', '1': 'Tangled Feet'}
  },
  'Cherrim': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 70, 'atk': 60, 'def': 70, 'spa': 87, 'spd': 78, 'spe': 85},
    'weight': 9.3,
    'ability': 'Flower Gift',
    'abilities': {'0': 'Flower Gift'}
  },
  'Cherubi': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 45, 'atk': 35, 'def': 45, 'spa': 62, 'spd': 53, 'spe': 35},
    'weight': 3.3,
    'ability': 'Chlorophyll',
    'canEvolve': true,
    'abilities': {'0': 'Chlorophyll'}
  },
  'Chimchar': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 44, 'atk': 58, 'def': 44, 'spa': 58, 'spd': 44, 'spe': 61},
    'weight': 6.2,
    'canEvolve': true,
    'abilities': {'0': 'Blaze'}
  },
  'Chingling': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 45, 'atk': 30, 'def': 50, 'spa': 65, 'spd': 50, 'spe': 45},
    'weight': 0.6,
    'ability': 'Levitate',
    'canEvolve': true,
    'abilities': {'0': 'Levitate'}
  },
  'Colossoil': {
    'type1': 'Dark',
    'type2': 'Ground',
    'baseStats':
        {'hp': 133, 'atk': 122, 'def': 72, 'spa': 71, 'spd': 72, 'spe': 95},
    'weight': 683.6,
    'abilities': {'0': 'Rebound', '1': 'Guts'}
  },
  'Combee': {
    'type1': 'Bug',
    'type2': 'Flying',
    'baseStats':
        {'hp': 30, 'atk': 30, 'def': 42, 'spa': 30, 'spd': 42, 'spe': 70},
    'weight': 5.5,
    'canEvolve': true,
    'abilities': {'0': 'Honey Gather'}
  },
  'Cranidos': {
    'type1': 'Rock',
    'baseStats':
        {'hp': 67, 'atk': 125, 'def': 40, 'spa': 30, 'spd': 30, 'spe': 58},
    'weight': 31.5,
    'canEvolve': true,
    'abilities': {'0': 'Mold Breaker'}
  },
  'Cresselia': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 120, 'atk': 70, 'def': 120, 'spa': 75, 'spd': 130, 'spe': 85},
    'weight': 85.6,
    'ability': 'Levitate',
    'abilities': {'0': 'Levitate'}
  },
  'Croagunk': {
    'type1': 'Poison',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 48, 'atk': 61, 'def': 40, 'spa': 61, 'spd': 40, 'spe': 50},
    'weight': 23,
    'canEvolve': true,
    'abilities': {'0': 'Anticipation', '1': 'Dry Skin'}
  },
  'Cyclohm': {
    'type1': 'Electric',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 108, 'atk': 60, 'def': 118, 'spa': 112, 'spd': 70, 'spe': 80},
    'weight': 59,
    'abilities': {'0': 'Shield Dust', '1': 'Static'}
  },
  'Darkrai': {
    'type1': 'Dark',
    'baseStats':
        {'hp': 70, 'atk': 90, 'def': 90, 'spa': 135, 'spd': 90, 'spe': 125},
    'weight': 50.5,
    'ability': 'Bad Dreams',
    'gender': 'genderless',
    'abilities': {'0': 'Bad Dreams'}
  },
  'Dialga': {
    'type1': 'Steel',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 100, 'atk': 120, 'def': 120, 'spa': 150, 'spd': 100, 'spe': 90},
    'weight': 683,
    'gender': 'genderless',
    'abilities': {'0': 'Pressure'}
  },
  'Drapion': {
    'type1': 'Poison',
    'type2': 'Dark',
    'baseStats':
        {'hp': 70, 'atk': 90, 'def': 110, 'spa': 60, 'spd': 75, 'spe': 95},
    'weight': 61.5,
    'abilities': {'0': 'Battle Armor', '1': 'Sniper'}
  },
  'Drifblim': {
    'type1': 'Ghost',
    'type2': 'Flying',
    'baseStats':
        {'hp': 150, 'atk': 80, 'def': 44, 'spa': 90, 'spd': 54, 'spe': 80},
    'weight': 15,
    'abilities': {'0': 'Aftermath', '1': 'Unburden'}
  },
  'Drifloon': {
    'type1': 'Ghost',
    'type2': 'Flying',
    'baseStats':
        {'hp': 90, 'atk': 50, 'def': 34, 'spa': 60, 'spd': 44, 'spe': 70},
    'weight': 1.2,
    'canEvolve': true,
    'abilities': {'0': 'Aftermath', '1': 'Unburden'}
  },
  'Dusknoir': {
    'type1': 'Ghost',
    'baseStats':
        {'hp': 45, 'atk': 100, 'def': 135, 'spa': 65, 'spd': 135, 'spe': 45},
    'weight': 106.6,
    'abilities': {'0': 'Pressure'}
  },
  'Electivire': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 75, 'atk': 123, 'def': 67, 'spa': 95, 'spd': 85, 'spe': 95},
    'weight': 138.6,
    'abilities': {'0': 'Motor Drive'}
  },
  'Embirch': {
    'type1': 'Fire',
    'type2': 'Grass',
    'baseStats':
        {'hp': 60, 'atk': 40, 'def': 55, 'spa': 65, 'spd': 40, 'spe': 60},
    'weight': 15,
    'abilities': {'0': 'Reckless', '1': 'Leaf Guard'}
  },
  'Empoleon': {
    'type1': 'Water',
    'type2': 'Steel',
    'baseStats':
        {'hp': 84, 'atk': 86, 'def': 88, 'spa': 111, 'spd': 101, 'spe': 60},
    'weight': 84.5,
    'abilities': {'0': 'Torrent'}
  },
  'Fidgit': {
    'type1': 'Poison',
    'type2': 'Ground',
    'baseStats':
        {'hp': 95, 'atk': 76, 'def': 109, 'spa': 90, 'spd': 80, 'spe': 105},
    'weight': 53,
    'abilities': {'0': 'Persistent', '1': 'Vital Spirit'}
  },
  'Finneon': {
    'type1': 'Water',
    'baseStats':
        {'hp': 49, 'atk': 49, 'def': 56, 'spa': 49, 'spd': 61, 'spe': 66},
    'weight': 7,
    'canEvolve': true,
    'abilities': {'0': 'Swift Swim', '1': 'Storm Drain'}
  },
  'Flarelm': {
    'type1': 'Fire',
    'type2': 'Grass',
    'baseStats':
        {'hp': 90, 'atk': 50, 'def': 95, 'spa': 75, 'spd': 70, 'spe': 40},
    'weight': 73,
    'abilities': {'0': 'Rock Head', '1': 'Battle Armor'}
  },
  'Floatzel': {
    'type1': 'Water',
    'baseStats':
        {'hp': 85, 'atk': 105, 'def': 55, 'spa': 85, 'spd': 50, 'spe': 115},
    'weight': 33.5,
    'abilities': {'0': 'Swift Swim'}
  },
  'Froslass': {
    'type1': 'Ice',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 70, 'atk': 80, 'def': 70, 'spa': 80, 'spd': 70, 'spe': 110},
    'weight': 26.6,
    'abilities': {'0': 'Snow Cloak'}
  },
  'Gabite': {
    'type1': 'Dragon',
    'type2': 'Ground',
    'baseStats':
        {'hp': 68, 'atk': 90, 'def': 65, 'spa': 50, 'spd': 55, 'spe': 82},
    'weight': 56,
    'canEvolve': true,
    'abilities': {'0': 'Sand Veil'}
  },
  'Gallade': {
    'type1': 'Psychic',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 68, 'atk': 125, 'def': 65, 'spa': 65, 'spd': 115, 'spe': 80},
    'weight': 52,
    'abilities': {'0': 'Steadfast'}
  },
  'Garchomp': {
    'type1': 'Dragon',
    'type2': 'Ground',
    'baseStats':
        {'hp': 108, 'atk': 130, 'def': 95, 'spa': 80, 'spd': 85, 'spe': 102},
    'weight': 95,
    'abilities': {'0': 'Sand Veil'}
  },
  'Gastrodon': {
    'type1': 'Water',
    'type2': 'Ground',
    'baseStats':
        {'hp': 111, 'atk': 83, 'def': 68, 'spa': 92, 'spd': 82, 'spe': 39},
    'weight': 29.9,
    'abilities': {'0': 'Sticky Hold', '1': 'Storm Drain'}
  },
  'Gible': {
    'type1': 'Dragon',
    'type2': 'Ground',
    'baseStats':
        {'hp': 58, 'atk': 70, 'def': 45, 'spa': 40, 'spd': 45, 'spe': 42},
    'weight': 20.5,
    'canEvolve': true,
    'abilities': {'0': 'Sand Veil'}
  },
  'Giratina': {
    'type1': 'Ghost',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 150, 'atk': 100, 'def': 120, 'spa': 100, 'spd': 120, 'spe': 90},
    'weight': 750,
    'abilities': {'0': 'Pressure'}
  },
  'Giratina-Origin': {
    'type1': 'Ghost',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 150, 'atk': 120, 'def': 100, 'spa': 120, 'spd': 100, 'spe': 90},
    'weight': 650,
    'ability': 'Levitate',
    'abilities': {'0': 'Levitate'}
  },
  'Glaceon': {
    'type1': 'Ice',
    'baseStats':
        {'hp': 65, 'atk': 60, 'def': 110, 'spa': 130, 'spd': 95, 'spe': 65},
    'weight': 25.9,
    'abilities': {'0': 'Snow Cloak'}
  },
  'Glameow': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 49, 'atk': 55, 'def': 42, 'spa': 42, 'spd': 37, 'spe': 85},
    'weight': 3.9,
    'canEvolve': true,
    'abilities': {'0': 'Limber', '1': 'Own Tempo'}
  },
  'Gliscor': {
    'type1': 'Ground',
    'type2': 'Flying',
    'baseStats':
        {'hp': 75, 'atk': 95, 'def': 125, 'spa': 45, 'spd': 75, 'spe': 95},
    'weight': 42.5,
    'abilities': {'0': 'Hyper Cutter', '1': 'Sand Veil'}
  },
  'Grotle': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 75, 'atk': 89, 'def': 85, 'spa': 55, 'spd': 65, 'spe': 36},
    'weight': 97,
    'canEvolve': true,
    'abilities': {'0': 'Overgrow'}
  },
  'Happiny': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 100, 'atk': 5, 'def': 5, 'spa': 15, 'spd': 65, 'spe': 30},
    'weight': 24.4,
    'canEvolve': true,
    'abilities': {'0': 'Natural Cure', '1': 'Serene Grace'}
  },
  'Heatran': {
    'type1': 'Fire',
    'type2': 'Steel',
    'baseStats':
        {'hp': 91, 'atk': 90, 'def': 106, 'spa': 130, 'spd': 106, 'spe': 77},
    'weight': 430,
    'ability': 'Flash Fire',
    'abilities': {'0': 'Flash Fire'}
  },
  'Hippopotas': {
    'type1': 'Ground',
    'baseStats':
        {'hp': 68, 'atk': 72, 'def': 78, 'spa': 38, 'spd': 42, 'spe': 32},
    'weight': 49.5,
    'canEvolve': true,
    'abilities': {'0': 'Sand Stream'}
  },
  'Hippowdon': {
    'type1': 'Ground',
    'baseStats':
        {'hp': 108, 'atk': 112, 'def': 118, 'spa': 68, 'spd': 72, 'spe': 47},
    'weight': 300,
    'abilities': {'0': 'Sand Stream'}
  },
  'Honchkrow': {
    'type1': 'Dark',
    'type2': 'Flying',
    'baseStats':
        {'hp': 100, 'atk': 125, 'def': 52, 'spa': 105, 'spd': 52, 'spe': 71},
    'weight': 27.3,
    'abilities': {'0': 'Insomnia', '1': 'Super Luck'}
  },
  'Infernape': {
    'type1': 'Fire',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 76, 'atk': 104, 'def': 71, 'spa': 104, 'spd': 71, 'spe': 108},
    'weight': 55,
    'abilities': {'0': 'Blaze'}
  },
  'Kitsunoh': {
    'type1': 'Steel',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 80, 'atk': 103, 'def': 85, 'spa': 55, 'spd': 80, 'spe': 110},
    'weight': 51,
    'abilities': {'0': 'Frisk', '1': 'Limber'}
  },
  'Kricketot': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 37, 'atk': 25, 'def': 41, 'spa': 25, 'spd': 41, 'spe': 25},
    'weight': 2.2,
    'canEvolve': true,
    'abilities': {'0': 'Shed Skin'}
  },
  'Kricketune': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 77, 'atk': 85, 'def': 51, 'spa': 55, 'spd': 51, 'spe': 65},
    'weight': 25.5,
    'abilities': {'0': 'Swarm'}
  },
  'Krilowatt': {
    'type1': 'Electric',
    'type2': 'Water',
    'baseStats':
        {'hp': 151, 'atk': 84, 'def': 73, 'spa': 83, 'spd': 74, 'spe': 105},
    'weight': 10.6,
    'abilities': {'0': 'Trace', '1': 'Magic Guard'}
  },
  'Leafeon': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 65, 'atk': 110, 'def': 130, 'spa': 60, 'spd': 65, 'spe': 95},
    'weight': 25.5,
    'abilities': {'0': 'Leaf Guard'}
  },
  'Lickilicky': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 110, 'atk': 85, 'def': 95, 'spa': 80, 'spd': 95, 'spe': 50},
    'weight': 140,
    'abilities': {'0': 'Own Tempo', '1': 'Oblivious'}
  },
  'Lopunny': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 65, 'atk': 76, 'def': 84, 'spa': 54, 'spd': 96, 'spe': 105},
    'weight': 33.3,
    'abilities': {'0': 'Cute Charm', '1': 'Klutz'}
  },
  'Lucario': {
    'type1': 'Fighting',
    'type2': 'Steel',
    'baseStats':
        {'hp': 70, 'atk': 110, 'def': 70, 'spa': 115, 'spd': 70, 'spe': 90},
    'weight': 54,
    'abilities': {'0': 'Steadfast', '1': 'Inner Focus'}
  },
  'Lumineon': {
    'type1': 'Water',
    'baseStats':
        {'hp': 69, 'atk': 69, 'def': 76, 'spa': 69, 'spd': 86, 'spe': 91},
    'weight': 24,
    'abilities': {'0': 'Swift Swim', '1': 'Storm Drain'}
  },
  'Luxio': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 60, 'atk': 85, 'def': 49, 'spa': 60, 'spd': 49, 'spe': 60},
    'weight': 30.5,
    'canEvolve': true,
    'abilities': {'0': 'Rivalry', '1': 'Intimidate'}
  },
  'Luxray': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 80, 'atk': 120, 'def': 79, 'spa': 95, 'spd': 79, 'spe': 70},
    'weight': 42,
    'abilities': {'0': 'Rivalry', '1': 'Intimidate'}
  },
  'Magmortar': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 75, 'atk': 95, 'def': 67, 'spa': 125, 'spd': 95, 'spe': 83},
    'weight': 68,
    'abilities': {'0': 'Flame Body'}
  },
  'Magnezone': {
    'type1': 'Electric',
    'type2': 'Steel',
    'baseStats':
        {'hp': 70, 'atk': 70, 'def': 115, 'spa': 130, 'spd': 90, 'spe': 60},
    'weight': 180,
    'gender': 'genderless',
    'abilities': {'0': 'Magnet Pull', '1': 'Sturdy'}
  },
  'Mamoswine': {
    'type1': 'Ice',
    'type2': 'Ground',
    'baseStats':
        {'hp': 110, 'atk': 130, 'def': 80, 'spa': 70, 'spd': 60, 'spe': 80},
    'weight': 291,
    'abilities': {'0': 'Oblivious', '1': 'Snow Cloak'}
  },
  'Manaphy': {
    'type1': 'Water',
    'baseStats':
        {'hp': 100, 'atk': 100, 'def': 100, 'spa': 100, 'spd': 100, 'spe': 100},
    'weight': 1.4,
    'ability': 'Hydration',
    'gender': 'genderless',
    'abilities': {'0': 'Hydration'}
  },
  'Mantyke': {
    'type1': 'Water',
    'type2': 'Flying',
    'baseStats':
        {'hp': 45, 'atk': 20, 'def': 50, 'spa': 60, 'spd': 120, 'spe': 50},
    'weight': 65,
    'canEvolve': true,
    'abilities': {'0': 'Swift Swim', '1': 'Water Absorb'}
  },
  'Mesprit': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 80, 'atk': 105, 'def': 105, 'spa': 105, 'spd': 105, 'spe': 80},
    'weight': 0.3,
    'ability': 'Levitate',
    'gender': 'genderless',
    'abilities': {'0': 'Levitate'}
  },
  'Mime Jr.': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 20, 'atk': 25, 'def': 45, 'spa': 70, 'spd': 90, 'spe': 60},
    'weight': 13,
    'canEvolve': true,
    'abilities': {'0': 'Soundproof', '1': 'Filter'}
  },
  'Mismagius': {
    'type1': 'Ghost',
    'baseStats':
        {'hp': 60, 'atk': 60, 'def': 60, 'spa': 105, 'spd': 105, 'spe': 105},
    'weight': 4.4,
    'ability': 'Levitate',
    'abilities': {'0': 'Levitate'}
  },
  'Monferno': {
    'type1': 'Fire',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 64, 'atk': 78, 'def': 52, 'spa': 78, 'spd': 52, 'spe': 81},
    'weight': 22,
    'canEvolve': true,
    'abilities': {'0': 'Blaze'}
  },
  'Mothim': {
    'type1': 'Bug',
    'type2': 'Flying',
    'baseStats':
        {'hp': 70, 'atk': 94, 'def': 50, 'spa': 94, 'spd': 50, 'spe': 66},
    'weight': 23.3,
    'abilities': {'0': 'Swarm'}
  },
  'Munchlax': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 135, 'atk': 85, 'def': 40, 'spa': 40, 'spd': 85, 'spe': 5},
    'weight': 105,
    'canEvolve': true,
    'abilities': {'0': 'Pickup', '1': 'Thick Fat'}
  },
  'Pachirisu': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 60, 'atk': 45, 'def': 70, 'spa': 45, 'spd': 90, 'spe': 95},
    'weight': 3.9,
    'abilities': {'0': 'Run Away', '1': 'Pickup'}
  },
  'Palkia': {
    'type1': 'Water',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 90, 'atk': 120, 'def': 100, 'spa': 150, 'spd': 120, 'spe': 100},
    'weight': 336,
    'gender': 'genderless',
    'abilities': {'0': 'Pressure'}
  },
  'Phione': {
    'type1': 'Water',
    'baseStats':
        {'hp': 80, 'atk': 80, 'def': 80, 'spa': 80, 'spd': 80, 'spe': 80},
    'weight': 3.1,
    'ability': 'Hydration',
    'gender': 'genderless',
    'abilities': {'0': 'Hydration'}
  },
  'Piplup': {
    'type1': 'Water',
    'baseStats':
        {'hp': 53, 'atk': 51, 'def': 53, 'spa': 61, 'spd': 56, 'spe': 40},
    'weight': 5.2,
    'canEvolve': true,
    'abilities': {'0': 'Torrent'}
  },
  'Porygon-Z': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 85, 'atk': 80, 'def': 70, 'spa': 135, 'spd': 75, 'spe': 90},
    'weight': 34,
    'gender': 'genderless',
    'abilities': {'0': 'Adaptability', '1': 'Download'}
  },
  'Prinplup': {
    'type1': 'Water',
    'baseStats':
        {'hp': 64, 'atk': 66, 'def': 68, 'spa': 81, 'spd': 76, 'spe': 50},
    'weight': 23,
    'canEvolve': true,
    'abilities': {'0': 'Torrent'}
  },
  'Probopass': {
    'type1': 'Rock',
    'type2': 'Steel',
    'baseStats':
        {'hp': 60, 'atk': 55, 'def': 145, 'spa': 75, 'spd': 150, 'spe': 40},
    'weight': 340,
    'abilities': {'0': 'Sturdy', '1': 'Magnet Pull'}
  },
  'Purugly': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 71, 'atk': 82, 'def': 64, 'spa': 64, 'spd': 59, 'spe': 112},
    'weight': 43.8,
    'abilities': {'0': 'Thick Fat', '1': 'Own Tempo'}
  },
  'Pyroak': {
    'type1': 'Fire',
    'type2': 'Grass',
    'baseStats':
        {'hp': 120, 'atk': 70, 'def': 105, 'spa': 95, 'spd': 90, 'spe': 60},
    'weight': 168,
    'abilities': {'0': 'Rock Head', '1': 'Battle Armor'}
  },
  'Rampardos': {
    'type1': 'Rock',
    'baseStats':
        {'hp': 97, 'atk': 165, 'def': 60, 'spa': 65, 'spd': 50, 'spe': 58},
    'weight': 102.5,
    'abilities': {'0': 'Mold Breaker'}
  },
  'Regigigas': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 110, 'atk': 160, 'def': 110, 'spa': 80, 'spd': 110, 'spe': 100},
    'weight': 420,
    'ability': 'Slow Start',
    'gender': 'genderless',
    'abilities': {'0': 'Slow Start'}
  },
  'Revenankh': {
    'type1': 'Ghost',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 90, 'atk': 105, 'def': 90, 'spa': 65, 'spd': 110, 'spe': 65},
    'weight': 44,
    'abilities': {'0': 'Shed Skin', '1': 'Air Lock'}
  },
  'Rhyperior': {
    'type1': 'Ground',
    'type2': 'Rock',
    'baseStats':
        {'hp': 115, 'atk': 140, 'def': 130, 'spa': 55, 'spd': 55, 'spe': 40},
    'weight': 282.8,
    'abilities': {'0': 'Lightning Rod', '1': 'Solid Rock'}
  },
  'Riolu': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 40, 'atk': 70, 'def': 40, 'spa': 35, 'spd': 40, 'spe': 60},
    'weight': 20.2,
    'canEvolve': true,
    'abilities': {'0': 'Steadfast', '1': 'Inner Focus'}
  },
  'Roserade': {
    'type1': 'Grass',
    'type2': 'Poison',
    'baseStats':
        {'hp': 60, 'atk': 70, 'def': 55, 'spa': 125, 'spd': 105, 'spe': 90},
    'weight': 14.5,
    'abilities': {'0': 'Natural Cure', '1': 'Poison Point'}
  },
  'Rotom': {
    'type1': 'Electric',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 50, 'atk': 50, 'def': 77, 'spa': 95, 'spd': 77, 'spe': 91},
    'weight': 0.3,
    'ability': 'Levitate',
    'gender': 'genderless',
    'abilities': {'0': 'Levitate'}
  },
  'Rotom-Mow': {
    'type1': 'Electric',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 50, 'atk': 65, 'def': 107, 'spa': 105, 'spd': 107, 'spe': 86},
    'weight': 0.3,
    'ability': 'Levitate',
    'gender': 'genderless',
    'abilities': {'0': 'Levitate'}
  },
  'Rotom-Frost': {
    'type1': 'Electric',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 50, 'atk': 65, 'def': 107, 'spa': 105, 'spd': 107, 'spe': 86},
    'weight': 0.3,
    'ability': 'Levitate',
    'gender': 'genderless',
    'abilities': {'0': 'Levitate'}
  },
  'Rotom-Heat': {
    'type1': 'Electric',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 50, 'atk': 65, 'def': 107, 'spa': 105, 'spd': 107, 'spe': 86},
    'weight': 0.3,
    'ability': 'Levitate',
    'gender': 'genderless',
    'abilities': {'0': 'Levitate'}
  },
  'Rotom-Fan': {
    'type1': 'Electric',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 50, 'atk': 65, 'def': 107, 'spa': 105, 'spd': 107, 'spe': 86},
    'weight': 0.3,
    'ability': 'Levitate',
    'gender': 'genderless',
    'abilities': {'0': 'Levitate'}
  },
  'Rotom-Wash': {
    'type1': 'Electric',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 50, 'atk': 65, 'def': 107, 'spa': 105, 'spd': 107, 'spe': 86},
    'weight': 0.3,
    'ability': 'Levitate',
    'gender': 'genderless',
    'abilities': {'0': 'Levitate'}
  },
  'Shaymin': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 100, 'atk': 100, 'def': 100, 'spa': 100, 'spd': 100, 'spe': 100},
    'weight': 2.1,
    'ability': 'Natural Cure',
    'gender': 'genderless',
    'abilities': {'0': 'Natural Cure'}
  },
  'Shaymin-Sky': {
    'type1': 'Grass',
    'type2': 'Flying',
    'baseStats':
        {'hp': 100, 'atk': 103, 'def': 75, 'spa': 120, 'spd': 75, 'spe': 127},
    'weight': 5.2,
    'ability': 'Serene Grace',
    'gender': 'genderless',
    'abilities': {'0': 'Serene Grace'}
  },
  'Shellos': {
    'type1': 'Water',
    'baseStats':
        {'hp': 76, 'atk': 48, 'def': 48, 'spa': 57, 'spd': 62, 'spe': 34},
    'weight': 6.3,
    'canEvolve': true,
    'abilities': {'0': 'Sticky Hold', '1': 'Storm Drain'}
  },
  'Shieldon': {
    'type1': 'Rock',
    'type2': 'Steel',
    'baseStats':
        {'hp': 30, 'atk': 42, 'def': 118, 'spa': 42, 'spd': 88, 'spe': 30},
    'weight': 57,
    'canEvolve': true,
    'abilities': {'0': 'Sturdy'}
  },
  'Shinx': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 45, 'atk': 65, 'def': 34, 'spa': 40, 'spd': 34, 'spe': 45},
    'weight': 9.5,
    'canEvolve': true,
    'abilities': {'0': 'Rivalry', '1': 'Intimidate'}
  },
  'Skorupi': {
    'type1': 'Poison',
    'type2': 'Bug',
    'baseStats':
        {'hp': 40, 'atk': 50, 'def': 90, 'spa': 30, 'spd': 55, 'spe': 65},
    'weight': 12,
    'canEvolve': true,
    'abilities': {'0': 'Battle Armor', '1': 'Sniper'}
  },
  'Skuntank': {
    'type1': 'Poison',
    'type2': 'Dark',
    'baseStats':
        {'hp': 103, 'atk': 93, 'def': 67, 'spa': 71, 'spd': 61, 'spe': 84},
    'weight': 38,
    'abilities': {'0': 'Stench', '1': 'Aftermath'}
  },
  'Snover': {
    'type1': 'Grass',
    'type2': 'Ice',
    'baseStats':
        {'hp': 60, 'atk': 62, 'def': 50, 'spa': 62, 'spd': 60, 'spe': 40},
    'weight': 50.5,
    'canEvolve': true,
    'abilities': {'0': 'Snow Warning'}
  },
  'Spiritomb': {
    'type1': 'Ghost',
    'type2': 'Dark',
    'baseStats':
        {'hp': 50, 'atk': 92, 'def': 108, 'spa': 92, 'spd': 108, 'spe': 35},
    'weight': 108,
    'abilities': {'0': 'Pressure'}
  },
  'Staraptor': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 85, 'atk': 120, 'def': 70, 'spa': 50, 'spd': 50, 'spe': 100},
    'weight': 24.9,
    'abilities': {'0': 'Intimidate'}
  },
  'Staravia': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 55, 'atk': 75, 'def': 50, 'spa': 40, 'spd': 40, 'spe': 80},
    'weight': 15.5,
    'canEvolve': true,
    'abilities': {'0': 'Intimidate'}
  },
  'Starly': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 40, 'atk': 55, 'def': 30, 'spa': 30, 'spd': 30, 'spe': 60},
    'weight': 2,
    'canEvolve': true,
    'abilities': {'0': 'Keen Eye'}
  },
  'Stratagem': {
    'type1': 'Rock',
    'baseStats':
        {'hp': 90, 'atk': 60, 'def': 65, 'spa': 120, 'spd': 70, 'spe': 130},
    'weight': 45,
    'abilities': {'0': 'Levitate', '1': 'Technician'}
  },
  'Stunky': {
    'type1': 'Poison',
    'type2': 'Dark',
    'baseStats':
        {'hp': 63, 'atk': 63, 'def': 47, 'spa': 41, 'spd': 41, 'spe': 74},
    'weight': 19.2,
    'canEvolve': true,
    'abilities': {'0': 'Stench', '1': 'Aftermath'}
  },
  'Syclant': {
    'type1': 'Ice',
    'type2': 'Bug',
    'baseStats':
        {'hp': 70, 'atk': 116, 'def': 70, 'spa': 114, 'spd': 64, 'spe': 121},
    'weight': 52,
    'abilities': {'0': 'Compound Eyes', '1': 'Mountaineer'}
  },
  'Syclar': {
    'type1': 'Ice',
    'type2': 'Bug',
    'baseStats':
        {'hp': 40, 'atk': 76, 'def': 45, 'spa': 74, 'spd': 39, 'spe': 91},
    'weight': 4,
    'abilities': {'0': 'Compound Eyes', '1': 'Snow Cloak'}
  },
  'Tangrowth': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 100, 'atk': 100, 'def': 125, 'spa': 110, 'spd': 50, 'spe': 50},
    'weight': 128.6,
    'abilities': {'0': 'Chlorophyll', '1': 'Leaf Guard'}
  },
  'Togekiss': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 85, 'atk': 50, 'def': 95, 'spa': 120, 'spd': 115, 'spe': 80},
    'weight': 38,
    'abilities': {'0': 'Hustle', '1': 'Serene Grace'}
  },
  'Torterra': {
    'type1': 'Grass',
    'type2': 'Ground',
    'baseStats':
        {'hp': 95, 'atk': 109, 'def': 105, 'spa': 75, 'spd': 85, 'spe': 56},
    'weight': 310,
    'abilities': {'0': 'Overgrow'}
  },
  'Toxicroak': {
    'type1': 'Poison',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 83, 'atk': 106, 'def': 65, 'spa': 86, 'spd': 65, 'spe': 85},
    'weight': 44.4,
    'abilities': {'0': 'Anticipation', '1': 'Dry Skin'}
  },
  'Turtwig': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 55, 'atk': 68, 'def': 64, 'spa': 45, 'spd': 55, 'spe': 31},
    'weight': 10.2,
    'canEvolve': true,
    'abilities': {'0': 'Overgrow'}
  },
  'Uxie': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 75, 'atk': 75, 'def': 130, 'spa': 75, 'spd': 130, 'spe': 95},
    'weight': 0.3,
    'ability': 'Levitate',
    'gender': 'genderless',
    'abilities': {'0': 'Levitate'}
  },
  'Vespiquen': {
    'type1': 'Bug',
    'type2': 'Flying',
    'baseStats':
        {'hp': 70, 'atk': 80, 'def': 102, 'spa': 80, 'spd': 102, 'spe': 40},
    'weight': 38.5,
    'abilities': {'0': 'Pressure'}
  },
  'Voodoom': {
    'type1': 'Fighting',
    'type2': 'Dark',
    'baseStats':
        {'hp': 90, 'atk': 85, 'def': 80, 'spa': 105, 'spd': 80, 'spe': 110},
    'weight': 75.5,
    'abilities': {'0': 'Volt Absorb', '1': 'Lightning Rod'}
  },
  'Weavile': {
    'type1': 'Dark',
    'type2': 'Ice',
    'baseStats':
        {'hp': 70, 'atk': 120, 'def': 65, 'spa': 45, 'spd': 85, 'spe': 125},
    'weight': 34,
    'abilities': {'0': 'Pressure'}
  },
  'Wormadam': {
    'type1': 'Bug',
    'type2': 'Grass',
    'baseStats':
        {'hp': 60, 'atk': 59, 'def': 85, 'spa': 79, 'spd': 105, 'spe': 36},
    'weight': 6.5,
    'abilities': {'0': 'Anticipation'}
  },
  'Wormadam-Sandy': {
    'type1': 'Bug',
    'type2': 'Ground',
    'baseStats':
        {'hp': 60, 'atk': 79, 'def': 105, 'spa': 59, 'spd': 85, 'spe': 36},
    'weight': 6.5,
    'abilities': {'0': 'Anticipation'}
  },
  'Wormadam-Trash': {
    'type1': 'Bug',
    'type2': 'Steel',
    'baseStats':
        {'hp': 60, 'atk': 69, 'def': 95, 'spa': 69, 'spd': 95, 'spe': 36},
    'weight': 6.5,
    'abilities': {'0': 'Anticipation'}
  },
  'Yanmega': {
    'type1': 'Bug',
    'type2': 'Flying',
    'baseStats':
        {'hp': 86, 'atk': 76, 'def': 86, 'spa': 116, 'spd': 56, 'spe': 95},
    'weight': 51.5,
    'abilities': {'0': 'Speed Boost', '1': 'Tinted Lens'}
  }
});

const BW: {[name: string]: Species} = extend(true, {}, DPP, {
  'Abra': {'abilities': {'H': 'Magic Guard'}},
  'Aerodactyl': {'abilities': {'H': 'Unnerve'}},
  'Alakazam': {'abilities': {'H': 'Magic Guard'}},
  'Arbok': {'abilities': {'H': 'Unnerve'}},
  'Arcanine': {'abilities': {'H': 'Justified'}},
  'Beedrill': {'abilities': {'H': 'Sniper'}},
  'Bellsprout': {'abilities': {'H': 'Gluttony'}},
  'Blastoise': {'abilities': {'H': 'Rain Dish'}},
  'Bulbasaur': {'abilities': {'H': 'Chlorophyll'}},
  'Butterfree': {'abilities': {'H': 'Tinted Lens'}},
  'Caterpie': {'abilities': {'H': 'Run Away'}},
  'Chansey': {'abilities': {'H': 'Healer'}},
  'Charizard': {'abilities': {'H': 'Solar Power'}},
  'Charmander': {'abilities': {'H': 'Solar Power'}},
  'Charmeleon': {'abilities': {'H': 'Solar Power'}},
  'Clefable': {'abilities': {'H': 'Unaware'}},
  'Clefairy': {'abilities': {'H': 'Friend Guard'}},
  'Cloyster': {'abilities': {'H': 'Overcoat'}},
  'Cubone': {'abilities': {'H': 'Battle Armor'}},
  'Dewgong': {'abilities': {'H': 'Ice Body'}},
  'Diglett': {'abilities': {'H': 'Sand Force'}},
  'Ditto': {'abilities': {'H': 'Imposter'}},
  'Dodrio': {'abilities': {'H': 'Tangled Feet'}},
  'Doduo': {'abilities': {'H': 'Tangled Feet'}},
  'Dragonair': {'abilities': {'H': 'Marvel Scale'}},
  'Dragonite': {'abilities': {'H': 'Multiscale'}},
  'Dratini': {'abilities': {'H': 'Marvel Scale'}},
  'Drowzee': {'abilities': {'H': 'Inner Focus'}},
  'Dugtrio': {'abilities': {'H': 'Sand Force'}},
  'Eevee': {'abilities': {'H': 'Anticipation'}},
  'Ekans': {'abilities': {'H': 'Unnerve'}},
  'Electabuzz': {'abilities': {'H': 'Vital Spirit'}},
  'Electrode': {'abilities': {'H': 'Aftermath'}},
  'Exeggcute': {'abilities': {'H': 'Harvest'}},
  'Exeggutor': {'abilities': {'H': 'Harvest'}},
  'Farfetch\'d': {'abilities': {'H': 'Defiant'}},
  'Fearow': {'abilities': {'H': 'Sniper'}},
  'Flareon': {'abilities': {'H': 'Guts'}},
  'Geodude': {'abilities': {'H': 'Sand Veil'}},
  'Gloom': {'abilities': {'H': 'Stench'}},
  'Golbat': {'abilities': {'H': 'Infiltrator'}},
  'Goldeen': {'abilities': {'H': 'Lightning Rod'}},
  'Golduck': {'abilities': {'H': 'Swift Swim'}},
  'Golem': {'abilities': {'H': 'Sand Veil'}},
  'Graveler': {'abilities': {'H': 'Sand Veil'}},
  'Grimer': {'abilities': {'H': 'Poison Touch'}},
  'Growlithe': {'abilities': {'H': 'Justified'}},
  'Gyarados': {'abilities': {'H': 'Moxie'}},
  'Hitmonchan': {'abilities': {'H': 'Inner Focus'}},
  'Hitmonlee': {'abilities': {'H': 'Unburden'}},
  'Horsea': {'abilities': {'H': 'Damp'}},
  'Hypno': {'abilities': {'H': 'Inner Focus'}},
  'Ivysaur': {'abilities': {'H': 'Chlorophyll'}},
  'Jigglypuff': {'abilities': {'H': 'Friend Guard'}},
  'Jolteon': {'abilities': {'H': 'Quick Feet'}},
  'Jynx': {'abilities': {'H': 'Dry Skin'}},
  'Kabuto': {'abilities': {'H': 'Weak Armor'}},
  'Kabutops': {'abilities': {'H': 'Weak Armor'}},
  'Kadabra': {'abilities': {'H': 'Magic Guard'}},
  'Kangaskhan': {'abilities': {'H': 'Inner Focus'}},
  'Kingler': {'abilities': {'H': 'Sheer Force'}},
  'Krabby': {'abilities': {'H': 'Sheer Force'}},
  'Lapras': {'abilities': {'H': 'Hydration'}},
  'Lickitung': {'abilities': {'H': 'Cloud Nine'}},
  'Machamp': {'abilities': {'H': 'Steadfast'}},
  'Machoke': {'abilities': {'H': 'Steadfast'}},
  'Machop': {'abilities': {'H': 'Steadfast'}},
  'Magikarp': {'abilities': {'H': 'Rattled'}},
  'Magmar': {'abilities': {'H': 'Vital Spirit'}},
  'Magnemite': {'abilities': {'H': 'Analytic'}},
  'Magneton': {'abilities': {'H': 'Analytic'}},
  'Mankey': {'abilities': {'H': 'Defiant'}},
  'Marowak': {'abilities': {'H': 'Battle Armor'}},
  'Meowth': {'abilities': {'H': 'Unnerve'}},
  'Mewtwo': {'abilities': {'H': 'Unnerve'}},
  'Mr. Mime': {'abilities': {'H': 'Technician'}},
  'Muk': {'abilities': {'H': 'Poison Touch'}},
  'Nidoking': {'abilities': {'H': 'Sheer Force'}},
  'Nidoqueen': {'abilities': {'H': 'Sheer Force'}},
  'Nidoran-F': {'abilities': {'H': 'Hustle'}},
  'Nidoran-M': {'abilities': {'H': 'Hustle'}},
  'Nidorina': {'abilities': {'H': 'Hustle'}},
  'Nidorino': {'abilities': {'H': 'Hustle'}},
  'Ninetales': {'abilities': {'H': 'Drought'}},
  'Oddish': {'abilities': {'H': 'Run Away'}},
  'Omanyte': {'abilities': {'H': 'Weak Armor'}},
  'Omastar': {'abilities': {'H': 'Weak Armor'}},
  'Onix': {'abilities': {'H': 'Weak Armor'}},
  'Paras': {'abilities': {'H': 'Damp'}},
  'Parasect': {'abilities': {'H': 'Damp'}},
  'Persian': {'abilities': {'H': 'Unnerve'}},
  'Pidgeot': {'abilities': {'H': 'Big Pecks'}},
  'Pidgeotto': {'abilities': {'H': 'Big Pecks'}},
  'Pidgey': {'abilities': {'H': 'Big Pecks'}},
  'Pikachu': {'abilities': {'H': 'Lightning Rod'}},
  'Pinsir': {'abilities': {'H': 'Moxie'}},
  'Poliwag': {'abilities': {'H': 'Swift Swim'}},
  'Poliwhirl': {'abilities': {'H': 'Swift Swim'}},
  'Poliwrath': {'abilities': {'H': 'Swift Swim'}},
  'Ponyta': {'abilities': {'H': 'Flame Body'}},
  'Porygon': {'abilities': {'H': 'Analytic'}},
  'Primeape': {'abilities': {'H': 'Defiant'}},
  'Psyduck': {'abilities': {'H': 'Swift Swim'}},
  'Raichu': {'abilities': {'H': 'Lightning Rod'}},
  'Rapidash': {'abilities': {'H': 'Flame Body'}},
  'Raticate': {'abilities': {'H': 'Hustle'}},
  'Rattata': {'abilities': {'H': 'Hustle'}},
  'Rhydon': {'abilities': {'H': 'Reckless'}},
  'Rhyhorn': {'abilities': {'H': 'Reckless'}},
  'Sandshrew': {'abilities': {'H': 'Sand Rush'}},
  'Sandslash': {'abilities': {'H': 'Sand Rush'}},
  'Scyther': {'abilities': {'H': 'Steadfast'}},
  'Seadra': {'abilities': {'H': 'Damp'}},
  'Seaking': {'abilities': {'H': 'Lightning Rod'}},
  'Seel': {'abilities': {'H': 'Ice Body'}},
  'Shellder': {'abilities': {'H': 'Overcoat'}},
  'Slowbro': {'abilities': {'H': 'Regenerator'}},
  'Slowpoke': {'abilities': {'H': 'Regenerator'}},
  'Snorlax': {'abilities': {'H': 'Gluttony'}},
  'Spearow': {'abilities': {'H': 'Sniper'}},
  'Squirtle': {'abilities': {'H': 'Rain Dish'}},
  'Starmie': {'abilities': {'H': 'Analytic'}},
  'Staryu': {'abilities': {'H': 'Analytic'}},
  'Tangela': {'abilities': {'H': 'Regenerator'}},
  'Tauros': {'abilities': {'H': 'Sheer Force'}},
  'Tentacool': {'abilities': {'H': 'Rain Dish'}},
  'Tentacruel': {'abilities': {'H': 'Rain Dish'}},
  'Vaporeon': {'abilities': {'H': 'Hydration'}},
  'Venomoth': {'abilities': {'H': 'Wonder Skin'}},
  'Venonat': {'abilities': {'H': 'Run Away'}},
  'Venusaur': {'abilities': {'H': 'Chlorophyll'}},
  'Victreebel': {'abilities': {'H': 'Gluttony'}},
  'Vileplume': {'abilities': {'H': 'Effect Spore'}},
  'Voltorb': {'abilities': {'H': 'Aftermath'}},
  'Vulpix': {'abilities': {'H': 'Drought'}},
  'Wartortle': {'abilities': {'H': 'Rain Dish'}},
  'Weedle': {'abilities': {'H': 'Run Away'}},
  'Weepinbell': {'abilities': {'H': 'Gluttony'}},
  'Wigglytuff': {'abilities': {'H': 'Frisk'}},
  'Zubat': {'abilities': {'H': 'Infiltrator'}},
  'Aipom': {'abilities': {'H': 'Skill Link'}},
  'Ampharos': {'abilities': {'H': 'Plus'}},
  'Ariados': {'abilities': {'H': 'Sniper'}},
  'Azumarill': {'abilities': {'H': 'Sap Sipper'}},
  'Bellossom': {'abilities': {'H': 'Healer'}},
  'Blissey': {'abilities': {'H': 'Healer'}},
  'Chinchou': {'abilities': {'H': 'Water Absorb'}},
  'Cleffa': {'abilities': {'H': 'Friend Guard'}},
  'Corsola': {'abilities': {'H': 'Regenerator'}},
  'Crobat': {'abilities': {'H': 'Infiltrator'}},
  'Delibird': {'abilities': {'H': 'Insomnia'}},
  'Donphan': {'abilities': {'H': 'Sand Veil'}},
  'Dunsparce': {'abilities': {'H': 'Rattled'}},
  'Elekid': {'abilities': {'H': 'Vital Spirit'}},
  'Espeon': {'abilities': {'H': 'Magic Bounce'}},
  'Flaaffy': {'abilities': {'H': 'Plus'}},
  'Forretress': {'abilities': {'H': 'Overcoat'}},
  'Furret': {'abilities': {'H': 'Frisk'}},
  'Girafarig': {'abilities': {'H': 'Sap Sipper'}},
  'Gligar': {'abilities': {'H': 'Immunity'}},
  'Granbull': {'abilities': {'H': 'Rattled'}},
  'Heracross': {'abilities': {'H': 'Moxie'}},
  'Hitmontop': {'abilities': {'H': 'Steadfast'}},
  'Ho-Oh': {'abilities': {'H': 'Regenerator'}},
  'Hoothoot': {'abilities': {'H': 'Tinted Lens'}},
  'Hoppip': {'abilities': {'H': 'Infiltrator'}},
  'Houndoom': {'abilities': {'H': 'Unnerve'}},
  'Houndour': {'abilities': {'H': 'Unnerve'}},
  'Igglybuff': {'abilities': {'H': 'Friend Guard'}},
  'Jumpluff': {'abilities': {'H': 'Infiltrator'}},
  'Kingdra': {'abilities': {'H': 'Damp'}},
  'Lanturn': {'abilities': {'H': 'Water Absorb'}},
  'Larvitar': {'abilities': {'H': 'Sand Veil'}},
  'Ledian': {'abilities': {'H': 'Iron Fist'}},
  'Ledyba': {'abilities': {'H': 'Rattled'}},
  'Lugia': {'abilities': {'H': 'Multiscale'}},
  'Magby': {'abilities': {'H': 'Vital Spirit'}},
  'Magcargo': {'abilities': {'H': 'Weak Armor'}},
  'Mantine': {'abilities': {'H': 'Water Veil'}},
  'Mareep': {'abilities': {'H': 'Plus'}},
  'Marill': {'abilities': {'H': 'Sap Sipper'}},
  'Miltank': {'abilities': {'H': 'Sap Sipper'}},
  'Murkrow': {'abilities': {'H': 'Prankster'}},
  'Natu': {'abilities': {'H': 'Magic Bounce'}},
  'Noctowl': {'abilities': {'H': 'Tinted Lens'}},
  'Octillery': {'abilities': {'H': 'Moody'}},
  'Phanpy': {'abilities': {'H': 'Sand Veil'}},
  'Pichu': {'abilities': {'H': 'Lightning Rod'}},
  'Piloswine': {'abilities': {'H': 'Thick Fat'}},
  'Pineco': {'abilities': {'H': 'Overcoat'}},
  'Politoed': {'abilities': {'H': 'Drizzle'}},
  'Porygon2': {'abilities': {'H': 'Analytic'}},
  'Quagsire': {'abilities': {'H': 'Unaware'}},
  'Qwilfish': {'abilities': {'H': 'Intimidate'}},
  'Remoraid': {'abilities': {'H': 'Moody'}},
  'Scizor': {'abilities': {'H': 'Light Metal'}},
  'Sentret': {'abilities': {'H': 'Frisk'}},
  'Shuckle': {'abilities': {'H': 'Contrary'}},
  'Skarmory': {'abilities': {'H': 'Weak Armor'}},
  'Skiploom': {'abilities': {'H': 'Infiltrator'}},
  'Slowking': {'abilities': {'H': 'Regenerator'}},
  'Slugma': {'abilities': {'H': 'Weak Armor'}},
  'Smeargle': {'abilities': {'H': 'Moody'}},
  'Smoochum': {'abilities': {'H': 'Hydration'}},
  'Sneasel': {'abilities': {'H': 'Pickpocket'}},
  'Snubbull': {'abilities': {'H': 'Rattled'}},
  'Spinarak': {'abilities': {'H': 'Sniper'}},
  'Stantler': {'abilities': {'H': 'Sap Sipper'}},
  'Steelix': {'abilities': {'H': 'Sheer Force'}},
  'Sudowoodo': {'abilities': {'H': 'Rattled'}},
  'Sunflora': {'abilities': {'H': 'Early Bird'}},
  'Sunkern': {'abilities': {'H': 'Early Bird'}},
  'Swinub': {'abilities': {'H': 'Thick Fat'}},
  'Teddiursa': {'abilities': {'H': 'Honey Gather'}},
  'Togepi': {'abilities': {'H': 'Super Luck'}},
  'Togetic': {'abilities': {'H': 'Super Luck'}},
  'Tyranitar': {'abilities': {'H': 'Unnerve'}},
  'Tyrogue': {'abilities': {'H': 'Vital Spirit'}},
  'Umbreon': {'abilities': {'H': 'Inner Focus'}},
  'Ursaring': {'abilities': {'H': 'Unnerve'}},
  'Wobbuffet': {'abilities': {'H': 'Telepathy'}},
  'Wooper': {'abilities': {'H': 'Unaware'}},
  'Xatu': {'abilities': {'H': 'Magic Bounce'}},
  'Yanma': {'abilities': {'H': 'Frisk'}},
  'Absol': {'abilities': {'H': 'Justified'}},
  'Aggron': {'abilities': {'H': 'Heavy Metal'}},
  'Altaria': {'abilities': {'H': 'Cloud Nine'}},
  'Anorith': {'abilities': {'H': 'Swift Swim'}},
  'Armaldo': {'abilities': {'H': 'Swift Swim'}},
  'Aron': {'abilities': {'H': 'Heavy Metal'}},
  'Azurill': {'abilities': {'H': 'Sap Sipper'}},
  'Bagon': {'abilities': {'H': 'Sheer Force'}},
  'Banette': {'abilities': {'H': 'Cursed Body'}},
  'Barboach': {'abilities': {'H': 'Hydration'}},
  'Beautifly': {'abilities': {'H': 'Rivalry'}},
  'Beldum': {'abilities': {'H': 'Light Metal'}},
  'Blaziken': {'abilities': {'H': 'Speed Boost'}},
  'Breloom': {'abilities': {'H': 'Technician'}},
  'Cacnea': {'abilities': {'H': 'Water Absorb'}},
  'Cacturne': {'abilities': {'H': 'Water Absorb'}},
  'Camerupt': {'abilities': {'H': 'Anger Point'}},
  'Carvanha': {'abilities': {'H': 'Speed Boost'}},
  'Clamperl': {'abilities': {'H': 'Rattled'}},
  'Combusken': {'abilities': {'H': 'Speed Boost'}},
  'Corphish': {'abilities': {'H': 'Adaptability'}},
  'Cradily': {'abilities': {'H': 'Storm Drain'}},
  'Crawdaunt': {'abilities': {'H': 'Adaptability'}},
  'Delcatty': {'abilities': {'H': 'Wonder Skin'}},
  'Dustox': {'abilities': {'H': 'Compound Eyes'}},
  'Electrike': {'abilities': {'H': 'Minus'}},
  'Exploud': {'abilities': {'H': 'Scrappy'}},
  'Feebas': {'abilities': {'H': 'Adaptability'}},
  'Gardevoir': {'abilities': {'H': 'Telepathy'}},
  'Glalie': {'abilities': {'H': 'Moody'}},
  'Gorebyss': {'abilities': {'H': 'Hydration'}},
  'Grovyle': {'abilities': {'H': 'Unburden'}},
  'Grumpig': {'abilities': {'H': 'Gluttony'}},
  'Gulpin': {'abilities': {'H': 'Gluttony'}},
  'Hariyama': {'abilities': {'H': 'Sheer Force'}},
  'Huntail': {'abilities': {'H': 'Water Veil'}},
  'Illumise': {'abilities': {'H': 'Prankster'}},
  'Kirlia': {'abilities': {'H': 'Telepathy'}},
  'Lairon': {'abilities': {'H': 'Heavy Metal'}},
  'Lileep': {'abilities': {'H': 'Storm Drain'}},
  'Linoone': {'abilities': {'H': 'Quick Feet'}},
  'Lombre': {'abilities': {'H': 'Own Tempo'}},
  'Lotad': {'abilities': {'H': 'Own Tempo'}},
  'Loudred': {'abilities': {'H': 'Scrappy'}},
  'Ludicolo': {'abilities': {'H': 'Own Tempo'}},
  'Luvdisc': {'abilities': {'H': 'Hydration'}},
  'Makuhita': {'abilities': {'H': 'Sheer Force'}},
  'Manectric': {'abilities': {'H': 'Minus'}},
  'Marshtomp': {'abilities': {'H': 'Damp'}},
  'Masquerain': {'abilities': {'H': 'Unnerve'}},
  'Mawile': {'abilities': {'H': 'Sheer Force'}},
  'Medicham': {'abilities': {'H': 'Telepathy'}},
  'Meditite': {'abilities': {'H': 'Telepathy'}},
  'Metagross': {'abilities': {'H': 'Light Metal'}},
  'Metang': {'abilities': {'H': 'Light Metal'}},
  'Mightyena': {'abilities': {'H': 'Moxie'}},
  'Milotic': {'abilities': {'H': 'Cute Charm'}},
  'Mudkip': {'abilities': {'H': 'Damp'}},
  'Nincada': {'abilities': {'H': 'Run Away'}},
  'Ninjask': {'abilities': {'H': 'Infiltrator'}},
  'Nosepass': {'abilities': {'H': 'Sand Force'}},
  'Numel': {'abilities': {'H': 'Own Tempo'}},
  'Nuzleaf': {'abilities': {'H': 'Pickpocket'}},
  'Pelipper': {'abilities': {'H': 'Rain Dish'}},
  'Poochyena': {'abilities': {'H': 'Rattled'}},
  'Ralts': {'abilities': {'H': 'Telepathy'}},
  'Relicanth': {'abilities': {'H': 'Sturdy'}},
  'Roselia': {'abilities': {'H': 'Leaf Guard'}},
  'Sableye': {'abilities': {'H': 'Prankster'}},
  'Salamence': {'abilities': {'H': 'Moxie'}},
  'Sceptile': {'abilities': {'H': 'Unburden'}},
  'Sealeo': {'abilities': {'H': 'Oblivious'}},
  'Seedot': {'abilities': {'H': 'Pickpocket'}},
  'Seviper': {'abilities': {'H': 'Infiltrator'}},
  'Sharpedo': {'abilities': {'H': 'Speed Boost'}},
  'Shelgon': {'abilities': {'H': 'Overcoat'}},
  'Shiftry': {'abilities': {'H': 'Pickpocket'}},
  'Shroomish': {'abilities': {'H': 'Quick Feet'}},
  'Shuppet': {'abilities': {'H': 'Cursed Body'}},
  'Skitty': {'abilities': {'H': 'Wonder Skin'}},
  'Snorunt': {'abilities': {'H': 'Moody'}},
  'Spheal': {'abilities': {'H': 'Oblivious'}},
  'Spinda': {'abilities': {'H': 'Contrary'}},
  'Spoink': {'abilities': {'H': 'Gluttony'}},
  'Surskit': {'abilities': {'H': 'Rain Dish'}},
  'Swablu': {'abilities': {'H': 'Cloud Nine'}},
  'Swalot': {'abilities': {'H': 'Gluttony'}},
  'Swampert': {'abilities': {'H': 'Damp'}},
  'Swellow': {'abilities': {'H': 'Scrappy'}},
  'Taillow': {'abilities': {'H': 'Scrappy'}},
  'Torchic': {'abilities': {'H': 'Speed Boost'}},
  'Torkoal': {'abilities': {'H': 'Shell Armor'}},
  'Trapinch': {'abilities': {'H': 'Sheer Force'}},
  'Treecko': {'abilities': {'H': 'Unburden'}},
  'Tropius': {'abilities': {'H': 'Harvest'}},
  'Volbeat': {'abilities': {'H': 'Prankster'}},
  'Wailmer': {'abilities': {'H': 'Pressure'}},
  'Wailord': {'abilities': {'H': 'Pressure'}},
  'Walrein': {'abilities': {'H': 'Oblivious'}},
  'Whiscash': {'abilities': {'H': 'Hydration'}},
  'Whismur': {'abilities': {'H': 'Rattled'}},
  'Wingull': {'abilities': {'H': 'Rain Dish'}},
  'Wurmple': {'abilities': {'H': 'Run Away'}},
  'Wynaut': {'abilities': {'H': 'Telepathy'}},
  'Zangoose': {'abilities': {'H': 'Toxic Boost'}},
  'Zigzagoon': {'abilities': {'H': 'Quick Feet'}},
  'Abomasnow': {'abilities': {'H': 'Soundproof'}},
  'Ambipom': {'abilities': {'H': 'Skill Link'}},
  'Bastiodon': {'abilities': {'H': 'Soundproof'}},
  'Bibarel': {'abilities': {'H': 'Moody'}},
  'Bidoof': {'abilities': {'H': 'Moody'}},
  'Bonsly': {'abilities': {'H': 'Rattled'}},
  'Breezi': {'abilities': {'H': 'Frisk'}},
  'Bronzong': {'abilities': {'H': 'Heavy Metal'}},
  'Bronzor': {'abilities': {'H': 'Heavy Metal'}},
  'Budew': {'abilities': {'H': 'Leaf Guard'}},
  'Buizel': {'abilities': {'H': 'Water Veil'}},
  'Buneary': {'abilities': {'H': 'Limber'}},
  'Burmy': {'abilities': {'H': 'Overcoat'}},
  'Chatot': {'abilities': {'H': 'Big Pecks'}},
  'Chimchar': {'abilities': {'H': 'Iron Fist'}},
  'Combee': {'abilities': {'H': 'Hustle'}},
  'Cranidos': {'abilities': {'H': 'Sheer Force'}},
  'Croagunk': {'abilities': {'H': 'Poison Touch'}},
  'Dialga': {'abilities': {'H': 'Telepathy'}},
  'Drapion': {'abilities': {'H': 'Keen Eye'}},
  'Drifblim': {'abilities': {'H': 'Flare Boost'}},
  'Drifloon': {'abilities': {'H': 'Flare Boost'}},
  'Electivire': {'abilities': {'H': 'Vital Spirit'}},
  'Embirch': {'abilities': {'H': 'Chlorophyll'}},
  'Empoleon': {'abilities': {'H': 'Defiant'}},
  'Finneon': {'abilities': {'H': 'Water Veil'}},
  'Flarelm': {'abilities': {'H': 'White Smoke'}},
  'Floatzel': {'abilities': {'H': 'Water Veil'}},
  'Froslass': {'abilities': {'H': 'Cursed Body'}},
  'Gabite': {'abilities': {'H': 'Rough Skin'}},
  'Gallade': {'abilities': {'H': 'Justified'}},
  'Garchomp': {'abilities': {'H': 'Rough Skin'}},
  'Gastrodon': {'abilities': {'H': 'Sand Force'}},
  'Gible': {'abilities': {'H': 'Rough Skin'}},
  'Giratina': {'abilities': {'H': 'Telepathy'}},
  'Glaceon': {'abilities': {'H': 'Ice Body'}},
  'Glameow': {'abilities': {'H': 'Keen Eye'}},
  'Gliscor': {'abilities': {'H': 'Poison Heal'}},
  'Grotle': {'abilities': {'H': 'Shell Armor'}},
  'Happiny': {'abilities': {'H': 'Friend Guard'}},
  'Hippopotas': {'abilities': {'H': 'Sand Force'}},
  'Hippowdon': {'abilities': {'H': 'Sand Force'}},
  'Honchkrow': {'abilities': {'H': 'Moxie'}},
  'Infernape': {'abilities': {'H': 'Iron Fist'}},
  'Kricketot': {'abilities': {'H': 'Run Away'}},
  'Kricketune': {'abilities': {'H': 'Technician'}},
  'Leafeon': {'abilities': {'H': 'Chlorophyll'}},
  'Lickilicky': {'abilities': {'H': 'Cloud Nine'}},
  'Lopunny': {'abilities': {'H': 'Limber'}},
  'Lucario': {'abilities': {'H': 'Justified'}},
  'Lumineon': {'abilities': {'H': 'Water Veil'}},
  'Luxio': {'abilities': {'H': 'Guts'}},
  'Luxray': {'abilities': {'H': 'Guts'}},
  'Magmortar': {'abilities': {'H': 'Vital Spirit'}},
  'Magnezone': {'abilities': {'H': 'Analytic'}},
  'Mamoswine': {'abilities': {'H': 'Thick Fat'}},
  'Mantyke': {'abilities': {'H': 'Water Veil'}},
  'Mime Jr.': {'abilities': {'H': 'Technician'}},
  'Monferno': {'abilities': {'H': 'Iron Fist'}},
  'Mothim': {'abilities': {'H': 'Tinted Lens'}},
  'Munchlax': {'abilities': {'H': 'Gluttony'}},
  'Pachirisu': {'abilities': {'H': 'Volt Absorb'}},
  'Palkia': {'abilities': {'H': 'Telepathy'}},
  'Piplup': {'abilities': {'H': 'Defiant'}},
  'Porygon-Z': {'abilities': {'H': 'Analytic'}},
  'Prinplup': {'abilities': {'H': 'Defiant'}},
  'Probopass': {'abilities': {'H': 'Sand Force'}},
  'Purugly': {'abilities': {'H': 'Defiant'}},
  'Rampardos': {'abilities': {'H': 'Sheer Force'}},
  'Rhyperior': {'abilities': {'H': 'Reckless'}},
  'Riolu': {'abilities': {'H': 'Prankster'}},
  'Roserade': {'abilities': {'H': 'Technician'}},
  'Rotom-Mow': {'type2': 'Grass'},
  'Rotom-Frost': {'type2': 'Ice'},
  'Rotom-Heat': {'type2': 'Fire'},
  'Rotom-Fan': {'type2': 'Flying'},
  'Rotom-Wash': {'type2': 'Water'},
  'Shellos': {'abilities': {'H': 'Sand Force'}},
  'Shieldon': {'abilities': {'H': 'Soundproof'}},
  'Shinx': {'abilities': {'H': 'Guts'}},
  'Skorupi': {'abilities': {'H': 'Keen Eye'}},
  'Skuntank': {'abilities': {'H': 'Keen Eye'}},
  'Snover': {'abilities': {'H': 'Soundproof'}},
  'Spiritomb': {'abilities': {'H': 'Infiltrator'}},
  'Staraptor': {'abilities': {'H': 'Reckless'}},
  'Staravia': {'abilities': {'H': 'Reckless'}},
  'Stunky': {'abilities': {'H': 'Keen Eye'}},
  'Syclar': {'abilities': {'H': 'Ice Body'}},
  'Tangrowth': {'abilities': {'H': 'Regenerator'}},
  'Togekiss': {'abilities': {'H': 'Super Luck'}},
  'Torterra': {'abilities': {'H': 'Shell Armor'}},
  'Toxicroak': {'abilities': {'H': 'Poison Touch'}},
  'Turtwig': {'abilities': {'H': 'Shell Armor'}},
  'Vespiquen': {'abilities': {'H': 'Unnerve'}},
  'Weavile': {'abilities': {'H': 'Pickpocket'}},
  'Wormadam': {'abilities': {'H': 'Overcoat'}},
  'Wormadam-Sandy': {'abilities': {'H': 'Overcoat'}},
  'Wormadam-Trash': {'abilities': {'H': 'Overcoat'}},
  'Yanmega': {'abilities': {'H': 'Frisk'}},
  'Accelgor': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 80, 'atk': 70, 'def': 40, 'spa': 100, 'spd': 60, 'spe': 145},
    'weight': 25.3,
    'abilities': {'0': 'Hydration', '1': 'Sticky Hold', 'H': 'Unburden'}
  },
  'Alomomola': {
    'type1': 'Water',
    'baseStats':
        {'hp': 165, 'atk': 75, 'def': 80, 'spa': 40, 'spd': 45, 'spe': 65},
    'weight': 31.6,
    'abilities': {'0': 'Healer', '1': 'Hydration', 'H': 'Regenerator'}
  },
  'Amoonguss': {
    'type1': 'Grass',
    'type2': 'Poison',
    'baseStats':
        {'hp': 114, 'atk': 85, 'def': 70, 'spa': 85, 'spd': 80, 'spe': 30},
    'weight': 10.5,
    'abilities': {'0': 'Effect Spore', 'H': 'Regenerator'}
  },
  'Archen': {
    'type1': 'Rock',
    'type2': 'Flying',
    'baseStats':
        {'hp': 55, 'atk': 112, 'def': 45, 'spa': 74, 'spd': 45, 'spe': 70},
    'weight': 9.5,
    'ability': 'Defeatist',
    'canEvolve': true,
    'abilities': {'0': 'Defeatist'}
  },
  'Archeops': {
    'type1': 'Rock',
    'type2': 'Flying',
    'baseStats':
        {'hp': 75, 'atk': 140, 'def': 65, 'spa': 112, 'spd': 65, 'spe': 110},
    'weight': 32,
    'ability': 'Defeatist',
    'abilities': {'0': 'Defeatist'}
  },
  'Argalis': {
    'type1': 'Bug',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 60, 'atk': 90, 'def': 89, 'spa': 87, 'spd': 40, 'spe': 54},
    'weight': 341.4,
    'abilities': {'0': 'Shed Skin', '1': 'Compound Eyes', 'H': 'Overcoat'}
  },
  'Audino': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 103, 'atk': 60, 'def': 86, 'spa': 60, 'spd': 86, 'spe': 50},
    'weight': 31,
    'abilities': {'0': 'Healer', '1': 'Regenerator', 'H': 'Klutz'}
  },
  'Aurumoth': {
    'type1': 'Bug',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 110, 'atk': 120, 'def': 99, 'spa': 117, 'spd': 60, 'spe': 94},
    'weight': 193,
    'abilities': {'0': 'Weak Armor', '1': 'No Guard', 'H': 'Illusion'}
  },
  'Axew': {
    'type1': 'Dragon',
    'baseStats':
        {'hp': 46, 'atk': 87, 'def': 60, 'spa': 30, 'spd': 40, 'spe': 57},
    'weight': 18,
    'canEvolve': true,
    'abilities': {'0': 'Rivalry', '1': 'Mold Breaker', 'H': 'Unnerve'}
  },
  'Basculin': {
    'type1': 'Water',
    'baseStats':
        {'hp': 70, 'atk': 92, 'def': 65, 'spa': 80, 'spd': 55, 'spe': 98},
    'weight': 18,
    'abilities': {'0': 'Reckless', '1': 'Adaptability', 'H': 'Mold Breaker'}
  },
  'Beartic': {
    'type1': 'Ice',
    'baseStats':
        {'hp': 95, 'atk': 110, 'def': 80, 'spa': 70, 'spd': 80, 'spe': 50},
    'weight': 260,
    'abilities': {'0': 'Snow Cloak', 'H': 'Swift Swim'}
  },
  'Beheeyem': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 75, 'atk': 75, 'def': 75, 'spa': 125, 'spd': 95, 'spe': 40},
    'weight': 34.5,
    'abilities': {'0': 'Telepathy', '1': 'Synchronize', 'H': 'Analytic'}
  },
  'Bisharp': {
    'type1': 'Dark',
    'type2': 'Steel',
    'baseStats':
        {'hp': 65, 'atk': 125, 'def': 100, 'spa': 60, 'spd': 70, 'spe': 70},
    'weight': 70,
    'abilities': {'0': 'Defiant', '1': 'Inner Focus', 'H': 'Pressure'}
  },
  'Blitzle': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 45, 'atk': 60, 'def': 32, 'spa': 50, 'spd': 32, 'spe': 76},
    'weight': 29.8,
    'canEvolve': true,
    'abilities': {'0': 'Lightning Rod', '1': 'Motor Drive', 'H': 'Sap Sipper'}
  },
  'Boldore': {
    'type1': 'Rock',
    'baseStats':
        {'hp': 70, 'atk': 105, 'def': 105, 'spa': 50, 'spd': 40, 'spe': 20},
    'weight': 102,
    'canEvolve': true,
    'abilities': {'0': 'Sturdy', 'H': 'Sand Force'}
  },
  'Bouffalant': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 95, 'atk': 110, 'def': 95, 'spa': 40, 'spd': 95, 'spe': 55},
    'weight': 94.6,
    'abilities': {'0': 'Reckless', '1': 'Sap Sipper', 'H': 'Soundproof'}
  },
  'Brattler': {
    'type1': 'Dark',
    'type2': 'Grass',
    'baseStats':
        {'hp': 80, 'atk': 70, 'def': 40, 'spa': 20, 'spd': 90, 'spe': 30},
    'weight': 11.5,
    'abilities': {'0': 'Harvest', '1': 'Infiltrator', 'H': 'Rattled'}
  },
  'Braviary': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 100, 'atk': 123, 'def': 75, 'spa': 57, 'spd': 75, 'spe': 80},
    'weight': 41,
    'abilities': {'0': 'Keen Eye', '1': 'Sheer Force', 'H': 'Defiant'}
  },
  'Carracosta': {
    'type1': 'Water',
    'type2': 'Rock',
    'baseStats':
        {'hp': 74, 'atk': 108, 'def': 133, 'spa': 83, 'spd': 65, 'spe': 32},
    'weight': 81,
    'abilities': {'0': 'Solid Rock', '1': 'Sturdy', 'H': 'Swift Swim'}
  },
  'Cawdet': {
    'type1': 'Steel',
    'type2': 'Flying',
    'baseStats':
        {'hp': 35, 'atk': 72, 'def': 85, 'spa': 40, 'spd': 55, 'spe': 88},
    'weight': 25,
    'abilities': {'0': 'Keen Eye', '1': 'Volt Absorb', 'H': 'Big Pecks'}
  },
  'Cawmodore': {
    'type1': 'Steel',
    'type2': 'Flying',
    'baseStats':
        {'hp': 50, 'atk': 92, 'def': 130, 'spa': 65, 'spd': 75, 'spe': 118},
    'weight': 37,
    'abilities': {'0': 'Intimidate', '1': 'Volt Absorb', 'H': 'Big Pecks'}
  },
  'Chandelure': {
    'type1': 'Ghost',
    'type2': 'Fire',
    'baseStats':
        {'hp': 60, 'atk': 55, 'def': 90, 'spa': 145, 'spd': 90, 'spe': 80},
    'weight': 34.3,
    'abilities': {'0': 'Flash Fire', '1': 'Flame Body'}
  },
  'Cinccino': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 75, 'atk': 95, 'def': 60, 'spa': 65, 'spd': 60, 'spe': 115},
    'weight': 7.5,
    'abilities': {'0': 'Cute Charm', '1': 'Technician', 'H': 'Skill Link'}
  },
  'Cobalion': {
    'type1': 'Steel',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 91, 'atk': 90, 'def': 129, 'spa': 90, 'spd': 72, 'spe': 108},
    'weight': 250,
    'ability': 'Justified',
    'gender': 'genderless',
    'abilities': {'0': 'Justified'}
  },
  'Cofagrigus': {
    'type1': 'Ghost',
    'baseStats':
        {'hp': 58, 'atk': 50, 'def': 145, 'spa': 95, 'spd': 105, 'spe': 30},
    'weight': 76.5,
    'ability': 'Mummy',
    'abilities': {'0': 'Mummy'}
  },
  'Conkeldurr': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 105, 'atk': 140, 'def': 95, 'spa': 55, 'spd': 65, 'spe': 45},
    'weight': 87,
    'abilities': {'0': 'Guts', '1': 'Sheer Force', 'H': 'Iron Fist'}
  },
  'Cottonee': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 40, 'atk': 27, 'def': 60, 'spa': 37, 'spd': 50, 'spe': 66},
    'weight': 0.6,
    'canEvolve': true,
    'abilities': {'0': 'Prankster', '1': 'Infiltrator', 'H': 'Chlorophyll'}
  },
  'Crustle': {
    'type1': 'Bug',
    'type2': 'Rock',
    'baseStats':
        {'hp': 70, 'atk': 95, 'def': 125, 'spa': 65, 'spd': 75, 'spe': 45},
    'weight': 200,
    'abilities': {'0': 'Sturdy', '1': 'Shell Armor', 'H': 'Weak Armor'}
  },
  'Cryogonal': {
    'type1': 'Ice',
    'baseStats':
        {'hp': 70, 'atk': 50, 'def': 30, 'spa': 95, 'spd': 135, 'spe': 105},
    'weight': 148,
    'ability': 'Levitate',
    'gender': 'genderless',
    'abilities': {'0': 'Levitate'}
  },
  'Cubchoo': {
    'type1': 'Ice',
    'baseStats':
        {'hp': 55, 'atk': 70, 'def': 40, 'spa': 60, 'spd': 40, 'spe': 40},
    'weight': 8.5,
    'canEvolve': true,
    'abilities': {'0': 'Snow Cloak', 'H': 'Rattled'}
  },
  'Cupra': {
    'type1': 'Bug',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 50, 'atk': 60, 'def': 49, 'spa': 67, 'spd': 30, 'spe': 44},
    'weight': 4.8,
    'abilities': {'0': 'Shield Dust', '1': 'Keen Eye', 'H': 'Magic Guard'}
  },
  'Darmanitan': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 105, 'atk': 140, 'def': 55, 'spa': 30, 'spd': 55, 'spe': 95},
    'weight': 92.9,
    'ability': 'Sheer Force',
    'formes': ['Darmanitan', 'Darmanitan-Z'],
    'abilities': {'0': 'Sheer Force', 'H': 'Zen Mode'}
  },
  'Darmanitan-Z': {
    'type1': 'Fire',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 105, 'atk': 30, 'def': 105, 'spa': 140, 'spd': 105, 'spe': 55},
    'weight': 92.9,
    'isAlternateForme': true,
    'abilities': {'0': 'Zen Mode'}
  },
  'Darumaka': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 70, 'atk': 90, 'def': 45, 'spa': 15, 'spd': 45, 'spe': 50},
    'weight': 37.5,
    'canEvolve': true,
    'abilities': {'0': 'Hustle', 'H': 'Inner Focus'}
  },
  'Deerling': {
    'type1': 'Normal',
    'type2': 'Grass',
    'baseStats':
        {'hp': 60, 'atk': 60, 'def': 50, 'spa': 40, 'spd': 50, 'spe': 75},
    'weight': 19.5,
    'canEvolve': true,
    'abilities': {'0': 'Chlorophyll', '1': 'Sap Sipper', 'H': 'Serene Grace'}
  },
  'Deino': {
    'type1': 'Dark',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 52, 'atk': 65, 'def': 50, 'spa': 45, 'spd': 50, 'spe': 38},
    'weight': 17.3,
    'ability': 'Hustle',
    'canEvolve': true,
    'abilities': {'0': 'Hustle'}
  },
  'Dewott': {
    'type1': 'Water',
    'baseStats':
        {'hp': 75, 'atk': 75, 'def': 60, 'spa': 83, 'spd': 60, 'spe': 60},
    'weight': 24.5,
    'canEvolve': true,
    'abilities': {'0': 'Torrent'}
  },
  'Drilbur': {
    'type1': 'Ground',
    'baseStats':
        {'hp': 60, 'atk': 85, 'def': 40, 'spa': 30, 'spd': 45, 'spe': 68},
    'weight': 8.5,
    'canEvolve': true,
    'abilities': {'0': 'Sand Rush', '1': 'Sand Force', 'H': 'Mold Breaker'}
  },
  'Druddigon': {
    'type1': 'Dragon',
    'baseStats':
        {'hp': 77, 'atk': 120, 'def': 90, 'spa': 60, 'spd': 90, 'spe': 48},
    'weight': 139,
    'abilities': {'0': 'Rough Skin', '1': 'Sheer Force', 'H': 'Mold Breaker'}
  },
  'Ducklett': {
    'type1': 'Water',
    'type2': 'Flying',
    'baseStats':
        {'hp': 62, 'atk': 44, 'def': 50, 'spa': 44, 'spd': 50, 'spe': 55},
    'weight': 5.5,
    'canEvolve': true,
    'abilities': {'0': 'Keen Eye', '1': 'Big Pecks', 'H': 'Hydration'}
  },
  'Duosion': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 65, 'atk': 40, 'def': 50, 'spa': 125, 'spd': 60, 'spe': 30},
    'weight': 8,
    'canEvolve': true,
    'abilities': {'0': 'Overcoat', '1': 'Magic Guard', 'H': 'Regenerator'}
  },
  'Durant': {
    'type1': 'Bug',
    'type2': 'Steel',
    'baseStats':
        {'hp': 58, 'atk': 109, 'def': 112, 'spa': 48, 'spd': 48, 'spe': 109},
    'weight': 33,
    'abilities': {'0': 'Swarm', '1': 'Hustle', 'H': 'Truant'}
  },
  'Dwebble': {
    'type1': 'Bug',
    'type2': 'Rock',
    'baseStats':
        {'hp': 50, 'atk': 65, 'def': 85, 'spa': 35, 'spd': 35, 'spe': 55},
    'weight': 14.5,
    'canEvolve': true,
    'abilities': {'0': 'Sturdy', '1': 'Shell Armor', 'H': 'Weak Armor'}
  },
  'Eelektrik': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 65, 'atk': 85, 'def': 70, 'spa': 75, 'spd': 70, 'spe': 40},
    'weight': 22,
    'ability': 'Levitate',
    'canEvolve': true,
    'abilities': {'0': 'Levitate'}
  },
  'Eelektross': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 85, 'atk': 115, 'def': 80, 'spa': 105, 'spd': 80, 'spe': 50},
    'weight': 80.5,
    'ability': 'Levitate',
    'abilities': {'0': 'Levitate'}
  },
  'Elgyem': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 55, 'atk': 55, 'def': 55, 'spa': 85, 'spd': 55, 'spe': 30},
    'weight': 9,
    'canEvolve': true,
    'abilities': {'0': 'Telepathy', '1': 'Synchronize', 'H': 'Analytic'}
  },
  'Emboar': {
    'type1': 'Fire',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 110, 'atk': 123, 'def': 65, 'spa': 100, 'spd': 65, 'spe': 65},
    'weight': 150,
    'abilities': {'0': 'Blaze'}
  },
  'Emolga': {
    'type1': 'Electric',
    'type2': 'Flying',
    'baseStats':
        {'hp': 55, 'atk': 75, 'def': 60, 'spa': 75, 'spd': 60, 'spe': 103},
    'weight': 5,
    'abilities': {'0': 'Static', 'H': 'Motor Drive'}
  },
  'Escavalier': {
    'type1': 'Bug',
    'type2': 'Steel',
    'baseStats':
        {'hp': 70, 'atk': 135, 'def': 105, 'spa': 60, 'spd': 105, 'spe': 20},
    'weight': 33,
    'abilities': {'0': 'Swarm', '1': 'Shell Armor', 'H': 'Overcoat'}
  },
  'Excadrill': {
    'type1': 'Ground',
    'type2': 'Steel',
    'baseStats':
        {'hp': 110, 'atk': 135, 'def': 60, 'spa': 50, 'spd': 65, 'spe': 88},
    'weight': 40.4,
    'abilities': {'0': 'Sand Rush', '1': 'Sand Force', 'H': 'Mold Breaker'}
  },
  'Ferroseed': {
    'type1': 'Grass',
    'type2': 'Steel',
    'baseStats':
        {'hp': 44, 'atk': 50, 'def': 91, 'spa': 24, 'spd': 86, 'spe': 10},
    'weight': 18.8,
    'canEvolve': true,
    'abilities': {'0': 'Iron Barbs'}
  },
  'Ferrothorn': {
    'type1': 'Grass',
    'type2': 'Steel',
    'baseStats':
        {'hp': 74, 'atk': 94, 'def': 131, 'spa': 54, 'spd': 116, 'spe': 20},
    'weight': 110,
    'abilities': {'0': 'Iron Barbs'}
  },
  'Foongus': {
    'type1': 'Grass',
    'type2': 'Poison',
    'baseStats':
        {'hp': 69, 'atk': 55, 'def': 45, 'spa': 55, 'spd': 55, 'spe': 15},
    'weight': 1,
    'canEvolve': true,
    'abilities': {'0': 'Effect Spore', 'H': 'Regenerator'}
  },
  'Fraxure': {
    'type1': 'Dragon',
    'baseStats':
        {'hp': 66, 'atk': 117, 'def': 70, 'spa': 40, 'spd': 50, 'spe': 67},
    'weight': 36,
    'canEvolve': true,
    'abilities': {'0': 'Rivalry', '1': 'Mold Breaker', 'H': 'Unnerve'}
  },
  'Frillish': {
    'type1': 'Water',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 55, 'atk': 40, 'def': 50, 'spa': 65, 'spd': 85, 'spe': 40},
    'weight': 33,
    'canEvolve': true,
    'abilities': {'0': 'Water Absorb', '1': 'Cursed Body', 'H': 'Damp'}
  },
  'Galvantula': {
    'type1': 'Bug',
    'type2': 'Electric',
    'baseStats':
        {'hp': 70, 'atk': 77, 'def': 60, 'spa': 97, 'spd': 60, 'spe': 108},
    'weight': 14.3,
    'abilities': {'0': 'Compound Eyes', '1': 'Unnerve', 'H': 'Swarm'}
  },
  'Garbodor': {
    'type1': 'Poison',
    'baseStats':
        {'hp': 80, 'atk': 95, 'def': 82, 'spa': 60, 'spd': 82, 'spe': 75},
    'weight': 107.3,
    'abilities': {'0': 'Stench', '1': 'Weak Armor', 'H': 'Aftermath'}
  },
  'Genesect': {
    'type1': 'Bug',
    'type2': 'Steel',
    'baseStats':
        {'hp': 71, 'atk': 120, 'def': 95, 'spa': 120, 'spd': 95, 'spe': 99},
    'weight': 82.5,
    'ability': 'Download',
    'gender': 'genderless',
    'abilities': {'0': 'Download'}
  },
  'Gigalith': {
    'type1': 'Rock',
    'baseStats':
        {'hp': 85, 'atk': 135, 'def': 130, 'spa': 60, 'spd': 70, 'spe': 25},
    'weight': 260,
    'abilities': {'0': 'Sturdy', 'H': 'Sand Force'}
  },
  'Golett': {
    'type1': 'Ground',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 59, 'atk': 74, 'def': 50, 'spa': 35, 'spd': 50, 'spe': 35},
    'weight': 92,
    'canEvolve': true,
    'gender': 'genderless',
    'abilities': {'0': 'Iron Fist', '1': 'Klutz', 'H': 'No Guard'}
  },
  'Golurk': {
    'type1': 'Ground',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 89, 'atk': 124, 'def': 80, 'spa': 55, 'spd': 80, 'spe': 55},
    'weight': 330,
    'gender': 'genderless',
    'abilities': {'0': 'Iron Fist', '1': 'Klutz', 'H': 'No Guard'}
  },
  'Gothita': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 45, 'atk': 30, 'def': 50, 'spa': 55, 'spd': 65, 'spe': 45},
    'weight': 5.8,
    'canEvolve': true,
    'abilities': {'0': 'Frisk'}
  },
  'Gothitelle': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 70, 'atk': 55, 'def': 95, 'spa': 95, 'spd': 110, 'spe': 65},
    'weight': 44,
    'abilities': {'0': 'Frisk', 'H': 'Shadow Tag'}
  },
  'Gothorita': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 60, 'atk': 45, 'def': 70, 'spa': 75, 'spd': 85, 'spe': 55},
    'weight': 18,
    'canEvolve': true,
    'abilities': {'0': 'Frisk', 'H': 'Shadow Tag'}
  },
  'Gurdurr': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 85, 'atk': 105, 'def': 85, 'spa': 40, 'spd': 50, 'spe': 40},
    'weight': 40,
    'canEvolve': true,
    'abilities': {'0': 'Guts', '1': 'Sheer Force', 'H': 'Iron Fist'}
  },
  'Haxorus': {
    'type1': 'Dragon',
    'baseStats':
        {'hp': 76, 'atk': 147, 'def': 90, 'spa': 60, 'spd': 70, 'spe': 97},
    'weight': 105.5,
    'abilities': {'0': 'Rivalry', '1': 'Mold Breaker', 'H': 'Unnerve'}
  },
  'Heatmor': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 85, 'atk': 97, 'def': 66, 'spa': 105, 'spd': 66, 'spe': 65},
    'weight': 58,
    'abilities': {'0': 'Gluttony', '1': 'Flash Fire', 'H': 'White Smoke'}
  },
  'Herdier': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 65, 'atk': 80, 'def': 65, 'spa': 35, 'spd': 65, 'spe': 60},
    'weight': 14.7,
    'canEvolve': true,
    'abilities': {'0': 'Intimidate', '1': 'Sand Rush', 'H': 'Scrappy'}
  },
  'Hydreigon': {
    'type1': 'Dark',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 92, 'atk': 105, 'def': 90, 'spa': 125, 'spd': 90, 'spe': 98},
    'weight': 160,
    'ability': 'Levitate',
    'abilities': {'0': 'Levitate'}
  },
  'Jellicent': {
    'type1': 'Water',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 100, 'atk': 60, 'def': 70, 'spa': 85, 'spd': 105, 'spe': 60},
    'weight': 135,
    'abilities': {'0': 'Water Absorb', '1': 'Cursed Body', 'H': 'Damp'}
  },
  'Joltik': {
    'type1': 'Bug',
    'type2': 'Electric',
    'baseStats':
        {'hp': 50, 'atk': 47, 'def': 50, 'spa': 57, 'spd': 50, 'spe': 65},
    'weight': 0.6,
    'canEvolve': true,
    'abilities': {'0': 'Compound Eyes', '1': 'Unnerve', 'H': 'Swarm'}
  },
  'Karrablast': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 50, 'atk': 75, 'def': 45, 'spa': 40, 'spd': 45, 'spe': 60},
    'weight': 5.9,
    'canEvolve': true,
    'abilities': {'0': 'Swarm', '1': 'Shed Skin', 'H': 'No Guard'}
  },
  'Keldeo': {
    'type1': 'Water',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 91, 'atk': 72, 'def': 90, 'spa': 129, 'spd': 90, 'spe': 108},
    'weight': 48.5,
    'ability': 'Justified',
    'gender': 'genderless',
    'abilities': {'0': 'Justified'}
  },
  'Klang': {
    'type1': 'Steel',
    'baseStats':
        {'hp': 60, 'atk': 80, 'def': 95, 'spa': 70, 'spd': 85, 'spe': 50},
    'weight': 51,
    'canEvolve': true,
    'gender': 'genderless',
    'abilities': {'0': 'Plus', '1': 'Minus', 'H': 'Clear Body'}
  },
  'Klink': {
    'type1': 'Steel',
    'baseStats':
        {'hp': 40, 'atk': 55, 'def': 70, 'spa': 45, 'spd': 60, 'spe': 30},
    'weight': 21,
    'canEvolve': true,
    'gender': 'genderless',
    'abilities': {'0': 'Plus', '1': 'Minus'}
  },
  'Klinklang': {
    'type1': 'Steel',
    'baseStats':
        {'hp': 60, 'atk': 100, 'def': 115, 'spa': 70, 'spd': 85, 'spe': 90},
    'weight': 81,
    'gender': 'genderless',
    'abilities': {'0': 'Plus', '1': 'Minus', 'H': 'Clear Body'}
  },
  'Krokorok': {
    'type1': 'Ground',
    'type2': 'Dark',
    'baseStats':
        {'hp': 60, 'atk': 82, 'def': 45, 'spa': 45, 'spd': 45, 'spe': 74},
    'weight': 33.4,
    'canEvolve': true,
    'abilities': {'0': 'Intimidate', '1': 'Moxie', 'H': 'Anger Point'}
  },
  'Krookodile': {
    'type1': 'Ground',
    'type2': 'Dark',
    'baseStats':
        {'hp': 95, 'atk': 117, 'def': 70, 'spa': 65, 'spd': 70, 'spe': 92},
    'weight': 96.3,
    'abilities': {'0': 'Intimidate', '1': 'Moxie', 'H': 'Anger Point'}
  },
  'Kyurem': {
    'type1': 'Dragon',
    'type2': 'Ice',
    'baseStats':
        {'hp': 125, 'atk': 130, 'def': 90, 'spa': 130, 'spd': 90, 'spe': 95},
    'weight': 325,
    'ability': 'Pressure',
    'gender': 'genderless',
    'abilities': {'0': 'Pressure'}
  },
  'Kyurem-Black': {
    'type1': 'Dragon',
    'type2': 'Ice',
    'baseStats':
        {'hp': 125, 'atk': 170, 'def': 100, 'spa': 120, 'spd': 90, 'spe': 95},
    'weight': 325,
    'ability': 'Teravolt',
    'gender': 'genderless',
    'abilities': {'0': 'Teravolt'}
  },
  'Kyurem-White': {
    'type1': 'Dragon',
    'type2': 'Ice',
    'baseStats':
        {'hp': 125, 'atk': 120, 'def': 90, 'spa': 170, 'spd': 100, 'spe': 95},
    'weight': 325,
    'ability': 'Turboblaze',
    'gender': 'genderless',
    'abilities': {'0': 'Turboblaze'}
  },
  'Lampent': {
    'type1': 'Ghost',
    'type2': 'Fire',
    'baseStats':
        {'hp': 60, 'atk': 40, 'def': 60, 'spa': 95, 'spd': 60, 'spe': 55},
    'weight': 13,
    'canEvolve': true,
    'abilities': {'0': 'Flash Fire', '1': 'Flame Body'}
  },
  'Landorus': {
    'type1': 'Ground',
    'type2': 'Flying',
    'baseStats':
        {'hp': 89, 'atk': 125, 'def': 90, 'spa': 115, 'spd': 80, 'spe': 101},
    'weight': 68,
    'abilities': {'0': 'Sand Force', 'H': 'Sheer Force'}
  },
  'Landorus-Therian': {
    'type1': 'Ground',
    'type2': 'Flying',
    'baseStats':
        {'hp': 89, 'atk': 145, 'def': 90, 'spa': 105, 'spd': 80, 'spe': 91},
    'weight': 68,
    'ability': 'Intimidate',
    'abilities': {'0': 'Intimidate'}
  },
  'Larvesta': {
    'type1': 'Bug',
    'type2': 'Fire',
    'baseStats':
        {'hp': 55, 'atk': 85, 'def': 55, 'spa': 50, 'spd': 55, 'spe': 60},
    'weight': 28.8,
    'canEvolve': true,
    'abilities': {'0': 'Flame Body'}
  },
  'Leavanny': {
    'type1': 'Bug',
    'type2': 'Grass',
    'baseStats':
        {'hp': 75, 'atk': 103, 'def': 80, 'spa': 70, 'spd': 70, 'spe': 92},
    'weight': 20.5,
    'abilities': {'0': 'Swarm', '1': 'Chlorophyll', 'H': 'Overcoat'}
  },
  'Liepard': {
    'type1': 'Dark',
    'baseStats':
        {'hp': 64, 'atk': 88, 'def': 50, 'spa': 88, 'spd': 50, 'spe': 106},
    'weight': 37.5,
    'abilities': {'0': 'Limber', '1': 'Unburden', 'H': 'Prankster'}
  },
  'Lilligant': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 70, 'atk': 60, 'def': 75, 'spa': 110, 'spd': 75, 'spe': 90},
    'weight': 16.3,
    'abilities': {'0': 'Chlorophyll', '1': 'Own Tempo', 'H': 'Leaf Guard'}
  },
  'Lillipup': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 45, 'atk': 60, 'def': 45, 'spa': 25, 'spd': 45, 'spe': 55},
    'weight': 4.1,
    'canEvolve': true,
    'abilities': {'0': 'Vital Spirit', '1': 'Pickup', 'H': 'Run Away'}
  },
  'Litwick': {
    'type1': 'Ghost',
    'type2': 'Fire',
    'baseStats':
        {'hp': 50, 'atk': 30, 'def': 55, 'spa': 65, 'spd': 55, 'spe': 20},
    'weight': 3.1,
    'canEvolve': true,
    'abilities': {'0': 'Flash Fire', '1': 'Flame Body'}
  },
  'Malaconda': {
    'type1': 'Dark',
    'type2': 'Grass',
    'baseStats':
        {'hp': 115, 'atk': 100, 'def': 60, 'spa': 40, 'spd': 130, 'spe': 55},
    'weight': 108.8,
    'abilities': {'0': 'Harvest', '1': 'Infiltrator'}
  },
  'Mandibuzz': {
    'type1': 'Dark',
    'type2': 'Flying',
    'baseStats':
        {'hp': 110, 'atk': 65, 'def': 105, 'spa': 55, 'spd': 95, 'spe': 80},
    'weight': 39.5,
    'abilities': {'0': 'Big Pecks', '1': 'Overcoat', 'H': 'Weak Armor'}
  },
  'Maractus': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 75, 'atk': 86, 'def': 67, 'spa': 106, 'spd': 67, 'spe': 60},
    'weight': 28,
    'abilities': {'0': 'Water Absorb', '1': 'Chlorophyll', 'H': 'Storm Drain'}
  },
  'Meloetta': {
    'type1': 'Normal',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 100, 'atk': 77, 'def': 77, 'spa': 128, 'spd': 128, 'spe': 90},
    'weight': 6.5,
    'ability': 'Serene Grace',
    'formes': ['Meloetta', 'Meloetta-P'],
    'gender': 'genderless',
    'abilities': {'0': 'Serene Grace'}
  },
  'Meloetta-P': {
    'type1': 'Normal',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 100, 'atk': 128, 'def': 90, 'spa': 77, 'spd': 77, 'spe': 128},
    'weight': 6.5,
    'ability': 'Serene Grace',
    'isAlternateForme': true,
    'gender': 'genderless',
    'abilities': {'0': 'Serene Grace'}
  },
  'Mienfoo': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 45, 'atk': 85, 'def': 50, 'spa': 55, 'spd': 50, 'spe': 65},
    'weight': 20,
    'canEvolve': true,
    'abilities': {'0': 'Inner Focus', '1': 'Regenerator', 'H': 'Reckless'}
  },
  'Mienshao': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 65, 'atk': 125, 'def': 60, 'spa': 95, 'spd': 60, 'spe': 105},
    'weight': 35.5,
    'abilities': {'0': 'Inner Focus', '1': 'Regenerator', 'H': 'Reckless'}
  },
  'Minccino': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 55, 'atk': 50, 'def': 40, 'spa': 40, 'spd': 40, 'spe': 75},
    'weight': 5.8,
    'canEvolve': true,
    'abilities': {'0': 'Cute Charm', '1': 'Technician', 'H': 'Skill Link'}
  },
  'Mollux': {
    'type1': 'Fire',
    'type2': 'Poison',
    'baseStats':
        {'hp': 95, 'atk': 45, 'def': 83, 'spa': 131, 'spd': 105, 'spe': 76},
    'weight': 41,
    'abilities': {'0': 'Dry Skin', 'H': 'Illuminate'}
  },
  'Munna': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 76, 'atk': 25, 'def': 45, 'spa': 67, 'spd': 55, 'spe': 24},
    'weight': 23.3,
    'canEvolve': true,
    'abilities': {'0': 'Forewarn', '1': 'Synchronize', 'H': 'Telepathy'}
  },
  'Musharna': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 116, 'atk': 55, 'def': 85, 'spa': 107, 'spd': 95, 'spe': 29},
    'weight': 60.5,
    'abilities': {'0': 'Forewarn', '1': 'Synchronize', 'H': 'Telepathy'}
  },
  'Necturine': {
    'type1': 'Grass',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 49, 'atk': 55, 'def': 60, 'spa': 50, 'spd': 75, 'spe': 51},
    'weight': 1.8,
    'abilities': {'0': 'Anticipation', 'H': 'Telepathy'}
  },
  'Necturna': {
    'type1': 'Grass',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 64, 'atk': 120, 'def': 100, 'spa': 85, 'spd': 120, 'spe': 81},
    'weight': 49.6,
    'abilities': {'0': 'Forewarn', 'H': 'Telepathy'}
  },
  'Oshawott': {
    'type1': 'Water',
    'baseStats':
        {'hp': 55, 'atk': 55, 'def': 45, 'spa': 63, 'spd': 45, 'spe': 45},
    'weight': 5.9,
    'canEvolve': true,
    'abilities': {'0': 'Torrent'}
  },
  'Palpitoad': {
    'type1': 'Water',
    'type2': 'Ground',
    'baseStats':
        {'hp': 75, 'atk': 65, 'def': 55, 'spa': 65, 'spd': 55, 'spe': 69},
    'weight': 17,
    'canEvolve': true,
    'abilities': {'0': 'Swift Swim', '1': 'Hydration', 'H': 'Water Absorb'}
  },
  'Panpour': {
    'type1': 'Water',
    'baseStats':
        {'hp': 50, 'atk': 53, 'def': 48, 'spa': 53, 'spd': 48, 'spe': 64},
    'weight': 13.5,
    'canEvolve': true,
    'abilities': {'0': 'Gluttony', 'H': 'Torrent'}
  },
  'Pansage': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 50, 'atk': 53, 'def': 48, 'spa': 53, 'spd': 48, 'spe': 64},
    'weight': 10.5,
    'canEvolve': true,
    'abilities': {'0': 'Gluttony', 'H': 'Overgrow'}
  },
  'Pansear': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 50, 'atk': 53, 'def': 48, 'spa': 53, 'spd': 48, 'spe': 64},
    'weight': 11,
    'canEvolve': true,
    'abilities': {'0': 'Gluttony', 'H': 'Blaze'}
  },
  'Patrat': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 45, 'atk': 55, 'def': 39, 'spa': 35, 'spd': 39, 'spe': 42},
    'weight': 11.6,
    'canEvolve': true,
    'abilities': {'0': 'Run Away', '1': 'Keen Eye', 'H': 'Analytic'}
  },
  'Pawniard': {
    'type1': 'Dark',
    'type2': 'Steel',
    'baseStats':
        {'hp': 45, 'atk': 85, 'def': 70, 'spa': 40, 'spd': 40, 'spe': 60},
    'weight': 10.2,
    'canEvolve': true,
    'abilities': {'0': 'Defiant', '1': 'Inner Focus', 'H': 'Pressure'}
  },
  'Petilil': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 45, 'atk': 35, 'def': 50, 'spa': 70, 'spd': 50, 'spe': 30},
    'weight': 6.6,
    'canEvolve': true,
    'abilities': {'0': 'Chlorophyll', '1': 'Own Tempo', 'H': 'Leaf Guard'}
  },
  'Pidove': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 50, 'atk': 55, 'def': 50, 'spa': 36, 'spd': 30, 'spe': 43},
    'weight': 2.1,
    'canEvolve': true,
    'abilities': {'0': 'Big Pecks', '1': 'Super Luck', 'H': 'Rivalry'}
  },
  'Pignite': {
    'type1': 'Fire',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 90, 'atk': 93, 'def': 55, 'spa': 70, 'spd': 55, 'spe': 55},
    'weight': 55.5,
    'canEvolve': true,
    'abilities': {'0': 'Blaze'}
  },
  'Purrloin': {
    'type1': 'Dark',
    'baseStats':
        {'hp': 41, 'atk': 50, 'def': 37, 'spa': 50, 'spd': 37, 'spe': 66},
    'weight': 10.1,
    'canEvolve': true,
    'abilities': {'0': 'Limber', '1': 'Unburden', 'H': 'Prankster'}
  },
  'Reshiram': {
    'type1': 'Dragon',
    'type2': 'Fire',
    'baseStats':
        {'hp': 100, 'atk': 120, 'def': 100, 'spa': 150, 'spd': 120, 'spe': 90},
    'weight': 330,
    'ability': 'Turboblaze',
    'gender': 'genderless',
    'abilities': {'0': 'Turboblaze'}
  },
  'Reuniclus': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 110, 'atk': 65, 'def': 75, 'spa': 125, 'spd': 85, 'spe': 30},
    'weight': 20.1,
    'abilities': {'0': 'Overcoat', '1': 'Magic Guard', 'H': 'Regenerator'}
  },
  'Roggenrola': {
    'type1': 'Rock',
    'baseStats':
        {'hp': 55, 'atk': 75, 'def': 85, 'spa': 25, 'spd': 25, 'spe': 15},
    'weight': 18,
    'canEvolve': true,
    'abilities': {'0': 'Sturdy', 'H': 'Sand Force'}
  },
  'Rufflet': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 70, 'atk': 83, 'def': 50, 'spa': 37, 'spd': 50, 'spe': 60},
    'weight': 10.5,
    'canEvolve': true,
    'abilities': {'0': 'Keen Eye', '1': 'Sheer Force'}
  },
  'Samurott': {
    'type1': 'Water',
    'baseStats':
        {'hp': 95, 'atk': 100, 'def': 85, 'spa': 108, 'spd': 70, 'spe': 70},
    'weight': 94.6,
    'abilities': {'0': 'Torrent'}
  },
  'Sandile': {
    'type1': 'Ground',
    'type2': 'Dark',
    'baseStats':
        {'hp': 50, 'atk': 72, 'def': 35, 'spa': 35, 'spd': 35, 'spe': 65},
    'weight': 15.2,
    'canEvolve': true,
    'abilities': {'0': 'Intimidate', '1': 'Moxie', 'H': 'Anger Point'}
  },
  'Sawk': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 75, 'atk': 125, 'def': 75, 'spa': 30, 'spd': 75, 'spe': 85},
    'weight': 51,
    'abilities': {'0': 'Sturdy', '1': 'Inner Focus', 'H': 'Mold Breaker'}
  },
  'Sawsbuck': {
    'type1': 'Normal',
    'type2': 'Grass',
    'baseStats':
        {'hp': 80, 'atk': 100, 'def': 70, 'spa': 60, 'spd': 70, 'spe': 95},
    'weight': 92.5,
    'abilities': {'0': 'Chlorophyll', '1': 'Sap Sipper', 'H': 'Serene Grace'}
  },
  'Scolipede': {
    'type1': 'Bug',
    'type2': 'Poison',
    'baseStats':
        {'hp': 60, 'atk': 90, 'def': 89, 'spa': 55, 'spd': 69, 'spe': 112},
    'weight': 200.5,
    'abilities': {'0': 'Poison Point', '1': 'Swarm', 'H': 'Quick Feet'}
  },
  'Scrafty': {
    'type1': 'Dark',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 65, 'atk': 90, 'def': 115, 'spa': 45, 'spd': 115, 'spe': 58},
    'weight': 30,
    'abilities': {'0': 'Shed Skin', '1': 'Moxie', 'H': 'Intimidate'}
  },
  'Scraggy': {
    'type1': 'Dark',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 50, 'atk': 75, 'def': 70, 'spa': 35, 'spd': 70, 'spe': 48},
    'weight': 11.8,
    'canEvolve': true,
    'abilities': {'0': 'Shed Skin', '1': 'Moxie', 'H': 'Intimidate'}
  },
  'Scratchet': {
    'type1': 'Normal',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 55, 'atk': 85, 'def': 80, 'spa': 20, 'spd': 70, 'spe': 40},
    'weight': 20,
    'abilities': {'0': 'Scrappy', '1': 'Prankster', 'H': 'Vital Spirit'}
  },
  'Seismitoad': {
    'type1': 'Water',
    'type2': 'Ground',
    'baseStats':
        {'hp': 105, 'atk': 85, 'def': 75, 'spa': 85, 'spd': 75, 'spe': 74},
    'weight': 62,
    'abilities': {'0': 'Swift Swim', '1': 'Poison Touch', 'H': 'Water Absorb'}
  },
  'Serperior': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 75, 'atk': 75, 'def': 95, 'spa': 75, 'spd': 95, 'spe': 113},
    'weight': 63,
    'abilities': {'0': 'Overgrow'}
  },
  'Servine': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 60, 'atk': 60, 'def': 75, 'spa': 60, 'spd': 75, 'spe': 83},
    'weight': 16,
    'canEvolve': true,
    'abilities': {'0': 'Overgrow'}
  },
  'Sewaddle': {
    'type1': 'Bug',
    'type2': 'Grass',
    'baseStats':
        {'hp': 45, 'atk': 53, 'def': 70, 'spa': 40, 'spd': 60, 'spe': 42},
    'weight': 2.5,
    'canEvolve': true,
    'abilities': {'0': 'Swarm', '1': 'Chlorophyll', 'H': 'Overcoat'}
  },
  'Shelmet': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 50, 'atk': 40, 'def': 85, 'spa': 40, 'spd': 65, 'spe': 25},
    'weight': 7.7,
    'canEvolve': true,
    'abilities': {'0': 'Hydration', '1': 'Shell Armor', 'H': 'Overcoat'}
  },
  'Sigilyph': {
    'type1': 'Psychic',
    'type2': 'Flying',
    'baseStats':
        {'hp': 72, 'atk': 58, 'def': 80, 'spa': 103, 'spd': 80, 'spe': 97},
    'weight': 14,
    'abilities': {'0': 'Wonder Skin', '1': 'Magic Guard', 'H': 'Tinted Lens'}
  },
  'Simipour': {
    'type1': 'Water',
    'baseStats':
        {'hp': 75, 'atk': 98, 'def': 63, 'spa': 98, 'spd': 63, 'spe': 101},
    'weight': 29,
    'abilities': {'0': 'Gluttony', 'H': 'Torrent'}
  },
  'Simisage': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 75, 'atk': 98, 'def': 63, 'spa': 98, 'spd': 63, 'spe': 101},
    'weight': 30.5,
    'abilities': {'0': 'Gluttony', 'H': 'Overgrow'}
  },
  'Simisear': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 75, 'atk': 98, 'def': 63, 'spa': 98, 'spd': 63, 'spe': 101},
    'weight': 28,
    'abilities': {'0': 'Gluttony', 'H': 'Blaze'}
  },
  'Snivy': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 45, 'atk': 45, 'def': 55, 'spa': 45, 'spd': 55, 'spe': 63},
    'weight': 8.1,
    'canEvolve': true,
    'abilities': {'0': 'Overgrow'}
  },
  'Solosis': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 45, 'atk': 30, 'def': 40, 'spa': 105, 'spd': 50, 'spe': 20},
    'weight': 1,
    'canEvolve': true,
    'abilities': {'0': 'Overcoat', '1': 'Magic Guard', 'H': 'Regenerator'}
  },
  'Stoutland': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 85, 'atk': 100, 'def': 90, 'spa': 45, 'spd': 90, 'spe': 80},
    'weight': 61,
    'abilities': {'0': 'Intimidate', '1': 'Sand Rush', 'H': 'Scrappy'}
  },
  'Stunfisk': {
    'type1': 'Ground',
    'type2': 'Electric',
    'baseStats':
        {'hp': 109, 'atk': 66, 'def': 84, 'spa': 81, 'spd': 99, 'spe': 32},
    'weight': 11,
    'abilities': {'0': 'Static', '1': 'Limber', 'H': 'Sand Veil'}
  },
  'Swadloon': {
    'type1': 'Bug',
    'type2': 'Grass',
    'baseStats':
        {'hp': 55, 'atk': 63, 'def': 90, 'spa': 50, 'spd': 80, 'spe': 42},
    'weight': 7.3,
    'canEvolve': true,
    'abilities': {'0': 'Leaf Guard', '1': 'Chlorophyll', 'H': 'Overcoat'}
  },
  'Swanna': {
    'type1': 'Water',
    'type2': 'Flying',
    'baseStats':
        {'hp': 75, 'atk': 87, 'def': 63, 'spa': 87, 'spd': 63, 'spe': 98},
    'weight': 24.2,
    'abilities': {'0': 'Keen Eye', '1': 'Big Pecks', 'H': 'Hydration'}
  },
  'Swoobat': {
    'type1': 'Psychic',
    'type2': 'Flying',
    'baseStats':
        {'hp': 67, 'atk': 57, 'def': 55, 'spa': 77, 'spd': 55, 'spe': 114},
    'weight': 10.5,
    'abilities': {'0': 'Unaware', '1': 'Klutz', 'H': 'Simple'}
  },
  'Tepig': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 65, 'atk': 63, 'def': 45, 'spa': 45, 'spd': 45, 'spe': 45},
    'weight': 9.9,
    'canEvolve': true,
    'abilities': {'0': 'Blaze'}
  },
  'Terrakion': {
    'type1': 'Rock',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 91, 'atk': 129, 'def': 90, 'spa': 72, 'spd': 90, 'spe': 108},
    'weight': 260,
    'ability': 'Justified',
    'gender': 'genderless',
    'abilities': {'0': 'Justified'}
  },
  'Throh': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 120, 'atk': 100, 'def': 85, 'spa': 30, 'spd': 85, 'spe': 45},
    'weight': 55.5,
    'abilities': {'0': 'Guts', '1': 'Inner Focus', 'H': 'Mold Breaker'}
  },
  'Thundurus': {
    'type1': 'Electric',
    'type2': 'Flying',
    'baseStats':
        {'hp': 79, 'atk': 115, 'def': 70, 'spa': 125, 'spd': 80, 'spe': 111},
    'weight': 61,
    'abilities': {'0': 'Prankster', 'H': 'Defiant'}
  },
  'Thundurus-Therian': {
    'type1': 'Electric',
    'type2': 'Flying',
    'baseStats':
        {'hp': 79, 'atk': 105, 'def': 70, 'spa': 145, 'spd': 80, 'spe': 101},
    'weight': 61,
    'ability': 'Volt Absorb',
    'abilities': {'0': 'Volt Absorb'}
  },
  'Timburr': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 75, 'atk': 80, 'def': 55, 'spa': 25, 'spd': 35, 'spe': 35},
    'weight': 12.5,
    'canEvolve': true,
    'abilities': {'0': 'Guts', '1': 'Sheer Force', 'H': 'Iron Fist'}
  },
  'Tirtouga': {
    'type1': 'Water',
    'type2': 'Rock',
    'baseStats':
        {'hp': 54, 'atk': 78, 'def': 103, 'spa': 53, 'spd': 45, 'spe': 22},
    'weight': 16.5,
    'canEvolve': true,
    'abilities': {'0': 'Solid Rock', '1': 'Sturdy', 'H': 'Swift Swim'}
  },
  'Tomohawk': {
    'type1': 'Flying',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 105, 'atk': 60, 'def': 90, 'spa': 115, 'spd': 80, 'spe': 85},
    'weight': 37.2,
    'abilities': {'0': 'Intimidate', '1': 'Prankster', 'H': 'Justified'}
  },
  'Tornadus': {
    'type1': 'Flying',
    'baseStats':
        {'hp': 79, 'atk': 115, 'def': 70, 'spa': 125, 'spd': 80, 'spe': 111},
    'weight': 63,
    'abilities': {'0': 'Prankster', 'H': 'Defiant'}
  },
  'Tornadus-Therian': {
    'type1': 'Flying',
    'baseStats':
        {'hp': 79, 'atk': 100, 'def': 80, 'spa': 110, 'spd': 90, 'spe': 121},
    'weight': 63,
    'ability': 'Regenerator',
    'abilities': {'0': 'Regenerator'}
  },
  'Tranquill': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 62, 'atk': 77, 'def': 62, 'spa': 50, 'spd': 42, 'spe': 65},
    'weight': 15,
    'canEvolve': true,
    'abilities': {'0': 'Big Pecks', '1': 'Super Luck', 'H': 'Rivalry'}
  },
  'Trubbish': {
    'type1': 'Poison',
    'baseStats':
        {'hp': 50, 'atk': 50, 'def': 62, 'spa': 40, 'spd': 62, 'spe': 65},
    'weight': 31,
    'canEvolve': true,
    'abilities': {'0': 'Stench', '1': 'Sticky Hold', 'H': 'Aftermath'}
  },
  'Tympole': {
    'type1': 'Water',
    'baseStats':
        {'hp': 50, 'atk': 50, 'def': 40, 'spa': 50, 'spd': 40, 'spe': 64},
    'weight': 4.5,
    'canEvolve': true,
    'abilities': {'0': 'Swift Swim', '1': 'Hydration', 'H': 'Water Absorb'}
  },
  'Tynamo': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 35, 'atk': 55, 'def': 40, 'spa': 45, 'spd': 40, 'spe': 60},
    'weight': 0.3,
    'ability': 'Levitate',
    'canEvolve': true,
    'abilities': {'0': 'Levitate'}
  },
  'Unfezant': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 80, 'atk': 105, 'def': 80, 'spa': 65, 'spd': 55, 'spe': 93},
    'weight': 29,
    'abilities': {'0': 'Big Pecks', '1': 'Super Luck', 'H': 'Rivalry'}
  },
  'Vanillish': {
    'type1': 'Ice',
    'baseStats':
        {'hp': 51, 'atk': 65, 'def': 65, 'spa': 80, 'spd': 75, 'spe': 59},
    'weight': 41,
    'canEvolve': true,
    'abilities': {'0': 'Ice Body', 'H': 'Weak Armor'}
  },
  'Vanillite': {
    'type1': 'Ice',
    'baseStats':
        {'hp': 36, 'atk': 50, 'def': 50, 'spa': 65, 'spd': 60, 'spe': 44},
    'weight': 5.7,
    'canEvolve': true,
    'abilities': {'0': 'Ice Body', 'H': 'Weak Armor'}
  },
  'Vanilluxe': {
    'type1': 'Ice',
    'baseStats':
        {'hp': 71, 'atk': 95, 'def': 85, 'spa': 110, 'spd': 95, 'spe': 79},
    'weight': 57.5,
    'abilities': {'0': 'Ice Body', 'H': 'Weak Armor'}
  },
  'Venipede': {
    'type1': 'Bug',
    'type2': 'Poison',
    'baseStats':
        {'hp': 30, 'atk': 45, 'def': 59, 'spa': 30, 'spd': 39, 'spe': 57},
    'weight': 5.3,
    'canEvolve': true,
    'abilities': {'0': 'Poison Point', '1': 'Swarm', 'H': 'Quick Feet'}
  },
  'Victini': {
    'type1': 'Psychic',
    'type2': 'Fire',
    'baseStats':
        {'hp': 100, 'atk': 100, 'def': 100, 'spa': 100, 'spd': 100, 'spe': 100},
    'weight': 4,
    'ability': 'Victory Star',
    'gender': 'genderless',
    'abilities': {'0': 'Victory Star'}
  },
  'Virizion': {
    'type1': 'Grass',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 91, 'atk': 90, 'def': 72, 'spa': 90, 'spd': 129, 'spe': 108},
    'weight': 200,
    'ability': 'Justified',
    'gender': 'genderless',
    'abilities': {'0': 'Justified'}
  },
  'Volcarona': {
    'type1': 'Bug',
    'type2': 'Fire',
    'baseStats':
        {'hp': 85, 'atk': 60, 'def': 65, 'spa': 135, 'spd': 105, 'spe': 100},
    'weight': 46,
    'abilities': {'0': 'Flame Body'}
  },
  'Vullaby': {
    'type1': 'Dark',
    'type2': 'Flying',
    'baseStats':
        {'hp': 70, 'atk': 55, 'def': 75, 'spa': 45, 'spd': 65, 'spe': 60},
    'weight': 9,
    'canEvolve': true,
    'abilities': {'0': 'Big Pecks', '1': 'Overcoat', 'H': 'Weak Armor'}
  },
  'Watchog': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 60, 'atk': 85, 'def': 69, 'spa': 60, 'spd': 69, 'spe': 77},
    'weight': 27,
    'abilities': {'0': 'Illuminate', '1': 'Keen Eye', 'H': 'Analytic'}
  },
  'Whimsicott': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 60, 'atk': 67, 'def': 85, 'spa': 77, 'spd': 75, 'spe': 116},
    'weight': 6.6,
    'abilities': {'0': 'Prankster', '1': 'Infiltrator', 'H': 'Chlorophyll'}
  },
  'Whirlipede': {
    'type1': 'Bug',
    'type2': 'Poison',
    'baseStats':
        {'hp': 40, 'atk': 55, 'def': 99, 'spa': 40, 'spd': 79, 'spe': 47},
    'weight': 58.5,
    'canEvolve': true,
    'abilities': {'0': 'Poison Point', '1': 'Swarm', 'H': 'Quick Feet'}
  },
  'Woobat': {
    'type1': 'Psychic',
    'type2': 'Flying',
    'baseStats':
        {'hp': 55, 'atk': 45, 'def': 43, 'spa': 55, 'spd': 43, 'spe': 72},
    'weight': 2.1,
    'canEvolve': true,
    'abilities': {'0': 'Unaware', '1': 'Klutz', 'H': 'Simple'}
  },
  'Yamask': {
    'type1': 'Ghost',
    'baseStats':
        {'hp': 38, 'atk': 30, 'def': 85, 'spa': 55, 'spd': 65, 'spe': 30},
    'weight': 1.5,
    'ability': 'Mummy',
    'canEvolve': true,
    'abilities': {'0': 'Mummy'}
  },
  'Zebstrika': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 75, 'atk': 100, 'def': 63, 'spa': 80, 'spd': 63, 'spe': 116},
    'weight': 79.5,
    'abilities': {'0': 'Lightning Rod', '1': 'Motor Drive', 'H': 'Sap Sipper'}
  },
  'Zekrom': {
    'type1': 'Dragon',
    'type2': 'Electric',
    'baseStats':
        {'hp': 100, 'atk': 150, 'def': 120, 'spa': 120, 'spd': 100, 'spe': 90},
    'weight': 345,
    'ability': 'Teravolt',
    'gender': 'genderless',
    'abilities': {'0': 'Teravolt'}
  },
  'Zoroark': {
    'type1': 'Dark',
    'baseStats':
        {'hp': 60, 'atk': 105, 'def': 60, 'spa': 120, 'spd': 60, 'spe': 105},
    'weight': 81.1,
    'ability': 'Illusion',
    'abilities': {'0': 'Illusion'}
  },
  'Zorua': {
    'type1': 'Dark',
    'baseStats':
        {'hp': 40, 'atk': 65, 'def': 40, 'spa': 80, 'spd': 40, 'spe': 65},
    'weight': 12.5,
    'ability': 'Illusion',
    'canEvolve': true,
    'abilities': {'0': 'Illusion'}
  },
  'Zweilous': {
    'type1': 'Dark',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 72, 'atk': 85, 'def': 70, 'spa': 65, 'spd': 70, 'spe': 58},
    'weight': 50,
    'ability': 'Hustle',
    'canEvolve': true,
    'abilities': {'0': 'Hustle'}
  }
});

const XY: {[name: string]: Species} = extend(true, {}, BW, {
  'Abomasnow': {'formes': ['Abomasnow', 'Abomasnow-Mega']},
  'Absol': {'formes': ['Absol', 'Absol-Mega']},
  'Aerodactyl': {'formes': ['Aerodactyl', 'Aerodactyl-Mega']},
  'Aggron': {'formes': ['Aggron', 'Aggron-Mega']},
  'Alakazam':
      {'baseStats': {'spd': 95}, 'formes': ['Alakazam', 'Alakazam-Mega']},
  'Altaria': {'formes': ['Altaria', 'Altaria-Mega']},
  'Ampharos':
      {'baseStats': {'def': 85}, 'formes': ['Ampharos', 'Ampharos-Mega']},
  'Articuno': {'abilities': {'H': 'Snow Cloak'}},
  'Audino': {'formes': ['Audino', 'Audino-Mega']},
  'Azumarill': {'type2': 'Fairy', 'baseStats': {'spa': 60}},
  'Azurill': {'type2': 'Fairy'},
  'Banette': {'formes': ['Banette', 'Banette-Mega']},
  'Bayleef': {'abilities': {'H': 'Leaf Guard'}},
  'Beautifly': {'baseStats': {'spa': 100}},
  'Beedrill':
      {'baseStats': {'atk': 90}, 'formes': ['Beedrill', 'Beedrill-Mega']},
  'Bellossom': {'baseStats': {'def': 95}},
  'Blastoise': {'formes': ['Blastoise', 'Blastoise-Mega']},
  'Blaziken': {'formes': ['Blaziken', 'Blaziken-Mega']},
  'Butterfree': {'baseStats': {'spa': 90}},
  'Camerupt': {'formes': ['Camerupt', 'Camerupt-Mega']},
  'Chandelure': {'abilities': {'H': 'Infiltrator'}},
  'Charizard':
      {'formes': ['Charizard', 'Charizard-Mega-X', 'Charizard-Mega-Y']},
  'Chikorita': {'abilities': {'H': 'Leaf Guard'}},
  'Clefable': {'type1': 'Fairy', 'baseStats': {'spa': 95}},
  'Clefairy': {'type1': 'Fairy'},
  'Cleffa': {'type1': 'Fairy'},
  'Cottonee': {'type2': 'Fairy'},
  'Croconaw': {'abilities': {'H': 'Sheer Force'}},
  'Cyndaquil': {'abilities': {'H': 'Flash Fire'}},
  'Dewott': {'abilities': {'H': 'Shell Armor'}},
  'Dusclops': {'abilities': {'H': 'Frisk'}},
  'Dusknoir': {'abilities': {'H': 'Frisk'}},
  'Duskull': {'abilities': {'H': 'Frisk'}},
  'Emboar': {'abilities': {'H': 'Reckless'}},
  'Exploud': {'baseStats': {'spd': 73}},
  'Feraligatr': {'abilities': {'H': 'Sheer Force'}},
  'Ferrothorn': {'abilities': {'H': 'Anticipation'}},
  'Gallade': {'formes': ['Gallade', 'Gallade-Mega']},
  'Garchomp': {'formes': ['Garchomp', 'Garchomp-Mega']},
  'Gardevoir': {'type2': 'Fairy', 'formes': ['Gardevoir', 'Gardevoir-Mega']},
  'Gengar': {'formes': ['Gengar', 'Gengar-Mega']},
  'Gigalith': {'baseStats': {'spd': 80}},
  'Glalie': {'formes': ['Glalie', 'Glalie-Mega']},
  'Golem': {'baseStats': {'atk': 120}},
  'Gothita': {'abilities': {'1': 'Competitive', 'H': 'Shadow Tag'}},
  'Gothitelle': {'abilities': {'1': 'Competitive'}},
  'Gothorita': {'abilities': {'1': 'Competitive'}},
  'Granbull': {'type1': 'Fairy'},
  'Groudon': {'formes': ['Groudon', 'Groudon-Primal']},
  'Gyarados': {'formes': ['Gyarados', 'Gyarados-Mega']},
  'Heracross': {'formes': ['Heracross', 'Heracross-Mega']},
  'Houndoom': {'formes': ['Houndoom', 'Houndoom-Mega']},
  'Igglybuff': {'type2': 'Fairy', 'abilities': {'1': 'Competitive'}},
  'Jigglypuff': {'type2': 'Fairy', 'abilities': {'1': 'Competitive'}},
  'Jumpluff': {'baseStats': {'spd': 95}},
  'Kangaskhan': {'formes': ['Kangaskhan', 'Kangaskhan-Mega']},
  'Kecleon': {'abilities': {'H': 'Protean'}},
  'Kirlia': {'type2': 'Fairy'},
  'Klink': {'abilities': {'H': 'Clear Body'}},
  'Krookodile': {'baseStats': {'def': 80}},
  'Kyogre': {'formes': ['Kyogre', 'Kyogre-Primal']},
  'Lampent': {'abilities': {'H': 'Infiltrator'}},
  'Larvesta': {'abilities': {'H': 'Swarm'}},
  'Latias': {'formes': ['Latias', 'Latias-Mega']},
  'Latios': {'formes': ['Latios', 'Latios-Mega']},
  'Leavanny': {'baseStats': {'spd': 80}},
  'Litwick': {'abilities': {'H': 'Infiltrator'}},
  'Lopunny': {'formes': ['Lopunny', 'Lopunny-Mega']},
  'Lucario': {'formes': ['Lucario', 'Lucario-Mega']},
  'Manectric': {'formes': ['Manectric', 'Manectric-Mega']},
  'Marill': {'type2': 'Fairy'},
  'Mawile': {'type2': 'Fairy', 'formes': ['Mawile', 'Mawile-Mega']},
  'Medicham': {'formes': ['Medicham', 'Medicham-Mega']},
  'Meganium': {'abilities': {'H': 'Leaf Guard'}},
  'Metagross': {'formes': ['Metagross', 'Metagross-Mega']},
  'Mewtwo': {'formes': ['Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y']},
  'Milotic': {'abilities': {'1': 'Competitive'}},
  'Mime Jr.': {'type2': 'Fairy'},
  'Minun': {'abilities': {'H': 'Volt Absorb'}},
  'Moltres': {'abilities': {'H': 'Flame Body'}},
  'Mr. Mime': {'type2': 'Fairy'},
  'Nidoking': {'baseStats': {'atk': 102}},
  'Nidoqueen': {'baseStats': {'atk': 92}},
  'Oshawott': {'abilities': {'H': 'Shell Armor'}},
  'Pidgeot': {'baseStats': {'spe': 101}, 'formes': ['Pidgeot', 'Pidgeot-Mega']},
  'Pignite': {'abilities': {'H': 'Thick Fat'}},
  'Pikachu': {'baseStats': {'def': 40, 'spd': 50}},
  'Pinsir': {'formes': ['Pinsir', 'Pinsir-Mega']},
  'Plusle': {'abilities': {'H': 'Lightning Rod'}},
  'Poliwrath': {'baseStats': {'atk': 95}},
  'Quilava': {'abilities': {'H': 'Flash Fire'}},
  'Raichu': {'baseStats': {'spe': 110}},
  'Ralts': {'type2': 'Fairy'},
  'Rayquaza': {'formes': ['Rayquaza', 'Rayquaza-Mega']},
  'Regice': {'abilities': {'H': 'Ice Body'}},
  'Regirock': {'abilities': {'H': 'Sturdy'}},
  'Registeel': {'abilities': {'H': 'Light Metal'}},
  'Roserade': {'baseStats': {'def': 65}},
  'Rufflet': {'abilities': {'H': 'Hustle'}},
  'Sableye': {'formes': ['Sableye', 'Sableye-Mega']},
  'Salamence': {'formes': ['Salamence', 'Salamence-Mega']},
  'Samurott': {'abilities': {'H': 'Shell Armor'}},
  'Sceptile': {'formes': ['Sceptile', 'Sceptile-Mega']},
  'Scizor': {'formes': ['Scizor', 'Scizor-Mega']},
  'Scolipede': {'baseStats': {'atk': 100}, 'abilities': {'H': 'Speed Boost'}},
  'Seismitoad': {'baseStats': {'atk': 95}},
  'Serperior': {'abilities': {'H': 'Contrary'}},
  'Servine': {'abilities': {'H': 'Contrary'}},
  'Sharpedo': {'formes': ['Sharpedo', 'Sharpedo-Mega']},
  'Slowbro': {'formes': ['Slowbro', 'Slowbro-Mega']},
  'Snivy': {'abilities': {'H': 'Contrary'}},
  'Snubbull': {'type1': 'Fairy'},
  'Staraptor': {'baseStats': {'spd': 60}},
  'Starly': {'abilities': {'H': 'Reckless'}},
  'Steelix': {'formes': ['Steelix', 'Steelix-Mega']},
  'Stoutland': {'baseStats': {'atk': 110}},
  'Swampert': {'formes': ['Swampert', 'Swampert-Mega']},
  'Tepig': {'abilities': {'H': 'Thick Fat'}},
  'Togekiss': {'type1': 'Fairy'},
  'Togepi': {'type1': 'Fairy'},
  'Togetic': {'type1': 'Fairy'},
  'Totodile': {'abilities': {'H': 'Sheer Force'}},
  'Typhlosion': {'abilities': {'H': 'Flash Fire'}},
  'Tyranitar': {'formes': ['Tyranitar', 'Tyranitar-Mega']},
  'Unfezant': {'baseStats': {'atk': 115}},
  'Venipede': {'abilities': {'H': 'Speed Boost'}},
  'Venusaur': {'formes': ['Venusaur', 'Venusaur-Mega']},
  'Victreebel': {'baseStats': {'spd': 70}},
  'Vileplume': {'baseStats': {'spa': 110}},
  'Volcarona': {'abilities': {'H': 'Swarm'}},
  'Whimsicott': {'type2': 'Fairy'},
  'Whirlipede': {'abilities': {'H': 'Speed Boost'}},
  'Wigglytuff': {
    'type2': 'Fairy',
    'baseStats': {'spa': 85},
    'abilities': {'1': 'Competitive'}
  },
  'Zapdos': {'abilities': {'H': 'Static'}},
  'Aegislash-Blade': {
    'type1': 'Steel',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 60, 'atk': 150, 'def': 50, 'spa': 150, 'spd': 50, 'spe': 60},
    'weight': 10,
    'ability': 'Stance Change',
    'formes': ['Aegislash-Blade', 'Aegislash-Shield'],
    'abilities': {'0': 'Stance Change'}
  },
  'Aegislash-Shield': {
    'type1': 'Steel',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 60, 'atk': 50, 'def': 150, 'spa': 50, 'spd': 150, 'spe': 60},
    'weight': 52,
    'ability': 'Stance Change',
    'isAlternateForme': true,
    'abilities': {'0': 'Stance Change'}
  },
  'Amaura': {
    'type1': 'Rock',
    'type2': 'Ice',
    'baseStats':
        {'hp': 77, 'atk': 59, 'def': 50, 'spa': 67, 'spd': 63, 'spe': 46},
    'weight': 25.2,
    'canEvolve': true,
    'abilities': {'0': 'Refrigerate', 'H': 'Snow Warning'}
  },
  'Arceus-Fairy': {
    'type1': 'Fairy',
    'baseStats':
        {'hp': 120, 'atk': 120, 'def': 120, 'spa': 120, 'spd': 120, 'spe': 120},
    'weight': 320,
    'ability': 'Multitype',
    'abilities': {'0': 'Multitype'}
  },
  'Aromatisse': {
    'type1': 'Fairy',
    'baseStats':
        {'hp': 101, 'atk': 72, 'def': 72, 'spa': 99, 'spd': 89, 'spe': 29},
    'weight': 15.5,
    'abilities': {'0': 'Healer', 'H': 'Aroma Veil'}
  },
  'Aurorus': {
    'type1': 'Rock',
    'type2': 'Ice',
    'baseStats':
        {'hp': 123, 'atk': 77, 'def': 72, 'spa': 99, 'spd': 92, 'spe': 58},
    'weight': 225,
    'abilities': {'0': 'Refrigerate', 'H': 'Snow Warning'}
  },
  'Avalugg': {
    'type1': 'Ice',
    'baseStats':
        {'hp': 95, 'atk': 117, 'def': 184, 'spa': 44, 'spd': 46, 'spe': 28},
    'weight': 505,
    'abilities': {'0': 'Own Tempo', '1': 'Ice Body', 'H': 'Sturdy'}
  },
  'Barbaracle': {
    'type1': 'Rock',
    'type2': 'Water',
    'baseStats':
        {'hp': 72, 'atk': 105, 'def': 115, 'spa': 54, 'spd': 86, 'spe': 68},
    'weight': 96,
    'abilities': {'0': 'Tough Claws', '1': 'Sniper', 'H': 'Pickpocket'}
  },
  'Bergmite': {
    'type1': 'Ice',
    'baseStats':
        {'hp': 55, 'atk': 69, 'def': 85, 'spa': 32, 'spd': 35, 'spe': 28},
    'weight': 99.5,
    'canEvolve': true,
    'abilities': {'0': 'Own Tempo', '1': 'Ice Body', 'H': 'Sturdy'}
  },
  'Binacle': {
    'type1': 'Rock',
    'type2': 'Water',
    'baseStats':
        {'hp': 42, 'atk': 52, 'def': 67, 'spa': 39, 'spd': 56, 'spe': 50},
    'weight': 31,
    'canEvolve': true,
    'abilities': {'0': 'Tough Claws', '1': 'Sniper', 'H': 'Pickpocket'}
  },
  'Braixen': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 59, 'atk': 59, 'def': 58, 'spa': 90, 'spd': 70, 'spe': 73},
    'weight': 14.5,
    'canEvolve': true,
    'abilities': {'0': 'Blaze', 'H': 'Magician'}
  },
  'Bunnelby': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 38, 'atk': 36, 'def': 38, 'spa': 32, 'spd': 36, 'spe': 57},
    'weight': 5,
    'canEvolve': true,
    'abilities': {'0': 'Pickup', '1': 'Cheek Pouch', 'H': 'Huge Power'}
  },
  'Caimanoe': {
    'type1': 'Water',
    'type2': 'Steel',
    'baseStats':
        {'hp': 73, 'atk': 85, 'def': 65, 'spa': 80, 'spd': 40, 'spe': 87},
    'weight': 72.5,
    'abilities': {'0': 'Water Veil', '1': 'Heatproof', 'H': 'Light Metal'}
  },
  'Carbink': {
    'type1': 'Rock',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 50, 'atk': 50, 'def': 150, 'spa': 50, 'spd': 150, 'spe': 50},
    'weight': 5.7,
    'gender': 'genderless',
    'abilities': {'0': 'Clear Body', 'H': 'Sturdy'}
  },
  'Chesnaught': {
    'type1': 'Grass',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 88, 'atk': 107, 'def': 122, 'spa': 74, 'spd': 75, 'spe': 64},
    'weight': 90,
    'abilities': {'0': 'Overgrow', 'H': 'Bulletproof'}
  },
  'Chespin': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 56, 'atk': 61, 'def': 65, 'spa': 48, 'spd': 45, 'spe': 38},
    'weight': 9,
    'canEvolve': true,
    'abilities': {'0': 'Overgrow', 'H': 'Bulletproof'}
  },
  'Clauncher': {
    'type1': 'Water',
    'baseStats':
        {'hp': 50, 'atk': 53, 'def': 62, 'spa': 58, 'spd': 63, 'spe': 44},
    'weight': 8.3,
    'ability': 'Mega Launcher',
    'canEvolve': true,
    'abilities': {'0': 'Mega Launcher'}
  },
  'Clawitzer': {
    'type1': 'Water',
    'baseStats':
        {'hp': 71, 'atk': 73, 'def': 88, 'spa': 120, 'spd': 89, 'spe': 59},
    'weight': 35.3,
    'ability': 'Mega Launcher',
    'abilities': {'0': 'Mega Launcher'}
  },
  'Crucibelle': {
    'type1': 'Rock',
    'type2': 'Poison',
    'baseStats':
        {'hp': 106, 'atk': 105, 'def': 65, 'spa': 75, 'spd': 85, 'spe': 104},
    'weight': 23.6,
    'abilities': {'0': 'Regenerator', '1': 'Mold Breaker', 'H': 'Liquid Ooze'}
  },
  'Diancie': {
    'type1': 'Rock',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 50, 'atk': 100, 'def': 150, 'spa': 100, 'spd': 150, 'spe': 50},
    'weight': 8.8,
    'ability': 'Clear Body',
    'formes': ['Diancie', 'Diancie-Mega'],
    'gender': 'genderless',
    'abilities': {'0': 'Clear Body'}
  },
  'Dedenne': {
    'type1': 'Electric',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 67, 'atk': 58, 'def': 57, 'spa': 81, 'spd': 67, 'spe': 101},
    'weight': 2.2,
    'abilities': {'0': 'Cheek Pouch', '1': 'Pickup', 'H': 'Plus'}
  },
  'Delphox': {
    'type1': 'Fire',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 75, 'atk': 69, 'def': 72, 'spa': 114, 'spd': 100, 'spe': 104},
    'weight': 39,
    'abilities': {'0': 'Blaze', 'H': 'Magician'}
  },
  'Diggersby': {
    'type1': 'Normal',
    'type2': 'Ground',
    'baseStats':
        {'hp': 85, 'atk': 56, 'def': 77, 'spa': 50, 'spd': 77, 'spe': 78},
    'weight': 10,
    'abilities': {'0': 'Pickup', '1': 'Cheek Pouch', 'H': 'Huge Power'}
  },
  'Doublade': {
    'type1': 'Steel',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 59, 'atk': 110, 'def': 150, 'spa': 45, 'spd': 49, 'spe': 35},
    'weight': 4.5,
    'ability': 'No Guard',
    'canEvolve': true,
    'abilities': {'0': 'No Guard'}
  },
  'Dragalge': {
    'type1': 'Poison',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 65, 'atk': 75, 'def': 90, 'spa': 97, 'spd': 123, 'spe': 44},
    'weight': 81.5,
    'abilities':
        {'0': 'Poison Point', '1': 'Poison Touch', 'H': 'Adaptability'}
  },
  'Espurr': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 62, 'atk': 48, 'def': 54, 'spa': 63, 'spd': 60, 'spe': 68},
    'weight': 3.5,
    'canEvolve': true,
    'abilities': {'0': 'Keen Eye', '1': 'Infiltrator', 'H': 'Own Tempo'}
  },
  'Fennekin': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 40, 'atk': 45, 'def': 40, 'spa': 62, 'spd': 60, 'spe': 60},
    'weight': 9.4,
    'canEvolve': true,
    'abilities': {'0': 'Blaze', 'H': 'Magician'}
  },
  'Flabebe': {
    'type1': 'Fairy',
    'baseStats':
        {'hp': 44, 'atk': 38, 'def': 39, 'spa': 61, 'spd': 79, 'spe': 42},
    'weight': 0.1,
    'canEvolve': true,
    'abilities': {'0': 'Flower Veil', 'H': 'Symbiosis'}
  },
  'Fletchinder': {
    'type1': 'Fire',
    'type2': 'Flying',
    'baseStats':
        {'hp': 62, 'atk': 73, 'def': 55, 'spa': 56, 'spd': 52, 'spe': 84},
    'weight': 10,
    'canEvolve': true,
    'abilities': {'0': 'Flame Body', 'H': 'Gale Wings'}
  },
  'Fletchling': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 45, 'atk': 50, 'def': 43, 'spa': 40, 'spd': 38, 'spe': 62},
    'weight': 1.7,
    'canEvolve': true,
    'abilities': {'0': 'Big Pecks', 'H': 'Gale Wings'}
  },
  'Floatoy': {
    'type1': 'Water',
    'baseStats':
        {'hp': 48, 'atk': 70, 'def': 40, 'spa': 70, 'spd': 30, 'spe': 77},
    'weight': 1.9,
    'abilities': {'0': 'Water Veil', '1': 'Heatproof', 'H': 'Swift Swim'}
  },
  'Floette': {
    'type1': 'Fairy',
    'baseStats':
        {'hp': 54, 'atk': 45, 'def': 47, 'spa': 75, 'spd': 98, 'spe': 52},
    'weight': 0.9,
    'canEvolve': true,
    'abilities': {'0': 'Flower Veil', 'H': 'Symbiosis'}
  },
  'Floette-Eternal': {
    'type1': 'Fairy',
    'baseStats':
        {'hp': 74, 'atk': 65, 'def': 67, 'spa': 125, 'spd': 128, 'spe': 92},
    'weight': 0.9,
    'ability': 'Flower Veil',
    'abilities': {'0': 'Flower Veil'}
  },
  'Florges': {
    'type1': 'Fairy',
    'baseStats':
        {'hp': 78, 'atk': 65, 'def': 68, 'spa': 112, 'spd': 154, 'spe': 75},
    'weight': 10,
    'abilities': {'0': 'Flower Veil', 'H': 'Symbiosis'}
  },
  'Froakie': {
    'type1': 'Water',
    'baseStats':
        {'hp': 41, 'atk': 56, 'def': 40, 'spa': 62, 'spd': 44, 'spe': 71},
    'weight': 7,
    'canEvolve': true,
    'abilities': {'0': 'Torrent', 'H': 'Protean'}
  },
  'Frogadier': {
    'type1': 'Water',
    'baseStats':
        {'hp': 54, 'atk': 63, 'def': 52, 'spa': 83, 'spd': 56, 'spe': 97},
    'weight': 10.9,
    'canEvolve': true,
    'abilities': {'0': 'Torrent', 'H': 'Protean'}
  },
  'Furfrou': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 75, 'atk': 80, 'def': 60, 'spa': 65, 'spd': 90, 'spe': 102},
    'weight': 28,
    'ability': 'Fur Coat',
    'abilities': {'0': 'Fur Coat'}
  },
  'Gogoat': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 123, 'atk': 100, 'def': 62, 'spa': 97, 'spd': 81, 'spe': 68},
    'weight': 91,
    'canEvolve': true,
    'abilities': {'0': 'Sap Sipper', 'H': 'Grass Pelt'}
  },
  'Goodra': {
    'type1': 'Dragon',
    'baseStats':
        {'hp': 90, 'atk': 100, 'def': 70, 'spa': 110, 'spd': 150, 'spe': 80},
    'weight': 150.5,
    'abilities': {'0': 'Sap Sipper', '1': 'Hydration', 'H': 'Gooey'}
  },
  'Goomy': {
    'type1': 'Dragon',
    'baseStats':
        {'hp': 45, 'atk': 50, 'def': 35, 'spa': 55, 'spd': 75, 'spe': 40},
    'weight': 2.8,
    'canEvolve': true,
    'abilities': {'0': 'Sap Sipper', '1': 'Hydration', 'H': 'Gooey'}
  },
  'Gourgeist': {
    'type1': 'Ghost',
    'type2': 'Grass',
    'baseStats':
        {'hp': 65, 'atk': 90, 'def': 122, 'spa': 58, 'spd': 75, 'spe': 84},
    'weight': 10,
    'abilities': {'0': 'Pickup', '1': 'Frisk', 'H': 'Insomnia'}
  },
  'Gourgeist-Large': {
    'type1': 'Ghost',
    'type2': 'Grass',
    'baseStats':
        {'hp': 75, 'atk': 95, 'def': 122, 'spa': 58, 'spd': 75, 'spe': 69},
    'weight': 10,
    'abilities': {'0': 'Pickup', '1': 'Frisk'}
  },
  'Gourgeist-Small': {
    'type1': 'Ghost',
    'type2': 'Grass',
    'baseStats':
        {'hp': 55, 'atk': 85, 'def': 122, 'spa': 58, 'spd': 75, 'spe': 99},
    'weight': 10,
    'abilities': {'0': 'Pickup', '1': 'Frisk'}
  },
  'Gourgeist-Super': {
    'type1': 'Ghost',
    'type2': 'Grass',
    'baseStats':
        {'hp': 85, 'atk': 100, 'def': 122, 'spa': 58, 'spd': 75, 'spe': 54},
    'weight': 10,
    'abilities': {'0': 'Pickup', '1': 'Frisk', 'H': 'Insomnia'}
  },
  'Greninja': {
    'type1': 'Water',
    'type2': 'Dark',
    'baseStats':
        {'hp': 72, 'atk': 95, 'def': 67, 'spa': 103, 'spd': 71, 'spe': 122},
    'weight': 40,
    'ability': 'Protean',
    'abilities': {'0': 'Torrent', 'H': 'Protean'}
  },
  'Hawlucha': {
    'type1': 'Fighting',
    'type2': 'Flying',
    'baseStats':
        {'hp': 78, 'atk': 92, 'def': 75, 'spa': 74, 'spd': 63, 'spe': 118},
    'weight': 21.5,
    'abilities': {'0': 'Limber', '1': 'Unburden', 'H': 'Mold Breaker'}
  },
  'Heliolisk': {
    'type1': 'Electric',
    'type2': 'Normal',
    'baseStats':
        {'hp': 62, 'atk': 55, 'def': 52, 'spa': 109, 'spd': 94, 'spe': 109},
    'weight': 21,
    'abilities': {'0': 'Dry Skin', '1': 'Sand Veil', 'H': 'Solar Power'}
  },
  'Helioptile': {
    'type1': 'Electric',
    'type2': 'Normal',
    'baseStats':
        {'hp': 44, 'atk': 38, 'def': 33, 'spa': 61, 'spd': 43, 'spe': 70},
    'weight': 6,
    'canEvolve': true,
    'abilities': {'0': 'Dry Skin', '1': 'Sand Veil', 'H': 'Solar Power'}
  },
  'Honedge': {
    'type1': 'Steel',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 45, 'atk': 80, 'def': 100, 'spa': 35, 'spd': 37, 'spe': 28},
    'weight': 2,
    'ability': 'No Guard',
    'canEvolve': true,
    'abilities': {'0': 'No Guard'}
  },
  'Hoopa': {
    'type1': 'Psychic',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 80, 'atk': 110, 'def': 60, 'spa': 150, 'spd': 130, 'spe': 70},
    'weight': 9,
    'gender': 'genderless',
    'abilities': {'0': 'Magician'}
  },
  'Hoopa-Unbound': {
    'type1': 'Psychic',
    'type2': 'Dark',
    'baseStats':
        {'hp': 80, 'atk': 160, 'def': 60, 'spa': 170, 'spd': 130, 'spe': 80},
    'weight': 490,
    'gender': 'genderless',
    'abilities': {'0': 'Magician'}
  },
  'Inkay': {
    'type1': 'Dark',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 53, 'atk': 54, 'def': 53, 'spa': 37, 'spd': 46, 'spe': 45},
    'weight': 3.5,
    'canEvolve': true,
    'abilities': {'0': 'Contrary', '1': 'Suction Cups', 'H': 'Infiltrator'}
  },
  'Kerfluffle': {
    'type1': 'Fairy',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 84, 'atk': 78, 'def': 86, 'spa': 115, 'spd': 88, 'spe': 119},
    'weight': 24.2,
    'ability': 'Natural Cure',
    'abilities': {'0': 'Natural Cure', '1': 'Aroma Veil', 'H': 'Friend Guard'}
  },
  'Klefki': {
    'type1': 'Steel',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 57, 'atk': 80, 'def': 91, 'spa': 80, 'spd': 87, 'spe': 75},
    'weight': 3,
    'abilities': {'0': 'Prankster', 'H': 'Magician'}
  },
  'Litleo': {
    'type1': 'Fire',
    'type2': 'Normal',
    'baseStats':
        {'hp': 62, 'atk': 50, 'def': 58, 'spa': 73, 'spd': 54, 'spe': 72},
    'weight': 13.5,
    'canEvolve': true,
    'abilities': {'0': 'Rivalry', '1': 'Unnerve', 'H': 'Moxie'}
  },
  'Malamar': {
    'type1': 'Dark',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 86, 'atk': 92, 'def': 88, 'spa': 68, 'spd': 75, 'spe': 73},
    'weight': 47,
    'abilities': {'0': 'Contrary', '1': 'Suction Cups', 'H': 'Infiltrator'}
  },
  'Abomasnow-Mega': {
    'type1': 'Grass',
    'type2': 'Ice',
    'baseStats':
        {'hp': 90, 'atk': 132, 'def': 105, 'spa': 132, 'spd': 105, 'spe': 30},
    'weight': 185,
    'ability': 'Snow Warning',
    'isAlternateForme': true,
    'abilities': {'0': 'Snow Warning'}
  },
  'Absol-Mega': {
    'type1': 'Dark',
    'baseStats':
        {'hp': 65, 'atk': 150, 'def': 60, 'spa': 115, 'spd': 60, 'spe': 115},
    'weight': 49,
    'ability': 'Magic Bounce',
    'isAlternateForme': true,
    'abilities': {'0': 'Magic Bounce'}
  },
  'Aerodactyl-Mega': {
    'type1': 'Rock',
    'type2': 'Flying',
    'baseStats':
        {'hp': 80, 'atk': 135, 'def': 85, 'spa': 70, 'spd': 95, 'spe': 150},
    'weight': 79,
    'ability': 'Tough Claws',
    'isAlternateForme': true,
    'abilities': {'0': 'Tough Claws'}
  },
  'Aggron-Mega': {
    'type1': 'Steel',
    'baseStats':
        {'hp': 70, 'atk': 140, 'def': 230, 'spa': 60, 'spd': 80, 'spe': 50},
    'weight': 395,
    'ability': 'Filter',
    'isAlternateForme': true,
    'abilities': {'0': 'Filter'}
  },
  'Alakazam-Mega': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 55, 'atk': 50, 'def': 65, 'spa': 175, 'spd': 95, 'spe': 150},
    'weight': 48,
    'ability': 'Trace',
    'isAlternateForme': true,
    'abilities': {'0': 'Trace'}
  },
  'Altaria-Mega': {
    'type1': 'Dragon',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 75, 'atk': 110, 'def': 110, 'spa': 110, 'spd': 105, 'spe': 80},
    'weight': 20.6,
    'ability': 'Pixilate',
    'isAlternateForme': true,
    'abilities': {'0': 'Pixilate'}
  },
  'Ampharos-Mega': {
    'type1': 'Electric',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 90, 'atk': 95, 'def': 105, 'spa': 165, 'spd': 110, 'spe': 45},
    'weight': 61.5,
    'ability': 'Mold Breaker',
    'isAlternateForme': true,
    'abilities': {'0': 'Mold Breaker'}
  },
  'Audino-Mega': {
    'type1': 'Normal',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 103, 'atk': 60, 'def': 126, 'spa': 80, 'spd': 126, 'spe': 50},
    'weight': 32,
    'ability': 'Healer',
    'isAlternateForme': true,
    'abilities': {'0': 'Healer'}
  },
  'Banette-Mega': {
    'type1': 'Ghost',
    'baseStats':
        {'hp': 64, 'atk': 165, 'def': 75, 'spa': 93, 'spd': 83, 'spe': 75},
    'weight': 13,
    'ability': 'Prankster',
    'isAlternateForme': true,
    'abilities': {'0': 'Prankster'}
  },
  'Beedrill-Mega': {
    'type1': 'Bug',
    'type2': 'Poison',
    'baseStats':
        {'hp': 65, 'atk': 150, 'def': 40, 'spa': 15, 'spd': 80, 'spe': 145},
    'weight': 40.5,
    'ability': 'Adaptability',
    'isAlternateForme': true,
    'abilities': {'0': 'Adaptability'}
  },
  'Blastoise-Mega': {
    'type1': 'Water',
    'baseStats':
        {'hp': 79, 'atk': 103, 'def': 120, 'spa': 135, 'spd': 115, 'spe': 78},
    'weight': 101.1,
    'ability': 'Mega Launcher',
    'isAlternateForme': true,
    'abilities': {'0': 'Mega Launcher'}
  },
  'Blaziken-Mega': {
    'type1': 'Fire',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 80, 'atk': 160, 'def': 80, 'spa': 130, 'spd': 80, 'spe': 100},
    'weight': 52,
    'ability': 'Speed Boost',
    'isAlternateForme': true,
    'abilities': {'0': 'Speed Boost'}
  },
  'Camerupt-Mega': {
    'type1': 'Fire',
    'type2': 'Ground',
    'baseStats':
        {'hp': 70, 'atk': 120, 'def': 100, 'spa': 145, 'spd': 105, 'spe': 20},
    'weight': 320.5,
    'ability': 'Sheer Force',
    'isAlternateForme': true,
    'abilities': {'0': 'Sheer Force'}
  },
  'Charizard-Mega-X': {
    'type1': 'Fire',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 78, 'atk': 130, 'def': 111, 'spa': 130, 'spd': 85, 'spe': 100},
    'weight': 110.5,
    'ability': 'Tough Claws',
    'isAlternateForme': true,
    'abilities': {'0': 'Tough Claws'}
  },
  'Charizard-Mega-Y': {
    'type1': 'Fire',
    'type2': 'Flying',
    'baseStats':
        {'hp': 78, 'atk': 104, 'def': 78, 'spa': 159, 'spd': 115, 'spe': 100},
    'weight': 100.5,
    'ability': 'Drought',
    'isAlternateForme': true,
    'abilities': {'0': 'Drought'}
  },
  'Crucibelle-Mega': {
    'type1': 'Rock',
    'type2': 'Poison',
    'baseStats':
        {'hp': 106, 'atk': 135, 'def': 75, 'spa': 85, 'spd': 125, 'spe': 114},
    'weight': 22.5,
    'ability': 'Magic Guard',
    'isAlternateForme': true,
    'abilities': {'0': 'Magic Guard'}
  },
  'Diancie-Mega': {
    'type1': 'Rock',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 50, 'atk': 160, 'def': 110, 'spa': 160, 'spd': 110, 'spe': 110},
    'weight': 27.8,
    'ability': 'Magic Bounce',
    'isAlternateForme': true,
    'gender': 'genderless',
    'abilities': {'0': 'Magic Bounce'}
  },
  'Gallade-Mega': {
    'type1': 'Psychic',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 68, 'atk': 165, 'def': 95, 'spa': 65, 'spd': 115, 'spe': 110},
    'weight': 56.4,
    'ability': 'Inner Focus',
    'isAlternateForme': true,
    'abilities': {'0': 'Inner Focus'}
  },
  'Garchomp-Mega': {
    'type1': 'Dragon',
    'type2': 'Ground',
    'baseStats':
        {'hp': 108, 'atk': 170, 'def': 115, 'spa': 120, 'spd': 95, 'spe': 92},
    'weight': 95,
    'ability': 'Sand Force',
    'isAlternateForme': true,
    'abilities': {'0': 'Sand Force'}
  },
  'Gardevoir-Mega': {
    'type1': 'Psychic',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 68, 'atk': 85, 'def': 65, 'spa': 165, 'spd': 135, 'spe': 100},
    'weight': 48.4,
    'ability': 'Pixilate',
    'isAlternateForme': true,
    'abilities': {'0': 'Pixilate'}
  },
  'Gengar-Mega': {
    'type1': 'Ghost',
    'type2': 'Poison',
    'baseStats':
        {'hp': 60, 'atk': 65, 'def': 80, 'spa': 170, 'spd': 95, 'spe': 130},
    'weight': 40.5,
    'ability': 'Shadow Tag',
    'isAlternateForme': true,
    'abilities': {'0': 'Shadow Tag'}
  },
  'Glalie-Mega': {
    'type1': 'Ice',
    'baseStats':
        {'hp': 80, 'atk': 120, 'def': 80, 'spa': 120, 'spd': 80, 'spe': 100},
    'weight': 350.2,
    'ability': 'Refrigerate',
    'isAlternateForme': true,
    'abilities': {'0': 'Refrigerate'}
  },
  'Gyarados-Mega': {
    'type1': 'Water',
    'type2': 'Dark',
    'baseStats':
        {'hp': 95, 'atk': 155, 'def': 109, 'spa': 70, 'spd': 130, 'spe': 81},
    'weight': 305,
    'ability': 'Mold Breaker',
    'isAlternateForme': true,
    'abilities': {'0': 'Mold Breaker'}
  },
  'Heracross-Mega': {
    'type1': 'Bug',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 80, 'atk': 185, 'def': 115, 'spa': 40, 'spd': 105, 'spe': 75},
    'weight': 62.5,
    'ability': 'Skill Link',
    'isAlternateForme': true,
    'abilities': {'0': 'Skill Link'}
  },
  'Houndoom-Mega': {
    'type1': 'Dark',
    'type2': 'Fire',
    'baseStats':
        {'hp': 75, 'atk': 90, 'def': 90, 'spa': 140, 'spd': 90, 'spe': 115},
    'weight': 49.5,
    'ability': 'Solar Power',
    'isAlternateForme': true,
    'abilities': {'0': 'Solar Power'}
  },
  'Kangaskhan-Mega': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 105, 'atk': 125, 'def': 100, 'spa': 60, 'spd': 100, 'spe': 100},
    'weight': 100,
    'ability': 'Parental Bond',
    'isAlternateForme': true,
    'abilities': {'0': 'Parental Bond'}
  },
  'Latias-Mega': {
    'type1': 'Dragon',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 80, 'atk': 100, 'def': 120, 'spa': 140, 'spd': 150, 'spe': 110},
    'weight': 52,
    'ability': 'Levitate',
    'isAlternateForme': true,
    'abilities': {'0': 'Levitate'}
  },
  'Latios-Mega': {
    'type1': 'Dragon',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 80, 'atk': 130, 'def': 100, 'spa': 160, 'spd': 120, 'spe': 110},
    'weight': 70,
    'ability': 'Levitate',
    'isAlternateForme': true,
    'abilities': {'0': 'Levitate'}
  },
  'Lopunny-Mega': {
    'type1': 'Normal',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 65, 'atk': 136, 'def': 94, 'spa': 54, 'spd': 96, 'spe': 135},
    'weight': 28.3,
    'ability': 'Scrappy',
    'isAlternateForme': true,
    'abilities': {'0': 'Scrappy'}
  },
  'Lucario-Mega': {
    'type1': 'Fighting',
    'type2': 'Steel',
    'baseStats':
        {'hp': 70, 'atk': 145, 'def': 88, 'spa': 140, 'spd': 70, 'spe': 112},
    'weight': 57.5,
    'ability': 'Adaptability',
    'isAlternateForme': true,
    'abilities': {'0': 'Adaptability'}
  },
  'Manectric-Mega': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 70, 'atk': 75, 'def': 80, 'spa': 135, 'spd': 80, 'spe': 135},
    'weight': 44,
    'ability': 'Intimidate',
    'isAlternateForme': true,
    'abilities': {'0': 'Intimidate'}
  },
  'Mawile-Mega': {
    'type1': 'Steel',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 50, 'atk': 105, 'def': 125, 'spa': 55, 'spd': 95, 'spe': 50},
    'weight': 23.5,
    'ability': 'Huge Power',
    'isAlternateForme': true,
    'abilities': {'0': 'Huge Power'}
  },
  'Medicham-Mega': {
    'type1': 'Fighting',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 60, 'atk': 100, 'def': 85, 'spa': 80, 'spd': 85, 'spe': 100},
    'weight': 31.5,
    'ability': 'Pure Power',
    'isAlternateForme': true,
    'abilities': {'0': 'Pure Power'}
  },
  'Metagross-Mega': {
    'type1': 'Steel',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 80, 'atk': 145, 'def': 150, 'spa': 105, 'spd': 110, 'spe': 110},
    'weight': 942.9,
    'ability': 'Tough Claws',
    'isAlternateForme': true,
    'gender': 'genderless',
    'abilities': {'0': 'Tough Claws'}
  },
  'Mewtwo-Mega-X': {
    'type1': 'Psychic',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 106, 'atk': 190, 'def': 100, 'spa': 154, 'spd': 100, 'spe': 130},
    'weight': 127,
    'ability': 'Steadfast',
    'isAlternateForme': true,
    'gender': 'genderless',
    'abilities': {'0': 'Steadfast'}
  },
  'Mewtwo-Mega-Y': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 106, 'atk': 150, 'def': 70, 'spa': 194, 'spd': 120, 'spe': 140},
    'weight': 33,
    'ability': 'Insomnia',
    'isAlternateForme': true,
    'gender': 'genderless',
    'abilities': {'0': 'Insomnia'}
  },
  'Pidgeot-Mega': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 83, 'atk': 80, 'def': 80, 'spa': 135, 'spd': 80, 'spe': 121},
    'weight': 50.5,
    'ability': 'No Guard',
    'isAlternateForme': true,
    'abilities': {'0': 'No Guard'}
  },
  'Pinsir-Mega': {
    'type1': 'Bug',
    'type2': 'Flying',
    'baseStats':
        {'hp': 65, 'atk': 155, 'def': 120, 'spa': 65, 'spd': 90, 'spe': 105},
    'weight': 59,
    'ability': 'Aerilate',
    'isAlternateForme': true,
    'abilities': {'0': 'Aerilate'}
  },
  'Rayquaza-Mega': {
    'type1': 'Dragon',
    'type2': 'Flying',
    'baseStats':
        {'hp': 105, 'atk': 180, 'def': 100, 'spa': 180, 'spd': 100, 'spe': 115},
    'weight': 392,
    'ability': 'Delta Stream',
    'isAlternateForme': true,
    'abilities': {'0': 'Delta Stream'}
  },
  'Sableye-Mega': {
    'type1': 'Dark',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 50, 'atk': 85, 'def': 125, 'spa': 85, 'spd': 115, 'spe': 20},
    'weight': 161,
    'ability': 'Magic Bounce',
    'isAlternateForme': true,
    'abilities': {'0': 'Magic Bounce'}
  },
  'Salamence-Mega': {
    'type1': 'Dragon',
    'type2': 'Flying',
    'baseStats':
        {'hp': 95, 'atk': 145, 'def': 130, 'spa': 120, 'spd': 90, 'spe': 120},
    'weight': 112.6,
    'ability': 'Aerilate',
    'isAlternateForme': true,
    'abilities': {'0': 'Aerilate'}
  },
  'Sceptile-Mega': {
    'type1': 'Grass',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 70, 'atk': 110, 'def': 75, 'spa': 145, 'spd': 85, 'spe': 145},
    'weight': 55.2,
    'ability': 'Lightning Rod',
    'isAlternateForme': true,
    'abilities': {'0': 'Lightning Rod'}
  },
  'Scizor-Mega': {
    'type1': 'Bug',
    'type2': 'Steel',
    'baseStats':
        {'hp': 70, 'atk': 150, 'def': 140, 'spa': 65, 'spd': 100, 'spe': 75},
    'weight': 125,
    'ability': 'Technician',
    'isAlternateForme': true,
    'abilities': {'0': 'Technician'}
  },
  'Sharpedo-Mega': {
    'type1': 'Water',
    'type2': 'Dark',
    'baseStats':
        {'hp': 70, 'atk': 140, 'def': 70, 'spa': 110, 'spd': 65, 'spe': 105},
    'weight': 130.3,
    'ability': 'Strong Jaw',
    'isAlternateForme': true,
    'abilities': {'0': 'Strong Jaw'}
  },
  'Slowbro-Mega': {
    'type1': 'Water',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 95, 'atk': 75, 'def': 180, 'spa': 130, 'spd': 80, 'spe': 30},
    'weight': 120,
    'ability': 'Shell Armor',
    'isAlternateForme': true,
    'abilities': {'0': 'Shell Armor'}
  },
  'Steelix-Mega': {
    'type1': 'Steel',
    'type2': 'Ground',
    'baseStats':
        {'hp': 75, 'atk': 125, 'def': 230, 'spa': 55, 'spd': 95, 'spe': 30},
    'weight': 740,
    'ability': 'Sand Force',
    'isAlternateForme': true,
    'abilities': {'0': 'Sand Force'}
  },
  'Swampert-Mega': {
    'type1': 'Water',
    'type2': 'Ground',
    'baseStats':
        {'hp': 100, 'atk': 150, 'def': 110, 'spa': 95, 'spd': 110, 'spe': 70},
    'weight': 102,
    'ability': 'Swift Swim',
    'isAlternateForme': true,
    'abilities': {'0': 'Swift Swim'}
  },
  'Tyranitar-Mega': {
    'type1': 'Rock',
    'type2': 'Dark',
    'baseStats':
        {'hp': 100, 'atk': 164, 'def': 150, 'spa': 95, 'spd': 120, 'spe': 71},
    'weight': 255,
    'ability': 'Sand Stream',
    'isAlternateForme': true,
    'abilities': {'0': 'Sand Stream'}
  },
  'Venusaur-Mega': {
    'type1': 'Grass',
    'type2': 'Poison',
    'baseStats':
        {'hp': 80, 'atk': 100, 'def': 123, 'spa': 122, 'spd': 120, 'spe': 80},
    'weight': 155.5,
    'ability': 'Thick Fat',
    'isAlternateForme': true,
    'abilities': {'0': 'Thick Fat'}
  },
  'Meowstic-M': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 74, 'atk': 48, 'def': 76, 'spa': 83, 'spd': 81, 'spe': 104},
    'weight': 8.5,
    'abilities': {'0': 'Keen Eye', '1': 'Infiltrator', 'H': 'Prankster'}
  },
  'Naviathan': {
    'type1': 'Water',
    'type2': 'Steel',
    'baseStats':
        {'hp': 103, 'atk': 110, 'def': 90, 'spa': 95, 'spd': 65, 'spe': 97},
    'weight': 510,
    'abilities': {'0': 'Water Veil', '1': 'Heatproof', 'H': 'Light Metal'}
  },
  'Noibat': {
    'type1': 'Flying',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 40, 'atk': 30, 'def': 35, 'spa': 45, 'spd': 40, 'spe': 55},
    'weight': 8,
    'canEvolve': true,
    'abilities': {'0': 'Frisk', '1': 'Infiltrator', 'H': 'Telepathy'}
  },
  'Noivern': {
    'type1': 'Flying',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 85, 'atk': 70, 'def': 80, 'spa': 97, 'spd': 80, 'spe': 123},
    'weight': 85,
    'abilities': {'0': 'Frisk', '1': 'Infiltrator', 'H': 'Telepathy'}
  },
  'Pancham': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 67, 'atk': 82, 'def': 62, 'spa': 46, 'spd': 48, 'spe': 43},
    'weight': 8,
    'canEvolve': true,
    'abilities': {'0': 'Iron Fist', '1': 'Mold Breaker', 'H': 'Scrappy'}
  },
  'Pangoro': {
    'type1': 'Fighting',
    'type2': 'Dark',
    'baseStats':
        {'hp': 95, 'atk': 124, 'def': 78, 'spa': 69, 'spd': 71, 'spe': 58},
    'weight': 136,
    'abilities': {'0': 'Iron Fist', '1': 'Mold Breaker', 'H': 'Scrappy'}
  },
  'Phantump': {
    'type1': 'Ghost',
    'type2': 'Grass',
    'baseStats':
        {'hp': 43, 'atk': 70, 'def': 48, 'spa': 50, 'spd': 60, 'spe': 38},
    'weight': 7,
    'canEvolve': true,
    'abilities': {'0': 'Natural Cure', '1': 'Frisk', 'H': 'Harvest'}
  },
  'Plasmanta': {
    'type1': 'Electric',
    'type2': 'Poison',
    'baseStats':
        {'hp': 60, 'atk': 57, 'def': 119, 'spa': 131, 'spd': 98, 'spe': 100},
    'weight': 460,
    'abilities': {'0': 'Storm Drain', '1': 'Vital Spirit', 'H': 'Telepathy'}
  },
  'Pluffle': {
    'type1': 'Fairy',
    'baseStats':
        {'hp': 74, 'atk': 38, 'def': 51, 'spa': 65, 'spd': 78, 'spe': 49},
    'weight': 1.8,
    'abilities': {'0': 'Natural Cure', '1': 'Aroma Veil', 'H': 'Friend Guard'}
  },
  'Groudon-Primal': {
    'type1': 'Ground',
    'type2': 'Fire',
    'baseStats':
        {'hp': 100, 'atk': 180, 'def': 160, 'spa': 150, 'spd': 90, 'spe': 90},
    'weight': 999.7,
    'ability': 'Desolate Land',
    'isAlternateForme': true,
    'abilities': {'0': 'Desolate Land'}
  },
  'Kyogre-Primal': {
    'type1': 'Water',
    'baseStats':
        {'hp': 100, 'atk': 150, 'def': 90, 'spa': 180, 'spd': 160, 'spe': 90},
    'weight': 430,
    'ability': 'Primordial Sea',
    'isAlternateForme': true,
    'gender': 'genderless',
    'abilities': {'0': 'Primordial Sea'}
  },
  'Pumpkaboo-Average': {
    'type1': 'Ghost',
    'type2': 'Grass',
    'baseStats':
        {'hp': 49, 'atk': 66, 'def': 70, 'spa': 44, 'spd': 55, 'spe': 51},
    'weight': 10,
    'canEvolve': true,
    'abilities': {'0': 'Pickup', '1': 'Frisk', 'H': 'Insomnia'}
  },
  'Pumpkaboo-Large': {
    'type1': 'Ghost',
    'type2': 'Grass',
    'baseStats':
        {'hp': 54, 'atk': 66, 'def': 70, 'spa': 44, 'spd': 55, 'spe': 46},
    'weight': 10,
    'canEvolve': true,
    'abilities': {'0': 'Pickup', '1': 'Frisk'}
  },
  'Pumpkaboo-Small': {
    'type1': 'Ghost',
    'type2': 'Grass',
    'baseStats':
        {'hp': 44, 'atk': 66, 'def': 70, 'spa': 44, 'spd': 55, 'spe': 56},
    'weight': 10,
    'canEvolve': true,
    'abilities': {'0': 'Pickup', '1': 'Frisk'}
  },
  'Pumpkaboo-Super': {
    'type1': 'Ghost',
    'type2': 'Grass',
    'baseStats':
        {'hp': 59, 'atk': 66, 'def': 70, 'spa': 44, 'spd': 55, 'spe': 41},
    'weight': 10,
    'canEvolve': true,
    'abilities': {'0': 'Pickup', '1': 'Frisk', 'H': 'Insomnia'}
  },
  'Pyroar': {
    'type1': 'Fire',
    'type2': 'Normal',
    'baseStats':
        {'hp': 86, 'atk': 68, 'def': 72, 'spa': 109, 'spd': 66, 'spe': 106},
    'weight': 81.5,
    'abilities': {'0': 'Rivalry', '1': 'Unnerve', 'H': 'Moxie'}
  },
  'Quilladin': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 61, 'atk': 78, 'def': 95, 'spa': 56, 'spd': 58, 'spe': 57},
    'weight': 29,
    'canEvolve': true,
    'abilities': {'0': 'Overgrow', 'H': 'Bulletproof'}
  },
  'Scatterbug': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 38, 'atk': 35, 'def': 40, 'spa': 27, 'spd': 25, 'spe': 35},
    'weight': 2.5,
    'canEvolve': true,
    'abilities':
        {'0': 'Shield Dust', '1': 'Compound Eyes', 'H': 'Friend Guard'}
  },
  'Skiddo': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 66, 'atk': 65, 'def': 48, 'spa': 62, 'spd': 57, 'spe': 52},
    'weight': 31,
    'canEvolve': true,
    'abilities': {'0': 'Sap Sipper', 'H': 'Grass Pelt'}
  },
  'Skrelp': {
    'type1': 'Poison',
    'type2': 'Water',
    'baseStats':
        {'hp': 50, 'atk': 60, 'def': 60, 'spa': 60, 'spd': 60, 'spe': 30},
    'weight': 7.3,
    'canEvolve': true,
    'abilities':
        {'0': 'Poison Point', '1': 'Poison Touch', 'H': 'Adaptability'}
  },
  'Sliggoo': {
    'type1': 'Dragon',
    'baseStats':
        {'hp': 68, 'atk': 75, 'def': 53, 'spa': 83, 'spd': 113, 'spe': 60},
    'weight': 17.5,
    'canEvolve': true,
    'abilities': {'0': 'Sap Sipper', '1': 'Hydration', 'H': 'Gooey'}
  },
  'Slurpuff': {
    'type1': 'Fairy',
    'baseStats':
        {'hp': 82, 'atk': 80, 'def': 86, 'spa': 85, 'spd': 75, 'spe': 72},
    'weight': 5,
    'canEvolve': true,
    'abilities': {'0': 'Sweet Veil', 'H': 'Unburden'}
  },
  'Snugglow': {
    'type1': 'Electric',
    'type2': 'Poison',
    'baseStats':
        {'hp': 40, 'atk': 37, 'def': 79, 'spa': 91, 'spd': 68, 'spe': 70},
    'weight': 6,
    'abilities': {'0': 'Storm Drain', '1': 'Vital Spirit', 'H': 'Telepathy'}
  },
  'Spewpa': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 45, 'atk': 22, 'def': 60, 'spa': 27, 'spd': 30, 'spe': 29},
    'weight': 8.4,
    'canEvolve': true,
    'abilities': {'0': 'Shed Skin', 'H': 'Friend Guard'}
  },
  'Spritzee': {
    'type1': 'Fairy',
    'baseStats':
        {'hp': 78, 'atk': 52, 'def': 60, 'spa': 63, 'spd': 65, 'spe': 23},
    'weight': 0.5,
    'canEvolve': true,
    'abilities': {'0': 'Healer', 'H': 'Aroma Veil'}
  },
  'Swirlix': {
    'type1': 'Fairy',
    'baseStats':
        {'hp': 62, 'atk': 48, 'def': 66, 'spa': 59, 'spd': 57, 'spe': 49},
    'weight': 3.5,
    'canEvolve': true,
    'abilities': {'0': 'Sweet Veil', 'H': 'Unburden'}
  },
  'Sylveon': {
    'type1': 'Fairy',
    'baseStats':
        {'hp': 95, 'atk': 65, 'def': 65, 'spa': 110, 'spd': 130, 'spe': 60},
    'weight': 23.5,
    'abilities': {'0': 'Cute Charm', 'H': 'Pixilate'}
  },
  'Talonflame': {
    'type1': 'Fire',
    'type2': 'Flying',
    'baseStats':
        {'hp': 78, 'atk': 81, 'def': 71, 'spa': 74, 'spd': 69, 'spe': 126},
    'weight': 24.5,
    'abilities': {'0': 'Flame Body', 'H': 'Gale Wings'}
  },
  'Trevenant': {
    'type1': 'Ghost',
    'type2': 'Grass',
    'baseStats':
        {'hp': 85, 'atk': 110, 'def': 76, 'spa': 65, 'spd': 82, 'spe': 56},
    'weight': 71,
    'abilities': {'0': 'Natural Cure', '1': 'Frisk', 'H': 'Harvest'}
  },
  'Tyrantrum': {
    'type1': 'Rock',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 82, 'atk': 121, 'def': 119, 'spa': 69, 'spd': 59, 'spe': 71},
    'weight': 270,
    'abilities': {'0': 'Strong Jaw', 'H': 'Rock Head'}
  },
  'Tyrunt': {
    'type1': 'Rock',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 58, 'atk': 89, 'def': 77, 'spa': 45, 'spd': 45, 'spe': 48},
    'weight': 26,
    'canEvolve': true,
    'abilities': {'0': 'Strong Jaw', 'H': 'Sturdy'}
  },
  'Vivillon': {
    'type1': 'Bug',
    'type2': 'Flying',
    'baseStats':
        {'hp': 80, 'atk': 52, 'def': 50, 'spa': 90, 'spd': 50, 'spe': 89},
    'weight': 17,
    'abilities':
        {'0': 'Shield Dust', '1': 'Compound Eyes', 'H': 'Friend Guard'}
  },
  'Volcanion': {
    'type1': 'Fire',
    'type2': 'Water',
    'baseStats':
        {'hp': 80, 'atk': 110, 'def': 120, 'spa': 130, 'spd': 90, 'spe': 70},
    'weight': 195,
    'gender': 'genderless',
    'abilities': {'0': 'Water Absorb'}
  },
  'Volkraken': {
    'type1': 'Water',
    'type2': 'Fire',
    'baseStats':
        {'hp': 100, 'atk': 45, 'def': 80, 'spa': 135, 'spd': 100, 'spe': 95},
    'weight': 44.5,
    'abilities': {'0': 'Analytic', '1': 'Infiltrator', 'H': 'Pressure'}
  },
  'Volkritter': {
    'type1': 'Water',
    'type2': 'Fire',
    'baseStats':
        {'hp': 60, 'atk': 30, 'def': 50, 'spa': 80, 'spd': 60, 'spe': 70},
    'weight': 15,
    'canEvolve': true,
    'abilities': {'0': 'Anticipation', '1': 'Infiltrator', 'H': 'Unnerve'}
  },
  'Xerneas': {
    'type1': 'Fairy',
    'baseStats':
        {'hp': 126, 'atk': 131, 'def': 95, 'spa': 131, 'spd': 98, 'spe': 99},
    'weight': 215,
    'ability': 'Fairy Aura',
    'gender': 'genderless',
    'abilities': {'0': 'Fairy Aura'}
  },
  'Yveltal': {
    'type1': 'Dark',
    'type2': 'Flying',
    'baseStats':
        {'hp': 126, 'atk': 131, 'def': 95, 'spa': 131, 'spd': 98, 'spe': 99},
    'weight': 203,
    'ability': 'Dark Aura',
    'gender': 'genderless',
    'abilities': {'0': 'Dark Aura'}
  },
  'Zygarde': {
    'type1': 'Dragon',
    'type2': 'Ground',
    'baseStats':
        {'hp': 108, 'atk': 100, 'def': 121, 'spa': 81, 'spd': 95, 'spe': 95},
    'weight': 305,
    'ability': 'Aura Break',
    'gender': 'genderless',
    'abilities': {'0': 'Aura Break'}
  }
});

const SM: {[name: string]: Species} = extend(true, {}, XY, {
  'Alakazam-Mega': {'baseStats': {'spd': 105}},
  'Arbok': {'baseStats': {'atk': 95}},
  'Arghonaut': {'abilities': {'H': 'Technician'}},
  'Ariados': {'baseStats': {'spd': 70}},
  'Aurumoth': {'abilities': {'H': 'Light Metal'}},
  'Beartic': {'baseStats': {'atk': 130}, 'abilities': {'1': 'Slush Rush'}},
  'Boldore': {'abilities': {'1': 'Weak Armor'}},
  'Chimecho': {'baseStats': {'hp': 75, 'def': 80, 'spd': 90}},
  'Colossoil': {'abilities': {'H': 'Unnerve'}},
  'Corsola': {'baseStats': {'hp': 65, 'def': 95, 'spd': 95}},
  'Crustle': {'baseStats': {'atk': 105}},
  'Cryogonal': {'baseStats': {'hp': 80, 'def': 50}},
  'Cubchoo': {'abilities': {'1': 'Slush Rush'}},
  'Cyclohm': {'abilities': {'H': 'Damp'}},
  'Delcatty': {'baseStats': {'spe': 90}},
  'Diglett': {'formes': ['Diglett', 'Diglett-Alola']},
  'Dodrio': {'baseStats': {'spe': 110}},
  'Dugtrio':
      {'baseStats': {'atk': 100}, 'formes': ['Dugtrio', 'Dugtrio-Alola']},
  'Electrode': {'baseStats': {'spe': 150}},
  'Entei': {'abilities': {'H': 'Inner Focus'}},
  'Exeggutor':
      {'baseStats': {'spd': 75}, 'formes': ['Exeggutor', 'Exeggutor-Alola']},
  'Farfetch\'d': {'baseStats': {'atk': 90}},
  'Fidgit': {'abilities': {'H': 'Frisk'}},
  'Gengar': {'ability': '', 'abilities': {'0': 'Cursed Body'}},
  'Geodude': {'formes': ['Geodude', 'Geodude-Alola']},
  'Gigalith': {'abilities': {'1': 'Sand Stream'}},
  'Golem': {'formes': ['Golem', 'Golem-Alola']},
  'Gourgeist-Large': {'abilities': {'H': 'Insomnia'}},
  'Gourgeist-Small': {'abilities': {'H': 'Insomnia'}},
  'Graveler': {'formes': ['Graveler', 'Graveler-Alola']},
  'Greninja': {
    'formes': ['Greninja', 'Greninja-Ash'],
    'abilities': {'S': 'Battle Bond'}
  },
  'Grimer': {'formes': ['Grimer', 'Grimer-Alola']},
  'Heatran': {'abilities': {'H': 'Flame Body'}},
  'Illumise': {'baseStats': {'def': 75, 'spd': 85}},
  'Kitsunoh': {'abilities': {'H': 'Iron Fist'}},
  'Krilowatt': {'abilities': {'H': 'Minus'}},
  'Lunatone': {'baseStats': {'hp': 90}},
  'Magcargo': {'baseStats': {'hp': 60, 'spa': 90}},
  'Malaconda': {'abilities': {'H': 'Drought'}},
  'Mantine': {'baseStats': {'hp': 85}},
  'Marowak': {'formes': ['Marowak', 'Marowak-Alola', 'Marowak-Alola-Totem']},
  'Masquerain': {'baseStats': {'spa': 100, 'spe': 80}},
  'Meowth': {'formes': ['Meowth', 'Meowth-Alola']},
  'Muk': {'formes': ['Muk', 'Muk-Alola']},
  'Naviathan': {'abilities': {'0': 'Guts'}},
  'Ninetales': {'formes': ['Ninetales', 'Ninetales-Alola']},
  'Noctowl': {'baseStats': {'spa': 86}},
  'Pelipper': {'baseStats': {'spa': 95}, 'abilities': {'1': 'Drizzle'}},
  'Persian': {'formes': ['Persian', 'Persian-Alola']},
  'Pumpkaboo-Large': {'abilities': {'H': 'Insomnia'}},
  'Pumpkaboo-Small': {'abilities': {'H': 'Insomnia'}},
  'Pyroak': {'abilities': {'H': 'White Smoke'}},
  'Qwilfish': {'baseStats': {'def': 85}},
  'Raichu': {'formes': ['Raichu', 'Raichu-Alola']},
  'Raikou': {'abilities': {'H': 'Inner Focus'}},
  'Raticate':
      {'formes': ['Raticate', 'Raticate-Alola', 'Raticate-Alola-Totem']},
  'Rattata': {'formes': ['Rattata', 'Rattata-Alola']},
  'Revenankh': {'abilities': {'H': 'Triage'}},
  'Roggenrola': {'abilities': {'1': 'Weak Armor'}},
  'Sandshrew': {'formes': ['Sandshrew', 'Sandshrew-Alola']},
  'Sandslash': {'formes': ['Sandslash', 'Sandslash-Alola']},
  'Solrock': {'baseStats': {'hp': 90}},
  'Stratagem': {'abilities': {'H': 'Sniper'}},
  'Suicune': {'abilities': {'H': 'Inner Focus'}},
  'Swellow': {'baseStats': {'spa': 75}},
  'Syclant': {'abilities': {'H': 'Ice Body'}},
  'Torkoal': {'abilities': {'1': 'Drought'}},
  'Vanillish': {'abilities': {'1': 'Snow Cloak'}},
  'Vanillite': {'abilities': {'1': 'Snow Cloak'}},
  'Vanilluxe': {'abilities': {'1': 'Snow Warning'}},
  'Volbeat': {'baseStats': {'def': 75, 'spd': 85}},
  'Voodoom': {'abilities': {'H': 'Cursed Body'}},
  'Vulpix': {'formes': ['Vulpix', 'Vulpix-Alola']},
  'Wingull': {'abilities': {'1': 'Hydration'}},
  'Woobat': {'baseStats': {'hp': 65}},
  'Zygarde': {
    'formes': ['Zygarde', 'Zygarde-10%', 'Zygarde-Complete'],
    'abilities': {'H': 'Power Construct'}
  },
  'Araquanid': {
    'type1': 'Water',
    'type2': 'Bug',
    'baseStats':
        {'hp': 68, 'atk': 70, 'def': 92, 'spa': 50, 'spd': 132, 'spe': 42},
    'ability': 'Water Bubble',
    'weight': 82,
    'formes': ['Araquanid', 'Araquanid-Totem'],
    'abilities': {'0': 'Water Bubble', 'H': 'Water Absorb'}
  },
  'Araquanid-Totem': {
    'type1': 'Water',
    'type2': 'Bug',
    'baseStats':
        {'hp': 68, 'atk': 70, 'def': 92, 'spa': 50, 'spd': 132, 'spe': 42},
    'ability': 'Water Bubble',
    'weight': 217.5,
    'isAlternateForme': true,
    'abilities': {'0': 'Water Bubble'}
  },
  'Bewear': {
    'type1': 'Normal',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 120, 'atk': 125, 'def': 80, 'spa': 55, 'spd': 60, 'spe': 60},
    'ability': 'Fluffy',
    'weight': 135,
    'abilities': {'0': 'Fluffy', '1': 'Klutz', 'H': 'Unnerve'}
  },
  'Blacephalon': {
    'type1': 'Fire',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 53, 'atk': 127, 'def': 53, 'spa': 151, 'spd': 79, 'spe': 107},
    'weight': 13,
    'ability': 'Beast Boost',
    'gender': 'genderless',
    'abilities': {'0': 'Beast Boost'}
  },
  'Bounsweet': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 42, 'atk': 30, 'def': 38, 'spa': 30, 'spd': 38, 'spe': 32},
    'weight': 3.2,
    'canEvolve': true,
    'abilities': {'0': 'Leaf Guard', '1': 'Oblivious', 'H': 'Sweet Veil'}
  },
  'Brionne': {
    'type1': 'Water',
    'baseStats':
        {'hp': 60, 'atk': 69, 'def': 69, 'spa': 91, 'spd': 81, 'spe': 50},
    'weight': 17.5,
    'canEvolve': true,
    'abilities': {'0': 'Torrent', 'H': 'Liquid Voice'}
  },
  'Bruxish': {
    'type1': 'Water',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 68, 'atk': 105, 'def': 70, 'spa': 70, 'spd': 70, 'spe': 92},
    'weight': 19,
    'abilities': {'0': 'Dazzling', '1': 'Strong Jaw', 'H': 'Wonder Skin'}
  },
  'Buzzwole': {
    'type1': 'Bug',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 107, 'atk': 139, 'def': 139, 'spa': 53, 'spd': 53, 'spe': 79},
    'weight': 333.6,
    'ability': 'Beast Boost',
    'gender': 'genderless',
    'abilities': {'0': 'Beast Boost'}
  },
  'Celesteela': {
    'type1': 'Steel',
    'type2': 'Flying',
    'baseStats':
        {'hp': 97, 'atk': 101, 'def': 103, 'spa': 107, 'spd': 101, 'spe': 61},
    'weight': 999.9,
    'ability': 'Beast Boost',
    'gender': 'genderless',
    'abilities': {'0': 'Beast Boost'}
  },
  'Charjabug': {
    'type1': 'Bug',
    'type2': 'Electric',
    'baseStats':
        {'hp': 57, 'atk': 82, 'def': 95, 'spa': 55, 'spd': 75, 'spe': 36},
    'weight': 10.5,
    'canEvolve': true,
    'abilities': {'0': 'Battery'}
  },
  'Comfey': {
    'type1': 'Fairy',
    'baseStats':
        {'hp': 51, 'atk': 52, 'def': 90, 'spa': 82, 'spd': 110, 'spe': 100},
    'weight': 0.3,
    'abilities': {'0': 'Flower Veil', '1': 'Triage', 'H': 'Natural Cure'}
  },
  'Cosmoem': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 43, 'atk': 29, 'def': 131, 'spa': 29, 'spd': 131, 'spe': 37},
    'weight': 999.9,
    'canEvolve': true,
    'gender': 'genderless',
    'abilities': {'0': 'Sturdy'}
  },
  'Cosmog': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 43, 'atk': 29, 'def': 31, 'spa': 29, 'spd': 31, 'spe': 37},
    'weight': 0.1,
    'canEvolve': true,
    'gender': 'genderless',
    'abilities': {'0': 'Unaware'}
  },
  'Crabominable': {
    'type1': 'Fighting',
    'type2': 'Ice',
    'baseStats':
        {'hp': 97, 'atk': 132, 'def': 77, 'spa': 62, 'spd': 67, 'spe': 43},
    'weight': 180,
    'abilities': {'0': 'Hyper Cutter', '1': 'Iron Fist', 'H': 'Anger Point'}
  },
  'Crabrawler': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 47, 'atk': 82, 'def': 57, 'spa': 42, 'spd': 47, 'spe': 63},
    'weight': 7,
    'canEvolve': true,
    'abilities': {'0': 'Hyper Cutter', '1': 'Iron Fist', 'H': 'Anger Point'}
  },
  'Cutiefly': {
    'type1': 'Bug',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 40, 'atk': 45, 'def': 40, 'spa': 55, 'spd': 40, 'spe': 84},
    'weight': 0.2,
    'canEvolve': true,
    'abilities': {'0': 'Honey Gather', '1': 'Shield Dust', 'H': 'Sweet Veil'}
  },
  'Dartrix': {
    'type1': 'Grass',
    'type2': 'Flying',
    'baseStats':
        {'hp': 78, 'atk': 75, 'def': 75, 'spa': 70, 'spd': 70, 'spe': 52},
    'weight': 16,
    'canEvolve': true,
    'abilities': {'0': 'Overgrow', 'H': 'Long Reach'}
  },
  'Decidueye': {
    'type1': 'Grass',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 78, 'atk': 107, 'def': 75, 'spa': 100, 'spd': 100, 'spe': 70},
    'weight': 36.6,
    'abilities': {'0': 'Overgrow', 'H': 'Long Reach'}
  },
  'Dewpider': {
    'type1': 'Water',
    'type2': 'Bug',
    'baseStats':
        {'hp': 38, 'atk': 40, 'def': 52, 'spa': 40, 'spd': 72, 'spe': 27},
    'weight': 4,
    'canEvolve': true,
    'abilities': {'0': 'Water Bubble', 'H': 'Water Absorb'}
  },
  'Dhelmise': {
    'type1': 'Ghost',
    'type2': 'Grass',
    'baseStats':
        {'hp': 70, 'atk': 131, 'def': 100, 'spa': 86, 'spd': 90, 'spe': 40},
    'weight': 210,
    'gender': 'genderless',
    'abilities': {'0': 'Steelworker'}
  },
  'Drampa': {
    'type1': 'Normal',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 78, 'atk': 60, 'def': 85, 'spa': 135, 'spd': 91, 'spe': 36},
    'weight': 185,
    'abilities': {'0': 'Berserk', '1': 'Sap Sipper', 'H': 'Cloud Nine'}
  },
  'Diglett-Alola': {
    'type1': 'Ground',
    'type2': 'Steel',
    'baseStats':
        {'hp': 10, 'atk': 55, 'def': 30, 'spa': 35, 'spd': 45, 'spe': 90},
    'weight': 1,
    'isAlternateForme': true,
    'canEvolve': true,
    'abilities': {'0': 'Sand Veil', '1': 'Tangling Hair', 'H': 'Sand Force'}
  },
  'Dugtrio-Alola': {
    'type1': 'Ground',
    'type2': 'Steel',
    'baseStats':
        {'hp': 35, 'atk': 100, 'def': 60, 'spa': 50, 'spd': 70, 'spe': 110},
    'weight': 66.6,
    'isAlternateForme': true,
    'abilities': {'0': 'Sand Veil', '1': 'Tangling Hair', 'H': 'Sand Force'}
  },
  'Exeggutor-Alola': {
    'type1': 'Grass',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 95, 'atk': 105, 'def': 85, 'spa': 125, 'spd': 75, 'spe': 45},
    'weight': 415.6,
    'isAlternateForme': true,
    'abilities': {'0': 'Frisk', 'H': 'Harvest'}
  },
  'Fomantis': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 40, 'atk': 55, 'def': 35, 'spa': 50, 'spd': 35, 'spe': 35},
    'weight': 1.5,
    'canEvolve': true,
    'abilities': {'0': 'Leaf Guard', 'H': 'Contrary'}
  },
  'Geodude-Alola': {
    'type1': 'Rock',
    'type2': 'Electric',
    'baseStats':
        {'hp': 40, 'atk': 80, 'def': 100, 'spa': 30, 'spd': 30, 'spe': 20},
    'weight': 20.3,
    'isAlternateForme': true,
    'canEvolve': true,
    'abilities': {'0': 'Magnet Pull', '1': 'Sturdy', 'H': 'Galvanize'}
  },
  'Golem-Alola': {
    'type1': 'Rock',
    'type2': 'Electric',
    'baseStats':
        {'hp': 80, 'atk': 120, 'def': 130, 'spa': 55, 'spd': 65, 'spe': 45},
    'weight': 316,
    'ability': 'Galvanize',
    'isAlternateForme': true,
    'abilities': {'0': 'Magnet Pull', '1': 'Sturdy', 'H': 'Galvanize'}
  },
  'Golisopod': {
    'type1': 'Bug',
    'type2': 'Water',
    'baseStats':
        {'hp': 75, 'atk': 125, 'def': 140, 'spa': 60, 'spd': 90, 'spe': 40},
    'weight': 108,
    'abilities': {'0': 'Emergency Exit'}
  },
  'Graveler-Alola': {
    'type1': 'Rock',
    'type2': 'Electric',
    'baseStats':
        {'hp': 55, 'atk': 95, 'def': 115, 'spa': 45, 'spd': 45, 'spe': 35},
    'weight': 110,
    'isAlternateForme': true,
    'canEvolve': true,
    'abilities': {'0': 'Magnet Pull', '1': 'Sturdy', 'H': 'Galvanize'}
  },
  'Grimer-Alola': {
    'type1': 'Poison',
    'type2': 'Dark',
    'baseStats':
        {'hp': 80, 'atk': 80, 'def': 50, 'spa': 40, 'spd': 50, 'spe': 25},
    'weight': 42,
    'isAlternateForme': true,
    'canEvolve': true,
    'abilities':
        {'0': 'Poison Touch', '1': 'Gluttony', 'H': 'Power of Alchemy'}
  },
  'Greninja-Ash': {
    'type1': 'Water',
    'type2': 'Dark',
    'baseStats':
        {'hp': 72, 'atk': 145, 'def': 67, 'spa': 153, 'spd': 71, 'spe': 132},
    'weight': 40,
    'ability': 'Battle Bond',
    'isAlternateForme': true,
    'abilities': {'0': 'Battle Bond'}
  },
  'Grubbin': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 47, 'atk': 62, 'def': 45, 'spa': 55, 'spd': 45, 'spe': 46},
    'weight': 4.4,
    'canEvolve': true,
    'abilities': {'0': 'Swarm'}
  },
  'Gumshoos': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 88, 'atk': 110, 'def': 60, 'spa': 55, 'spd': 60, 'spe': 45},
    'weight': 14.2,
    'formes': ['Gumshoos', 'Gumshoos-Totem'],
    'abilities': {'0': 'Stakeout', '1': 'Strong Jaw', 'H': 'Adaptability'}
  },
  'Gumshoos-Totem': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 88, 'atk': 110, 'def': 60, 'spa': 55, 'spd': 60, 'spe': 45},
    'weight': 60,
    'isAlternateForme': true,
    'abilities': {'0': 'Adaptability'}
  },
  'Guzzlord': {
    'type1': 'Dark',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 223, 'atk': 101, 'def': 53, 'spa': 97, 'spd': 53, 'spe': 43},
    'weight': 888,
    'ability': 'Beast Boost',
    'gender': 'genderless',
    'abilities': {'0': 'Beast Boost'}
  },
  'Hakamo-o': {
    'type1': 'Dragon',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 55, 'atk': 75, 'def': 90, 'spa': 65, 'spd': 70, 'spe': 65},
    'weight': 47,
    'canEvolve': true,
    'abilities': {'0': 'Bulletproof', '1': 'Soundproof', 'H': 'Overcoat'}
  },
  'Incineroar': {
    'type1': 'Fire',
    'type2': 'Dark',
    'baseStats':
        {'hp': 95, 'atk': 115, 'def': 90, 'spa': 80, 'spd': 90, 'spe': 60},
    'weight': 83,
    'abilities': {'0': 'Blaze', 'H': 'Intimidate'}
  },
  'Jangmo-o': {
    'type1': 'Dragon',
    'baseStats':
        {'hp': 45, 'atk': 55, 'def': 65, 'spa': 45, 'spd': 45, 'spe': 45},
    'weight': 29.7,
    'canEvolve': true,
    'abilities': {'0': 'Bulletproof', '1': 'Soundproof', 'H': 'Overcoat'}
  },
  'Jumbao': {
    'type1': 'Grass',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 92, 'atk': 63, 'def': 97, 'spa': 124, 'spd': 104, 'spe': 96},
    'weight': 600,
    'abilities': {'0': 'Drought', '1': 'Trace', 'H': 'Overcoat'}
  },
  'Kartana': {
    'type1': 'Grass',
    'type2': 'Steel',
    'baseStats':
        {'hp': 59, 'atk': 181, 'def': 131, 'spa': 59, 'spd': 31, 'spe': 109},
    'weight': 0.1,
    'ability': 'Beast Boost',
    'gender': 'genderless',
    'abilities': {'0': 'Beast Boost'}
  },
  'Komala': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 65, 'atk': 115, 'def': 65, 'spa': 75, 'spd': 95, 'spe': 65},
    'weight': 19.9,
    'abilities': {'0': 'Comatose'}
  },
  'Kommo-o': {
    'type1': 'Dragon',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 75, 'atk': 110, 'def': 125, 'spa': 100, 'spd': 105, 'spe': 85},
    'weight': 78.2,
    'formes': ['Kommo-o', 'Kommo-o-Totem'],
    'abilities': {'0': 'Bulletproof', '1': 'Soundproof', 'H': 'Overcoat'}
  },
  'Kommo-o-Totem': {
    'type1': 'Dragon',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 75, 'atk': 110, 'def': 125, 'spa': 100, 'spd': 105, 'spe': 85},
    'weight': 207.5,
    'ability': 'Overcoat',
    'isAlternateForme': true,
    'abilities': {'0': 'Overcoat'}
  },
  'Litten': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 45, 'atk': 65, 'def': 40, 'spa': 60, 'spd': 40, 'spe': 70},
    'weight': 4.3,
    'canEvolve': true,
    'abilities': {'0': 'Blaze', 'H': 'Intimidate'}
  },
  'Lunala': {
    'type1': 'Psychic',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 137, 'atk': 113, 'def': 89, 'spa': 137, 'spd': 107, 'spe': 97},
    'weight': 120,
    'ability': 'Shadow Shield',
    'gender': 'genderless',
    'abilities': {'0': 'Shadow Shield'}
  },
  'Lurantis': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 70, 'atk': 105, 'def': 90, 'spa': 80, 'spd': 90, 'spe': 45},
    'weight': 19.5,
    'formes': ['Lurantis', 'Lurantis-Totem'],
    'abilities': {'0': 'Leaf Guard', 'H': 'Contrary'}
  },
  'Lurantis-Totem': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 70, 'atk': 105, 'def': 90, 'spa': 80, 'spd': 90, 'spe': 45},
    'weight': 58,
    'ability': 'Leaf Guard',
    'isAlternateForme': true,
    'abilities': {'0': 'Leaf Guard'}
  },
  'Lycanroc': {
    'type1': 'Rock',
    'baseStats':
        {'hp': 75, 'atk': 115, 'def': 65, 'spa': 55, 'spd': 65, 'spe': 112},
    'weight': 25,
    'formes': ['Lycanroc', 'Lycanoc-Dusk', 'Lycanroc-Midnight'],
    'abilities': {'0': 'Keen Eye', '1': 'Sand Rush', 'H': 'Steadfast'}
  },
  'Lycanroc-Dusk': {
    'type1': 'Rock',
    'baseStats':
        {'hp': 75, 'atk': 117, 'def': 65, 'spa': 55, 'spd': 65, 'spe': 110},
    'weight': 25,
    'ability': 'Tough Claws',
    'isAlternateForme': true,
    'abilities': {'0': 'Tough Claws'}
  },
  'Lycanroc-Midnight': {
    'type1': 'Rock',
    'baseStats':
        {'hp': 85, 'atk': 115, 'def': 75, 'spa': 55, 'spd': 75, 'spe': 82},
    'weight': 25,
    'isAlternateForme': true,
    'abilities': {'0': 'Keen Eye', '1': 'Vital Spirit', 'H': 'No Guard'}
  },
  'Magearna': {
    'type1': 'Steel',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 80, 'atk': 95, 'def': 115, 'spa': 130, 'spd': 115, 'spe': 65},
    'weight': 80.5,
    'gender': 'genderless',
    'abilities': {'0': 'Soul-Heart'}
  },
  'Mareanie': {
    'type1': 'Poison',
    'type2': 'Water',
    'baseStats':
        {'hp': 50, 'atk': 53, 'def': 62, 'spa': 43, 'spd': 52, 'spe': 45},
    'weight': 8,
    'canEvolve': true,
    'abilities': {'0': 'Merciless', '1': 'Limber', 'H': 'Regenerator'}
  },
  'Marowak-Alola': {
    'type1': 'Fire',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 60, 'atk': 80, 'def': 110, 'spa': 50, 'spd': 80, 'spe': 45},
    'weight': 34,
    'abilities': {'0': 'Cursed Body', '1': 'Lightning Rod', 'H': 'Rock Head'}
  },
  'Marowak-Alola-Totem': {
    'type1': 'Fire',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 60, 'atk': 80, 'def': 110, 'spa': 50, 'spd': 80, 'spe': 45},
    'weight': 98,
    'ability': 'Rock Head',
    'isAlternateForme': true,
    'abilities': {'0': 'Rock Head'}
  },
  'Marshadow': {
    'type1': 'Fighting',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 90, 'atk': 125, 'def': 80, 'spa': 90, 'spd': 90, 'spe': 125},
    'weight': 22.2,
    'gender': 'genderless',
    'abilities': {'0': 'Technician'}
  },
  'Meowth-Alola': {
    'type1': 'Dark',
    'baseStats':
        {'hp': 40, 'atk': 35, 'def': 35, 'spa': 50, 'spd': 40, 'spe': 90},
    'weight': 4.2,
    'isAlternateForme': true,
    'canEvolve': true,
    'abilities': {'0': 'Pickup', '1': 'Technician', 'H': 'Rattled'}
  },
  'Mimikyu': {
    'type1': 'Ghost',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 55, 'atk': 90, 'def': 80, 'spa': 50, 'spd': 105, 'spe': 96},
    'weight': 0.7,
    'formes': ['Mimikyu', 'Mimikyu-Totem'],
    'abilities': {'0': 'Disguise'}
  },
  'Mimikyu-Totem': {
    'type1': 'Ghost',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 55, 'atk': 90, 'def': 80, 'spa': 50, 'spd': 105, 'spe': 96},
    'weight': 2.8,
    'isAlternateForme': true,
    'abilities': {'0': 'Disguise'}
  },
  'Minior': {
    'type1': 'Rock',
    'type2': 'Flying',
    'baseStats':
        {'hp': 60, 'atk': 100, 'def': 60, 'spa': 100, 'spd': 60, 'spe': 120},
    'weight': 0.3,
    'formes': ['Minior', 'Minior-Meteor'],
    'gender': 'genderless',
    'abilities': {'0': 'Shields Down'}
  },
  'Minior-Meteor': {
    'type1': 'Rock',
    'type2': 'Flying',
    'baseStats':
        {'hp': 60, 'atk': 60, 'def': 100, 'spa': 60, 'spd': 100, 'spe': 60},
    'weight': 40,
    'isAlternateForme': true,
    'abilities': {'0': 'Shields Down'}
  },
  'Morelull': {
    'type1': 'Grass',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 40, 'atk': 35, 'def': 55, 'spa': 65, 'spd': 75, 'spe': 15},
    'weight': 1.5,
    'canEvolve': true,
    'abilities': {'0': 'Illuminate', '1': 'Effect Spore', 'H': 'Rain Dish'}
  },
  'Mudbray': {
    'type1': 'Ground',
    'baseStats':
        {'hp': 70, 'atk': 100, 'def': 70, 'spa': 45, 'spd': 55, 'spe': 45},
    'weight': 110,
    'canEvolve': true,
    'abilities': {'0': 'Own Tempo', '1': 'Stamina', 'H': 'Inner Focus'}
  },
  'Mudsdale': {
    'type1': 'Ground',
    'baseStats':
        {'hp': 100, 'atk': 125, 'def': 100, 'spa': 55, 'spd': 85, 'spe': 35},
    'weight': 920,
    'abilities': {'0': 'Own Tempo', '1': 'Stamina', 'H': 'Inner Focus'}
  },
  'Muk-Alola': {
    'type1': 'Poison',
    'type2': 'Dark',
    'baseStats':
        {'hp': 105, 'atk': 105, 'def': 75, 'spa': 65, 'spd': 100, 'spe': 50},
    'weight': 52,
    'isAlternateForme': true,
    'abilities':
        {'0': 'Poison Touch', '1': 'Gluttony', 'H': 'Power of Alchemy'}
  },
  'Naganadel': {
    'type1': 'Poison',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 73, 'atk': 73, 'def': 73, 'spa': 127, 'spd': 73, 'spe': 121},
    'weight': 150,
    'ability': 'Beast Boost',
    'gender': 'genderless',
    'abilities': {'0': 'Beast Boost'}
  },
  'Necrozma': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 97, 'atk': 107, 'def': 101, 'spa': 127, 'spd': 89, 'spe': 79},
    'weight': 230,
    'ability': 'Prism Armor',
    'formes': [
      'Necrozma', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra'
    ],
    'gender': 'genderless',
    'abilities': {'0': 'Prism Armor'}
  },
  'Necrozma-Dawn-Wings': {
    'type1': 'Psychic',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 97, 'atk': 113, 'def': 109, 'spa': 157, 'spd': 127, 'spe': 77},
    'weight': 350,
    'ability': 'Prism Armor',
    'isAlternateForme': true,
    'gender': 'genderless',
    'abilities': {'0': 'Prism Armor'}
  },
  'Necrozma-Dusk-Mane': {
    'type1': 'Psychic',
    'type2': 'Steel',
    'baseStats':
        {'hp': 97, 'atk': 157, 'def': 127, 'spa': 113, 'spd': 109, 'spe': 77},
    'weight': 460,
    'ability': 'Prism Armor',
    'isAlternateForme': true,
    'gender': 'genderless',
    'abilities': {'0': 'Prism Armor'}
  },
  'Necrozma-Ultra': {
    'type1': 'Psychic',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 97, 'atk': 167, 'def': 97, 'spa': 167, 'spd': 97, 'spe': 129},
    'weight': 230,
    'ability': 'Neuroforce',
    'isAlternateForme': true,
    'gender': 'genderless',
    'abilities': {'0': 'Neuroforce'}
  },
  'Nihilego': {
    'type1': 'Rock',
    'type2': 'Poison',
    'baseStats':
        {'hp': 109, 'atk': 53, 'def': 47, 'spa': 127, 'spd': 131, 'spe': 103},
    'weight': 55.5,
    'ability': 'Beast Boost',
    'gender': 'genderless',
    'abilities': {'0': 'Beast Boost'}
  },
  'Ninetales-Alola': {
    'type1': 'Ice',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 73, 'atk': 67, 'def': 75, 'spa': 81, 'spd': 100, 'spe': 109},
    'weight': 19.9,
    'ability': 'Snow Warning',
    'isAlternateForme': true,
    'abilities': {'0': 'Snow Cloak', 'H': 'Snow Warning'}
  },
  'Oranguru': {
    'type1': 'Normal',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 90, 'atk': 60, 'def': 80, 'spa': 90, 'spd': 110, 'spe': 60},
    'weight': 76,
    'canEvolve': true,
    'abilities': {'0': 'Inner Focus', '1': 'Telepathy', 'H': 'Symbiosis'}
  },
  'Oricorio': {
    'type1': 'Fire',
    'type2': 'Flying',
    'baseStats':
        {'hp': 75, 'atk': 70, 'def': 70, 'spa': 98, 'spd': 70, 'spe': 93},
    'weight': 3.4,
    'ability': 'Dancer',
    'formes':
        ['Oricorio', 'Oricorio-Pa\'u', 'Oricorio-Pom-Pom', 'Oricorio-Sensu'],
    'abilities': {'0': 'Dancer'}
  },
  'Oricorio-Pa\'u': {
    'type1': 'Psychic',
    'type2': 'Flying',
    'baseStats':
        {'hp': 75, 'atk': 70, 'def': 70, 'spa': 98, 'spd': 70, 'spe': 93},
    'weight': 3.4,
    'ability': 'Dancer',
    'isAlternateForme': true,
    'abilities': {'0': 'Dancer'}
  },
  'Oricorio-Pom-Pom': {
    'type1': 'Electric',
    'type2': 'Flying',
    'baseStats':
        {'hp': 75, 'atk': 70, 'def': 70, 'spa': 98, 'spd': 70, 'spe': 93},
    'weight': 3.4,
    'ability': 'Dancer',
    'isAlternateForme': true,
    'abilities': {'0': 'Dancer'}
  },
  'Oricorio-Sensu': {
    'type1': 'Ghost',
    'type2': 'Flying',
    'baseStats':
        {'hp': 75, 'atk': 70, 'def': 70, 'spa': 98, 'spd': 70, 'spe': 93},
    'weight': 3.4,
    'ability': 'Dancer',
    'isAlternateForme': true,
    'abilities': {'0': 'Dancer'}
  },
  'Pajantom': {
    'type1': 'Dragon',
    'type2': 'Ghost',
    'baseStats':
        {'hp': 84, 'atk': 133, 'def': 71, 'spa': 51, 'spd': 111, 'spe': 101},
    'weight': 3.1,
    'ability': 'Comatose',
    'abilities': {'0': 'Comatose'}
  },
  'Palossand': {
    'type1': 'Ghost',
    'type2': 'Ground',
    'baseStats':
        {'hp': 85, 'atk': 75, 'def': 110, 'spa': 100, 'spd': 75, 'spe': 35},
    'weight': 250,
    'abilities': {'0': 'Water Compaction', 'H': 'Sand Veil'}
  },
  'Passimian': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 100, 'atk': 120, 'def': 90, 'spa': 40, 'spd': 60, 'spe': 80},
    'weight': 82.8,
    'abilities': {'0': 'Receiver', 'H': 'Defiant'}
  },
  'Persian-Alola': {
    'type1': 'Dark',
    'baseStats':
        {'hp': 65, 'atk': 60, 'def': 60, 'spa': 75, 'spd': 65, 'spe': 115},
    'weight': 33,
    'isAlternateForme': true,
    'abilities': {'0': 'Fur Coat', '1': 'Technician', 'H': 'Rattled'}
  },
  'Pheromosa': {
    'type1': 'Bug',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 71, 'atk': 137, 'def': 37, 'spa': 137, 'spd': 37, 'spe': 151},
    'weight': 25,
    'ability': 'Beast Boost',
    'gender': 'genderless',
    'abilities': {'0': 'Beast Boost'}
  },
  'Pikipek': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 35, 'atk': 75, 'def': 30, 'spa': 30, 'spd': 30, 'spe': 65},
    'weight': 1.2,
    'canEvolve': true,
    'abilities': {'0': 'Keen Eye', '1': 'Skill Link', 'H': 'Pickup'}
  },
  'Poipole': {
    'type1': 'Poison',
    'baseStats':
        {'hp': 67, 'atk': 73, 'def': 67, 'spa': 73, 'spd': 67, 'spe': 73},
    'weight': 1.8,
    'ability': 'Beast Boost',
    'canEvolve': true,
    'gender': 'genderless',
    'abilities': {'0': 'Beast Boost'}
  },
  'Popplio': {
    'type1': 'Water',
    'baseStats':
        {'hp': 50, 'atk': 54, 'def': 54, 'spa': 66, 'spd': 56, 'spe': 40},
    'weight': 7.5,
    'canEvolve': true,
    'abilities': {'0': 'Torrent', 'H': 'Liquid Voice'}
  },
  'Primarina': {
    'type1': 'Water',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 80, 'atk': 74, 'def': 74, 'spa': 126, 'spd': 116, 'spe': 60},
    'weight': 44,
    'abilities': {'0': 'Torrent', 'H': 'Liquid Voice'}
  },
  'Pyukumuku': {
    'type1': 'Water',
    'baseStats':
        {'hp': 55, 'atk': 60, 'def': 130, 'spa': 30, 'spd': 130, 'spe': 5},
    'weight': 1.2,
    'abilities': {'0': 'Innards Out', 'H': 'Unaware'}
  },
  'Raichu-Alola': {
    'type1': 'Electric',
    'type2': 'Psychic',
    'baseStats':
        {'hp': 60, 'atk': 85, 'def': 50, 'spa': 95, 'spd': 85, 'spe': 110},
    'weight': 21,
    'isAlternateForme': true,
    'abilities': {'0': 'Surge Surfer'}
  },
  'Raticate-Alola': {
    'type1': 'Dark',
    'type2': 'Normal',
    'baseStats':
        {'hp': 75, 'atk': 71, 'def': 70, 'spa': 40, 'spd': 80, 'spe': 77},
    'weight': 25.5,
    'isAlternateForme': true,
    'abilities': {'0': 'Gluttony', '1': 'Hustle', 'H': 'Thick Fat'}
  },
  'Raticate-Alola-Totem': {
    'type1': 'Dark',
    'type2': 'Normal',
    'baseStats':
        {'hp': 75, 'atk': 71, 'def': 70, 'spa': 40, 'spd': 80, 'spe': 77},
    'weight': 105,
    'ability': 'Thick Fat',
    'isAlternateForme': true,
    'abilities': {'0': 'Thick Fat'}
  },
  'Rattata-Alola': {
    'type1': 'Dark',
    'type2': 'Normal',
    'baseStats':
        {'hp': 30, 'atk': 56, 'def': 35, 'spa': 25, 'spd': 35, 'spe': 72},
    'weight': 3.8,
    'isAlternateForme': true,
    'canEvolve': true,
    'abilities': {'0': 'Gluttony', '1': 'Hustle', 'H': 'Thick Fat'}
  },
  'Ribombee': {
    'type1': 'Bug',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 60, 'atk': 55, 'def': 60, 'spa': 95, 'spd': 70, 'spe': 124},
    'weight': 0.5,
    'formes': ['Ribombee', 'Ribombee-Totem'],
    'abilities': {'0': 'Honey Gather', '1': 'Shield Dust', 'H': 'Sweet Veil'}
  },
  'Ribombee-Totem': {
    'type1': 'Bug',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 60, 'atk': 55, 'def': 60, 'spa': 95, 'spd': 70, 'spe': 124},
    'weight': 2,
    'ability': 'Sweet Veil',
    'isAlternateForme': true,
    'abilities': {'0': 'Sweet Veil'}
  },
  'Rockruff': {
    'type1': 'Rock',
    'baseStats':
        {'hp': 45, 'atk': 65, 'def': 40, 'spa': 30, 'spd': 40, 'spe': 60},
    'weight': 9.2,
    'canEvolve': true,
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Vital Spirit',
      'H': 'Steadfast',
      'S': 'Own Tempo'
    }
  },
  'Rowlet': {
    'type1': 'Grass',
    'type2': 'Flying',
    'baseStats':
        {'hp': 68, 'atk': 55, 'def': 55, 'spa': 50, 'spd': 50, 'spe': 42},
    'weight': 1.5,
    'canEvolve': true,
    'abilities': {'0': 'Overgrow', 'H': 'Long Reach'}
  },
  'Salandit': {
    'type1': 'Poison',
    'type2': 'Fire',
    'baseStats':
        {'hp': 48, 'atk': 44, 'def': 40, 'spa': 71, 'spd': 40, 'spe': 77},
    'weight': 4.8,
    'canEvolve': true,
    'abilities': {'0': 'Corrosion', 'H': 'Oblivious'}
  },
  'Salazzle': {
    'type1': 'Poison',
    'type2': 'Fire',
    'baseStats':
        {'hp': 68, 'atk': 64, 'def': 60, 'spa': 111, 'spd': 60, 'spe': 117},
    'weight': 22.2,
    'formes': ['Salazzle', 'Salazzle-Totem'],
    'abilities': {'0': 'Corrosion', 'H': 'Oblivious'}
  },
  'Salazzle-Totem': {
    'type1': 'Poison',
    'type2': 'Fire',
    'baseStats':
        {'hp': 68, 'atk': 64, 'def': 60, 'spa': 111, 'spd': 60, 'spe': 117},
    'weight': 81,
    'ability': 'Corrosion',
    'isAlternateForme': true,
    'abilities': {'0': 'Corrosion'}
  },
  'Sandshrew-Alola': {
    'type1': 'Ice',
    'type2': 'Steel',
    'baseStats':
        {'hp': 50, 'atk': 75, 'def': 90, 'spa': 10, 'spd': 35, 'spe': 40},
    'weight': 40,
    'isAlternateForme': true,
    'canEvolve': true,
    'abilities': {'0': 'Snow Cloak', 'H': 'Slush Rush'}
  },
  'Sandslash-Alola': {
    'type1': 'Ice',
    'type2': 'Steel',
    'baseStats':
        {'hp': 75, 'atk': 100, 'def': 120, 'spa': 25, 'spd': 65, 'spe': 65},
    'weight': 55,
    'isAlternateForme': true,
    'abilities': {'0': 'Snow Cloak', 'H': 'Slush Rush'}
  },
  'Sandygast': {
    'type1': 'Ghost',
    'type2': 'Ground',
    'baseStats':
        {'hp': 55, 'atk': 55, 'def': 80, 'spa': 70, 'spd': 45, 'spe': 15},
    'weight': 70,
    'canEvolve': true,
    'abilities': {'0': 'Water Compaction', 'H': 'Sand Veil'}
  },
  'Shiinotic': {
    'type1': 'Grass',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 60, 'atk': 45, 'def': 80, 'spa': 90, 'spd': 100, 'spe': 30},
    'weight': 11.5,
    'abilities': {'0': 'Illuminate', '1': 'Effect Spore', 'H': 'Rain Dish'}
  },
  'Silvally': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Bug': {
    'type1': 'Bug',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Dark': {
    'type1': 'Dark',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Dragon': {
    'type1': 'Dragon',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Electric': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Fairy': {
    'type1': 'Fairy',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Fighting': {
    'type1': 'Fighting',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Fire': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Flying': {
    'type1': 'Flying',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Ghost': {
    'type1': 'Ghost',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Grass': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Ground': {
    'type1': 'Ground',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Ice': {
    'type1': 'Ice',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Poison': {
    'type1': 'Poison',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Psychic': {
    'type1': 'Psychic',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Rock': {
    'type1': 'Rock',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Steel': {
    'type1': 'Steel',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Silvally-Water': {
    'type1': 'Water',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 95},
    'weight': 100.5,
    'ability': 'RKS System',
    'gender': 'genderless',
    'abilities': {'0': 'RKS System'}
  },
  'Solgaleo': {
    'type1': 'Psychic',
    'type2': 'Steel',
    'baseStats':
        {'hp': 137, 'atk': 137, 'def': 107, 'spa': 113, 'spd': 89, 'spe': 97},
    'weight': 230,
    'ability': 'Full Metal Body',
    'gender': 'genderless',
    'abilities': {'0': 'Full Metal Body'}
  },
  'Stakataka': {
    'type1': 'Rock',
    'type2': 'Steel',
    'baseStats':
        {'hp': 61, 'atk': 131, 'def': 211, 'spa': 53, 'spd': 101, 'spe': 13},
    'weight': 820,
    'ability': 'Beast Boost',
    'gender': 'genderless',
    'abilities': {'0': 'Beast Boost'}
  },
  'Steenee': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 52, 'atk': 40, 'def': 48, 'spa': 40, 'spd': 48, 'spe': 62},
    'weight': 8.2,
    'canEvolve': true,
    'abilities': {'0': 'Leaf Guard', '1': 'Oblivious', 'H': 'Sweet Veil'}
  },
  'Stufful': {
    'type1': 'Normal',
    'type2': 'Fighting',
    'baseStats':
        {'hp': 70, 'atk': 75, 'def': 50, 'spa': 45, 'spd': 50, 'spe': 50},
    'weight': 6.8,
    'ability': 'Fluffy',
    'canEvolve': true,
    'abilities': {'0': 'Fluffy', '1': 'Klutz', 'H': 'Cute Charm'}
  },
  'Tapu Bulu': {
    'type1': 'Grass',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 70, 'atk': 130, 'def': 115, 'spa': 85, 'spd': 95, 'spe': 75},
    'weight': 45.5,
    'ability': 'Grassy Surge',
    'gender': 'genderless',
    'abilities': {'0': 'Grassy Surge', 'H': 'Telepathy'}
  },
  'Tapu Fini': {
    'type1': 'Water',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 70, 'atk': 75, 'def': 115, 'spa': 95, 'spd': 130, 'spe': 85},
    'weight': 21.2,
    'ability': 'Misty Surge',
    'gender': 'genderless',
    'abilities': {'0': 'Misty Surge', 'H': 'Telepathy'}
  },
  'Tapu Koko': {
    'type1': 'Electric',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 70, 'atk': 115, 'def': 85, 'spa': 95, 'spd': 75, 'spe': 130},
    'weight': 20.5,
    'ability': 'Electric Surge',
    'gender': 'genderless',
    'abilities': {'0': 'Electric Surge', 'H': 'Telepathy'}
  },
  'Tapu Lele': {
    'type1': 'Psychic',
    'type2': 'Fairy',
    'baseStats':
        {'hp': 70, 'atk': 85, 'def': 75, 'spa': 130, 'spd': 115, 'spe': 95},
    'weight': 18.6,
    'ability': 'Psychic Surge',
    'gender': 'genderless',
    'abilities': {'0': 'Psychic Surge', 'H': 'Telepathy'}
  },
  'Togedemaru': {
    'type1': 'Electric',
    'type2': 'Steel',
    'baseStats':
        {'hp': 65, 'atk': 98, 'def': 63, 'spa': 40, 'spd': 73, 'spe': 96},
    'weight': 3.3,
    'ability': 'Lightning Rod',
    'formes': ['Togedemaru', 'Togedemaru-Totem'],
    'abilities': {'0': 'Iron Barbs', '1': 'Lightning Rod', 'H': 'Sturdy'}
  },
  'Togedemaru-Totem': {
    'type1': 'Electric',
    'type2': 'Steel',
    'baseStats':
        {'hp': 65, 'atk': 98, 'def': 63, 'spa': 40, 'spd': 73, 'spe': 96},
    'weight': 13,
    'ability': 'Sturdy',
    'isAlternateForme': true,
    'abilities': {'0': 'Sturdy'}
  },
  'Torracat': {
    'type1': 'Fire',
    'baseStats':
        {'hp': 65, 'atk': 85, 'def': 50, 'spa': 80, 'spd': 50, 'spe': 90},
    'weight': 25,
    'canEvolve': true,
    'abilities': {'0': 'Blaze', 'H': 'Intimidate'}
  },
  'Toucannon': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 80, 'atk': 120, 'def': 75, 'spa': 75, 'spd': 75, 'spe': 60},
    'weight': 26,
    'abilities': {'0': 'Keen Eye', '1': 'Skill Link', 'H': 'Sheer Force'}
  },
  'Toxapex': {
    'type1': 'Poison',
    'type2': 'Water',
    'baseStats':
        {'hp': 50, 'atk': 63, 'def': 152, 'spa': 53, 'spd': 142, 'spe': 35},
    'weight': 14.5,
    'abilities': {'0': 'Merciless', '1': 'Limber', 'H': 'Regenerator'}
  },
  'Trumbeak': {
    'type1': 'Normal',
    'type2': 'Flying',
    'baseStats':
        {'hp': 55, 'atk': 85, 'def': 50, 'spa': 40, 'spd': 50, 'spe': 75},
    'weight': 14.8,
    'canEvolve': true,
    'abilities': {'0': 'Keen Eye', '1': 'Skill Link', 'H': 'Pickup'}
  },
  'Tsareena': {
    'type1': 'Grass',
    'baseStats':
        {'hp': 72, 'atk': 120, 'def': 98, 'spa': 50, 'spd': 98, 'spe': 72},
    'weight': 47.2,
    'ability': 'Queenly Majesty',
    'abilities':
        {'0': 'Leaf Guard', '1': 'Queenly Majesty', 'H': 'Sweet Veil'}
  },
  'Turtonator': {
    'type1': 'Fire',
    'type2': 'Dragon',
    'baseStats':
        {'hp': 60, 'atk': 78, 'def': 135, 'spa': 91, 'spd': 85, 'spe': 36},
    'weight': 212,
    'ability': 'Shell Armor',
    'abilities': {'0': 'Shell Armor'}
  },
  'Type: Null': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 95, 'atk': 95, 'def': 95, 'spa': 95, 'spd': 95, 'spe': 59},
    'weight': 120.5,
    'ability': 'Battle Armor',
    'canEvolve': true,
    'gender': 'genderless',
    'abilities': {'0': 'Battle Armor'}
  },
  'Vikavolt': {
    'type1': 'Bug',
    'type2': 'Electric',
    'baseStats':
        {'hp': 77, 'atk': 70, 'def': 90, 'spa': 145, 'spd': 75, 'spe': 43},
    'weight': 45,
    'ability': 'Levitate',
    'formes': ['Vikavolt', 'Vikavolt-Totem'],
    'abilities': {'0': 'Levitate'}
  },
  'Vikavolt-Totem': {
    'type1': 'Bug',
    'type2': 'Electric',
    'baseStats':
        {'hp': 77, 'atk': 70, 'def': 90, 'spa': 145, 'spd': 75, 'spe': 43},
    'weight': 147.5,
    'ability': 'Levitate',
    'isAlternateForme': true,
    'abilities': {'0': 'Levitate'}
  },
  'Vulpix-Alola': {
    'type1': 'Ice',
    'baseStats':
        {'hp': 38, 'atk': 41, 'def': 40, 'spa': 50, 'spd': 65, 'spe': 65},
    'weight': 9.9,
    'isAlternateForme': true,
    'canEvolve': true,
    'abilities': {'0': 'Snow Cloak', 'H': 'Snow Warning'}
  },
  'Wimpod': {
    'type1': 'Bug',
    'type2': 'Water',
    'baseStats':
        {'hp': 25, 'atk': 35, 'def': 40, 'spa': 20, 'spd': 30, 'spe': 80},
    'weight': 12,
    'ability': 'Wimp Out',
    'canEvolve': true,
    'abilities': {'0': 'Wimp Out'}
  },
  'Wishiwashi': {
    'type1': 'Water',
    'baseStats':
        {'hp': 45, 'atk': 140, 'def': 130, 'spa': 140, 'spd': 135, 'spe': 30},
    'weight': 0.3,
    'formes': ['Wishiwashi', 'Wishiwashi-School'],
    'abilities': {'0': 'Schooling'}
  },
  'Wishiwashi-School': {
    'type1': 'Water',
    'baseStats':
        {'hp': 45, 'atk': 140, 'def': 130, 'spa': 140, 'spd': 135, 'spe': 30},
    'weight': 78.6,
    'isAlternateForme': true,
    'abilities': {'0': 'Schooling'}
  },
  'Xurkitree': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 83, 'atk': 89, 'def': 71, 'spa': 173, 'spd': 71, 'spe': 83},
    'weight': 100,
    'ability': 'Beast Boost',
    'gender': 'genderless',
    'abilities': {'0': 'Beast Boost'}
  },
  'Yungoos': {
    'type1': 'Normal',
    'baseStats':
        {'hp': 48, 'atk': 70, 'def': 30, 'spa': 30, 'spd': 30, 'spe': 45},
    'weight': 6,
    'canEvolve': true,
    'abilities': {'0': 'Stakeout', '1': 'Strong Jaw', 'H': 'Adaptability'}
  },
  'Zeraora': {
    'type1': 'Electric',
    'baseStats':
        {'hp': 88, 'atk': 112, 'def': 75, 'spa': 102, 'spd': 80, 'spe': 143},
    'weight': 44.5,
    'ability': 'Volt Absorb',
    'abilities': {'0': 'Volt Absorb'}
  },
  'Zygarde-10%': {
    'type1': 'Dragon',
    'type2': 'Ground',
    'baseStats':
        {'hp': 54, 'atk': 100, 'def': 71, 'spa': 61, 'spd': 85, 'spe': 115},
    'weight': 33.5,
    'ability': 'Power Construct',
    'isAlternateForme': true,
    'gender': 'genderless',
    'abilities': {'0': 'Aura Break', 'H': 'Power Construct'}
  },
  'Zygarde-Complete': {
    'type1': 'Dragon',
    'type2': 'Ground',
    'baseStats':
        {'hp': 216, 'atk': 100, 'def': 121, 'spa': 91, 'spd': 95, 'spe': 85},
    'weight': 610,
    'ability': 'Power Construct',
    'isAlternateForme': true,
    'gender': 'genderless',
    'abilities': {'0': 'Power Construct'}
  }
});

export const POKEDEX: Array<{[name: string]: Species}> =
    [{}, RBY, GSC, ADV, DPP, BW, XY, SM];
export const POKEDEX_BY_ID: Array<{[id: string]: Species}> = [];

for (const pokedex of POKEDEX) {
  const map: {[id: string]: Species} = {};
  for (const p of Object.keys(pokedex)) {
    const v = pokedex[p];
    v.name = p;  // NOTE: we are OK with mutation here.
    map[toID(p)] = v;
  }
  POKEDEX_BY_ID.push(map);
}
