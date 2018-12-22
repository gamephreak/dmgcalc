'use strict';

const $ = {};
$.extend = require('jquery-extend');
const util = require('../util');

const RBY = {
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

/** @type {Pokedex} */
const GSC = $.extend(true, {}, RBY, {
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
	'Magnemite': {
		'gender': 'genderless',
		'type2': 'Steel'
	},
	'Magneton': {
		'type2': 'Steel',
		'gender': 'genderless'
	},
	'Aipom': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 55,
			'atk': 70,
			'def': 55,
			'spa': 40,
			'spd': 55,
			'spe': 85
		},
		'weight': 11.5
	},
	'Ampharos': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 90,
			'atk': 75,
			'def': 75,
			'spa': 115,
			'spd': 90,
			'spe': 55
		},
		'weight': 61.5
	},
	'Ariados': {
		'type1': 'Bug',
		'type2': 'Poison',
		'baseStats': {
			'hp': 70,
			'atk': 90,
			'def': 70,
			'spa': 60,
			'spd': 60,
			'spe': 40
		},
		'weight': 33.5
	},
	'Azumarill': {
		'type1': 'Water',
		'baseStats': {
			'hp': 100,
			'atk': 50,
			'def': 80,
			'spa': 50,
			'spd': 80,
			'spe': 50
		},
		'weight': 28.5
	},
	'Bayleef': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 60,
			'atk': 62,
			'def': 80,
			'spa': 63,
			'spd': 80,
			'spe': 60
		},
		'weight': 15.8,
		'canEvolve': true
	},
	'Bellossom': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 75,
			'atk': 80,
			'def': 85,
			'spa': 90,
			'spd': 100,
			'spe': 50
		},
		'weight': 5.8
	},
	'Blissey': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 255,
			'atk': 10,
			'def': 10,
			'spa': 75,
			'spd': 135,
			'spe': 55
		},
		'weight': 46.8
	},
	'Celebi': {
		'type1': 'Psychic',
		'type2': 'Grass',
		'baseStats': {
			'hp': 100,
			'atk': 100,
			'def': 100,
			'spa': 100,
			'spd': 100,
			'spe': 100
		},
		'weight': 5.0,
		'ability': 'Natural Cure',
		'gender': 'genderless'
	},
	'Chikorita': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 45,
			'atk': 49,
			'def': 65,
			'spa': 49,
			'spd': 65,
			'spe': 45
		},
		'weight': 6.4,
		'canEvolve': true
	},
	'Chinchou': {
		'type1': 'Water',
		'type2': 'Electric',
		'baseStats': {
			'hp': 75,
			'atk': 38,
			'def': 38,
			'spa': 56,
			'spd': 56,
			'spe': 67
		},
		'weight': 12.0,
		'canEvolve': true
	},
	'Cleffa': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 50,
			'atk': 25,
			'def': 28,
			'spa': 45,
			'spd': 55,
			'spe': 15
		},
		'weight': 3.0,
		'canEvolve': true
	},
	'Corsola': {
		'type1': 'Water',
		'type2': 'Rock',
		'baseStats': {
			'hp': 55,
			'atk': 55,
			'def': 85,
			'spa': 65,
			'spd': 85,
			'spe': 35
		},
		'weight': 5.0
	},
	'Crobat': {
		'type1': 'Poison',
		'type2': 'Flying',
		'baseStats': {
			'hp': 85,
			'atk': 90,
			'def': 80,
			'spa': 70,
			'spd': 80,
			'spe': 130
		},
		'weight': 75.0
	},
	'Croconaw': {
		'type1': 'Water',
		'baseStats': {
			'hp': 65,
			'atk': 80,
			'def': 80,
			'spa': 59,
			'spd': 63,
			'spe': 58
		},
		'weight': 25.0,
		'canEvolve': true
	},
	'Cyndaquil': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 39,
			'atk': 52,
			'def': 43,
			'spa': 60,
			'spd': 50,
			'spe': 65
		},
		'weight': 7.9,
		'canEvolve': true
	},
	'Delibird': {
		'type1': 'Ice',
		'type2': 'Flying',
		'baseStats': {
			'hp': 45,
			'atk': 55,
			'def': 45,
			'spa': 65,
			'spd': 45,
			'spe': 75
		},
		'weight': 16.0
	},
	'Donphan': {
		'type1': 'Ground',
		'baseStats': {
			'hp': 90,
			'atk': 120,
			'def': 120,
			'spa': 60,
			'spd': 60,
			'spe': 50
		},
		'weight': 120.0
	},
	'Dunsparce': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 100,
			'atk': 70,
			'def': 70,
			'spa': 65,
			'spd': 65,
			'spe': 45
		},
		'weight': 14.0
	},
	'Elekid': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 45,
			'atk': 63,
			'def': 37,
			'spa': 65,
			'spd': 55,
			'spe': 95
		},
		'weight': 23.5,
		'canEvolve': true
	},
	'Entei': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 115,
			'atk': 115,
			'def': 85,
			'spa': 90,
			'spd': 75,
			'spe': 100
		},
		'weight': 198.0,
		'ability': 'Pressure',
		'gender': 'genderless'
	},
	'Espeon': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 65,
			'atk': 65,
			'def': 60,
			'spa': 130,
			'spd': 95,
			'spe': 110
		},
		'weight': 26.5
	},
	'Feraligatr': {
		'type1': 'Water',
		'baseStats': {
			'hp': 85,
			'atk': 105,
			'def': 100,
			'spa': 79,
			'spd': 83,
			'spe': 78
		},
		'weight': 88.8
	},
	'Flaaffy': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 70,
			'atk': 55,
			'def': 55,
			'spa': 80,
			'spd': 60,
			'spe': 45
		},
		'weight': 13.3,
		'canEvolve': true
	},
	'Forretress': {
		'type1': 'Bug',
		'type2': 'Steel',
		'baseStats': {
			'hp': 75,
			'atk': 90,
			'def': 140,
			'spa': 60,
			'spd': 60,
			'spe': 40
		},
		'weight': 125.8
	},
	'Furret': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 85,
			'atk': 76,
			'def': 64,
			'spa': 45,
			'spd': 55,
			'spe': 90
		},
		'weight': 32.5
	},
	'Girafarig': {
		'type1': 'Normal',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 70,
			'atk': 80,
			'def': 65,
			'spa': 90,
			'spd': 65,
			'spe': 85
		},
		'weight': 41.5
	},
	'Gligar': {
		'type1': 'Ground',
		'type2': 'Flying',
		'baseStats': {
			'hp': 65,
			'atk': 75,
			'def': 105,
			'spa': 35,
			'spd': 65,
			'spe': 85
		},
		'weight': 64.8
	},
	'Granbull': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 90,
			'atk': 120,
			'def': 75,
			'spa': 60,
			'spd': 60,
			'spe': 45
		},
		'weight': 48.7
	},
	'Heracross': {
		'type1': 'Bug',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 80,
			'atk': 125,
			'def': 75,
			'spa': 40,
			'spd': 95,
			'spe': 85
		},
		'weight': 54.0
	},
	'Hitmontop': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 50,
			'atk': 95,
			'def': 95,
			'spa': 35,
			'spd': 110,
			'spe': 70
		},
		'weight': 48.0
	},
	'Ho-Oh': {
		'type1': 'Fire',
		'type2': 'Flying',
		'baseStats': {
			'hp': 106,
			'atk': 130,
			'def': 90,
			'spa': 110,
			'spd': 154,
			'spe': 90
		},
		'weight': 199.0,
		'gender': 'genderless'
	},
	'Hoothoot': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 60,
			'atk': 30,
			'def': 30,
			'spa': 36,
			'spd': 56,
			'spe': 50
		},
		'weight': 21.2,
		'canEvolve': true
	},
	'Hoppip': {
		'type1': 'Grass',
		'type2': 'Flying',
		'baseStats': {
			'hp': 35,
			'atk': 35,
			'def': 40,
			'spa': 35,
			'spd': 55,
			'spe': 50
		},
		'weight': 0.5,
		'canEvolve': true
	},
	'Houndoom': {
		'type1': 'Dark',
		'type2': 'Fire',
		'baseStats': {
			'hp': 75,
			'atk': 90,
			'def': 50,
			'spa': 110,
			'spd': 80,
			'spe': 95
		},
		'weight': 35.0
	},
	'Houndour': {
		'type1': 'Dark',
		'type2': 'Fire',
		'baseStats': {
			'hp': 45,
			'atk': 60,
			'def': 30,
			'spa': 80,
			'spd': 50,
			'spe': 65
		},
		'weight': 10.8,
		'canEvolve': true
	},
	'Igglybuff': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 90,
			'atk': 30,
			'def': 15,
			'spa': 40,
			'spd': 20,
			'spe': 15
		},
		'weight': 1.0,
		'canEvolve': true
	},
	'Jumpluff': {
		'type1': 'Grass',
		'type2': 'Flying',
		'baseStats': {
			'hp': 75,
			'atk': 55,
			'def': 70,
			'spa': 55,
			'spd': 85,
			'spe': 110
		},
		'weight': 3.0
	},
	'Kingdra': {
		'type1': 'Water',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 75,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 85
		},
		'weight': 152.0
	},
	'Lanturn': {
		'type1': 'Water',
		'type2': 'Electric',
		'baseStats': {
			'hp': 125,
			'atk': 58,
			'def': 58,
			'spa': 76,
			'spd': 76,
			'spe': 67
		},
		'weight': 22.5
	},
	'Larvitar': {
		'type1': 'Rock',
		'type2': 'Ground',
		'baseStats': {
			'hp': 50,
			'atk': 64,
			'def': 50,
			'spa': 45,
			'spd': 50,
			'spe': 41
		},
		'weight': 72.0,
		'canEvolve': true
	},
	'Ledian': {
		'type1': 'Bug',
		'type2': 'Flying',
		'baseStats': {
			'hp': 55,
			'atk': 35,
			'def': 50,
			'spa': 55,
			'spd': 110,
			'spe': 85
		},
		'weight': 35.6
	},
	'Ledyba': {
		'type1': 'Bug',
		'type2': 'Flying',
		'baseStats': {
			'hp': 40,
			'atk': 20,
			'def': 30,
			'spa': 40,
			'spd': 80,
			'spe': 55
		},
		'weight': 10.8,
		'canEvolve': true
	},
	'Lugia': {
		'type1': 'Psychic',
		'type2': 'Flying',
		'baseStats': {
			'hp': 106,
			'atk': 90,
			'def': 130,
			'spa': 90,
			'spd': 154,
			'spe': 110
		},
		'weight': 216.0,
		'gender': 'genderless'
	},
	'Magby': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 45,
			'atk': 75,
			'def': 37,
			'spa': 70,
			'spd': 55,
			'spe': 83
		},
		'weight': 21.4,
		'canEvolve': true
	},
	'Magcargo': {
		'type1': 'Fire',
		'type2': 'Rock',
		'baseStats': {
			'hp': 50,
			'atk': 50,
			'def': 120,
			'spa': 80,
			'spd': 80,
			'spe': 30
		},
		'weight': 55.0
	},
	'Mantine': {
		'type1': 'Water',
		'type2': 'Flying',
		'baseStats': {
			'hp': 65,
			'atk': 40,
			'def': 70,
			'spa': 80,
			'spd': 140,
			'spe': 70
		},
		'weight': 220.0
	},
	'Mareep': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 55,
			'atk': 40,
			'def': 40,
			'spa': 65,
			'spd': 45,
			'spe': 35
		},
		'weight': 7.8,
		'canEvolve': true
	},
	'Marill': {
		'type1': 'Water',
		'baseStats': {
			'hp': 70,
			'atk': 20,
			'def': 50,
			'spa': 20,
			'spd': 50,
			'spe': 40
		},
		'weight': 8.5,
		'canEvolve': true
	},
	'Meganium': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 80,
			'atk': 82,
			'def': 100,
			'spa': 83,
			'spd': 100,
			'spe': 80
		},
		'weight': 100.5
	},
	'Miltank': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 95,
			'atk': 80,
			'def': 105,
			'spa': 40,
			'spd': 70,
			'spe': 100
		},
		'weight': 75.5
	},
	'Misdreavus': {
		'type1': 'Ghost',
		'baseStats': {
			'hp': 60,
			'atk': 60,
			'def': 60,
			'spa': 85,
			'spd': 85,
			'spe': 85
		},
		'weight': 1.0,
		'ability': 'Levitate'
	},
	'Murkrow': {
		'type1': 'Dark',
		'type2': 'Flying',
		'baseStats': {
			'hp': 60,
			'atk': 85,
			'def': 42,
			'spa': 85,
			'spd': 42,
			'spe': 91
		},
		'weight': 2.1
	},
	'Natu': {
		'type1': 'Psychic',
		'type2': 'Flying',
		'baseStats': {
			'hp': 40,
			'atk': 50,
			'def': 45,
			'spa': 70,
			'spd': 45,
			'spe': 70
		},
		'weight': 2.0,
		'canEvolve': true
	},
	'Noctowl': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 100,
			'atk': 50,
			'def': 50,
			'spa': 76,
			'spd': 96,
			'spe': 70
		},
		'weight': 40.8
	},
	'Octillery': {
		'type1': 'Water',
		'baseStats': {
			'hp': 75,
			'atk': 105,
			'def': 75,
			'spa': 105,
			'spd': 75,
			'spe': 45
		},
		'weight': 28.5
	},
	'Phanpy': {
		'type1': 'Ground',
		'baseStats': {
			'hp': 90,
			'atk': 60,
			'def': 60,
			'spa': 40,
			'spd': 40,
			'spe': 40
		},
		'weight': 33.5,
		'canEvolve': true
	},
	'Pichu': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 20,
			'atk': 40,
			'def': 15,
			'spa': 35,
			'spd': 35,
			'spe': 60
		},
		'weight': 2.0,
		'canEvolve': true
	},
	'Piloswine': {
		'type1': 'Ice',
		'type2': 'Ground',
		'baseStats': {
			'hp': 100,
			'atk': 100,
			'def': 80,
			'spa': 60,
			'spd': 60,
			'spe': 50
		},
		'weight': 55.8
	},
	'Pineco': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 50,
			'atk': 65,
			'def': 90,
			'spa': 35,
			'spd': 35,
			'spe': 15
		},
		'weight': 7.2,
		'canEvolve': true
	},
	'Politoed': {
		'type1': 'Water',
		'baseStats': {
			'hp': 90,
			'atk': 75,
			'def': 75,
			'spa': 90,
			'spd': 100,
			'spe': 70
		},
		'weight': 33.9
	},
	'Porygon': {
		'canEvolve': true,
		'gender': 'genderless'
	},
	'Porygon2': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 85,
			'atk': 80,
			'def': 90,
			'spa': 105,
			'spd': 95,
			'spe': 60
		},
		'weight': 32.5,
		'gender': 'genderless'
	},
	'Pupitar': {
		'type1': 'Rock',
		'type2': 'Ground',
		'baseStats': {
			'hp': 70,
			'atk': 84,
			'def': 70,
			'spa': 65,
			'spd': 70,
			'spe': 51
		},
		'weight': 152.0,
		'ability': 'Shed Skin',
		'canEvolve': true
	},
	'Quagsire': {
		'type1': 'Water',
		'type2': 'Ground',
		'baseStats': {
			'hp': 95,
			'atk': 85,
			'def': 85,
			'spa': 65,
			'spd': 65,
			'spe': 35
		},
		'weight': 75.0
	},
	'Quilava': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 58,
			'atk': 64,
			'def': 58,
			'spa': 80,
			'spd': 65,
			'spe': 80
		},
		'weight': 19.0,
		'canEvolve': true
	},
	'Qwilfish': {
		'type1': 'Water',
		'type2': 'Poison',
		'baseStats': {
			'hp': 65,
			'atk': 95,
			'def': 75,
			'spa': 55,
			'spd': 55,
			'spe': 85
		},
		'weight': 3.9
	},
	'Raikou': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 90,
			'atk': 85,
			'def': 75,
			'spa': 115,
			'spd': 100,
			'spe': 115
		},
		'weight': 178.0,
		'ability': 'Pressure',
		'gender': 'genderless'
	},
	'Remoraid': {
		'type1': 'Water',
		'baseStats': {
			'hp': 35,
			'atk': 65,
			'def': 35,
			'spa': 65,
			'spd': 35,
			'spe': 65
		},
		'weight': 12.0,
		'canEvolve': true
	},
	'Scizor': {
		'type1': 'Bug',
		'type2': 'Steel',
		'baseStats': {
			'hp': 70,
			'atk': 130,
			'def': 100,
			'spa': 55,
			'spd': 80,
			'spe': 65
		},
		'weight': 118.0,
		'ability': 'Technician'
	},
	'Sentret': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 35,
			'atk': 46,
			'def': 34,
			'spa': 35,
			'spd': 45,
			'spe': 20
		},
		'weight': 6.0,
		'canEvolve': true
	},
	'Shuckle': {
		'type1': 'Bug',
		'type2': 'Rock',
		'baseStats': {
			'hp': 20,
			'atk': 10,
			'def': 230,
			'spa': 10,
			'spd': 230,
			'spe': 5
		},
		'weight': 20.5
	},
	'Skarmory': {
		'type1': 'Steel',
		'type2': 'Flying',
		'baseStats': {
			'hp': 65,
			'atk': 80,
			'def': 140,
			'spa': 40,
			'spd': 70,
			'spe': 70
		},
		'weight': 50.5
	},
	'Skiploom': {
		'type1': 'Grass',
		'type2': 'Flying',
		'baseStats': {
			'hp': 55,
			'atk': 45,
			'def': 50,
			'spa': 45,
			'spd': 65,
			'spe': 80
		},
		'weight': 1.0,
		'canEvolve': true
	},
	'Slowking': {
		'type1': 'Water',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 95,
			'atk': 75,
			'def': 80,
			'spa': 100,
			'spd': 110,
			'spe': 30
		},
		'weight': 79.5
	},
	'Slugma': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 40,
			'atk': 40,
			'def': 40,
			'spa': 70,
			'spd': 40,
			'spe': 20
		},
		'weight': 35.0,
		'canEvolve': true
	},
	'Smeargle': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 55,
			'atk': 20,
			'def': 35,
			'spa': 20,
			'spd': 45,
			'spe': 75
		},
		'weight': 58.0
	},
	'Smoochum': {
		'type1': 'Ice',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 45,
			'atk': 30,
			'def': 15,
			'spa': 85,
			'spd': 65,
			'spe': 65
		},
		'weight': 6.0,
		'canEvolve': true
	},
	'Sneasel': {
		'type1': 'Dark',
		'type2': 'Ice',
		'baseStats': {
			'hp': 55,
			'atk': 95,
			'def': 55,
			'spa': 35,
			'spd': 75,
			'spe': 115
		},
		'weight': 28.0,
		'canEvolve': true
	},
	'Snubbull': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 60,
			'atk': 80,
			'def': 50,
			'spa': 40,
			'spd': 40,
			'spe': 30
		},
		'weight': 7.8,
		'canEvolve': true
	},
	'Spinarak': {
		'type1': 'Bug',
		'type2': 'Poison',
		'baseStats': {
			'hp': 40,
			'atk': 60,
			'def': 40,
			'spa': 40,
			'spd': 40,
			'spe': 30
		},
		'weight': 8.5,
		'canEvolve': true
	},
	'Stantler': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 73,
			'atk': 95,
			'def': 62,
			'spa': 85,
			'spd': 65,
			'spe': 85
		},
		'weight': 71.2
	},
	'Steelix': {
		'type1': 'Steel',
		'type2': 'Ground',
		'baseStats': {
			'hp': 75,
			'atk': 85,
			'def': 200,
			'spa': 55,
			'spd': 65,
			'spe': 30
		},
		'weight': 400.0
	},
	'Sudowoodo': {
		'type1': 'Rock',
		'baseStats': {
			'hp': 70,
			'atk': 100,
			'def': 115,
			'spa': 30,
			'spd': 65,
			'spe': 30
		},
		'weight': 38.0
	},
	'Suicune': {
		'type1': 'Water',
		'baseStats': {
			'hp': 100,
			'atk': 75,
			'def': 115,
			'spa': 90,
			'spd': 115,
			'spe': 85
		},
		'weight': 187.0,
		'ability': 'Pressure',
		'gender': 'genderless'
	},
	'Sunflora': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 75,
			'atk': 75,
			'def': 55,
			'spa': 105,
			'spd': 85,
			'spe': 30
		},
		'weight': 8.5
	},
	'Sunkern': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 30,
			'atk': 30,
			'def': 30,
			'spa': 30,
			'spd': 30,
			'spe': 30
		},
		'weight': 1.8,
		'canEvolve': true
	},
	'Swinub': {
		'type1': 'Ice',
		'type2': 'Ground',
		'baseStats': {
			'hp': 50,
			'atk': 50,
			'def': 40,
			'spa': 30,
			'spd': 30,
			'spe': 50
		},
		'weight': 6.5,
		'canEvolve': true
	},
	'Teddiursa': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 60,
			'atk': 80,
			'def': 50,
			'spa': 50,
			'spd': 50,
			'spe': 40
		},
		'weight': 8.8,
		'canEvolve': true
	},
	'Togepi': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 35,
			'atk': 20,
			'def': 65,
			'spa': 40,
			'spd': 65,
			'spe': 20
		},
		'weight': 1.5,
		'canEvolve': true
	},
	'Togetic': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 55,
			'atk': 40,
			'def': 85,
			'spa': 80,
			'spd': 105,
			'spe': 40
		},
		'weight': 3.2
	},
	'Totodile': {
		'type1': 'Water',
		'baseStats': {
			'hp': 50,
			'atk': 65,
			'def': 64,
			'spa': 44,
			'spd': 48,
			'spe': 43
		},
		'weight': 9.5,
		'canEvolve': true
	},
	'Typhlosion': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 78,
			'atk': 84,
			'def': 78,
			'spa': 109,
			'spd': 85,
			'spe': 100
		},
		'weight': 79.5
	},
	'Tyranitar': {
		'type1': 'Rock',
		'type2': 'Dark',
		'baseStats': {
			'hp': 100,
			'atk': 134,
			'def': 110,
			'spa': 95,
			'spd': 100,
			'spe': 61
		},
		'weight': 202.0
	},
	'Tyrogue': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 35,
			'atk': 35,
			'def': 35,
			'spa': 35,
			'spd': 35,
			'spe': 35
		},
		'weight': 21.0,
		'canEvolve': true
	},
	'Umbreon': {
		'type1': 'Dark',
		'baseStats': {
			'hp': 95,
			'atk': 65,
			'def': 110,
			'spa': 60,
			'spd': 130,
			'spe': 65
		},
		'weight': 27.0
	},
	'Unown': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 48,
			'atk': 72,
			'def': 48,
			'spa': 72,
			'spd': 48,
			'spe': 48
		},
		'weight': 5.0,
		'ability': 'Levitate',
		'gender': 'genderless'
	},
	'Ursaring': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 90,
			'atk': 130,
			'def': 75,
			'spa': 75,
			'spd': 75,
			'spe': 55
		},
		'weight': 125.8
	},
	'Wobbuffet': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 190,
			'atk': 33,
			'def': 58,
			'spa': 33,
			'spd': 58,
			'spe': 33
		},
		'weight': 28.5
	},
	'Wooper': {
		'type1': 'Water',
		'type2': 'Ground',
		'baseStats': {
			'hp': 55,
			'atk': 45,
			'def': 45,
			'spa': 25,
			'spd': 25,
			'spe': 15
		},
		'weight': 8.5,
		'canEvolve': true
	},
	'Xatu': {
		'type1': 'Psychic',
		'type2': 'Flying',
		'baseStats': {
			'hp': 65,
			'atk': 75,
			'def': 70,
			'spa': 95,
			'spd': 70,
			'spe': 95
		},
		'weight': 15.0
	},
	'Yanma': {
		'type1': 'Bug',
		'type2': 'Flying',
		'baseStats': {
			'hp': 65,
			'atk': 65,
			'def': 45,
			'spa': 75,
			'spd': 45,
			'spe': 95
		},
		'weight': 38.0
	},
});

/** @type {Pokedex} */
const ADV = $.extend(true, {}, GSC, {
	'Absol': {
		'type1': 'Dark',
		'baseStats': {
			'hp': 65,
			'atk': 130,
			'def': 60,
			'spa': 75,
			'spd': 60,
			'spe': 75
		},
		'weight': 47.0
	},
	'Aggron': {
		'type1': 'Steel',
		'type2': 'Rock',
		'baseStats': {
			'hp': 70,
			'atk': 110,
			'def': 180,
			'spa': 60,
			'spd': 60,
			'spe': 50
		},
		'weight': 360.0
	},
	'Altaria': {
		'type1': 'Dragon',
		'type2': 'Flying',
		'baseStats': {
			'hp': 75,
			'atk': 70,
			'def': 90,
			'spa': 70,
			'spd': 105,
			'spe': 80
		},
		'weight': 20.6
	},
	'Anorith': {
		'type1': 'Rock',
		'type2': 'Bug',
		'baseStats': {
			'hp': 45,
			'atk': 95,
			'def': 50,
			'spa': 40,
			'spd': 50,
			'spe': 75
		},
		'weight': 12.5,
		'canEvolve': true
	},
	'Armaldo': {
		'type1': 'Rock',
		'type2': 'Bug',
		'baseStats': {
			'hp': 75,
			'atk': 125,
			'def': 100,
			'spa': 70,
			'spd': 80,
			'spe': 45
		},
		'weight': 68.2
	},
	'Aron': {
		'type1': 'Steel',
		'type2': 'Rock',
		'baseStats': {
			'hp': 50,
			'atk': 70,
			'def': 100,
			'spa': 40,
			'spd': 40,
			'spe': 30
		},
		'weight': 60.0,
		'canEvolve': true
	},
	'Azurill': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 50,
			'atk': 20,
			'def': 40,
			'spa': 20,
			'spd': 40,
			'spe': 20
		},
		'weight': 2.0,
		'canEvolve': true
	},
	'Bagon': {
		'type1': 'Dragon',
		'baseStats': {
			'hp': 45,
			'atk': 75,
			'def': 60,
			'spa': 40,
			'spd': 30,
			'spe': 50
		},
		'weight': 42.1,
		'canEvolve': true
	},
	'Baltoy': {
		'type1': 'Ground',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 40,
			'atk': 40,
			'def': 55,
			'spa': 40,
			'spd': 70,
			'spe': 55
		},
		'weight': 21.5,
		'ability': 'Levitate',
		'canEvolve': true,
		'gender': 'genderless'
	},
	'Banette': {
		'type1': 'Ghost',
		'baseStats': {
			'hp': 64,
			'atk': 115,
			'def': 65,
			'spa': 83,
			'spd': 63,
			'spe': 65
		},
		'weight': 12.5
	},
	'Barboach': {
		'type1': 'Water',
		'type2': 'Ground',
		'baseStats': {
			'hp': 50,
			'atk': 48,
			'def': 43,
			'spa': 46,
			'spd': 41,
			'spe': 60
		},
		'weight': 1.9,
		'canEvolve': true
	},
	'Beautifly': {
		'type1': 'Bug',
		'type2': 'Flying',
		'baseStats': {
			'hp': 60,
			'atk': 70,
			'def': 50,
			'spa': 90,
			'spd': 50,
			'spe': 65
		},
		'weight': 28.4
	},
	'Beldum': {
		'type1': 'Steel',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 40,
			'atk': 55,
			'def': 80,
			'spa': 35,
			'spd': 60,
			'spe': 30
		},
		'weight': 95.2,
		'canEvolve': true,
		'gender': 'genderless'
	},
	'Blaziken': {
		'type1': 'Fire',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 80,
			'atk': 120,
			'def': 70,
			'spa': 110,
			'spd': 70,
			'spe': 80
		},
		'weight': 52.0
	},
	'Breloom': {
		'type1': 'Grass',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 60,
			'atk': 130,
			'def': 80,
			'spa': 60,
			'spd': 60,
			'spe': 70
		},
		'weight': 39.2
	},
	'Cacnea': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 50,
			'atk': 85,
			'def': 40,
			'spa': 85,
			'spd': 40,
			'spe': 35
		},
		'weight': 51.3,
		'canEvolve': true
	},
	'Cacturne': {
		'type1': 'Grass',
		'type2': 'Dark',
		'baseStats': {
			'hp': 70,
			'atk': 115,
			'def': 60,
			'spa': 115,
			'spd': 60,
			'spe': 55
		},
		'weight': 77.4
	},
	'Camerupt': {
		'type1': 'Fire',
		'type2': 'Ground',
		'baseStats': {
			'hp': 70,
			'atk': 100,
			'def': 70,
			'spa': 105,
			'spd': 75,
			'spe': 40
		},
		'weight': 220.0
	},
	'Carvanha': {
		'type1': 'Water',
		'type2': 'Dark',
		'baseStats': {
			'hp': 45,
			'atk': 90,
			'def': 20,
			'spa': 65,
			'spd': 20,
			'spe': 65
		},
		'weight': 20.8,
		'canEvolve': true
	},
	'Cascoon': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 50,
			'atk': 35,
			'def': 55,
			'spa': 25,
			'spd': 25,
			'spe': 15
		},
		'weight': 11.5,
		'ability': 'Shed Skin',
		'canEvolve': true
	},
	'Castform': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 70,
			'atk': 70,
			'def': 70,
			'spa': 70,
			'spd': 70,
			'spe': 70
		},
		'weight': 0.8,
		'ability': 'Forecast'
	},
	'Chimecho': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 65,
			'atk': 50,
			'def': 70,
			'spa': 95,
			'spd': 80,
			'spe': 65
		},
		'weight': 1.0,
		'ability': 'Levitate'
	},
	'Clamperl': {
		'type1': 'Water',
		'baseStats': {
			'hp': 35,
			'atk': 64,
			'def': 85,
			'spa': 74,
			'spd': 55,
			'spe': 32
		},
		'weight': 52.5,
		'canEvolve': true
	},
	'Claydol': {
		'type1': 'Ground',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 60,
			'atk': 70,
			'def': 105,
			'spa': 70,
			'spd': 120,
			'spe': 75
		},
		'weight': 108.0,
		'ability': 'Levitate',
		'gender': 'genderless'
	},
	'Combusken': {
		'type1': 'Fire',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 60,
			'atk': 85,
			'def': 60,
			'spa': 85,
			'spd': 60,
			'spe': 55
		},
		'weight': 19.5,
		'canEvolve': true
	},
	'Corphish': {
		'type1': 'Water',
		'baseStats': {
			'hp': 43,
			'atk': 80,
			'def': 65,
			'spa': 50,
			'spd': 35,
			'spe': 35
		},
		'weight': 11.5,
		'canEvolve': true
	},
	'Cradily': {
		'type1': 'Rock',
		'type2': 'Grass',
		'baseStats': {
			'hp': 86,
			'atk': 81,
			'def': 97,
			'spa': 81,
			'spd': 107,
			'spe': 43
		},
		'weight': 60.4
	},
	'Crawdaunt': {
		'type1': 'Water',
		'type2': 'Dark',
		'baseStats': {
			'hp': 63,
			'atk': 120,
			'def': 85,
			'spa': 90,
			'spd': 55,
			'spe': 55
		},
		'weight': 32.8
	},
	'Delcatty': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 70,
			'atk': 65,
			'def': 65,
			'spa': 55,
			'spd': 55,
			'spe': 70
		},
		'weight': 32.6
	},
	'Deoxys': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 50,
			'atk': 150,
			'def': 50,
			'spa': 150,
			'spd': 50,
			'spe': 150
		},
		'weight': 60.8,
		'ability': 'Pressure',
		'gender': 'genderless'
	},
	'Deoxys-Attack': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 50,
			'atk': 180,
			'def': 20,
			'spa': 180,
			'spd': 20,
			'spe': 150
		},
		'weight': 60.8,
		'ability': 'Pressure',
		'gender': 'genderless'
	},
	'Deoxys-Defense': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 50,
			'atk': 70,
			'def': 160,
			'spa': 70,
			'spd': 160,
			'spe': 90
		},
		'weight': 60.8,
		'ability': 'Pressure',
		'gender': 'genderless'
	},
	'Deoxys-Speed': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 50,
			'atk': 95,
			'def': 90,
			'spa': 95,
			'spd': 90,
			'spe': 180
		},
		'weight': 60.8,
		'ability': 'Pressure',
		'gender': 'genderless'
	},
	'Dusclops': {
		'type1': 'Ghost',
		'baseStats': {
			'hp': 40,
			'atk': 70,
			'def': 130,
			'spa': 60,
			'spd': 130,
			'spe': 25
		},
		'weight': 30.6,
		'canEvolve': true
	},
	'Duskull': {
		'type1': 'Ghost',
		'baseStats': {
			'hp': 20,
			'atk': 40,
			'def': 90,
			'spa': 30,
			'spd': 90,
			'spe': 25
		},
		'weight': 15.0,
		'canEvolve': true
	},
	'Dustox': {
		'type1': 'Bug',
		'type2': 'Poison',
		'baseStats': {
			'hp': 60,
			'atk': 50,
			'def': 70,
			'spa': 50,
			'spd': 90,
			'spe': 65
		},
		'weight': 31.6
	},
	'Electrike': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 40,
			'atk': 45,
			'def': 40,
			'spa': 65,
			'spd': 40,
			'spe': 65
		},
		'weight': 15.2,
		'canEvolve': true
	},
	'Exploud': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 104,
			'atk': 91,
			'def': 63,
			'spa': 91,
			'spd': 63,
			'spe': 68
		},
		'weight': 84.0
	},
	'Feebas': {
		'type1': 'Water',
		'baseStats': {
			'hp': 20,
			'atk': 15,
			'def': 20,
			'spa': 10,
			'spd': 55,
			'spe': 80
		},
		'weight': 7.4,
		'canEvolve': true
	},
	'Flygon': {
		'type1': 'Ground',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 80,
			'atk': 100,
			'def': 80,
			'spa': 80,
			'spd': 80,
			'spe': 100
		},
		'weight': 82.0,
		'ability': 'Levitate'
	},
	'Gardevoir': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 68,
			'atk': 65,
			'def': 65,
			'spa': 125,
			'spd': 115,
			'spe': 80
		},
		'weight': 48.4
	},
	'Glalie': {
		'type1': 'Ice',
		'baseStats': {
			'hp': 80,
			'atk': 80,
			'def': 80,
			'spa': 80,
			'spd': 80,
			'spe': 80
		},
		'weight': 256.5
	},
	'Gorebyss': {
		'type1': 'Water',
		'baseStats': {
			'hp': 55,
			'atk': 84,
			'def': 105,
			'spa': 114,
			'spd': 75,
			'spe': 52
		},
		'weight': 22.6
	},
	'Groudon': {
		'type1': 'Ground',
		'baseStats': {
			'hp': 100,
			'atk': 150,
			'def': 140,
			'spa': 100,
			'spd': 90,
			'spe': 90
		},
		'weight': 950.0,
		'ability': 'Drought',
		'gender': 'genderless'
	},
	'Grovyle': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 50,
			'atk': 65,
			'def': 45,
			'spa': 85,
			'spd': 65,
			'spe': 95
		},
		'weight': 21.6,
		'canEvolve': true
	},
	'Grumpig': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 80,
			'atk': 45,
			'def': 65,
			'spa': 90,
			'spd': 110,
			'spe': 80
		},
		'weight': 71.5
	},
	'Gulpin': {
		'type1': 'Poison',
		'baseStats': {
			'hp': 70,
			'atk': 43,
			'def': 53,
			'spa': 43,
			'spd': 53,
			'spe': 40
		},
		'weight': 10.3,
		'canEvolve': true
	},
	'Hariyama': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 144,
			'atk': 120,
			'def': 60,
			'spa': 40,
			'spd': 60,
			'spe': 50
		},
		'weight': 253.8
	},
	'Huntail': {
		'type1': 'Water',
		'baseStats': {
			'hp': 55,
			'atk': 104,
			'def': 105,
			'spa': 94,
			'spd': 75,
			'spe': 52
		},
		'weight': 27.0
	},
	'Illumise': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 65,
			'atk': 47,
			'def': 55,
			'spa': 73,
			'spd': 75,
			'spe': 85
		},
		'weight': 17.7
	},
	'Jirachi': {
		'type1': 'Steel',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 100,
			'atk': 100,
			'def': 100,
			'spa': 100,
			'spd': 100,
			'spe': 100
		},
		'weight': 1.1,
		'ability': 'Serene Grace',
		'gender': 'genderless'
	},
	'Kecleon': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 60,
			'atk': 90,
			'def': 70,
			'spa': 60,
			'spd': 120,
			'spe': 40
		},
		'weight': 22.0
	},
	'Kirlia': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 38,
			'atk': 35,
			'def': 35,
			'spa': 65,
			'spd': 55,
			'spe': 50
		},
		'weight': 20.2,
		'canEvolve': true
	},
	'Kyogre': {
		'type1': 'Water',
		'baseStats': {
			'hp': 100,
			'atk': 100,
			'def': 90,
			'spa': 150,
			'spd': 140,
			'spe': 90
		},
		'weight': 352.0,
		'ability': 'Drizzle',
		'gender': 'genderless'
	},
	'Lairon': {
		'type1': 'Steel',
		'type2': 'Rock',
		'baseStats': {
			'hp': 60,
			'atk': 90,
			'def': 140,
			'spa': 50,
			'spd': 50,
			'spe': 40
		},
		'weight': 120.0,
		'canEvolve': true
	},
	'Latias': {
		'type1': 'Dragon',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 80,
			'atk': 80,
			'def': 90,
			'spa': 110,
			'spd': 130,
			'spe': 110
		},
		'weight': 40.0,
		'ability': 'Levitate'
	},
	'Latios': {
		'type1': 'Dragon',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 80,
			'atk': 90,
			'def': 80,
			'spa': 130,
			'spd': 110,
			'spe': 110
		},
		'weight': 60.0,
		'ability': 'Levitate'
	},
	'Lileep': {
		'type1': 'Rock',
		'type2': 'Grass',
		'baseStats': {
			'hp': 66,
			'atk': 41,
			'def': 77,
			'spa': 61,
			'spd': 87,
			'spe': 23
		},
		'weight': 23.8,
		'canEvolve': true
	},
	'Linoone': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 78,
			'atk': 70,
			'def': 61,
			'spa': 50,
			'spd': 61,
			'spe': 100
		},
		'weight': 32.5
	},
	'Lombre': {
		'type1': 'Water',
		'type2': 'Grass',
		'baseStats': {
			'hp': 60,
			'atk': 50,
			'def': 50,
			'spa': 60,
			'spd': 70,
			'spe': 50
		},
		'weight': 32.5,
		'canEvolve': true
	},
	'Lotad': {
		'type1': 'Water',
		'type2': 'Grass',
		'baseStats': {
			'hp': 40,
			'atk': 30,
			'def': 30,
			'spa': 40,
			'spd': 50,
			'spe': 30
		},
		'weight': 2.6,
		'canEvolve': true
	},
	'Loudred': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 84,
			'atk': 71,
			'def': 43,
			'spa': 71,
			'spd': 43,
			'spe': 48
		},
		'weight': 40.5,
		'canEvolve': true
	},
	'Ludicolo': {
		'type1': 'Water',
		'type2': 'Grass',
		'baseStats': {
			'hp': 80,
			'atk': 70,
			'def': 70,
			'spa': 90,
			'spd': 100,
			'spe': 70
		},
		'weight': 55.0
	},
	'Lunatone': {
		'type1': 'Rock',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 70,
			'atk': 55,
			'def': 65,
			'spa': 95,
			'spd': 85,
			'spe': 70
		},
		'weight': 168.0,
		'ability': 'Levitate',
		'gender': 'genderless'
	},
	'Luvdisc': {
		'type1': 'Water',
		'baseStats': {
			'hp': 43,
			'atk': 30,
			'def': 55,
			'spa': 40,
			'spd': 65,
			'spe': 97
		},
		'weight': 8.7
	},
	'Makuhita': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 72,
			'atk': 60,
			'def': 30,
			'spa': 20,
			'spd': 30,
			'spe': 25
		},
		'weight': 86.4,
		'canEvolve': true
	},
	'Manectric': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 70,
			'atk': 75,
			'def': 60,
			'spa': 105,
			'spd': 60,
			'spe': 105
		},
		'weight': 40.2
	},
	'Marshtomp': {
		'type1': 'Water',
		'type2': 'Ground',
		'baseStats': {
			'hp': 70,
			'atk': 85,
			'def': 70,
			'spa': 60,
			'spd': 70,
			'spe': 50
		},
		'weight': 28.0,
		'canEvolve': true
	},
	'Masquerain': {
		'type1': 'Bug',
		'type2': 'Flying',
		'baseStats': {
			'hp': 70,
			'atk': 60,
			'def': 62,
			'spa': 80,
			'spd': 82,
			'spe': 60
		},
		'weight': 3.6
	},
	'Mawile': {
		'type1': 'Steel',
		'baseStats': {
			'hp': 50,
			'atk': 85,
			'def': 85,
			'spa': 55,
			'spd': 55,
			'spe': 50
		},
		'weight': 11.5
	},
	'Medicham': {
		'type1': 'Fighting',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 60,
			'atk': 60,
			'def': 75,
			'spa': 60,
			'spd': 75,
			'spe': 80
		},
		'weight': 31.5
	},
	'Meditite': {
		'type1': 'Fighting',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 30,
			'atk': 40,
			'def': 55,
			'spa': 40,
			'spd': 55,
			'spe': 60
		},
		'weight': 11.2,
		'canEvolve': true
	},
	'Metagross': {
		'type1': 'Steel',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 80,
			'atk': 135,
			'def': 130,
			'spa': 95,
			'spd': 90,
			'spe': 70
		},
		'weight': 550.0,
		'gender': 'genderless'
	},
	'Metang': {
		'type1': 'Steel',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 60,
			'atk': 75,
			'def': 100,
			'spa': 55,
			'spd': 80,
			'spe': 50
		},
		'weight': 202.5,
		'canEvolve': true,
		'gender': 'genderless'
	},
	'Mightyena': {
		'type1': 'Dark',
		'baseStats': {
			'hp': 70,
			'atk': 90,
			'def': 70,
			'spa': 60,
			'spd': 60,
			'spe': 70
		},
		'weight': 37.0
	},
	'Milotic': {
		'type1': 'Water',
		'baseStats': {
			'hp': 95,
			'atk': 60,
			'def': 79,
			'spa': 100,
			'spd': 125,
			'spe': 81
		},
		'weight': 162.0
	},
	'Minun': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 60,
			'atk': 40,
			'def': 50,
			'spa': 75,
			'spd': 85,
			'spe': 95
		},
		'weight': 4.2
	},
	'Mudkip': {
		'type1': 'Water',
		'baseStats': {
			'hp': 50,
			'atk': 70,
			'def': 50,
			'spa': 50,
			'spd': 50,
			'spe': 40
		},
		'weight': 7.6,
		'canEvolve': true
	},
	'Nincada': {
		'type1': 'Bug',
		'type2': 'Ground',
		'baseStats': {
			'hp': 31,
			'atk': 45,
			'def': 90,
			'spa': 30,
			'spd': 30,
			'spe': 40
		},
		'weight': 5.5,
		'canEvolve': true
	},
	'Ninjask': {
		'type1': 'Bug',
		'type2': 'Flying',
		'baseStats': {
			'hp': 61,
			'atk': 90,
			'def': 45,
			'spa': 50,
			'spd': 50,
			'spe': 160
		},
		'weight': 12.0
	},
	'Nosepass': {
		'type1': 'Rock',
		'baseStats': {
			'hp': 30,
			'atk': 45,
			'def': 135,
			'spa': 45,
			'spd': 90,
			'spe': 30
		},
		'weight': 97.0,
		'canEvolve': true
	},
	'Numel': {
		'type1': 'Fire',
		'type2': 'Ground',
		'baseStats': {
			'hp': 60,
			'atk': 60,
			'def': 40,
			'spa': 65,
			'spd': 45,
			'spe': 35
		},
		'weight': 24.0,
		'canEvolve': true
	},
	'Nuzleaf': {
		'type1': 'Grass',
		'type2': 'Dark',
		'baseStats': {
			'hp': 70,
			'atk': 70,
			'def': 40,
			'spa': 60,
			'spd': 40,
			'spe': 60
		},
		'weight': 28.0,
		'canEvolve': true
	},
	'Pelipper': {
		'type1': 'Water',
		'type2': 'Flying',
		'baseStats': {
			'hp': 60,
			'atk': 50,
			'def': 100,
			'spa': 85,
			'spd': 70,
			'spe': 65
		},
		'weight': 28.0
	},
	'Plusle': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 60,
			'atk': 50,
			'def': 40,
			'spa': 85,
			'spd': 75,
			'spe': 95
		},
		'weight': 4.2
	},
	'Poochyena': {
		'type1': 'Dark',
		'baseStats': {
			'hp': 35,
			'atk': 55,
			'def': 35,
			'spa': 30,
			'spd': 30,
			'spe': 35
		},
		'weight': 13.6,
		'canEvolve': true
	},
	'Ralts': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 28,
			'atk': 25,
			'def': 25,
			'spa': 45,
			'spd': 35,
			'spe': 40
		},
		'weight': 6.6,
		'canEvolve': true
	},
	'Rayquaza': {
		'type1': 'Dragon',
		'type2': 'Flying',
		'baseStats': {
			'hp': 105,
			'atk': 150,
			'def': 90,
			'spa': 150,
			'spd': 90,
			'spe': 95
		},
		'weight': 206.5,
		'ability': 'Air Lock',
		'gender': 'genderless'
	},
	'Regice': {
		'type1': 'Ice',
		'baseStats': {
			'hp': 80,
			'atk': 50,
			'def': 100,
			'spa': 100,
			'spd': 200,
			'spe': 50
		},
		'weight': 175.0,
		'gender': 'genderless'
	},
	'Regirock': {
		'type1': 'Rock',
		'baseStats': {
			'hp': 80,
			'atk': 100,
			'def': 200,
			'spa': 50,
			'spd': 100,
			'spe': 50
		},
		'weight': 230.0,
		'gender': 'genderless'
	},
	'Registeel': {
		'type1': 'Steel',
		'baseStats': {
			'hp': 80,
			'atk': 75,
			'def': 150,
			'spa': 75,
			'spd': 150,
			'spe': 50
		},
		'weight': 205.0,
		'gender': 'genderless'
	},
	'Relicanth': {
		'type1': 'Water',
		'type2': 'Rock',
		'baseStats': {
			'hp': 100,
			'atk': 90,
			'def': 130,
			'spa': 45,
			'spd': 65,
			'spe': 55
		},
		'weight': 23.4
	},
	'Roselia': {
		'type1': 'Grass',
		'type2': 'Poison',
		'baseStats': {
			'hp': 50,
			'atk': 60,
			'def': 45,
			'spa': 100,
			'spd': 80,
			'spe': 65
		},
		'weight': 2.0
	},
	'Sableye': {
		'type1': 'Dark',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 50,
			'atk': 75,
			'def': 75,
			'spa': 65,
			'spd': 65,
			'spe': 50
		},
		'weight': 11.0
	},
	'Salamence': {
		'type1': 'Dragon',
		'type2': 'Flying',
		'baseStats': {
			'hp': 95,
			'atk': 135,
			'def': 80,
			'spa': 110,
			'spd': 80,
			'spe': 100
		},
		'weight': 102.6
	},
	'Sceptile': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 70,
			'atk': 85,
			'def': 65,
			'spa': 105,
			'spd': 85,
			'spe': 120
		},
		'weight': 52.2
	},
	'Sealeo': {
		'type1': 'Ice',
		'type2': 'Water',
		'baseStats': {
			'hp': 90,
			'atk': 60,
			'def': 70,
			'spa': 75,
			'spd': 70,
			'spe': 45
		},
		'weight': 87.6,
		'canEvolve': true
	},
	'Seedot': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 40,
			'atk': 40,
			'def': 50,
			'spa': 30,
			'spd': 30,
			'spe': 30
		},
		'weight': 4.0,
		'canEvolve': true
	},
	'Seviper': {
		'type1': 'Poison',
		'baseStats': {
			'hp': 73,
			'atk': 100,
			'def': 60,
			'spa': 100,
			'spd': 60,
			'spe': 65
		},
		'weight': 52.5
	},
	'Sharpedo': {
		'type1': 'Water',
		'type2': 'Dark',
		'baseStats': {
			'hp': 70,
			'atk': 120,
			'def': 40,
			'spa': 95,
			'spd': 40,
			'spe': 95
		},
		'weight': 88.8
	},
	'Shedinja': {
		'type1': 'Bug',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 1,
			'atk': 90,
			'def': 45,
			'spa': 30,
			'spd': 30,
			'spe': 40
		},
		'weight': 1.2,
		'ability': 'Wonder Guard',
		'gender': 'genderless'
	},
	'Shelgon': {
		'type1': 'Dragon',
		'baseStats': {
			'hp': 65,
			'atk': 95,
			'def': 100,
			'spa': 60,
			'spd': 50,
			'spe': 50
		},
		'weight': 110.5,
		'canEvolve': true
	},
	'Shiftry': {
		'type1': 'Grass',
		'type2': 'Dark',
		'baseStats': {
			'hp': 90,
			'atk': 100,
			'def': 60,
			'spa': 90,
			'spd': 60,
			'spe': 80
		},
		'weight': 59.6
	},
	'Shroomish': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 60,
			'atk': 40,
			'def': 60,
			'spa': 40,
			'spd': 60,
			'spe': 35
		},
		'weight': 4.5,
		'canEvolve': true
	},
	'Shuppet': {
		'type1': 'Ghost',
		'baseStats': {
			'hp': 44,
			'atk': 75,
			'def': 35,
			'spa': 63,
			'spd': 33,
			'spe': 45
		},
		'weight': 2.3,
		'canEvolve': true
	},
	'Silcoon': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 50,
			'atk': 35,
			'def': 55,
			'spa': 25,
			'spd': 25,
			'spe': 15
		},
		'weight': 10.0,
		'ability': 'Shed Skin',
		'canEvolve': true
	},
	'Skitty': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 50,
			'atk': 45,
			'def': 45,
			'spa': 35,
			'spd': 35,
			'spe': 50
		},
		'weight': 11.0,
		'canEvolve': true
	},
	'Slaking': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 150,
			'atk': 160,
			'def': 100,
			'spa': 95,
			'spd': 65,
			'spe': 100
		},
		'weight': 130.5,
		'ability': 'Truant'
	},
	'Slakoth': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 60,
			'atk': 60,
			'def': 60,
			'spa': 35,
			'spd': 35,
			'spe': 30
		},
		'weight': 24.0,
		'ability': 'Truant',
		'canEvolve': true
	},
	'Snorunt': {
		'type1': 'Ice',
		'baseStats': {
			'hp': 50,
			'atk': 50,
			'def': 50,
			'spa': 50,
			'spd': 50,
			'spe': 50
		},
		'weight': 16.8,
		'canEvolve': true
	},
	'Solrock': {
		'type1': 'Rock',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 70,
			'atk': 95,
			'def': 85,
			'spa': 55,
			'spd': 65,
			'spe': 70
		},
		'weight': 154.0,
		'ability': 'Levitate',
		'gender': 'genderless'
	},
	'Spheal': {
		'type1': 'Ice',
		'type2': 'Water',
		'baseStats': {
			'hp': 70,
			'atk': 40,
			'def': 50,
			'spa': 55,
			'spd': 50,
			'spe': 25
		},
		'weight': 39.5,
		'canEvolve': true
	},
	'Spinda': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 60,
			'atk': 60,
			'def': 60,
			'spa': 60,
			'spd': 60,
			'spe': 60
		},
		'weight': 5.0
	},
	'Spoink': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 60,
			'atk': 25,
			'def': 35,
			'spa': 70,
			'spd': 80,
			'spe': 60
		},
		'weight': 30.6,
		'canEvolve': true
	},
	'Surskit': {
		'type1': 'Bug',
		'type2': 'Water',
		'baseStats': {
			'hp': 40,
			'atk': 30,
			'def': 32,
			'spa': 50,
			'spd': 52,
			'spe': 65
		},
		'weight': 1.7,
		'canEvolve': true
	},
	'Swablu': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 45,
			'atk': 40,
			'def': 60,
			'spa': 40,
			'spd': 75,
			'spe': 50
		},
		'weight': 1.2,
		'canEvolve': true
	},
	'Swalot': {
		'type1': 'Poison',
		'baseStats': {
			'hp': 100,
			'atk': 73,
			'def': 83,
			'spa': 73,
			'spd': 83,
			'spe': 55
		},
		'weight': 80.0
	},
	'Swampert': {
		'type1': 'Water',
		'type2': 'Ground',
		'baseStats': {
			'hp': 100,
			'atk': 110,
			'def': 90,
			'spa': 85,
			'spd': 90,
			'spe': 60
		},
		'weight': 81.9
	},
	'Swellow': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 60,
			'atk': 85,
			'def': 60,
			'spa': 50,
			'spd': 50,
			'spe': 125
		},
		'weight': 19.8
	},
	'Taillow': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 40,
			'atk': 55,
			'def': 30,
			'spa': 30,
			'spd': 30,
			'spe': 85
		},
		'weight': 2.3,
		'canEvolve': true
	},
	'Torchic': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 45,
			'atk': 60,
			'def': 40,
			'spa': 70,
			'spd': 50,
			'spe': 45
		},
		'weight': 2.5,
		'canEvolve': true
	},
	'Torkoal': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 70,
			'atk': 85,
			'def': 140,
			'spa': 85,
			'spd': 70,
			'spe': 20
		},
		'weight': 80.4
	},
	'Trapinch': {
		'type1': 'Ground',
		'baseStats': {
			'hp': 45,
			'atk': 100,
			'def': 45,
			'spa': 45,
			'spd': 45,
			'spe': 10
		},
		'weight': 15.0,
		'canEvolve': true
	},
	'Treecko': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 40,
			'atk': 45,
			'def': 35,
			'spa': 65,
			'spd': 55,
			'spe': 70
		},
		'weight': 5.0,
		'canEvolve': true
	},
	'Tropius': {
		'type1': 'Grass',
		'type2': 'Flying',
		'baseStats': {
			'hp': 99,
			'atk': 68,
			'def': 83,
			'spa': 72,
			'spd': 87,
			'spe': 51
		},
		'weight': 100.0
	},
	'Vibrava': {
		'type1': 'Ground',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 50,
			'atk': 70,
			'def': 50,
			'spa': 50,
			'spd': 50,
			'spe': 70
		},
		'weight': 15.3,
		'ability': 'Levitate',
		'canEvolve': true
	},
	'Vigoroth': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 80,
			'atk': 80,
			'def': 80,
			'spa': 55,
			'spd': 55,
			'spe': 90
		},
		'weight': 46.5,
		'ability': 'Vital Spirit',
		'canEvolve': true
	},
	'Volbeat': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 65,
			'atk': 73,
			'def': 55,
			'spa': 47,
			'spd': 75,
			'spe': 85
		},
		'weight': 17.7
	},
	'Wailmer': {
		'type1': 'Water',
		'baseStats': {
			'hp': 130,
			'atk': 70,
			'def': 35,
			'spa': 70,
			'spd': 35,
			'spe': 60
		},
		'weight': 130.0,
		'canEvolve': true
	},
	'Wailord': {
		'type1': 'Water',
		'baseStats': {
			'hp': 170,
			'atk': 90,
			'def': 45,
			'spa': 90,
			'spd': 45,
			'spe': 60
		},
		'weight': 398.0
	},
	'Walrein': {
		'type1': 'Ice',
		'type2': 'Water',
		'baseStats': {
			'hp': 110,
			'atk': 80,
			'def': 90,
			'spa': 95,
			'spd': 90,
			'spe': 65
		},
		'weight': 150.6
	},
	'Whiscash': {
		'type1': 'Water',
		'type2': 'Ground',
		'baseStats': {
			'hp': 110,
			'atk': 78,
			'def': 73,
			'spa': 76,
			'spd': 71,
			'spe': 60
		},
		'weight': 23.6
	},
	'Whismur': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 64,
			'atk': 51,
			'def': 23,
			'spa': 51,
			'spd': 23,
			'spe': 28
		},
		'weight': 16.3,
		'canEvolve': true
	},
	'Wingull': {
		'type1': 'Water',
		'type2': 'Flying',
		'baseStats': {
			'hp': 40,
			'atk': 30,
			'def': 30,
			'spa': 55,
			'spd': 30,
			'spe': 85
		},
		'weight': 9.5,
		'canEvolve': true
	},
	'Wurmple': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 45,
			'atk': 45,
			'def': 35,
			'spa': 20,
			'spd': 30,
			'spe': 20
		},
		'weight': 3.6,
		'canEvolve': true
	},
	'Wynaut': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 95,
			'atk': 23,
			'def': 48,
			'spa': 23,
			'spd': 48,
			'spe': 23
		},
		'weight': 14.0,
		'canEvolve': true
	},
	'Zangoose': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 73,
			'atk': 115,
			'def': 60,
			'spa': 60,
			'spd': 60,
			'spe': 90
		},
		'weight': 40.3
	},
	'Zigzagoon': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 38,
			'atk': 30,
			'def': 41,
			'spa': 30,
			'spd': 41,
			'spe': 60
		},
		'weight': 17.5,
		'canEvolve': true
	}
});

/** @type {Pokedex} */
const DPP = $.extend(true, {}, ADV, {
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
		'baseStats': {
			'hp': 90,
			'atk': 92,
			'def': 75,
			'spa': 92,
			'spd': 85,
			'spe': 60
		},
		'weight': 135.5
	},
	'Ambipom': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 75,
			'atk': 100,
			'def': 66,
			'spa': 60,
			'spd': 66,
			'spe': 115
		},
		'weight': 20.3
	},
	'Arceus': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arceus-Bug': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arceus-Dark': {
		'type1': 'Dark',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arceus-Dragon': {
		'type1': 'Dragon',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arceus-Electric': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arceus-Fighting': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arceus-Fire': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arceus-Flying': {
		'type1': 'Flying',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arceus-Ghost': {
		'type1': 'Ghost',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arceus-Grass': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arceus-Ground': {
		'type1': 'Ground',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arceus-Ice': {
		'type1': 'Ice',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arceus-Poison': {
		'type1': 'Poison',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arceus-Psychic': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arceus-Rock': {
		'type1': 'Rock',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arceus-Steel': {
		'type1': 'Steel',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arceus-Water': {
		'type1': 'Water',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype',
		'gender': 'genderless'
	},
	'Arghonaut': {
		'type1': 'Water',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 105,
			'atk': 110,
			'def': 95,
			'spa': 70,
			'spd': 100,
			'spe': 75
		},
		'weight': 151.0
	},
	'Azelf': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 75,
			'atk': 125,
			'def': 70,
			'spa': 125,
			'spd': 70,
			'spe': 115
		},
		'weight': 0.3,
		'ability': 'Levitate',
		'gender': 'genderless'
	},
	'Bastiodon': {
		'type1': 'Rock',
		'type2': 'Steel',
		'baseStats': {
			'hp': 60,
			'atk': 52,
			'def': 168,
			'spa': 47,
			'spd': 138,
			'spe': 30
		},
		'weight': 149.5
	},
	'Bibarel': {
		'type1': 'Normal',
		'type2': 'Water',
		'baseStats': {
			'hp': 79,
			'atk': 85,
			'def': 60,
			'spa': 55,
			'spd': 60,
			'spe': 71
		},
		'weight': 31.5
	},
	'Bidoof': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 59,
			'atk': 45,
			'def': 40,
			'spa': 35,
			'spd': 40,
			'spe': 31
		},
		'weight': 20.0,
		'canEvolve': true
	},
	'Bonsly': {
		'type1': 'Rock',
		'baseStats': {
			'hp': 50,
			'atk': 80,
			'def': 95,
			'spa': 10,
			'spd': 45,
			'spe': 10
		},
		'weight': 15.0,
		'canEvolve': true
	},
	'Breezi': {
		'type1': 'Poison',
		'type2': 'Flying',
		'baseStats': {
			'hp': 50,
			'atk': 46,
			'def': 69,
			'spa': 60,
			'spd': 50,
			'spe': 75
		},
		'weight': 0.6
	},
	'Bronzong': {
		'type1': 'Steel',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 67,
			'atk': 89,
			'def': 116,
			'spa': 79,
			'spd': 116,
			'spe': 33
		},
		'weight': 187.0,
		'gender': 'genderless'
	},
	'Bronzor': {
		'type1': 'Steel',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 57,
			'atk': 24,
			'def': 86,
			'spa': 24,
			'spd': 86,
			'spe': 23
		},
		'weight': 60.5,
		'canEvolve': true,
		'gender': 'genderless'
	},
	'Budew': {
		'type1': 'Grass',
		'type2': 'Poison',
		'baseStats': {
			'hp': 40,
			'atk': 30,
			'def': 35,
			'spa': 50,
			'spd': 70,
			'spe': 55
		},
		'weight': 1.2,
		'canEvolve': true
	},
	'Buizel': {
		'type1': 'Water',
		'baseStats': {
			'hp': 55,
			'atk': 65,
			'def': 35,
			'spa': 60,
			'spd': 30,
			'spe': 85
		},
		'weight': 29.5,
		'canEvolve': true
	},
	'Buneary': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 55,
			'atk': 66,
			'def': 44,
			'spa': 44,
			'spd': 56,
			'spe': 85
		},
		'weight': 5.5,
		'canEvolve': true
	},
	'Burmy': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 40,
			'atk': 29,
			'def': 45,
			'spa': 29,
			'spd': 45,
			'spe': 36
		},
		'weight': 3.4,
		'canEvolve': true
	},
	'Carnivine': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 74,
			'atk': 100,
			'def': 72,
			'spa': 90,
			'spd': 72,
			'spe': 46
		},
		'weight': 27.0,
		'ability': 'Levitate'
	},
	'Chatot': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 76,
			'atk': 65,
			'def': 45,
			'spa': 92,
			'spd': 42,
			'spe': 91
		},
		'weight': 1.9
	},
	'Cherrim': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 70,
			'atk': 60,
			'def': 70,
			'spa': 87,
			'spd': 78,
			'spe': 85
		},
		'weight': 9.3,
		'ability': 'Flower Gift'
	},
	'Cherubi': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 45,
			'atk': 35,
			'def': 45,
			'spa': 62,
			'spd': 53,
			'spe': 35
		},
		'weight': 3.3,
		'ability': 'Chlorophyll',
		'canEvolve': true
	},
	'Chimchar': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 44,
			'atk': 58,
			'def': 44,
			'spa': 58,
			'spd': 44,
			'spe': 61
		},
		'weight': 6.2,
		'canEvolve': true
	},
	'Chingling': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 45,
			'atk': 30,
			'def': 50,
			'spa': 65,
			'spd': 50,
			'spe': 45
		},
		'weight': 0.6,
		'ability': 'Levitate',
		'canEvolve': true
	},
	'Colossoil': {
		'type1': 'Dark',
		'type2': 'Ground',
		'baseStats': {
			'hp': 133,
			'atk': 122,
			'def': 72,
			'spa': 71,
			'spd': 72,
			'spe': 95
		},
		'weight': 683.6
	},
	'Combee': {
		'type1': 'Bug',
		'type2': 'Flying',
		'baseStats': {
			'hp': 30,
			'atk': 30,
			'def': 42,
			'spa': 30,
			'spd': 42,
			'spe': 70
		},
		'weight': 5.5,
		'canEvolve': true
	},
	'Cranidos': {
		'type1': 'Rock',
		'baseStats': {
			'hp': 67,
			'atk': 125,
			'def': 40,
			'spa': 30,
			'spd': 30,
			'spe': 58
		},
		'weight': 31.5,
		'canEvolve': true
	},
	'Cresselia': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 120,
			'atk': 70,
			'def': 120,
			'spa': 75,
			'spd': 130,
			'spe': 85
		},
		'weight': 85.6,
		'ability': 'Levitate'
	},
	'Croagunk': {
		'type1': 'Poison',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 48,
			'atk': 61,
			'def': 40,
			'spa': 61,
			'spd': 40,
			'spe': 50
		},
		'weight': 23.0,
		'canEvolve': true
	},
	'Cyclohm': {
		'type1': 'Electric',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 108,
			'atk': 60,
			'def': 118,
			'spa': 112,
			'spd': 70,
			'spe': 80
		},
		'weight': 59.0
	},
	'Darkrai': {
		'type1': 'Dark',
		'baseStats': {
			'hp': 70,
			'atk': 90,
			'def': 90,
			'spa': 135,
			'spd': 90,
			'spe': 125
		},
		'weight': 50.5,
		'ability': 'Bad Dreams',
		'gender': 'genderless'
	},
	'Dialga': {
		'type1': 'Steel',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 100,
			'atk': 120,
			'def': 120,
			'spa': 150,
			'spd': 100,
			'spe': 90
		},
		'weight': 683.0,
		'gender': 'genderless'
	},
	'Drapion': {
		'type1': 'Poison',
		'type2': 'Dark',
		'baseStats': {
			'hp': 70,
			'atk': 90,
			'def': 110,
			'spa': 60,
			'spd': 75,
			'spe': 95
		},
		'weight': 61.5
	},
	'Drifblim': {
		'type1': 'Ghost',
		'type2': 'Flying',
		'baseStats': {
			'hp': 150,
			'atk': 80,
			'def': 44,
			'spa': 90,
			'spd': 54,
			'spe': 80
		},
		'weight': 15.0
	},
	'Drifloon': {
		'type1': 'Ghost',
		'type2': 'Flying',
		'baseStats': {
			'hp': 90,
			'atk': 50,
			'def': 34,
			'spa': 60,
			'spd': 44,
			'spe': 70
		},
		'weight': 1.2,
		'canEvolve': true
	},
	'Dusknoir': {
		'type1': 'Ghost',
		'baseStats': {
			'hp': 45,
			'atk': 100,
			'def': 135,
			'spa': 65,
			'spd': 135,
			'spe': 45
		},
		'weight': 106.6
	},
	'Electivire': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 75,
			'atk': 123,
			'def': 67,
			'spa': 95,
			'spd': 85,
			'spe': 95
		},
		'weight': 138.6
	},
	'Embirch': {
		'type1': 'Fire',
		'type2': 'Grass',
		'baseStats': {
			'hp': 60,
			'atk': 40,
			'def': 55,
			'spa': 65,
			'spd': 40,
			'spe': 60
		},
		'weight': 15.0
	},
	'Empoleon': {
		'type1': 'Water',
		'type2': 'Steel',
		'baseStats': {
			'hp': 84,
			'atk': 86,
			'def': 88,
			'spa': 111,
			'spd': 101,
			'spe': 60
		},
		'weight': 84.5
	},
	'Fidgit': {
		'type1': 'Poison',
		'type2': 'Ground',
		'baseStats': {
			'hp': 95,
			'atk': 76,
			'def': 109,
			'spa': 90,
			'spd': 80,
			'spe': 105
		},
		'weight': 53.0
	},
	'Finneon': {
		'type1': 'Water',
		'baseStats': {
			'hp': 49,
			'atk': 49,
			'def': 56,
			'spa': 49,
			'spd': 61,
			'spe': 66
		},
		'weight': 7.0,
		'canEvolve': true
	},
	'Flarelm': {
		'type1': 'Fire',
		'type2': 'Grass',
		'baseStats': {
			'hp': 90,
			'atk': 50,
			'def': 95,
			'spa': 75,
			'spd': 70,
			'spe': 40
		},
		'weight': 73.0
	},
	'Floatzel': {
		'type1': 'Water',
		'baseStats': {
			'hp': 85,
			'atk': 105,
			'def': 55,
			'spa': 85,
			'spd': 50,
			'spe': 115
		},
		'weight': 33.5
	},
	'Froslass': {
		'type1': 'Ice',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 70,
			'atk': 80,
			'def': 70,
			'spa': 80,
			'spd': 70,
			'spe': 110
		},
		'weight': 26.6
	},
	'Gabite': {
		'type1': 'Dragon',
		'type2': 'Ground',
		'baseStats': {
			'hp': 68,
			'atk': 90,
			'def': 65,
			'spa': 50,
			'spd': 55,
			'spe': 82
		},
		'weight': 56.0,
		'canEvolve': true
	},
	'Gallade': {
		'type1': 'Psychic',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 68,
			'atk': 125,
			'def': 65,
			'spa': 65,
			'spd': 115,
			'spe': 80
		},
		'weight': 52.0
	},
	'Garchomp': {
		'type1': 'Dragon',
		'type2': 'Ground',
		'baseStats': {
			'hp': 108,
			'atk': 130,
			'def': 95,
			'spa': 80,
			'spd': 85,
			'spe': 102
		},
		'weight': 95.0
	},
	'Gastrodon': {
		'type1': 'Water',
		'type2': 'Ground',
		'baseStats': {
			'hp': 111,
			'atk': 83,
			'def': 68,
			'spa': 92,
			'spd': 82,
			'spe': 39
		},
		'weight': 29.9
	},
	'Gible': {
		'type1': 'Dragon',
		'type2': 'Ground',
		'baseStats': {
			'hp': 58,
			'atk': 70,
			'def': 45,
			'spa': 40,
			'spd': 45,
			'spe': 42
		},
		'weight': 20.5,
		'canEvolve': true
	},
	'Giratina': {
		'type1': 'Ghost',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 150,
			'atk': 100,
			'def': 120,
			'spa': 100,
			'spd': 120,
			'spe': 90
		},
		'weight': 750.0
	},
	'Giratina-Origin': {
		'type1': 'Ghost',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 150,
			'atk': 120,
			'def': 100,
			'spa': 120,
			'spd': 100,
			'spe': 90
		},
		'weight': 650.0,
		'ability': 'Levitate'
	},
	'Glaceon': {
		'type1': 'Ice',
		'baseStats': {
			'hp': 65,
			'atk': 60,
			'def': 110,
			'spa': 130,
			'spd': 95,
			'spe': 65
		},
		'weight': 25.9
	},
	'Glameow': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 49,
			'atk': 55,
			'def': 42,
			'spa': 42,
			'spd': 37,
			'spe': 85
		},
		'weight': 3.9,
		'canEvolve': true
	},
	'Gliscor': {
		'type1': 'Ground',
		'type2': 'Flying',
		'baseStats': {
			'hp': 75,
			'atk': 95,
			'def': 125,
			'spa': 45,
			'spd': 75,
			'spe': 95
		},
		'weight': 42.5
	},
	'Grotle': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 75,
			'atk': 89,
			'def': 85,
			'spa': 55,
			'spd': 65,
			'spe': 36
		},
		'weight': 97.0,
		'canEvolve': true
	},
	'Happiny': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 100,
			'atk': 5,
			'def': 5,
			'spa': 15,
			'spd': 65,
			'spe': 30
		},
		'weight': 24.4,
		'canEvolve': true
	},
	'Heatran': {
		'type1': 'Fire',
		'type2': 'Steel',
		'baseStats': {
			'hp': 91,
			'atk': 90,
			'def': 106,
			'spa': 130,
			'spd': 106,
			'spe': 77
		},
		'weight': 430.0,
		'ability': 'Flash Fire'
	},
	'Hippopotas': {
		'type1': 'Ground',
		'baseStats': {
			'hp': 68,
			'atk': 72,
			'def': 78,
			'spa': 38,
			'spd': 42,
			'spe': 32
		},
		'weight': 49.5,
		'canEvolve': true
	},
	'Hippowdon': {
		'type1': 'Ground',
		'baseStats': {
			'hp': 108,
			'atk': 112,
			'def': 118,
			'spa': 68,
			'spd': 72,
			'spe': 47
		},
		'weight': 300.0
	},
	'Honchkrow': {
		'type1': 'Dark',
		'type2': 'Flying',
		'baseStats': {
			'hp': 100,
			'atk': 125,
			'def': 52,
			'spa': 105,
			'spd': 52,
			'spe': 71
		},
		'weight': 27.3
	},
	'Infernape': {
		'type1': 'Fire',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 76,
			'atk': 104,
			'def': 71,
			'spa': 104,
			'spd': 71,
			'spe': 108
		},
		'weight': 55.0
	},
	'Kitsunoh': {
		'type1': 'Steel',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 80,
			'atk': 103,
			'def': 85,
			'spa': 55,
			'spd': 80,
			'spe': 110
		},
		'weight': 51.0
	},
	'Kricketot': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 37,
			'atk': 25,
			'def': 41,
			'spa': 25,
			'spd': 41,
			'spe': 25
		},
		'weight': 2.2,
		'canEvolve': true
	},
	'Kricketune': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 77,
			'atk': 85,
			'def': 51,
			'spa': 55,
			'spd': 51,
			'spe': 65
		},
		'weight': 25.5
	},
	'Krilowatt': {
		'type1': 'Electric',
		'type2': 'Water',
		'baseStats': {
			'hp': 151,
			'atk': 84,
			'def': 73,
			'spa': 83,
			'spd': 74,
			'spe': 105
		},
		'weight': 10.6
	},
	'Leafeon': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 65,
			'atk': 110,
			'def': 130,
			'spa': 60,
			'spd': 65,
			'spe': 95
		},
		'weight': 25.5
	},
	'Lickilicky': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 110,
			'atk': 85,
			'def': 95,
			'spa': 80,
			'spd': 95,
			'spe': 50
		},
		'weight': 140.0
	},
	'Lopunny': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 65,
			'atk': 76,
			'def': 84,
			'spa': 54,
			'spd': 96,
			'spe': 105
		},
		'weight': 33.3
	},
	'Lucario': {
		'type1': 'Fighting',
		'type2': 'Steel',
		'baseStats': {
			'hp': 70,
			'atk': 110,
			'def': 70,
			'spa': 115,
			'spd': 70,
			'spe': 90
		},
		'weight': 54.0
	},
	'Lumineon': {
		'type1': 'Water',
		'baseStats': {
			'hp': 69,
			'atk': 69,
			'def': 76,
			'spa': 69,
			'spd': 86,
			'spe': 91
		},
		'weight': 24.0
	},
	'Luxio': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 60,
			'atk': 85,
			'def': 49,
			'spa': 60,
			'spd': 49,
			'spe': 60
		},
		'weight': 30.5,
		'canEvolve': true
	},
	'Luxray': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 80,
			'atk': 120,
			'def': 79,
			'spa': 95,
			'spd': 79,
			'spe': 70
		},
		'weight': 42.0
	},
	'Magmortar': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 75,
			'atk': 95,
			'def': 67,
			'spa': 125,
			'spd': 95,
			'spe': 83
		},
		'weight': 68.0
	},
	'Magnezone': {
		'type1': 'Electric',
		'type2': 'Steel',
		'baseStats': {
			'hp': 70,
			'atk': 70,
			'def': 115,
			'spa': 130,
			'spd': 90,
			'spe': 60
		},
		'weight': 180.0,
		'gender': 'genderless'
	},
	'Mamoswine': {
		'type1': 'Ice',
		'type2': 'Ground',
		'baseStats': {
			'hp': 110,
			'atk': 130,
			'def': 80,
			'spa': 70,
			'spd': 60,
			'spe': 80
		},
		'weight': 291.0
	},
	'Manaphy': {
		'type1': 'Water',
		'baseStats': {
			'hp': 100,
			'atk': 100,
			'def': 100,
			'spa': 100,
			'spd': 100,
			'spe': 100
		},
		'weight': 1.4,
		'ability': 'Hydration',
		'gender': 'genderless'
	},
	'Mantyke': {
		'type1': 'Water',
		'type2': 'Flying',
		'baseStats': {
			'hp': 45,
			'atk': 20,
			'def': 50,
			'spa': 60,
			'spd': 120,
			'spe': 50
		},
		'weight': 65.0,
		'canEvolve': true
	},
	'Mesprit': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 80,
			'atk': 105,
			'def': 105,
			'spa': 105,
			'spd': 105,
			'spe': 80
		},
		'weight': 0.3,
		'ability': 'Levitate',
		'gender': 'genderless'
	},
	'Mime Jr.': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 20,
			'atk': 25,
			'def': 45,
			'spa': 70,
			'spd': 90,
			'spe': 60
		},
		'weight': 13.0,
		'canEvolve': true
	},
	'Mismagius': {
		'type1': 'Ghost',
		'baseStats': {
			'hp': 60,
			'atk': 60,
			'def': 60,
			'spa': 105,
			'spd': 105,
			'spe': 105
		},
		'weight': 4.4,
		'ability': 'Levitate'
	},
	'Monferno': {
		'type1': 'Fire',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 64,
			'atk': 78,
			'def': 52,
			'spa': 78,
			'spd': 52,
			'spe': 81
		},
		'weight': 22.0,
		'canEvolve': true
	},
	'Mothim': {
		'type1': 'Bug',
		'type2': 'Flying',
		'baseStats': {
			'hp': 70,
			'atk': 94,
			'def': 50,
			'spa': 94,
			'spd': 50,
			'spe': 66
		},
		'weight': 23.3
	},
	'Munchlax': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 135,
			'atk': 85,
			'def': 40,
			'spa': 40,
			'spd': 85,
			'spe': 5
		},
		'weight': 105.0,
		'canEvolve': true
	},
	'Pachirisu': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 60,
			'atk': 45,
			'def': 70,
			'spa': 45,
			'spd': 90,
			'spe': 95
		},
		'weight': 3.9
	},
	'Palkia': {
		'type1': 'Water',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 90,
			'atk': 120,
			'def': 100,
			'spa': 150,
			'spd': 120,
			'spe': 100
		},
		'weight': 336.0,
		'gender': 'genderless'
	},
	'Phione': {
		'type1': 'Water',
		'baseStats': {
			'hp': 80,
			'atk': 80,
			'def': 80,
			'spa': 80,
			'spd': 80,
			'spe': 80
		},
		'weight': 3.1,
		'ability': 'Hydration',
		'gender': 'genderless'
	},
	'Piplup': {
		'type1': 'Water',
		'baseStats': {
			'hp': 53,
			'atk': 51,
			'def': 53,
			'spa': 61,
			'spd': 56,
			'spe': 40
		},
		'weight': 5.2,
		'canEvolve': true
	},
	'Porygon-Z': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 85,
			'atk': 80,
			'def': 70,
			'spa': 135,
			'spd': 75,
			'spe': 90
		},
		'weight': 34.0,
		'gender': 'genderless'
	},
	'Prinplup': {
		'type1': 'Water',
		'baseStats': {
			'hp': 64,
			'atk': 66,
			'def': 68,
			'spa': 81,
			'spd': 76,
			'spe': 50
		},
		'weight': 23.0,
		'canEvolve': true
	},
	'Probopass': {
		'type1': 'Rock',
		'type2': 'Steel',
		'baseStats': {
			'hp': 60,
			'atk': 55,
			'def': 145,
			'spa': 75,
			'spd': 150,
			'spe': 40
		},
		'weight': 340.0
	},
	'Purugly': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 71,
			'atk': 82,
			'def': 64,
			'spa': 64,
			'spd': 59,
			'spe': 112
		},
		'weight': 43.8
	},
	'Pyroak': {
		'type1': 'Fire',
		'type2': 'Grass',
		'baseStats': {
			'hp': 120,
			'atk': 70,
			'def': 105,
			'spa': 95,
			'spd': 90,
			'spe': 60
		},
		'weight': 168.0
	},
	'Rampardos': {
		'type1': 'Rock',
		'baseStats': {
			'hp': 97,
			'atk': 165,
			'def': 60,
			'spa': 65,
			'spd': 50,
			'spe': 58
		},
		'weight': 102.5
	},
	'Regigigas': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 110,
			'atk': 160,
			'def': 110,
			'spa': 80,
			'spd': 110,
			'spe': 100
		},
		'weight': 420.0,
		'ability': 'Slow Start',
		'gender': 'genderless'
	},
	'Revenankh': {
		'type1': 'Ghost',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 90,
			'atk': 105,
			'def': 90,
			'spa': 65,
			'spd': 110,
			'spe': 65
		},
		'weight': 44.0
	},
	'Rhyperior': {
		'type1': 'Ground',
		'type2': 'Rock',
		'baseStats': {
			'hp': 115,
			'atk': 140,
			'def': 130,
			'spa': 55,
			'spd': 55,
			'spe': 40
		},
		'weight': 282.8
	},
	'Riolu': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 40,
			'atk': 70,
			'def': 40,
			'spa': 35,
			'spd': 40,
			'spe': 60
		},
		'weight': 20.2,
		'canEvolve': true
	},
	'Roserade': {
		'type1': 'Grass',
		'type2': 'Poison',
		'baseStats': {
			'hp': 60,
			'atk': 70,
			'def': 55,
			'spa': 125,
			'spd': 105,
			'spe': 90
		},
		'weight': 14.5
	},
	'Rotom': {
		'type1': 'Electric',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 50,
			'atk': 50,
			'def': 77,
			'spa': 95,
			'spd': 77,
			'spe': 91
		},
		'weight': 0.3,
		'ability': 'Levitate',
		'gender': 'genderless'
	},
	'Rotom-Mow': {
		'type1': 'Electric',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 50,
			'atk': 65,
			'def': 107,
			'spa': 105,
			'spd': 107,
			'spe': 86
		},
		'weight': 0.3,
		'ability': 'Levitate',
		'gender': 'genderless'
	},
	'Rotom-Frost': {
		'type1': 'Electric',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 50,
			'atk': 65,
			'def': 107,
			'spa': 105,
			'spd': 107,
			'spe': 86
		},
		'weight': 0.3,
		'ability': 'Levitate',
		'gender': 'genderless'
	},
	'Rotom-Heat': {
		'type1': 'Electric',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 50,
			'atk': 65,
			'def': 107,
			'spa': 105,
			'spd': 107,
			'spe': 86
		},
		'weight': 0.3,
		'ability': 'Levitate',
		'gender': 'genderless'
	},
	'Rotom-Fan': {
		'type1': 'Electric',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 50,
			'atk': 65,
			'def': 107,
			'spa': 105,
			'spd': 107,
			'spe': 86
		},
		'weight': 0.3,
		'ability': 'Levitate',
		'gender': 'genderless'
	},
	'Rotom-Wash': {
		'type1': 'Electric',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 50,
			'atk': 65,
			'def': 107,
			'spa': 105,
			'spd': 107,
			'spe': 86
		},
		'weight': 0.3,
		'ability': 'Levitate',
		'gender': 'genderless'
	},
	'Shaymin': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 100,
			'atk': 100,
			'def': 100,
			'spa': 100,
			'spd': 100,
			'spe': 100
		},
		'weight': 2.1,
		'ability': 'Natural Cure',
		'gender': 'genderless'
	},
	'Shaymin-Sky': {
		'type1': 'Grass',
		'type2': 'Flying',
		'baseStats': {
			'hp': 100,
			'atk': 103,
			'def': 75,
			'spa': 120,
			'spd': 75,
			'spe': 127
		},
		'weight': 5.2,
		'ability': 'Serene Grace',
		'gender': 'genderless'
	},
	'Shellos': {
		'type1': 'Water',
		'baseStats': {
			'hp': 76,
			'atk': 48,
			'def': 48,
			'spa': 57,
			'spd': 62,
			'spe': 34
		},
		'weight': 6.3,
		'canEvolve': true
	},
	'Shieldon': {
		'type1': 'Rock',
		'type2': 'Steel',
		'baseStats': {
			'hp': 30,
			'atk': 42,
			'def': 118,
			'spa': 42,
			'spd': 88,
			'spe': 30
		},
		'weight': 57.0,
		'canEvolve': true
	},
	'Shinx': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 45,
			'atk': 65,
			'def': 34,
			'spa': 40,
			'spd': 34,
			'spe': 45
		},
		'weight': 9.5,
		'canEvolve': true
	},
	'Skorupi': {
		'type1': 'Poison',
		'type2': 'Bug',
		'baseStats': {
			'hp': 40,
			'atk': 50,
			'def': 90,
			'spa': 30,
			'spd': 55,
			'spe': 65
		},
		'weight': 12.0,
		'canEvolve': true
	},
	'Skuntank': {
		'type1': 'Poison',
		'type2': 'Dark',
		'baseStats': {
			'hp': 103,
			'atk': 93,
			'def': 67,
			'spa': 71,
			'spd': 61,
			'spe': 84
		},
		'weight': 38.0,
	},
	'Snover': {
		'type1': 'Grass',
		'type2': 'Ice',
		'baseStats': {
			'hp': 60,
			'atk': 62,
			'def': 50,
			'spa': 62,
			'spd': 60,
			'spe': 40
		},
		'weight': 50.5,
		'canEvolve': true
	},
	'Spiritomb': {
		'type1': 'Ghost',
		'type2': 'Dark',
		'baseStats': {
			'hp': 50,
			'atk': 92,
			'def': 108,
			'spa': 92,
			'spd': 108,
			'spe': 35
		},
		'weight': 108.0
	},
	'Staraptor': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 85,
			'atk': 120,
			'def': 70,
			'spa': 50,
			'spd': 50,
			'spe': 100
		},
		'weight': 24.9
	},
	'Staravia': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 55,
			'atk': 75,
			'def': 50,
			'spa': 40,
			'spd': 40,
			'spe': 80
		},
		'weight': 15.5,
		'canEvolve': true
	},
	'Starly': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 40,
			'atk': 55,
			'def': 30,
			'spa': 30,
			'spd': 30,
			'spe': 60
		},
		'weight': 2.0,
		'canEvolve': true
	},
	'Stratagem': {
		'type1': 'Rock',
		'baseStats': {
			'hp': 90,
			'atk': 60,
			'def': 65,
			'spa': 120,
			'spd': 70,
			'spe': 130
		},
		'weight': 45.0
	},
	'Stunky': {
		'type1': 'Poison',
		'type2': 'Dark',
		'baseStats': {
			'hp': 63,
			'atk': 63,
			'def': 47,
			'spa': 41,
			'spd': 41,
			'spe': 74
		},
		'weight': 19.2,
		'canEvolve': true
	},
	'Syclant': {
		'type1': 'Ice',
		'type2': 'Bug',
		'baseStats': {
			'hp': 70,
			'atk': 116,
			'def': 70,
			'spa': 114,
			'spd': 64,
			'spe': 121
		},
		'weight': 52.0
	},
	'Syclar': {
		'type1': 'Ice',
		'type2': 'Bug',
		'baseStats': {
			'hp': 40,
			'atk': 76,
			'def': 45,
			'spa': 74,
			'spd': 39,
			'spe': 91
		},
		'weight': 4.0
	},
	'Tangrowth': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 100,
			'atk': 100,
			'def': 125,
			'spa': 110,
			'spd': 50,
			'spe': 50
		},
		'weight': 128.6
	},
	'Togekiss': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 85,
			'atk': 50,
			'def': 95,
			'spa': 120,
			'spd': 115,
			'spe': 80
		},
		'weight': 38.0
	},
	'Torterra': {
		'type1': 'Grass',
		'type2': 'Ground',
		'baseStats': {
			'hp': 95,
			'atk': 109,
			'def': 105,
			'spa': 75,
			'spd': 85,
			'spe': 56
		},
		'weight': 310.0
	},
	'Toxicroak': {
		'type1': 'Poison',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 83,
			'atk': 106,
			'def': 65,
			'spa': 86,
			'spd': 65,
			'spe': 85
		},
		'weight': 44.4
	},
	'Turtwig': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 55,
			'atk': 68,
			'def': 64,
			'spa': 45,
			'spd': 55,
			'spe': 31
		},
		'weight': 10.2,
		'canEvolve': true
	},
	'Uxie': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 75,
			'atk': 75,
			'def': 130,
			'spa': 75,
			'spd': 130,
			'spe': 95
		},
		'weight': 0.3,
		'ability': 'Levitate',
		'gender': 'genderless'
	},
	'Vespiquen': {
		'type1': 'Bug',
		'type2': 'Flying',
		'baseStats': {
			'hp': 70,
			'atk': 80,
			'def': 102,
			'spa': 80,
			'spd': 102,
			'spe': 40
		},
		'weight': 38.5
	},
	'Voodoom': {
		'type1': 'Fighting',
		'type2': 'Dark',
		'baseStats': {
			'hp': 90,
			'atk': 85,
			'def': 80,
			'spa': 105,
			'spd': 80,
			'spe': 110
		},
		'weight': 75.5
	},
	'Weavile': {
		'type1': 'Dark',
		'type2': 'Ice',
		'baseStats': {
			'hp': 70,
			'atk': 120,
			'def': 65,
			'spa': 45,
			'spd': 85,
			'spe': 125
		},
		'weight': 34.0
	},
	'Wormadam': {
		'type1': 'Bug',
		'type2': 'Grass',
		'baseStats': {
			'hp': 60,
			'atk': 59,
			'def': 85,
			'spa': 79,
			'spd': 105,
			'spe': 36
		},
		'weight': 6.5
	},
	'Wormadam-Sandy': {
		'type1': 'Bug',
		'type2': 'Ground',
		'baseStats': {
			'hp': 60,
			'atk': 79,
			'def': 105,
			'spa': 59,
			'spd': 85,
			'spe': 36
		},
		'weight': 6.5
	},
	'Wormadam-Trash': {
		'type1': 'Bug',
		'type2': 'Steel',
		'baseStats': {
			'hp': 60,
			'atk': 69,
			'def': 95,
			'spa': 69,
			'spd': 95,
			'spe': 36
		},
		'weight': 6.5
	},
	'Yanmega': {
		'type1': 'Bug',
		'type2': 'Flying',
		'baseStats': {
			'hp': 86,
			'atk': 76,
			'def': 86,
			'spa': 116,
			'spd': 56,
			'spe': 95
		},
		'weight': 51.5
	}
});

/** @type {Pokedex} */
const BW = $.extend(true, {}, DPP, {
	'Rotom-Mow': {'type2': 'Grass'},
	'Rotom-Frost': {'type2': 'Ice'},
	'Rotom-Heat': {'type2': 'Fire'},
	'Rotom-Fan': {'type2': 'Flying'},
	'Rotom-Wash': {'type2': 'Water'},
	'Accelgor': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 80,
			'atk': 70,
			'def': 40,
			'spa': 100,
			'spd': 60,
			'spe': 145
		},
		'weight': 25.3
	},
	'Alomomola': {
		'type1': 'Water',
		'baseStats': {
			'hp': 165,
			'atk': 75,
			'def': 80,
			'spa': 40,
			'spd': 45,
			'spe': 65
		},
		'weight': 31.6
	},
	'Amoonguss': {
		'type1': 'Grass',
		'type2': 'Poison',
		'baseStats': {
			'hp': 114,
			'atk': 85,
			'def': 70,
			'spa': 85,
			'spd': 80,
			'spe': 30
		},
		'weight': 10.5
	},
	'Archen': {
		'type1': 'Rock',
		'type2': 'Flying',
		'baseStats': {
			'hp': 55,
			'atk': 112,
			'def': 45,
			'spa': 74,
			'spd': 45,
			'spe': 70
		},
		'weight': 9.5,
		'ability': 'Defeatist',
		'canEvolve': true
	},
	'Archeops': {
		'type1': 'Rock',
		'type2': 'Flying',
		'baseStats': {
			'hp': 75,
			'atk': 140,
			'def': 65,
			'spa': 112,
			'spd': 65,
			'spe': 110
		},
		'weight': 32.0,
		'ability': 'Defeatist'
	},
	'Argalis': {
		'type1': 'Bug',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 60,
			'atk': 90,
			'def': 89,
			'spa': 87,
			'spd': 40,
			'spe': 54
		},
		'weight': 341.4
	},
	'Audino': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 103,
			'atk': 60,
			'def': 86,
			'spa': 60,
			'spd': 86,
			'spe': 50
		},
		'weight': 31.0
	},
	'Aurumoth': {
		'type1': 'Bug',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 110,
			'atk': 120,
			'def': 99,
			'spa': 117,
			'spd': 60,
			'spe': 94
		},
		'weight': 193.0
	},
	'Axew': {
		'type1': 'Dragon',
		'baseStats': {
			'hp': 46,
			'atk': 87,
			'def': 60,
			'spa': 30,
			'spd': 40,
			'spe': 57
		},
		'weight': 18.0,
		'canEvolve': true
	},
	'Basculin': {
		'type1': 'Water',
		'baseStats': {
			'hp': 70,
			'atk': 92,
			'def': 65,
			'spa': 80,
			'spd': 55,
			'spe': 98
		},
		'weight': 18.0
	},
	'Beartic': {
		'type1': 'Ice',
		'baseStats': {
			'hp': 95,
			'atk': 110,
			'def': 80,
			'spa': 70,
			'spd': 80,
			'spe': 50
		},
		'weight': 260.0
	},
	'Beheeyem': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 75,
			'atk': 75,
			'def': 75,
			'spa': 125,
			'spd': 95,
			'spe': 40
		},
		'weight': 34.5
	},
	'Bisharp': {
		'type1': 'Dark',
		'type2': 'Steel',
		'baseStats': {
			'hp': 65,
			'atk': 125,
			'def': 100,
			'spa': 60,
			'spd': 70,
			'spe': 70
		},
		'weight': 70.0
	},
	'Blitzle': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 45,
			'atk': 60,
			'def': 32,
			'spa': 50,
			'spd': 32,
			'spe': 76
		},
		'weight': 29.8,
		'canEvolve': true
	},
	'Boldore': {
		'type1': 'Rock',
		'baseStats': {
			'hp': 70,
			'atk': 105,
			'def': 105,
			'spa': 50,
			'spd': 40,
			'spe': 20
		},
		'weight': 102.0,
		'canEvolve': true
	},
	'Bouffalant': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 95,
			'atk': 110,
			'def': 95,
			'spa': 40,
			'spd': 95,
			'spe': 55
		},
		'weight': 94.6
	},
	'Brattler': {
		'type1': 'Dark',
		'type2': 'Grass',
		'baseStats': {
			'hp': 80,
			'atk': 70,
			'def': 40,
			'spa': 20,
			'spd': 90,
			'spe': 30
		},
		'weight': 11.5
	},
	'Braviary': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 100,
			'atk': 123,
			'def': 75,
			'spa': 57,
			'spd': 75,
			'spe': 80
		},
		'weight': 41.0
	},
	'Carracosta': {
		'type1': 'Water',
		'type2': 'Rock',
		'baseStats': {
			'hp': 74,
			'atk': 108,
			'def': 133,
			'spa': 83,
			'spd': 65,
			'spe': 32
		},
		'weight': 81.0
	},
	'Cawdet': {
		'type1': 'Steel',
		'type2': 'Flying',
		'baseStats': {
			'hp': 35,
			'atk': 72,
			'def': 85,
			'spa': 40,
			'spd': 55,
			'spe': 88
		},
		'weight': 25.0
	},
	'Cawmodore': {
		'type1': 'Steel',
		'type2': 'Flying',
		'baseStats': {
			'hp': 50,
			'atk': 92,
			'def': 130,
			'spa': 65,
			'spd': 75,
			'spe': 118
		},
		'weight': 37.0
	},
	'Chandelure': {
		'type1': 'Ghost',
		'type2': 'Fire',
		'baseStats': {
			'hp': 60,
			'atk': 55,
			'def': 90,
			'spa': 145,
			'spd': 90,
			'spe': 80
		},
		'weight': 34.3
	},
	'Cinccino': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 75,
			'atk': 95,
			'def': 60,
			'spa': 65,
			'spd': 60,
			'spe': 115
		},
		'weight': 7.5,
	},
	'Cobalion': {
		'type1': 'Steel',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 91,
			'atk': 90,
			'def': 129,
			'spa': 90,
			'spd': 72,
			'spe': 108
		},
		'weight': 250.0,
		'ability': 'Justified',
		'gender': 'genderless'
	},
	'Cofagrigus': {
		'type1': 'Ghost',
		'baseStats': {
			'hp': 58,
			'atk': 50,
			'def': 145,
			'spa': 95,
			'spd': 105,
			'spe': 30
		},
		'weight': 76.5,
		'ability': 'Mummy'
	},
	'Conkeldurr': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 105,
			'atk': 140,
			'def': 95,
			'spa': 55,
			'spd': 65,
			'spe': 45
		},
		'weight': 87.0
	},
	'Cottonee': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 40,
			'atk': 27,
			'def': 60,
			'spa': 37,
			'spd': 50,
			'spe': 66
		},
		'weight': 0.6,
		'canEvolve': true
	},
	'Crustle': {
		'type1': 'Bug',
		'type2': 'Rock',
		'baseStats': {
			'hp': 70,
			'atk': 95,
			'def': 125,
			'spa': 65,
			'spd': 75,
			'spe': 45
		},
		'weight': 200.0
	},
	'Cryogonal': {
		'type1': 'Ice',
		'baseStats': {
			'hp': 70,
			'atk': 50,
			'def': 30,
			'spa': 95,
			'spd': 135,
			'spe': 105
		},
		'weight': 148.0,
		'ability': 'Levitate',
		'gender': 'genderless'
	},
	'Cubchoo': {
		'type1': 'Ice',
		'baseStats': {
			'hp': 55,
			'atk': 70,
			'def': 40,
			'spa': 60,
			'spd': 40,
			'spe': 40
		},
		'weight': 8.5,
		'canEvolve': true
	},
	'Cupra': {
		'type1': 'Bug',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 50,
			'atk': 60,
			'def': 49,
			'spa': 67,
			'spd': 30,
			'spe': 44
		},
		'weight': 4.8
	},
	'Darmanitan': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 105,
			'atk': 140,
			'def': 55,
			'spa': 30,
			'spd': 55,
			'spe': 95
		},
		'weight': 92.9,
		'ability': 'Sheer Force',
		'formes': [
			'Darmanitan',
			'Darmanitan-Z'
		]
	},
	'Darmanitan-Z': {
		'type1': 'Fire',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 105,
			'atk': 30,
			'def': 105,
			'spa': 140,
			'spd': 105,
			'spe': 55
		},
		'weight': 92.9,
		'isAlternateForme': true
	},
	'Darumaka': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 70,
			'atk': 90,
			'def': 45,
			'spa': 15,
			'spd': 45,
			'spe': 50
		},
		'weight': 37.5,
		'canEvolve': true
	},
	'Deerling': {
		'type1': 'Normal',
		'type2': 'Grass',
		'baseStats': {
			'hp': 60,
			'atk': 60,
			'def': 50,
			'spa': 40,
			'spd': 50,
			'spe': 75
		},
		'weight': 19.5,
		'canEvolve': true
	},
	'Deino': {
		'type1': 'Dark',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 52,
			'atk': 65,
			'def': 50,
			'spa': 45,
			'spd': 50,
			'spe': 38
		},
		'weight': 17.3,
		'ability': 'Hustle',
		'canEvolve': true
	},
	'Dewott': {
		'type1': 'Water',
		'baseStats': {
			'hp': 75,
			'atk': 75,
			'def': 60,
			'spa': 83,
			'spd': 60,
			'spe': 60
		},
		'weight': 24.5,
		'canEvolve': true
	},
	'Drilbur': {
		'type1': 'Ground',
		'baseStats': {
			'hp': 60,
			'atk': 85,
			'def': 40,
			'spa': 30,
			'spd': 45,
			'spe': 68
		},
		'weight': 8.5,
		'canEvolve': true
	},
	'Druddigon': {
		'type1': 'Dragon',
		'baseStats': {
			'hp': 77,
			'atk': 120,
			'def': 90,
			'spa': 60,
			'spd': 90,
			'spe': 48
		},
		'weight': 139.0
	},
	'Ducklett': {
		'type1': 'Water',
		'type2': 'Flying',
		'baseStats': {
			'hp': 62,
			'atk': 44,
			'def': 50,
			'spa': 44,
			'spd': 50,
			'spe': 55
		},
		'weight': 5.5,
		'canEvolve': true
	},
	'Duosion': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 65,
			'atk': 40,
			'def': 50,
			'spa': 125,
			'spd': 60,
			'spe': 30
		},
		'weight': 8.0,
		'canEvolve': true
	},
	'Durant': {
		'type1': 'Bug',
		'type2': 'Steel',
		'baseStats': {
			'hp': 58,
			'atk': 109,
			'def': 112,
			'spa': 48,
			'spd': 48,
			'spe': 109
		},
		'weight': 33.0
	},
	'Dwebble': {
		'type1': 'Bug',
		'type2': 'Rock',
		'baseStats': {
			'hp': 50,
			'atk': 65,
			'def': 85,
			'spa': 35,
			'spd': 35,
			'spe': 55
		},
		'weight': 14.5,
		'canEvolve': true
	},
	'Eelektrik': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 65,
			'atk': 85,
			'def': 70,
			'spa': 75,
			'spd': 70,
			'spe': 40
		},
		'weight': 22.0,
		'ability': 'Levitate',
		'canEvolve': true
	},
	'Eelektross': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 85,
			'atk': 115,
			'def': 80,
			'spa': 105,
			'spd': 80,
			'spe': 50
		},
		'weight': 80.5,
		'ability': 'Levitate'
	},
	'Elgyem': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 55,
			'atk': 55,
			'def': 55,
			'spa': 85,
			'spd': 55,
			'spe': 30
		},
		'weight': 9.0,
		'canEvolve': true
	},
	'Emboar': {
		'type1': 'Fire',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 110,
			'atk': 123,
			'def': 65,
			'spa': 100,
			'spd': 65,
			'spe': 65
		},
		'weight': 150.0
	},
	'Emolga': {
		'type1': 'Electric',
		'type2': 'Flying',
		'baseStats': {
			'hp': 55,
			'atk': 75,
			'def': 60,
			'spa': 75,
			'spd': 60,
			'spe': 103
		},
		'weight': 5.0
	},
	'Escavalier': {
		'type1': 'Bug',
		'type2': 'Steel',
		'baseStats': {
			'hp': 70,
			'atk': 135,
			'def': 105,
			'spa': 60,
			'spd': 105,
			'spe': 20
		},
		'weight': 33.0
	},
	'Excadrill': {
		'type1': 'Ground',
		'type2': 'Steel',
		'baseStats': {
			'hp': 110,
			'atk': 135,
			'def': 60,
			'spa': 50,
			'spd': 65,
			'spe': 88
		},
		'weight': 40.4
	},
	'Ferroseed': {
		'type1': 'Grass',
		'type2': 'Steel',
		'baseStats': {
			'hp': 44,
			'atk': 50,
			'def': 91,
			'spa': 24,
			'spd': 86,
			'spe': 10
		},
		'weight': 18.8,
		'canEvolve': true
	},
	'Ferrothorn': {
		'type1': 'Grass',
		'type2': 'Steel',
		'baseStats': {
			'hp': 74,
			'atk': 94,
			'def': 131,
			'spa': 54,
			'spd': 116,
			'spe': 20
		},
		'weight': 110.0
	},
	'Foongus': {
		'type1': 'Grass',
		'type2': 'Poison',
		'baseStats': {
			'hp': 69,
			'atk': 55,
			'def': 45,
			'spa': 55,
			'spd': 55,
			'spe': 15
		},
		'weight': 1.0,
		'canEvolve': true
	},
	'Fraxure': {
		'type1': 'Dragon',
		'baseStats': {
			'hp': 66,
			'atk': 117,
			'def': 70,
			'spa': 40,
			'spd': 50,
			'spe': 67
		},
		'weight': 36.0,
		'canEvolve': true
	},
	'Frillish': {
		'type1': 'Water',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 55,
			'atk': 40,
			'def': 50,
			'spa': 65,
			'spd': 85,
			'spe': 40
		},
		'weight': 33.0,
		'canEvolve': true
	},
	'Galvantula': {
		'type1': 'Bug',
		'type2': 'Electric',
		'baseStats': {
			'hp': 70,
			'atk': 77,
			'def': 60,
			'spa': 97,
			'spd': 60,
			'spe': 108
		},
		'weight': 14.3
	},
	'Garbodor': {
		'type1': 'Poison',
		'baseStats': {
			'hp': 80,
			'atk': 95,
			'def': 82,
			'spa': 60,
			'spd': 82,
			'spe': 75
		},
		'weight': 107.3
	},
	'Genesect': {
		'type1': 'Bug',
		'type2': 'Steel',
		'baseStats': {
			'hp': 71,
			'atk': 120,
			'def': 95,
			'spa': 120,
			'spd': 95,
			'spe': 99
		},
		'weight': 82.5,
		'ability': 'Download',
		'gender': 'genderless'
	},
	'Gigalith': {
		'type1': 'Rock',
		'baseStats': {
			'hp': 85,
			'atk': 135,
			'def': 130,
			'spa': 60,
			'spd': 70,
			'spe': 25
		},
		'weight': 260.0
	},
	'Golett': {
		'type1': 'Ground',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 59,
			'atk': 74,
			'def': 50,
			'spa': 35,
			'spd': 50,
			'spe': 35
		},
		'weight': 92.0,
		'canEvolve': true,
		'gender': 'genderless'
	},
	'Golurk': {
		'type1': 'Ground',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 89,
			'atk': 124,
			'def': 80,
			'spa': 55,
			'spd': 80,
			'spe': 55
		},
		'weight': 330.0,
		'gender': 'genderless'
	},
	'Gothita': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 45,
			'atk': 30,
			'def': 50,
			'spa': 55,
			'spd': 65,
			'spe': 45
		},
		'weight': 5.8,
		'canEvolve': true
	},
	'Gothitelle': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 70,
			'atk': 55,
			'def': 95,
			'spa': 95,
			'spd': 110,
			'spe': 65
		},
		'weight': 44.0
	},
	'Gothorita': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 60,
			'atk': 45,
			'def': 70,
			'spa': 75,
			'spd': 85,
			'spe': 55
		},
		'weight': 18.0,
		'canEvolve': true
	},
	'Gurdurr': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 85,
			'atk': 105,
			'def': 85,
			'spa': 40,
			'spd': 50,
			'spe': 40
		},
		'weight': 40.0,
		'canEvolve': true
	},
	'Haxorus': {
		'type1': 'Dragon',
		'baseStats': {
			'hp': 76,
			'atk': 147,
			'def': 90,
			'spa': 60,
			'spd': 70,
			'spe': 97
		},
		'weight': 105.5
	},
	'Heatmor': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 85,
			'atk': 97,
			'def': 66,
			'spa': 105,
			'spd': 66,
			'spe': 65
		},
		'weight': 58.0
	},
	'Herdier': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 65,
			'atk': 80,
			'def': 65,
			'spa': 35,
			'spd': 65,
			'spe': 60
		},
		'weight': 14.7,
		'canEvolve': true
	},
	'Hydreigon': {
		'type1': 'Dark',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 92,
			'atk': 105,
			'def': 90,
			'spa': 125,
			'spd': 90,
			'spe': 98
		},
		'weight': 160.0,
		'ability': 'Levitate'
	},
	'Jellicent': {
		'type1': 'Water',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 100,
			'atk': 60,
			'def': 70,
			'spa': 85,
			'spd': 105,
			'spe': 60
		},
		'weight': 135.0
	},
	'Joltik': {
		'type1': 'Bug',
		'type2': 'Electric',
		'baseStats': {
			'hp': 50,
			'atk': 47,
			'def': 50,
			'spa': 57,
			'spd': 50,
			'spe': 65
		},
		'weight': 0.6,
		'canEvolve': true
	},
	'Karrablast': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 50,
			'atk': 75,
			'def': 45,
			'spa': 40,
			'spd': 45,
			'spe': 60
		},
		'weight': 5.9,
		'canEvolve': true
	},
	'Keldeo': {
		'type1': 'Water',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 91,
			'atk': 72,
			'def': 90,
			'spa': 129,
			'spd': 90,
			'spe': 108
		},
		'weight': 48.5,
		'ability': 'Justified',
		'gender': 'genderless'
	},
	'Klang': {
		'type1': 'Steel',
		'baseStats': {
			'hp': 60,
			'atk': 80,
			'def': 95,
			'spa': 70,
			'spd': 85,
			'spe': 50
		},
		'weight': 51.0,
		'canEvolve': true,
		'gender': 'genderless'
	},
	'Klink': {
		'type1': 'Steel',
		'baseStats': {
			'hp': 40,
			'atk': 55,
			'def': 70,
			'spa': 45,
			'spd': 60,
			'spe': 30
		},
		'weight': 21.0,
		'canEvolve': true,
		'gender': 'genderless'
	},
	'Klinklang': {
		'type1': 'Steel',
		'baseStats': {
			'hp': 60,
			'atk': 100,
			'def': 115,
			'spa': 70,
			'spd': 85,
			'spe': 90
		},
		'weight': 81.0,
		'gender': 'genderless'
	},
	'Krokorok': {
		'type1': 'Ground',
		'type2': 'Dark',
		'baseStats': {
			'hp': 60,
			'atk': 82,
			'def': 45,
			'spa': 45,
			'spd': 45,
			'spe': 74
		},
		'weight': 33.4,
		'canEvolve': true
	},
	'Krookodile': {
		'type1': 'Ground',
		'type2': 'Dark',
		'baseStats': {
			'hp': 95,
			'atk': 117,
			'def': 70,
			'spa': 65,
			'spd': 70,
			'spe': 92
		},
		'weight': 96.3
	},
	'Kyurem': {
		'type1': 'Dragon',
		'type2': 'Ice',
		'baseStats': {
			'hp': 125,
			'atk': 130,
			'def': 90,
			'spa': 130,
			'spd': 90,
			'spe': 95
		},
		'weight': 325.0,
		'ability': 'Pressure',
		'gender': 'genderless'
	},
	'Kyurem-Black': {
		'type1': 'Dragon',
		'type2': 'Ice',
		'baseStats': {
			'hp': 125,
			'atk': 170,
			'def': 100,
			'spa': 120,
			'spd': 90,
			'spe': 95
		},
		'weight': 325.0,
		'ability': 'Teravolt',
		'gender': 'genderless'
	},
	'Kyurem-White': {
		'type1': 'Dragon',
		'type2': 'Ice',
		'baseStats': {
			'hp': 125,
			'atk': 120,
			'def': 90,
			'spa': 170,
			'spd': 100,
			'spe': 95
		},
		'weight': 325.0,
		'ability': 'Turboblaze',
		'gender': 'genderless'
	},
	'Lampent': {
		'type1': 'Ghost',
		'type2': 'Fire',
		'baseStats': {
			'hp': 60,
			'atk': 40,
			'def': 60,
			'spa': 95,
			'spd': 60,
			'spe': 55
		},
		'weight': 13.0,
		'canEvolve': true
	},
	'Landorus': {
		'type1': 'Ground',
		'type2': 'Flying',
		'baseStats': {
			'hp': 89,
			'atk': 125,
			'def': 90,
			'spa': 115,
			'spd': 80,
			'spe': 101
		},
		'weight': 68.0
	},
	'Landorus-Therian': {
		'type1': 'Ground',
		'type2': 'Flying',
		'baseStats': {
			'hp': 89,
			'atk': 145,
			'def': 90,
			'spa': 105,
			'spd': 80,
			'spe': 91
		},
		'weight': 68.0,
		'ability': 'Intimidate'
	},
	'Larvesta': {
		'type1': 'Bug',
		'type2': 'Fire',
		'baseStats': {
			'hp': 55,
			'atk': 85,
			'def': 55,
			'spa': 50,
			'spd': 55,
			'spe': 60
		},
		'weight': 28.8,
		'canEvolve': true
	},
	'Leavanny': {
		'type1': 'Bug',
		'type2': 'Grass',
		'baseStats': {
			'hp': 75,
			'atk': 103,
			'def': 80,
			'spa': 70,
			'spd': 70,
			'spe': 92
		},
		'weight': 20.5
	},
	'Liepard': {
		'type1': 'Dark',
		'baseStats': {
			'hp': 64,
			'atk': 88,
			'def': 50,
			'spa': 88,
			'spd': 50,
			'spe': 106
		},
		'weight': 37.5
	},
	'Lilligant': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 70,
			'atk': 60,
			'def': 75,
			'spa': 110,
			'spd': 75,
			'spe': 90
		},
		'weight': 16.3
	},
	'Lillipup': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 45,
			'atk': 60,
			'def': 45,
			'spa': 25,
			'spd': 45,
			'spe': 55
		},
		'weight': 4.1,
		'canEvolve': true
	},
	'Litwick': {
		'type1': 'Ghost',
		'type2': 'Fire',
		'baseStats': {
			'hp': 50,
			'atk': 30,
			'def': 55,
			'spa': 65,
			'spd': 55,
			'spe': 20
		},
		'weight': 3.1,
		'canEvolve': true
	},
	'Malaconda': {
		'type1': 'Dark',
		'type2': 'Grass',
		'baseStats': {
			'hp': 115,
			'atk': 100,
			'def': 60,
			'spa': 40,
			'spd': 130,
			'spe': 55
		},
		'weight': 108.8
	},
	'Mandibuzz': {
		'type1': 'Dark',
		'type2': 'Flying',
		'baseStats': {
			'hp': 110,
			'atk': 65,
			'def': 105,
			'spa': 55,
			'spd': 95,
			'spe': 80
		},
		'weight': 39.5
	},
	'Maractus': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 75,
			'atk': 86,
			'def': 67,
			'spa': 106,
			'spd': 67,
			'spe': 60
		},
		'weight': 28.0
	},
	'Meloetta': {
		'type1': 'Normal',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 100,
			'atk': 77,
			'def': 77,
			'spa': 128,
			'spd': 128,
			'spe': 90
		},
		'weight': 6.5,
		'ability': 'Serene Grace',
		'formes': ['Meloetta', 'Meloetta-P'],
		'gender': 'genderless'
	},
	'Meloetta-P': {
		'type1': 'Normal',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 100,
			'atk': 128,
			'def': 90,
			'spa': 77,
			'spd': 77,
			'spe': 128
		},
		'weight': 6.5,
		'ability': 'Serene Grace',
		'isAlternateForme': true,
		'gender': 'genderless'
	},
	'Mienfoo': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 45,
			'atk': 85,
			'def': 50,
			'spa': 55,
			'spd': 50,
			'spe': 65
		},
		'weight': 20.0,
		'canEvolve': true
	},
	'Mienshao': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 65,
			'atk': 125,
			'def': 60,
			'spa': 95,
			'spd': 60,
			'spe': 105
		},
		'weight': 35.5
	},
	'Minccino': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 55,
			'atk': 50,
			'def': 40,
			'spa': 40,
			'spd': 40,
			'spe': 75
		},
		'weight': 5.8,
		'canEvolve': true
	},
	'Mollux': {
		'type1': 'Fire',
		'type2': 'Poison',
		'baseStats': {
			'hp': 95,
			'atk': 45,
			'def': 83,
			'spa': 131,
			'spd': 105,
			'spe': 76
		},
		'weight': 41.0
	},
	'Munna': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 76,
			'atk': 25,
			'def': 45,
			'spa': 67,
			'spd': 55,
			'spe': 24
		},
		'weight': 23.3,
		'canEvolve': true
	},
	'Musharna': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 116,
			'atk': 55,
			'def': 85,
			'spa': 107,
			'spd': 95,
			'spe': 29
		},
		'weight': 60.5
	},
	'Necturine': {
		'type1': 'Grass',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 49,
			'atk': 55,
			'def': 60,
			'spa': 50,
			'spd': 75,
			'spe': 51
		},
		'weight': 1.8
	},
	'Necturna': {
		'type1': 'Grass',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 64,
			'atk': 120,
			'def': 100,
			'spa': 85,
			'spd': 120,
			'spe': 81
		},
		'weight': 49.6
	},
	'Oshawott': {
		'type1': 'Water',
		'baseStats': {
			'hp': 55,
			'atk': 55,
			'def': 45,
			'spa': 63,
			'spd': 45,
			'spe': 45
		},
		'weight': 5.9,
		'canEvolve': true
	},
	'Palpitoad': {
		'type1': 'Water',
		'type2': 'Ground',
		'baseStats': {
			'hp': 75,
			'atk': 65,
			'def': 55,
			'spa': 65,
			'spd': 55,
			'spe': 69
		},
		'weight': 17.0,
		'canEvolve': true
	},
	'Panpour': {
		'type1': 'Water',
		'baseStats': {
			'hp': 50,
			'atk': 53,
			'def': 48,
			'spa': 53,
			'spd': 48,
			'spe': 64
		},
		'weight': 13.5,
		'canEvolve': true
	},
	'Pansage': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 50,
			'atk': 53,
			'def': 48,
			'spa': 53,
			'spd': 48,
			'spe': 64
		},
		'weight': 10.5,
		'canEvolve': true
	},
	'Pansear': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 50,
			'atk': 53,
			'def': 48,
			'spa': 53,
			'spd': 48,
			'spe': 64
		},
		'weight': 11.0,
		'canEvolve': true
	},
	'Patrat': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 45,
			'atk': 55,
			'def': 39,
			'spa': 35,
			'spd': 39,
			'spe': 42
		},
		'weight': 11.6,
		'canEvolve': true
	},
	'Pawniard': {
		'type1': 'Dark',
		'type2': 'Steel',
		'baseStats': {
			'hp': 45,
			'atk': 85,
			'def': 70,
			'spa': 40,
			'spd': 40,
			'spe': 60
		},
		'weight': 10.2,
		'canEvolve': true
	},
	'Petilil': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 45,
			'atk': 35,
			'def': 50,
			'spa': 70,
			'spd': 50,
			'spe': 30
		},
		'weight': 6.6,
		'canEvolve': true
	},
	'Pidove': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 50,
			'atk': 55,
			'def': 50,
			'spa': 36,
			'spd': 30,
			'spe': 43
		},
		'weight': 2.1,
		'canEvolve': true
	},
	'Pignite': {
		'type1': 'Fire',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 90,
			'atk': 93,
			'def': 55,
			'spa': 70,
			'spd': 55,
			'spe': 55
		},
		'weight': 55.5,
		'canEvolve': true
	},
	'Purrloin': {
		'type1': 'Dark',
		'baseStats': {
			'hp': 41,
			'atk': 50,
			'def': 37,
			'spa': 50,
			'spd': 37,
			'spe': 66
		},
		'weight': 10.1,
		'canEvolve': true
	},
	'Reshiram': {
		'type1': 'Dragon',
		'type2': 'Fire',
		'baseStats': {
			'hp': 100,
			'atk': 120,
			'def': 100,
			'spa': 150,
			'spd': 120,
			'spe': 90
		},
		'weight': 330.0,
		'ability': 'Turboblaze',
		'gender': 'genderless'
	},
	'Reuniclus': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 110,
			'atk': 65,
			'def': 75,
			'spa': 125,
			'spd': 85,
			'spe': 30
		},
		'weight': 20.1
	},
	'Roggenrola': {
		'type1': 'Rock',
		'baseStats': {
			'hp': 55,
			'atk': 75,
			'def': 85,
			'spa': 25,
			'spd': 25,
			'spe': 15
		},
		'weight': 18.0,
		'canEvolve': true
	},
	'Rufflet': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 70,
			'atk': 83,
			'def': 50,
			'spa': 37,
			'spd': 50,
			'spe': 60
		},
		'weight': 10.5,
		'canEvolve': true
	},
	'Samurott': {
		'type1': 'Water',
		'baseStats': {
			'hp': 95,
			'atk': 100,
			'def': 85,
			'spa': 108,
			'spd': 70,
			'spe': 70
		},
		'weight': 94.6
	},
	'Sandile': {
		'type1': 'Ground',
		'type2': 'Dark',
		'baseStats': {
			'hp': 50,
			'atk': 72,
			'def': 35,
			'spa': 35,
			'spd': 35,
			'spe': 65
		},
		'weight': 15.2,
		'canEvolve': true
	},
	'Sawk': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 75,
			'atk': 125,
			'def': 75,
			'spa': 30,
			'spd': 75,
			'spe': 85
		},
		'weight': 51.0
	},
	'Sawsbuck': {
		'type1': 'Normal',
		'type2': 'Grass',
		'baseStats': {
			'hp': 80,
			'atk': 100,
			'def': 70,
			'spa': 60,
			'spd': 70,
			'spe': 95
		},
		'weight': 92.5
	},
	'Scolipede': {
		'type1': 'Bug',
		'type2': 'Poison',
		'baseStats': {
			'hp': 60,
			'atk': 90,
			'def': 89,
			'spa': 55,
			'spd': 69,
			'spe': 112
		},
		'weight': 200.5
	},
	'Scrafty': {
		'type1': 'Dark',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 65,
			'atk': 90,
			'def': 115,
			'spa': 45,
			'spd': 115,
			'spe': 58
		},
		'weight': 30.0
	},
	'Scraggy': {
		'type1': 'Dark',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 50,
			'atk': 75,
			'def': 70,
			'spa': 35,
			'spd': 70,
			'spe': 48
		},
		'weight': 11.8,
		'canEvolve': true
	},
	'Scratchet': {
		'type1': 'Normal',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 55,
			'atk': 85,
			'def': 80,
			'spa': 20,
			'spd': 70,
			'spe': 40
		},
		'weight': 20.0
	},
	'Seismitoad': {
		'type1': 'Water',
		'type2': 'Ground',
		'baseStats': {
			'hp': 105,
			'atk': 85,
			'def': 75,
			'spa': 85,
			'spd': 75,
			'spe': 74
		},
		'weight': 62.0
	},
	'Serperior': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 75,
			'atk': 75,
			'def': 95,
			'spa': 75,
			'spd': 95,
			'spe': 113
		},
		'weight': 63.0
	},
	'Servine': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 60,
			'atk': 60,
			'def': 75,
			'spa': 60,
			'spd': 75,
			'spe': 83
		},
		'weight': 16.0,
		'canEvolve': true
	},
	'Sewaddle': {
		'type1': 'Bug',
		'type2': 'Grass',
		'baseStats': {
			'hp': 45,
			'atk': 53,
			'def': 70,
			'spa': 40,
			'spd': 60,
			'spe': 42
		},
		'weight': 2.5,
		'canEvolve': true
	},
	'Shelmet': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 50,
			'atk': 40,
			'def': 85,
			'spa': 40,
			'spd': 65,
			'spe': 25
		},
		'weight': 7.7,
		'canEvolve': true
	},
	'Sigilyph': {
		'type1': 'Psychic',
		'type2': 'Flying',
		'baseStats': {
			'hp': 72,
			'atk': 58,
			'def': 80,
			'spa': 103,
			'spd': 80,
			'spe': 97
		},
		'weight': 14.0
	},
	'Simipour': {
		'type1': 'Water',
		'baseStats': {
			'hp': 75,
			'atk': 98,
			'def': 63,
			'spa': 98,
			'spd': 63,
			'spe': 101
		},
		'weight': 29.0
	},
	'Simisage': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 75,
			'atk': 98,
			'def': 63,
			'spa': 98,
			'spd': 63,
			'spe': 101
		},
		'weight': 30.5
	},
	'Simisear': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 75,
			'atk': 98,
			'def': 63,
			'spa': 98,
			'spd': 63,
			'spe': 101
		},
		'weight': 28.0
	},
	'Snivy': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 45,
			'atk': 45,
			'def': 55,
			'spa': 45,
			'spd': 55,
			'spe': 63
		},
		'weight': 8.1,
		'canEvolve': true
	},
	'Solosis': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 45,
			'atk': 30,
			'def': 40,
			'spa': 105,
			'spd': 50,
			'spe': 20
		},
		'weight': 1.0,
		'canEvolve': true
	},
	'Stoutland': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 85,
			'atk': 100,
			'def': 90,
			'spa': 45,
			'spd': 90,
			'spe': 80
		},
		'weight': 61.0
	},
	'Stunfisk': {
		'type1': 'Ground',
		'type2': 'Electric',
		'baseStats': {
			'hp': 109,
			'atk': 66,
			'def': 84,
			'spa': 81,
			'spd': 99,
			'spe': 32
		},
		'weight': 11.0
	},
	'Swadloon': {
		'type1': 'Bug',
		'type2': 'Grass',
		'baseStats': {
			'hp': 55,
			'atk': 63,
			'def': 90,
			'spa': 50,
			'spd': 80,
			'spe': 42
		},
		'weight': 7.3,
		'canEvolve': true
	},
	'Swanna': {
		'type1': 'Water',
		'type2': 'Flying',
		'baseStats': {
			'hp': 75,
			'atk': 87,
			'def': 63,
			'spa': 87,
			'spd': 63,
			'spe': 98
		},
		'weight': 24.2
	},
	'Swoobat': {
		'type1': 'Psychic',
		'type2': 'Flying',
		'baseStats': {
			'hp': 67,
			'atk': 57,
			'def': 55,
			'spa': 77,
			'spd': 55,
			'spe': 114
		},
		'weight': 10.5,
	},
	'Tepig': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 65,
			'atk': 63,
			'def': 45,
			'spa': 45,
			'spd': 45,
			'spe': 45
		},
		'weight': 9.9,
		'canEvolve': true
	},
	'Terrakion': {
		'type1': 'Rock',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 91,
			'atk': 129,
			'def': 90,
			'spa': 72,
			'spd': 90,
			'spe': 108
		},
		'weight': 260.0,
		'ability': 'Justified',
		'gender': 'genderless'
	},
	'Throh': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 120,
			'atk': 100,
			'def': 85,
			'spa': 30,
			'spd': 85,
			'spe': 45
		},
		'weight': 55.5
	},
	'Thundurus': {
		'type1': 'Electric',
		'type2': 'Flying',
		'baseStats': {
			'hp': 79,
			'atk': 115,
			'def': 70,
			'spa': 125,
			'spd': 80,
			'spe': 111
		},
		'weight': 61.0
	},
	'Thundurus-Therian': {
		'type1': 'Electric',
		'type2': 'Flying',
		'baseStats': {
			'hp': 79,
			'atk': 105,
			'def': 70,
			'spa': 145,
			'spd': 80,
			'spe': 101
		},
		'weight': 61.0,
		'ability': 'Volt Absorb'
	},
	'Timburr': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 75,
			'atk': 80,
			'def': 55,
			'spa': 25,
			'spd': 35,
			'spe': 35
		},
		'weight': 12.5,
		'canEvolve': true
	},
	'Tirtouga': {
		'type1': 'Water',
		'type2': 'Rock',
		'baseStats': {
			'hp': 54,
			'atk': 78,
			'def': 103,
			'spa': 53,
			'spd': 45,
			'spe': 22
		},
		'weight': 16.5,
		'canEvolve': true
	},
	'Tomohawk': {
		'type1': 'Flying',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 105,
			'atk': 60,
			'def': 90,
			'spa': 115,
			'spd': 80,
			'spe': 85
		},
		'weight': 37.2
	},
	'Tornadus': {
		'type1': 'Flying',
		'baseStats': {
			'hp': 79,
			'atk': 115,
			'def': 70,
			'spa': 125,
			'spd': 80,
			'spe': 111
		},
		'weight': 63.0
	},
	'Tornadus-Therian': {
		'type1': 'Flying',
		'baseStats': {
			'hp': 79,
			'atk': 100,
			'def': 80,
			'spa': 110,
			'spd': 90,
			'spe': 121
		},
		'weight': 63.0,
		'ability': 'Regenerator'
	},
	'Tranquill': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 62,
			'atk': 77,
			'def': 62,
			'spa': 50,
			'spd': 42,
			'spe': 65
		},
		'weight': 15.0,
		'canEvolve': true
	},
	'Trubbish': {
		'type1': 'Poison',
		'baseStats': {
			'hp': 50,
			'atk': 50,
			'def': 62,
			'spa': 40,
			'spd': 62,
			'spe': 65
		},
		'weight': 31.0,
		'canEvolve': true
	},
	'Tympole': {
		'type1': 'Water',
		'baseStats': {
			'hp': 50,
			'atk': 50,
			'def': 40,
			'spa': 50,
			'spd': 40,
			'spe': 64
		},
		'weight': 4.5,
		'canEvolve': true
	},
	'Tynamo': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 35,
			'atk': 55,
			'def': 40,
			'spa': 45,
			'spd': 40,
			'spe': 60
		},
		'weight': 0.3,
		'ability': 'Levitate',
		'canEvolve': true
	},
	'Unfezant': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 80,
			'atk': 105,
			'def': 80,
			'spa': 65,
			'spd': 55,
			'spe': 93
		},
		'weight': 29.0
	},
	'Vanillish': {
		'type1': 'Ice',
		'baseStats': {
			'hp': 51,
			'atk': 65,
			'def': 65,
			'spa': 80,
			'spd': 75,
			'spe': 59
		},
		'weight': 41.0,
		'canEvolve': true
	},
	'Vanillite': {
		'type1': 'Ice',
		'baseStats': {
			'hp': 36,
			'atk': 50,
			'def': 50,
			'spa': 65,
			'spd': 60,
			'spe': 44
		},
		'weight': 5.7,
		'canEvolve': true
	},
	'Vanilluxe': {
		'type1': 'Ice',
		'baseStats': {
			'hp': 71,
			'atk': 95,
			'def': 85,
			'spa': 110,
			'spd': 95,
			'spe': 79
		},
		'weight': 57.5
	},
	'Venipede': {
		'type1': 'Bug',
		'type2': 'Poison',
		'baseStats': {
			'hp': 30,
			'atk': 45,
			'def': 59,
			'spa': 30,
			'spd': 39,
			'spe': 57
		},
		'weight': 5.3,
		'canEvolve': true
	},
	'Victini': {
		'type1': 'Psychic',
		'type2': 'Fire',
		'baseStats': {
			'hp': 100,
			'atk': 100,
			'def': 100,
			'spa': 100,
			'spd': 100,
			'spe': 100
		},
		'weight': 4.0,
		'ability': 'Victory Star',
		'gender': 'genderless'
	},
	'Virizion': {
		'type1': 'Grass',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 91,
			'atk': 90,
			'def': 72,
			'spa': 90,
			'spd': 129,
			'spe': 108
		},
		'weight': 200.0,
		'ability': 'Justified',
		'gender': 'genderless'
	},
	'Volcarona': {
		'type1': 'Bug',
		'type2': 'Fire',
		'baseStats': {
			'hp': 85,
			'atk': 60,
			'def': 65,
			'spa': 135,
			'spd': 105,
			'spe': 100
		},
		'weight': 46.0
	},
	'Vullaby': {
		'type1': 'Dark',
		'type2': 'Flying',
		'baseStats': {
			'hp': 70,
			'atk': 55,
			'def': 75,
			'spa': 45,
			'spd': 65,
			'spe': 60
		},
		'weight': 9.0,
		'canEvolve': true
	},
	'Watchog': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 60,
			'atk': 85,
			'def': 69,
			'spa': 60,
			'spd': 69,
			'spe': 77
		},
		'weight': 27.0
	},
	'Whimsicott': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 60,
			'atk': 67,
			'def': 85,
			'spa': 77,
			'spd': 75,
			'spe': 116
		},
		'weight': 6.6
	},
	'Whirlipede': {
		'type1': 'Bug',
		'type2': 'Poison',
		'baseStats': {
			'hp': 40,
			'atk': 55,
			'def': 99,
			'spa': 40,
			'spd': 79,
			'spe': 47
		},
		'weight': 58.5,
		'canEvolve': true
	},
	'Woobat': {
		'type1': 'Psychic',
		'type2': 'Flying',
		'baseStats': {
			'hp': 55,
			'atk': 45,
			'def': 43,
			'spa': 55,
			'spd': 43,
			'spe': 72
		},
		'weight': 2.1,
		'canEvolve': true
	},
	'Yamask': {
		'type1': 'Ghost',
		'baseStats': {
			'hp': 38,
			'atk': 30,
			'def': 85,
			'spa': 55,
			'spd': 65,
			'spe': 30
		},
		'weight': 1.5,
		'ability': 'Mummy',
		'canEvolve': true
	},
	'Zebstrika': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 75,
			'atk': 100,
			'def': 63,
			'spa': 80,
			'spd': 63,
			'spe': 116
		},
		'weight': 79.5
	},
	'Zekrom': {
		'type1': 'Dragon',
		'type2': 'Electric',
		'baseStats': {
			'hp': 100,
			'atk': 150,
			'def': 120,
			'spa': 120,
			'spd': 100,
			'spe': 90
		},
		'weight': 345.0,
		'ability': 'Teravolt',
		'gender': 'genderless'
	},
	'Zoroark': {
		'type1': 'Dark',
		'baseStats': {
			'hp': 60,
			'atk': 105,
			'def': 60,
			'spa': 120,
			'spd': 60,
			'spe': 105
		},
		'weight': 81.1,
		'ability': 'Illusion'
	},
	'Zorua': {
		'type1': 'Dark',
		'baseStats': {
			'hp': 40,
			'atk': 65,
			'def': 40,
			'spa': 80,
			'spd': 40,
			'spe': 65
		},
		'weight': 12.5,
		'ability': 'Illusion',
		'canEvolve': true
	},
	'Zweilous': {
		'type1': 'Dark',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 72,
			'atk': 85,
			'def': 70,
			'spa': 65,
			'spd': 70,
			'spe': 58
		},
		'weight': 50.0,
		'ability': 'Hustle',
		'canEvolve': true
	}
});

/** @type {Pokedex} */
const XY = $.extend(true, {}, BW, {
	'Venusaur': {'formes': ['Venusaur', 'Venusaur-Mega']},
	'Charizard': {'formes': ['Charizard', 'Charizard-Mega-X', 'Charizard-Mega-Y']},
	'Blastoise': {'formes': ['Blastoise', 'Blastoise-Mega']},
	'Butterfree': {'baseStats': {'spa': 90}},
	'Beedrill': {'baseStats': {'atk': 90}, 'formes': ['Beedrill', 'Beedrill-Mega']},
	'Pidgeot': {'baseStats': {'spe': 101}, 'formes': ['Pidgeot', 'Pidgeot-Mega']},
	'Pikachu': {'baseStats': {'def': 40, 'spd': 50}},
	'Raichu': {'baseStats': {'spe': 110}},
	'Nidoqueen': {'baseStats': {'atk': 92}},
	'Nidoking': {'baseStats': {'atk': 102}},
	'Clefairy': {'type1': 'Fairy'},
	'Clefable': {'type1': 'Fairy', 'baseStats': {'spa': 95}},
	'Jigglypuff': {'type2': 'Fairy'},
	'Wigglytuff': {'type2': 'Fairy', 'baseStats': {'spa': 85}},
	'Vileplume': {'baseStats': {'spa': 110}},
	'Poliwrath': {'baseStats': {'atk': 95}},
	'Alakazam': {'baseStats': {'spd': 95}, 'formes': ['Alakazam', 'Alakazam-Mega']},
	'Victreebel': {'baseStats': {'spd': 70}},
	'Golem': {'baseStats': {'atk': 120}},
	'Slowbro': {'formes': ['Slowbro', 'Slowbro-Mega']},
	'Gengar': {'formes': ['Gengar', 'Gengar-Mega']},
	'Kangaskhan': {'formes': ['Kangaskhan', 'Kangaskhan-Mega']},
	'Mr. Mime': {'type2': 'Fairy'},
	'Pinsir': {'formes': ['Pinsir', 'Pinsir-Mega']},
	'Gyarados': {'formes': ['Gyarados', 'Gyarados-Mega']},
	'Aerodactyl': {'formes': ['Aerodactyl', 'Aerodactyl-Mega']},
	'Mewtwo': {'formes': ['Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y']},
	'Cleffa': {'type1': 'Fairy'},
	'Igglybuff': {'type2': 'Fairy'},
	'Togepi': {'type1': 'Fairy'},
	'Togetic': {'type1': 'Fairy'},
	'Ampharos': {'baseStats': {'def': 85}, 'formes': ['Ampharos', 'Ampharos-Mega']},
	'Bellossom': {'baseStats': {'def': 95}},
	'Marill': {'type2': 'Fairy'},
	'Azumarill': {'type2': 'Fairy', 'baseStats': {'spa': 60}},
	'Jumpluff': {'baseStats': {'spd': 95}},
	'Steelix': {'formes': ['Steelix', 'Steelix-Mega']},
	'Snubbull': {'type1': 'Fairy'},
	'Granbull': {'type1': 'Fairy'},
	'Scizor': {'formes': ['Scizor', 'Scizor-Mega']},
	'Heracross': {'formes': ['Heracross', 'Heracross-Mega']},
	'Houndoom': {'formes': ['Houndoom', 'Houndoom-Mega']},
	'Tyranitar': {'formes': ['Tyranitar', 'Tyranitar-Mega']},
	'Sceptile': {'formes': ['Sceptile', 'Sceptile-Mega']},
	'Blaziken': {'formes': ['Blaziken', 'Blaziken-Mega']},
	'Swampert': {'formes': ['Swampert', 'Swampert-Mega']},
	'Beautifly': {'baseStats': {'spa': 100}},
	'Ralts': {'type2': 'Fairy'},
	'Kirlia': {'type2': 'Fairy'},
	'Gardevoir': {'type2': 'Fairy', 'formes': ['Gardevoir', 'Gardevoir-Mega']},
	'Exploud': {'baseStats': {'spd': 73}},
	'Azurill': {'type2': 'Fairy'},
	'Sableye': {'formes': ['Sableye', 'Sableye-Mega']},
	'Mawile': {'type2': 'Fairy', 'formes': ['Mawile', 'Mawile-Mega']},
	'Aggron': {'formes': ['Aggron', 'Aggron-Mega']},
	'Medicham': {'formes': ['Medicham', 'Medicham-Mega']},
	'Manectric': {'formes': ['Manectric', 'Manectric-Mega']},
	'Sharpedo': {'formes': ['Sharpedo', 'Sharpedo-Mega']},
	'Camerupt': {'formes': ['Camerupt', 'Camerupt-Mega']},
	'Altaria': {'formes': ['Altaria', 'Altaria-Mega']},
	'Banette': {'formes': ['Banette', 'Banette-Mega']},
	'Absol': {'formes': ['Absol', 'Absol-Mega']},
	'Glalie': {'formes': ['Glalie', 'Glalie-Mega']},
	'Salamence': {'formes': ['Salamence', 'Salamence-Mega']},
	'Metagross': {'formes': ['Metagross', 'Metagross-Mega']},
	'Latias': {'formes': ['Latias', 'Latias-Mega']},
	'Latios': {'formes': ['Latios', 'Latios-Mega']},
	'Kyogre': {'formes': ['Kyogre', 'Kyogre-Primal']},
	'Groudon': {'formes': ['Groudon', 'Groudon-Primal']},
	'Rayquaza': {'formes': ['Rayquaza', 'Rayquaza-Mega']},
	'Staraptor': {'baseStats': {'spd': 60}},
	'Roserade': {'baseStats': {'def': 65}},
	'Lopunny': {'formes': ['Lopunny', 'Lopunny-Mega']},
	'Mime Jr.': {'type2': 'Fairy'},
	'Garchomp': {'formes': ['Garchomp', 'Garchomp-Mega']},
	'Lucario': {'formes': ['Lucario', 'Lucario-Mega']},
	'Abomasnow': {'formes': ['Abomasnow', 'Abomasnow-Mega']},
	'Togekiss': {'type1': 'Fairy'},
	'Gallade': {'formes': ['Gallade', 'Gallade-Mega']},
	'Stoutland': {'baseStats': {'atk': 110}},
	'Unfezant': {'baseStats': {'atk': 115}},
	'Gigalith': {'baseStats': {'spd': 80}},
	'Audino': {'formes': ['Audino', 'Audino-Mega']},
	'Seismitoad': {'baseStats': {'atk': 95}},
	'Leavanny': {'baseStats': {'spd': 80}},
	'Scolipede': {'baseStats': {'atk': 100}},
	'Cottonee': {'type2': 'Fairy'},
	'Whimsicott': {'type2': 'Fairy'},
	'Krookodile': {'baseStats': {'def': 80}},
	'Aegislash-Blade': {
		'type1': 'Steel',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 60,
			'atk': 150,
			'def': 50,
			'spa': 150,
			'spd': 50,
			'spe': 60
		},
		'weight': 10.0,
		'ability': 'Stance Change',
		'formes': ['Aegislash-Blade', 'Aegislash-Shield']
	},
	'Aegislash-Shield': {
		'type1': 'Steel',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 60,
			'atk': 50,
			'def': 150,
			'spa': 50,
			'spd': 150,
			'spe': 60
		},
		'weight': 52.0,
		'ability': 'Stance Change',
		'isAlternateForme': true
	},
	'Amaura': {
		'type1': 'Rock',
		'type2': 'Ice',
		'baseStats': {
			'hp': 77,
			'atk': 59,
			'def': 50,
			'spa': 67,
			'spd': 63,
			'spe': 46
		},
		'weight': 25.2,
		'canEvolve': true
	},
	'Arceus-Fairy': {
		'type1': 'Fairy',
		'baseStats': {
			'hp': 120,
			'atk': 120,
			'def': 120,
			'spa': 120,
			'spd': 120,
			'spe': 120
		},
		'weight': 320.0,
		'ability': 'Multitype'
	},
	'Aromatisse': {
		'type1': 'Fairy',
		'baseStats': {
			'hp': 101,
			'atk': 72,
			'def': 72,
			'spa': 99,
			'spd': 89,
			'spe': 29
		},
		'weight': 15.5
	},
	'Aurorus': {
		'type1': 'Rock',
		'type2': 'Ice',
		'baseStats': {
			'hp': 123,
			'atk': 77,
			'def': 72,
			'spa': 99,
			'spd': 92,
			'spe': 58
		},
		'weight': 225.0
	},
	'Avalugg': {
		'type1': 'Ice',
		'baseStats': {
			'hp': 95,
			'atk': 117,
			'def': 184,
			'spa': 44,
			'spd': 46,
			'spe': 28
		},
		'weight': 505.0
	},
	'Barbaracle': {
		'type1': 'Rock',
		'type2': 'Water',
		'baseStats': {
			'hp': 72,
			'atk': 105,
			'def': 115,
			'spa': 54,
			'spd': 86,
			'spe': 68
		},
		'weight': 96.0
	},
	'Bergmite': {
		'type1': 'Ice',
		'baseStats': {
			'hp': 55,
			'atk': 69,
			'def': 85,
			'spa': 32,
			'spd': 35,
			'spe': 28
		},
		'weight': 99.5,
		'canEvolve': true
	},
	'Binacle': {
		'type1': 'Rock',
		'type2': 'Water',
		'baseStats': {
			'hp': 42,
			'atk': 52,
			'def': 67,
			'spa': 39,
			'spd': 56,
			'spe': 50
		},
		'weight': 31.0,
		'canEvolve': true
	},
	'Braixen': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 59,
			'atk': 59,
			'def': 58,
			'spa': 90,
			'spd': 70,
			'spe': 73
		},
		'weight': 14.5,
		'canEvolve': true
	},
	'Bunnelby': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 38,
			'atk': 36,
			'def': 38,
			'spa': 32,
			'spd': 36,
			'spe': 57
		},
		'weight': 5.0,
		'canEvolve': true
	},
	'Caimanoe': {
		'type1': 'Water',
		'type2': 'Steel',
		'baseStats': {
			'hp': 73,
			'atk': 85,
			'def': 65,
			'spa': 80,
			'spd': 40,
			'spe': 87
		},
		'weight': 72.5
	},
	'Carbink': {
		'type1': 'Rock',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 50,
			'atk': 50,
			'def': 150,
			'spa': 50,
			'spd': 150,
			'spe': 50
		},
		'weight': 5.7,
		'gender': 'genderless'
	},
	'Chesnaught': {
		'type1': 'Grass',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 88,
			'atk': 107,
			'def': 122,
			'spa': 74,
			'spd': 75,
			'spe': 64
		},
		'weight': 90.0
	},
	'Chespin': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 56,
			'atk': 61,
			'def': 65,
			'spa': 48,
			'spd': 45,
			'spe': 38
		},
		'weight': 9.0,
		'canEvolve': true
	},
	'Clauncher': {
		'type1': 'Water',
		'baseStats': {
			'hp': 50,
			'atk': 53,
			'def': 62,
			'spa': 58,
			'spd': 63,
			'spe': 44
		},
		'weight': 8.3,
		'ability': 'Mega Launcher',
		'canEvolve': true
	},
	'Clawitzer': {
		'type1': 'Water',
		'baseStats': {
			'hp': 71,
			'atk': 73,
			'def': 88,
			'spa': 120,
			'spd': 89,
			'spe': 59
		},
		'weight': 35.3,
		'ability': 'Mega Launcher'
	},
	'Crucibelle': {
		'type1': 'Rock',
		'type2': 'Poison',
		'baseStats': {
			'hp': 106,
			'atk': 105,
			'def': 65,
			'spa': 75,
			'spd': 85,
			'spe': 104
		},
		'weight': 23.6
	},
	'Diancie': {
		'type1': 'Rock',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 50,
			'atk': 100,
			'def': 150,
			'spa': 100,
			'spd': 150,
			'spe': 50
		},
		'weight': 8.8,
		'ability': 'Clear Body',
		'formes': ['Diancie', 'Diancie-Mega'],
		'gender': 'genderless'
	},
	'Dedenne': {
		'type1': 'Electric',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 67,
			'atk': 58,
			'def': 57,
			'spa': 81,
			'spd': 67,
			'spe': 101
		},
		'weight': 2.2
	},
	'Delphox': {
		'type1': 'Fire',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 75,
			'atk': 69,
			'def': 72,
			'spa': 114,
			'spd': 100,
			'spe': 104
		},
		'weight': 39.0
	},
	'Diggersby': {
		'type1': 'Normal',
		'type2': 'Ground',
		'baseStats': {
			'hp': 85,
			'atk': 56,
			'def': 77,
			'spa': 50,
			'spd': 77,
			'spe': 78
		},
		'weight': 10.0
	},
	'Doublade': {
		'type1': 'Steel',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 59,
			'atk': 110,
			'def': 150,
			'spa': 45,
			'spd': 49,
			'spe': 35
		},
		'weight': 4.5,
		'ability': 'No Guard',
		'canEvolve': true
	},
	'Dragalge': {
		'type1': 'Poison',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 65,
			'atk': 75,
			'def': 90,
			'spa': 97,
			'spd': 123,
			'spe': 44
		},
		'weight': 81.5
	},
	'Espurr': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 62,
			'atk': 48,
			'def': 54,
			'spa': 63,
			'spd': 60,
			'spe': 68
		},
		'weight': 3.5,
		'canEvolve': true
	},
	'Fennekin': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 40,
			'atk': 45,
			'def': 40,
			'spa': 62,
			'spd': 60,
			'spe': 60
		},
		'weight': 9.4,
		'canEvolve': true
	},
	'Flabebe': {
		'type1': 'Fairy',
		'baseStats': {
			'hp': 44,
			'atk': 38,
			'def': 39,
			'spa': 61,
			'spd': 79,
			'spe': 42
		},
		'weight': 0.1,
		'canEvolve': true
	},
	'Fletchinder': {
		'type1': 'Fire',
		'type2': 'Flying',
		'baseStats': {
			'hp': 62,
			'atk': 73,
			'def': 55,
			'spa': 56,
			'spd': 52,
			'spe': 84
		},
		'weight': 10.0,
		'canEvolve': true
	},
	'Fletchling': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 45,
			'atk': 50,
			'def': 43,
			'spa': 40,
			'spd': 38,
			'spe': 62
		},
		'weight': 1.7,
		'canEvolve': true
	},
	'Floatoy': {
		'type1': 'Water',
		'baseStats': {
			'hp': 48,
			'atk': 70,
			'def': 40,
			'spa': 70,
			'spd': 30,
			'spe': 77
		},
		'weight': 1.9
	},
	'Floette': {
		'type1': 'Fairy',
		'baseStats': {
			'hp': 54,
			'atk': 45,
			'def': 47,
			'spa': 75,
			'spd': 98,
			'spe': 52
		},
		'weight': 0.9,
		'canEvolve': true
	},
	'Floette-Eternal': {
		'type1': 'Fairy',
		'baseStats': {
			'hp': 74,
			'atk': 65,
			'def': 67,
			'spa': 125,
			'spd': 128,
			'spe': 92
		},
		'weight': 0.9,
		'ability': 'Flower Veil'
	},
	'Florges': {
		'type1': 'Fairy',
		'baseStats': {
			'hp': 78,
			'atk': 65,
			'def': 68,
			'spa': 112,
			'spd': 154,
			'spe': 75
		},
		'weight': 10.0
	},
	'Froakie': {
		'type1': 'Water',
		'baseStats': {
			'hp': 41,
			'atk': 56,
			'def': 40,
			'spa': 62,
			'spd': 44,
			'spe': 71
		},
		'weight': 7.0,
		'canEvolve': true
	},
	'Frogadier': {
		'type1': 'Water',
		'baseStats': {
			'hp': 54,
			'atk': 63,
			'def': 52,
			'spa': 83,
			'spd': 56,
			'spe': 97
		},
		'weight': 10.9,
		'canEvolve': true
	},
	'Furfrou': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 75,
			'atk': 80,
			'def': 60,
			'spa': 65,
			'spd': 90,
			'spe': 102
		},
		'weight': 28.0,
		'ability': 'Fur Coat'
	},
	'Gogoat': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 123,
			'atk': 100,
			'def': 62,
			'spa': 97,
			'spd': 81,
			'spe': 68
		},
		'weight': 91.0,
		'canEvolve': true
	},
	'Goodra': {
		'type1': 'Dragon',
		'baseStats': {
			'hp': 90,
			'atk': 100,
			'def': 70,
			'spa': 110,
			'spd': 150,
			'spe': 80
		},
		'weight': 150.5
	},
	'Goomy': {
		'type1': 'Dragon',
		'baseStats': {
			'hp': 45,
			'atk': 50,
			'def': 35,
			'spa': 55,
			'spd': 75,
			'spe': 40
		},
		'weight': 2.8,
		'canEvolve': true
	},
	'Gourgeist': {
		'type1': 'Ghost',
		'type2': 'Grass',
		'baseStats': {
			'hp': 65,
			'atk': 90,
			'def': 122,
			'spa': 58,
			'spd': 75,
			'spe': 84
		},
		'weight': 10.0
	},
	'Gourgeist-Large': {
		'type1': 'Ghost',
		'type2': 'Grass',
		'baseStats': {
			'hp': 75,
			'atk': 95,
			'def': 122,
			'spa': 58,
			'spd': 75,
			'spe': 69
		},
		'weight': 10.0
	},
	'Gourgeist-Small': {
		'type1': 'Ghost',
		'type2': 'Grass',
		'baseStats': {
			'hp': 55,
			'atk': 85,
			'def': 122,
			'spa': 58,
			'spd': 75,
			'spe': 99
		},
		'weight': 10.0
	},
	'Gourgeist-Super': {
		'type1': 'Ghost',
		'type2': 'Grass',
		'baseStats': {
			'hp': 85,
			'atk': 100,
			'def': 122,
			'spa': 58,
			'spd': 75,
			'spe': 54
		},
		'weight': 10.0
	},
	'Greninja': {
		'type1': 'Water',
		'type2': 'Dark',
		'baseStats': {
			'hp': 72,
			'atk': 95,
			'def': 67,
			'spa': 103,
			'spd': 71,
			'spe': 122
		},
		'weight': 40.0,
		'ability': 'Protean'
	},
	'Hawlucha': {
		'type1': 'Fighting',
		'type2': 'Flying',
		'baseStats': {
			'hp': 78,
			'atk': 92,
			'def': 75,
			'spa': 74,
			'spd': 63,
			'spe': 118
		},
		'weight': 21.5
	},
	'Heliolisk': {
		'type1': 'Electric',
		'type2': 'Normal',
		'baseStats': {
			'hp': 62,
			'atk': 55,
			'def': 52,
			'spa': 109,
			'spd': 94,
			'spe': 109
		},
		'weight': 21.0
	},
	'Helioptile': {
		'type1': 'Electric',
		'type2': 'Normal',
		'baseStats': {
			'hp': 44,
			'atk': 38,
			'def': 33,
			'spa': 61,
			'spd': 43,
			'spe': 70
		},
		'weight': 6.0,
		'canEvolve': true
	},
	'Honedge': {
		'type1': 'Steel',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 45,
			'atk': 80,
			'def': 100,
			'spa': 35,
			'spd': 37,
			'spe': 28
		},
		'weight': 2.0,
		'ability': 'No Guard',
		'canEvolve': true
	},
	'Hoopa': {
		'type1': 'Psychic',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 80,
			'atk': 110,
			'def': 60,
			'spa': 150,
			'spd': 130,
			'spe': 70
		},
		'weight': 9.0,
		'gender': 'genderless'
	},
	'Hoopa-Unbound': {
		'type1': 'Psychic',
		'type2': 'Dark',
		'baseStats': {
			'hp': 80,
			'atk': 160,
			'def': 60,
			'spa': 170,
			'spd': 130,
			'spe': 80
		},
		'weight': 490.0,
		'gender': 'genderless'
	},
	'Inkay': {
		'type1': 'Dark',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 53,
			'atk': 54,
			'def': 53,
			'spa': 37,
			'spd': 46,
			'spe': 45
		},
		'weight': 3.5,
		'canEvolve': true
	},
	'Kerfluffle': {
		'type1': 'Fairy',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 84,
			'atk': 78,
			'def': 86,
			'spa': 115,
			'spd': 88,
			'spe': 119
		},
		'weight': 24.2,
		'ability': 'Natural Cure'
	},
	'Klefki': {
		'type1': 'Steel',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 57,
			'atk': 80,
			'def': 91,
			'spa': 80,
			'spd': 87,
			'spe': 75
		},
		'weight': 3.0
	},
	'Litleo': {
		'type1': 'Fire',
		'type2': 'Normal',
		'baseStats': {
			'hp': 62,
			'atk': 50,
			'def': 58,
			'spa': 73,
			'spd': 54,
			'spe': 72
		},
		'weight': 13.5,
		'canEvolve': true
	},
	'Malamar': {
		'type1': 'Dark',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 86,
			'atk': 92,
			'def': 88,
			'spa': 68,
			'spd': 75,
			'spe': 73
		},
		'weight': 47.0
	},
	'Abomasnow-Mega': {
		'type1': 'Grass',
		'type2': 'Ice',
		'baseStats': {
			'hp': 90,
			'atk': 132,
			'def': 105,
			'spa': 132,
			'spd': 105,
			'spe': 30
		},
		'weight': 185.0,
		'ability': 'Snow Warning',
		'isAlternateForme': true
	},
	'Absol-Mega': {
		'type1': 'Dark',
		'baseStats': {
			'hp': 65,
			'atk': 150,
			'def': 60,
			'spa': 115,
			'spd': 60,
			'spe': 115
		},
		'weight': 49.0,
		'ability': 'Magic Bounce',
		'isAlternateForme': true
	},
	'Aerodactyl-Mega': {
		'type1': 'Rock',
		'type2': 'Flying',
		'baseStats': {
			'hp': 80,
			'atk': 135,
			'def': 85,
			'spa': 70,
			'spd': 95,
			'spe': 150
		},
		'weight': 79.0,
		'ability': 'Tough Claws',
		'isAlternateForme': true
	},
	'Aggron-Mega': {
		'type1': 'Steel',
		'baseStats': {
			'hp': 70,
			'atk': 140,
			'def': 230,
			'spa': 60,
			'spd': 80,
			'spe': 50
		},
		'weight': 395.0,
		'ability': 'Filter',
		'isAlternateForme': true
	},
	'Alakazam-Mega': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 55,
			'atk': 50,
			'def': 65,
			'spa': 175,
			'spd': 95,
			'spe': 150
		},
		'weight': 48.0,
		'ability': 'Trace',
		'isAlternateForme': true
	},
	'Altaria-Mega': {
		'type1': 'Dragon',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 75,
			'atk': 110,
			'def': 110,
			'spa': 110,
			'spd': 105,
			'spe': 80
		},
		'weight': 20.6,
		'ability': 'Pixilate',
		'isAlternateForme': true
	},
	'Ampharos-Mega': {
		'type1': 'Electric',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 90,
			'atk': 95,
			'def': 105,
			'spa': 165,
			'spd': 110,
			'spe': 45
		},
		'weight': 61.5,
		'ability': 'Mold Breaker',
		'isAlternateForme': true
	},
	'Audino-Mega': {
		'type1': 'Normal',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 103,
			'atk': 60,
			'def': 126,
			'spa': 80,
			'spd': 126,
			'spe': 50
		},
		'weight': 32.0,
		'ability': 'Healer',
		'isAlternateForme': true
	},
	'Banette-Mega': {
		'type1': 'Ghost',
		'baseStats': {
			'hp': 64,
			'atk': 165,
			'def': 75,
			'spa': 93,
			'spd': 83,
			'spe': 75
		},
		'weight': 13.0,
		'ability': 'Prankster',
		'isAlternateForme': true
	},
	'Beedrill-Mega': {
		'type1': 'Bug',
		'type2': 'Poison',
		'baseStats': {
			'hp': 65,
			'atk': 150,
			'def': 40,
			'spa': 15,
			'spd': 80,
			'spe': 145,
		},
		'weight': 40.5,
		'ability': 'Adaptability',
		'isAlternateForme': true
	},
	'Blastoise-Mega': {
		'type1': 'Water',
		'baseStats': {
			'hp': 79,
			'atk': 103,
			'def': 120,
			'spa': 135,
			'spd': 115,
			'spe': 78
		},
		'weight': 101.1,
		'ability': 'Mega Launcher',
		'isAlternateForme': true
	},
	'Blaziken-Mega': {
		'type1': 'Fire',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 80,
			'atk': 160,
			'def': 80,
			'spa': 130,
			'spd': 80,
			'spe': 100
		},
		'weight': 52.0,
		'ability': 'Speed Boost',
		'isAlternateForme': true
	},
	'Camerupt-Mega': {
		'type1': 'Fire',
		'type2': 'Ground',
		'baseStats': {
			'hp': 70,
			'atk': 120,
			'def': 100,
			'spa': 145,
			'spd': 105,
			'spe': 20
		},
		'weight': 320.5,
		'ability': 'Sheer Force',
		'isAlternateForme': true
	},
	'Charizard-Mega-X': {
		'type1': 'Fire',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 78,
			'atk': 130,
			'def': 111,
			'spa': 130,
			'spd': 85,
			'spe': 100
		},
		'weight': 110.5,
		'ability': 'Tough Claws',
		'isAlternateForme': true
	},
	'Charizard-Mega-Y': {
		'type1': 'Fire',
		'type2': 'Flying',
		'baseStats': {
			'hp': 78,
			'atk': 104,
			'def': 78,
			'spa': 159,
			'spd': 115,
			'spe': 100
		},
		'weight': 100.5,
		'ability': 'Drought',
		'isAlternateForme': true
	},
	'Crucibelle-Mega': {
		'type1': 'Rock',
		'type2': 'Poison',
		'baseStats': {
			'hp': 106,
			'atk': 135,
			'def': 75,
			'spa': 85,
			'spd': 125,
			'spe': 114
		},
		'weight': 22.5,
		'ability': 'Magic Guard',
		'isAlternateForme': true
	},
	'Diancie-Mega': {
		'type1': 'Rock',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 50,
			'atk': 160,
			'def': 110,
			'spa': 160,
			'spd': 110,
			'spe': 110
		},
		'weight': 27.8,
		'ability': 'Magic Bounce',
		'isAlternateForme': true,
		'gender': 'genderless'
	},
	'Gallade-Mega': {
		'type1': 'Psychic',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 68,
			'atk': 165,
			'def': 95,
			'spa': 65,
			'spd': 115,
			'spe': 110
		},
		'weight': 56.4,
		'ability': 'Inner Focus',
		'isAlternateForme': true
	},
	'Garchomp-Mega': {
		'type1': 'Dragon',
		'type2': 'Ground',
		'baseStats': {
			'hp': 108,
			'atk': 170,
			'def': 115,
			'spa': 120,
			'spd': 95,
			'spe': 92
		},
		'weight': 95.0,
		'ability': 'Sand Force',
		'isAlternateForme': true
	},
	'Gardevoir-Mega': {
		'type1': 'Psychic',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 68,
			'atk': 85,
			'def': 65,
			'spa': 165,
			'spd': 135,
			'spe': 100
		},
		'weight': 48.4,
		'ability': 'Pixilate',
		'isAlternateForme': true
	},
	'Gengar-Mega': {
		'type1': 'Ghost',
		'type2': 'Poison',
		'baseStats': {
			'hp': 60,
			'atk': 65,
			'def': 80,
			'spa': 170,
			'spd': 95,
			'spe': 130
		},
		'weight': 40.5,
		'ability': 'Shadow Tag',
		'isAlternateForme': true
	},
	'Glalie-Mega': {
		'type1': 'Ice',
		'baseStats': {
			'hp': 80,
			'atk': 120,
			'def': 80,
			'spa': 120,
			'spd': 80,
			'spe': 100
		},
		'weight': 350.2,
		'ability': 'Refrigerate',
		'isAlternateForme': true
	},
	'Gyarados-Mega': {
		'type1': 'Water',
		'type2': 'Dark',
		'baseStats': {
			'hp': 95,
			'atk': 155,
			'def': 109,
			'spa': 70,
			'spd': 130,
			'spe': 81
		},
		'weight': 305.0,
		'ability': 'Mold Breaker',
		'isAlternateForme': true
	},
	'Heracross-Mega': {
		'type1': 'Bug',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 80,
			'atk': 185,
			'def': 115,
			'spa': 40,
			'spd': 105,
			'spe': 75
		},
		'weight': 62.5,
		'ability': 'Skill Link',
		'isAlternateForme': true
	},
	'Houndoom-Mega': {
		'type1': 'Dark',
		'type2': 'Fire',
		'baseStats': {
			'hp': 75,
			'atk': 90,
			'def': 90,
			'spa': 140,
			'spd': 90,
			'spe': 115
		},
		'weight': 49.5,
		'ability': 'Solar Power',
		'isAlternateForme': true
	},
	'Kangaskhan-Mega': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 105,
			'atk': 125,
			'def': 100,
			'spa': 60,
			'spd': 100,
			'spe': 100
		},
		'weight': 100.0,
		'ability': 'Parental Bond',
		'isAlternateForme': true
	},
	'Latias-Mega': {
		'type1': 'Dragon',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 80,
			'atk': 100,
			'def': 120,
			'spa': 140,
			'spd': 150,
			'spe': 110
		},
		'weight': 52.0,
		'ability': 'Levitate',
		'isAlternateForme': true
	},
	'Latios-Mega': {
		'type1': 'Dragon',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 80,
			'atk': 130,
			'def': 100,
			'spa': 160,
			'spd': 120,
			'spe': 110
		},
		'weight': 70.0,
		'ability': 'Levitate',
		'isAlternateForme': true
	},
	'Lopunny-Mega': {
		'type1': 'Normal',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 65,
			'atk': 136,
			'def': 94,
			'spa': 54,
			'spd': 96,
			'spe': 135
		},
		'weight': 28.3,
		'ability': 'Scrappy',
		'isAlternateForme': true
	},
	'Lucario-Mega': {
		'type1': 'Fighting',
		'type2': 'Steel',
		'baseStats': {
			'hp': 70,
			'atk': 145,
			'def': 88,
			'spa': 140,
			'spd': 70,
			'spe': 112
		},
		'weight': 57.5,
		'ability': 'Adaptability',
		'isAlternateForme': true
	},
	'Manectric-Mega': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 70,
			'atk': 75,
			'def': 80,
			'spa': 135,
			'spd': 80,
			'spe': 135
		},
		'weight': 44.0,
		'ability': 'Intimidate',
		'isAlternateForme': true
	},
	'Mawile-Mega': {
		'type1': 'Steel',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 50,
			'atk': 105,
			'def': 125,
			'spa': 55,
			'spd': 95,
			'spe': 50
		},
		'weight': 23.5,
		'ability': 'Huge Power',
		'isAlternateForme': true
	},
	'Medicham-Mega': {
		'type1': 'Fighting',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 60,
			'atk': 100,
			'def': 85,
			'spa': 80,
			'spd': 85,
			'spe': 100
		},
		'weight': 31.5,
		'ability': 'Pure Power',
		'isAlternateForme': true
	},
	'Metagross-Mega': {
		'type1': 'Steel',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 80,
			'atk': 145,
			'def': 150,
			'spa': 105,
			'spd': 110,
			'spe': 110
		},
		'weight': 942.9,
		'ability': 'Tough Claws',
		'isAlternateForme': true,
		'gender': 'genderless'
	},
	'Mewtwo-Mega-X': {
		'type1': 'Psychic',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 106,
			'atk': 190,
			'def': 100,
			'spa': 154,
			'spd': 100,
			'spe': 130
		},
		'weight': 127.0,
		'ability': 'Steadfast',
		'isAlternateForme': true,
		'gender': 'genderless'
	},
	'Mewtwo-Mega-Y': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 106,
			'atk': 150,
			'def': 70,
			'spa': 194,
			'spd': 120,
			'spe': 140
		},
		'weight': 33.0,
		'ability': 'Insomnia',
		'isAlternateForme': true,
		'gender': 'genderless'
	},
	'Pidgeot-Mega': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 83,
			'atk': 80,
			'def': 80,
			'spa': 135,
			'spd': 80,
			'spe': 121
		},
		'weight': 50.5,
		'ability': 'No Guard',
		'isAlternateForme': true
	},
	'Pinsir-Mega': {
		'type1': 'Bug',
		'type2': 'Flying',
		'baseStats': {
			'hp': 65,
			'atk': 155,
			'def': 120,
			'spa': 65,
			'spd': 90,
			'spe': 105
		},
		'weight': 59.0,
		'ability': 'Aerilate',
		'isAlternateForme': true
	},
	'Rayquaza-Mega': {
		'type1': 'Dragon',
		'type2': 'Flying',
		'baseStats': {
			'hp': 105,
			'atk': 180,
			'def': 100,
			'spa': 180,
			'spd': 100,
			'spe': 115
		},
		'weight': 392.0,
		'ability': 'Delta Stream',
		'isAlternateForme': true
	},
	'Sableye-Mega': {
		'type1': 'Dark',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 50,
			'atk': 85,
			'def': 125,
			'spa': 85,
			'spd': 115,
			'spe': 20
		},
		'weight': 161.0,
		'ability': 'Magic Bounce',
		'isAlternateForme': true
	},
	'Salamence-Mega': {
		'type1': 'Dragon',
		'type2': 'Flying',
		'baseStats': {
			'hp': 95,
			'atk': 145,
			'def': 130,
			'spa': 120,
			'spd': 90,
			'spe': 120
		},
		'weight': 112.6,
		'ability': 'Aerilate',
		'isAlternateForme': true
	},
	'Sceptile-Mega': {
		'type1': 'Grass',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 70,
			'atk': 110,
			'def': 75,
			'spa': 145,
			'spd': 85,
			'spe': 145
		},
		'weight': 55.2,
		'ability': 'Lightning Rod',
		'isAlternateForme': true
	},
	'Scizor-Mega': {
		'type1': 'Bug',
		'type2': 'Steel',
		'baseStats': {
			'hp': 70,
			'atk': 150,
			'def': 140,
			'spa': 65,
			'spd': 100,
			'spe': 75
		},
		'weight': 125.0,
		'ability': 'Technician',
		'isAlternateForme': true
	},
	'Sharpedo-Mega': {
		'type1': 'Water',
		'type2': 'Dark',
		'baseStats': {
			'hp': 70,
			'atk': 140,
			'def': 70,
			'spa': 110,
			'spd': 65,
			'spe': 105
		},
		'weight': 130.3,
		'ability': 'Strong Jaw',
		'isAlternateForme': true
	},
	'Slowbro-Mega': {
		'type1': 'Water',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 95,
			'atk': 75,
			'def': 180,
			'spa': 130,
			'spd': 80,
			'spe': 30
		},
		'weight': 120.0,
		'ability': 'Shell Armor',
		'isAlternateForme': true
	},
	'Steelix-Mega': {
		'type1': 'Steel',
		'type2': 'Ground',
		'baseStats': {
			'hp': 75,
			'atk': 125,
			'def': 230,
			'spa': 55,
			'spd': 95,
			'spe': 30
		},
		'weight': 740.0,
		'ability': 'Sand Force',
		'isAlternateForme': true
	},
	'Swampert-Mega': {
		'type1': 'Water',
		'type2': 'Ground',
		'baseStats': {
			'hp': 100,
			'atk': 150,
			'def': 110,
			'spa': 95,
			'spd': 110,
			'spe': 70
		},
		'weight': 102.0,
		'ability': 'Swift Swim',
		'isAlternateForme': true
	},
	'Tyranitar-Mega': {
		'type1': 'Rock',
		'type2': 'Dark',
		'baseStats': {
			'hp': 100,
			'atk': 164,
			'def': 150,
			'spa': 95,
			'spd': 120,
			'spe': 71
		},
		'weight': 255.0,
		'ability': 'Sand Stream',
		'isAlternateForme': true
	},
	'Venusaur-Mega': {
		'type1': 'Grass',
		'type2': 'Poison',
		'baseStats': {
			'hp': 80,
			'atk': 100,
			'def': 123,
			'spa': 122,
			'spd': 120,
			'spe': 80
		},
		'weight': 155.5,
		'ability': 'Thick Fat',
		'isAlternateForme': true
	},
	'Meowstic-M': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 74,
			'atk': 48,
			'def': 76,
			'spa': 83,
			'spd': 81,
			'spe': 104
		},
		'weight': 8.5
	},
	'Naviathan': {
		'type1': 'Water',
		'type2': 'Steel',
		'baseStats': {
			'hp': 103,
			'atk': 110,
			'def': 90,
			'spa': 95,
			'spd': 65,
			'spe': 97
		},
		'weight': 510.0
	},
	'Noibat': {
		'type1': 'Flying',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 40,
			'atk': 30,
			'def': 35,
			'spa': 45,
			'spd': 40,
			'spe': 55
		},
		'weight': 8.0,
		'canEvolve': true
	},
	'Noivern': {
		'type1': 'Flying',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 85,
			'atk': 70,
			'def': 80,
			'spa': 97,
			'spd': 80,
			'spe': 123
		},
		'weight': 85.0
	},
	'Pancham': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 67,
			'atk': 82,
			'def': 62,
			'spa': 46,
			'spd': 48,
			'spe': 43
		},
		'weight': 8.0,
		'canEvolve': true
	},
	'Pangoro': {
		'type1': 'Fighting',
		'type2': 'Dark',
		'baseStats': {
			'hp': 95,
			'atk': 124,
			'def': 78,
			'spa': 69,
			'spd': 71,
			'spe': 58
		},
		'weight': 136.0
	},
	'Phantump': {
		'type1': 'Ghost',
		'type2': 'Grass',
		'baseStats': {
			'hp': 43,
			'atk': 70,
			'def': 48,
			'spa': 50,
			'spd': 60,
			'spe': 38
		},
		'weight': 7.0,
		'canEvolve': true
	},
	'Plasmanta': {
		'type1': 'Electric',
		'type2': 'Poison',
		'baseStats': {
			'hp': 60,
			'atk': 57,
			'def': 119,
			'spa': 131,
			'spd': 98,
			'spe': 100
		},
		'weight': 460.0
	},
	'Pluffle': {
		'type1': 'Fairy',
		'baseStats': {
			'hp': 74,
			'atk': 38,
			'def': 51,
			'spa': 65,
			'spd': 78,
			'spe': 49
		},
		'weight': 1.8,
	},
	'Groudon-Primal': {
		'type1': 'Ground',
		'type2': 'Fire',
		'baseStats': {
			'hp': 100,
			'atk': 180,
			'def': 160,
			'spa': 150,
			'spd': 90,
			'spe': 90
		},
		'weight': 999.7,
		'ability': 'Desolate Land',
		'isAlternateForme': true
	},
	'Kyogre-Primal': {
		'type1': 'Water',
		'baseStats': {
			'hp': 100,
			'atk': 150,
			'def': 90,
			'spa': 180,
			'spd': 160,
			'spe': 90
		},
		'weight': 430.0,
		'ability': 'Primordial Sea',
		'isAlternateForme': true,
		'gender': 'genderless'
	},
	'Pumpkaboo-Average': {
		'type1': 'Ghost',
		'type2': 'Grass',
		'baseStats': {
			'hp': 49,
			'atk': 66,
			'def': 70,
			'spa': 44,
			'spd': 55,
			'spe': 51
		},
		'weight': 10.0,
		'canEvolve': true
	},
	'Pumpkaboo-Large': {
		'type1': 'Ghost',
		'type2': 'Grass',
		'baseStats': {
			'hp': 54,
			'atk': 66,
			'def': 70,
			'spa': 44,
			'spd': 55,
			'spe': 46
		},
		'weight': 10.0,
		'canEvolve': true
	},
	'Pumpkaboo-Small': {
		'type1': 'Ghost',
		'type2': 'Grass',
		'baseStats': {
			'hp': 44,
			'atk': 66,
			'def': 70,
			'spa': 44,
			'spd': 55,
			'spe': 56
		},
		'weight': 10.0,
		'canEvolve': true
	},
	'Pumpkaboo-Super': {
		'type1': 'Ghost',
		'type2': 'Grass',
		'baseStats': {
			'hp': 59,
			'atk': 66,
			'def': 70,
			'spa': 44,
			'spd': 55,
			'spe': 41
		},
		'weight': 10.0,
		'canEvolve': true
	},
	'Pyroar': {
		'type1': 'Fire',
		'type2': 'Normal',
		'baseStats': {
			'hp': 86,
			'atk': 68,
			'def': 72,
			'spa': 109,
			'spd': 66,
			'spe': 106
		},
		'weight': 81.5
	},
	'Quilladin': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 61,
			'atk': 78,
			'def': 95,
			'spa': 56,
			'spd': 58,
			'spe': 57
		},
		'weight': 29.0,
		'canEvolve': true
	},
	'Scatterbug': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 38,
			'atk': 35,
			'def': 40,
			'spa': 27,
			'spd': 25,
			'spe': 35
		},
		'weight': 2.5,
		'canEvolve': true
	},
	'Skiddo': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 66,
			'atk': 65,
			'def': 48,
			'spa': 62,
			'spd': 57,
			'spe': 52
		},
		'weight': 31.0,
		'canEvolve': true
	},
	'Skrelp': {
		'type1': 'Poison',
		'type2': 'Water',
		'baseStats': {
			'hp': 50,
			'atk': 60,
			'def': 60,
			'spa': 60,
			'spd': 60,
			'spe': 30
		},
		'weight': 7.3,
		'canEvolve': true
	},
	'Sliggoo': {
		'type1': 'Dragon',
		'baseStats': {
			'hp': 68,
			'atk': 75,
			'def': 53,
			'spa': 83,
			'spd': 113,
			'spe': 60
		},
		'weight': 17.5,
		'canEvolve': true
	},
	'Slurpuff': {
		'type1': 'Fairy',
		'baseStats': {
			'hp': 82,
			'atk': 80,
			'def': 86,
			'spa': 85,
			'spd': 75,
			'spe': 72
		},
		'weight': 5.0,
		'canEvolve': true
	},
	'Snugglow': {
		'type1': 'Electric',
		'type2': 'Poison',
		'baseStats': {
			'hp': 40,
			'atk': 37,
			'def': 79,
			'spa': 91,
			'spd': 68,
			'spe': 70
		},
		'weight': 6.0
	},
	'Spewpa': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 45,
			'atk': 22,
			'def': 60,
			'spa': 27,
			'spd': 30,
			'spe': 29
		},
		'weight': 8.4,
		'canEvolve': true
	},
	'Spritzee': {
		'type1': 'Fairy',
		'baseStats': {
			'hp': 78,
			'atk': 52,
			'def': 60,
			'spa': 63,
			'spd': 65,
			'spe': 23
		},
		'weight': 0.5,
		'canEvolve': true
	},
	'Swirlix': {
		'type1': 'Fairy',
		'baseStats': {
			'hp': 62,
			'atk': 48,
			'def': 66,
			'spa': 59,
			'spd': 57,
			'spe': 49
		},
		'weight': 3.5,
		'canEvolve': true
	},
	'Sylveon': {
		'type1': 'Fairy',
		'baseStats': {
			'hp': 95,
			'atk': 65,
			'def': 65,
			'spa': 110,
			'spd': 130,
			'spe': 60
		},
		'weight': 23.5
	},
	'Talonflame': {
		'type1': 'Fire',
		'type2': 'Flying',
		'baseStats': {
			'hp': 78,
			'atk': 81,
			'def': 71,
			'spa': 74,
			'spd': 69,
			'spe': 126
		},
		'weight': 24.5
	},
	'Trevenant': {
		'type1': 'Ghost',
		'type2': 'Grass',
		'baseStats': {
			'hp': 85,
			'atk': 110,
			'def': 76,
			'spa': 65,
			'spd': 82,
			'spe': 56
		},
		'weight': 71.0
	},
	'Tyrantrum': {
		'type1': 'Rock',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 82,
			'atk': 121,
			'def': 119,
			'spa': 69,
			'spd': 59,
			'spe': 71
		},
		'weight': 270.0
	},
	'Tyrunt': {
		'type1': 'Rock',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 58,
			'atk': 89,
			'def': 77,
			'spa': 45,
			'spd': 45,
			'spe': 48
		},
		'weight': 26.0,
		'canEvolve': true
	},
	'Vivillon': {
		'type1': 'Bug',
		'type2': 'Flying',
		'baseStats': {
			'hp': 80,
			'atk': 52,
			'def': 50,
			'spa': 90,
			'spd': 50,
			'spe': 89
		},
		'weight': 17.0
	},
	'Volcanion': {
		'type1': 'Fire',
		'type2': 'Water',
		'baseStats': {
			'hp': 80,
			'atk': 110,
			'def': 120,
			'spa': 130,
			'spd': 90,
			'spe': 70
		},
		'weight': 195.0,
		'gender': 'genderless'
	},
	'Volkraken': {
		'type1': 'Water',
		'type2': 'Fire',
		'baseStats': {
			'hp': 100,
			'atk': 45,
			'def': 80,
			'spa': 135,
			'spd': 100,
			'spe': 95
		},
		'weight': 44.5
	},
	'Volkritter': {
		'type1': 'Water',
		'type2': 'Fire',
		'baseStats': {
			'hp': 60,
			'atk': 30,
			'def': 50,
			'spa': 80,
			'spd': 60,
			'spe': 70
		},
		'weight': 15.0,
		'canEvolve': true
	},
	'Xerneas': {
		'type1': 'Fairy',
		'baseStats': {
			'hp': 126,
			'atk': 131,
			'def': 95,
			'spa': 131,
			'spd': 98,
			'spe': 99
		},
		'weight': 215.0,
		'ability': 'Fairy Aura',
		'gender': 'genderless'
	},
	'Yveltal': {
		'type1': 'Dark',
		'type2': 'Flying',
		'baseStats': {
			'hp': 126,
			'atk': 131,
			'def': 95,
			'spa': 131,
			'spd': 98,
			'spe': 99
		},
		'weight': 203.0,
		'ability': 'Dark Aura',
		'gender': 'genderless'
	},
	'Zygarde': {
		'type1': 'Dragon',
		'type2': 'Ground',
		'baseStats': {
			'hp': 108,
			'atk': 100,
			'def': 121,
			'spa': 81,
			'spd': 95,
			'spe': 95
		},
		'weight': 305.0,
		'ability': 'Aura Break',
		'gender': 'genderless'
	}
});

/** @type {Pokedex} */
const SM = $.extend(true, {}, XY, {
	'Alakazam-Mega': {'baseStats': {'spd': 105}},
	'Arbok': {'baseStats': {'atk': 95}},
	'Ariados': {'baseStats': {'spd': 70}},
	'Beartic': {'baseStats': {'atk': 130}},
	'Chimecho': {'baseStats': {'hp': 75, 'def': 80, 'spd': 90}},
	'Corsola': {'baseStats': {'hp': 65, 'def': 95, 'spd': 95}},
	'Crustle': {'baseStats': {'atk': 105}},
	'Cryogonal': {'baseStats': {'hp': 80, 'def': 50}},
	'Delcatty': {'baseStats': {'spe': 90}},
	'Diglett': {'formes': ['Diglett', 'Diglett-Alola']},
	'Dodrio': {'baseStats': {'spe': 110}},
	'Dugtrio': {'baseStats': {'atk': 100}, 'formes': ['Dugtrio', 'Dugtrio-Alola']},
	'Electrode': {'baseStats': {'spe': 150}},
	'Exeggutor': {'baseStats': {'spd': 75}, 'formes': ['Exeggutor', 'Exeggutor-Alola']},
	'Farfetch\'d': {'baseStats': {'atk': 90}},
	'Geodude': {'formes': ['Geodude', 'Geodude-Alola']},
	'Gengar': {'ability': ''},
	'Golem': {'formes': ['Golem', 'Golem-Alola']},
	'Graveler': {'formes': ['Graveler', 'Graveler-Alola']},
	'Greninja': {'formes': ['Greninja', 'Greninja-Ash']},
	'Grimer': {'formes': ['Grimer', 'Grimer-Alola']},
	'Illumise': {'baseStats': {'def': 75, 'spd': 85}},
	'Lunatone': {'baseStats': {'hp': 90}},
	'Magcargo': {'baseStats': {'hp': 60, 'spa': 90}},
	'Mantine': {'baseStats': {'hp': 85}},
	'Marowak': {'formes': ['Marowak', 'Marowak-Alola', 'Marowak-Alola-Totem']},
	'Masquerain': {'baseStats': {'spa': 100, 'spe': 80}},
	'Meowth': {'formes': ['Meowth', 'Meowth-Alola']},
	'Muk': {'formes': ['Muk', 'Muk-Alola']},
	'Ninetales': {'formes': ['Ninetales', 'Ninetales-Alola']},
	'Noctowl': {'baseStats': {'spa': 86}},
	'Pelipper': {'baseStats': {'spa': 95}},
	'Persian': {'formes': ['Persian', 'Persian-Alola']},
	'Qwilfish': {'baseStats': {'def': 85}},
	'Raichu': {'formes': ['Raichu', 'Raichu-Alola']},
	'Raticate': {'formes': ['Raticate', 'Raticate-Alola', 'Raticate-Alola-Totem']},
	'Rattata': {'formes': ['Rattata', 'Rattata-Alola']},
	'Sandshrew': {'formes': ['Sandshrew', 'Sandshrew-Alola']},
	'Sandslash': {'formes': ['Sandslash', 'Sandslash-Alola']},
	'Solrock': {'baseStats': {'hp': 90}},
	'Swellow': {'baseStats': {'spa': 75}},
	'Volbeat': {'baseStats': {'def': 75, 'spd': 85}},
	'Vulpix': {'formes': ['Vulpix', 'Vulpix-Alola']},
	'Woobat': {'baseStats': {'hp': 65}},
	'Zygarde': {'formes': ['Zygarde', 'Zygarde-10%', 'Zygarde-Complete']},
	'Araquanid': {
		'type1': 'Water',
		'type2': 'Bug',
		'baseStats': {
			'hp': 68,
			'atk': 70,
			'def': 92,
			'spa': 50,
			'spd': 132,
			'spe': 42
		},
		'ability': 'Water Bubble',
		'weight': 82.0,
		'formes': ['Araquanid', 'Araquanid-Totem']
	},
	'Araquanid-Totem': {
		'type1': 'Water',
		'type2': 'Bug',
		'baseStats': {
			'hp': 68,
			'atk': 70,
			'def': 92,
			'spa': 50,
			'spd': 132,
			'spe': 42
		},
		'ability': 'Water Bubble',
		'weight': 217.5,
		'isAlternateForme': true
	},
	'Bewear': {
		'type1': 'Normal',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 120,
			'atk': 125,
			'def': 80,
			'spa': 55,
			'spd': 60,
			'spe': 60
		},
		'ability': 'Fluffy',
		'weight': 135.0,
	},
	'Blacephalon': {
		'type1': 'Fire',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 53,
			'atk': 127,
			'def': 53,
			'spa': 151,
			'spd': 79,
			'spe': 107
		},
		'weight': 13.0,
		'ability': 'Beast Boost',
		'gender': 'genderless'
	},
	'Bounsweet': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 42,
			'atk': 30,
			'def': 38,
			'spa': 30,
			'spd': 38,
			'spe': 32
		},
		'weight': 3.2,
		'canEvolve': true
	},
	'Brionne': {
		'type1': 'Water',
		'baseStats': {
			'hp': 60,
			'atk': 69,
			'def': 69,
			'spa': 91,
			'spd': 81,
			'spe': 50
		},
		'weight': 17.5,
		'canEvolve': true
	},
	'Bruxish': {
		'type1': 'Water',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 68,
			'atk': 105,
			'def': 70,
			'spa': 70,
			'spd': 70,
			'spe': 92
		},
		'weight': 19.0,
	},
	'Buzzwole': {
		'type1': 'Bug',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 107,
			'atk': 139,
			'def': 139,
			'spa': 53,
			'spd': 53,
			'spe': 79
		},
		'weight': 333.6,
		'ability': 'Beast Boost',
		'gender': 'genderless'
	},
	'Celesteela': {
		'type1': 'Steel',
		'type2': 'Flying',
		'baseStats': {
			'hp': 97,
			'atk': 101,
			'def': 103,
			'spa': 107,
			'spd': 101,
			'spe': 61
		},
		'weight': 999.9,
		'ability': 'Beast Boost',
		'gender': 'genderless'
	},
	'Charjabug': {
		'type1': 'Bug',
		'type2': 'Electric',
		'baseStats': {
			'hp': 57,
			'atk': 82,
			'def': 95,
			'spa': 55,
			'spd': 75,
			'spe': 36
		},
		'weight': 10.5,
		'canEvolve': true
	},
	'Comfey': {
		'type1': 'Fairy',
		'baseStats': {
			'hp': 51,
			'atk': 52,
			'def': 90,
			'spa': 82,
			'spd': 110,
			'spe': 100
		},
		'weight': 0.3,
	},
	'Cosmoem': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 43,
			'atk': 29,
			'def': 131,
			'spa': 29,
			'spd': 131,
			'spe': 37
		},
		'weight': 999.9,
		'canEvolve': true,
		'gender': 'genderless'
	},
	'Cosmog': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 43,
			'atk': 29,
			'def': 31,
			'spa': 29,
			'spd': 31,
			'spe': 37
		},
		'weight': 0.1,
		'canEvolve': true,
		'gender': 'genderless'
	},
	'Crabominable': {
		'type1': 'Fighting',
		'type2': 'Ice',
		'baseStats': {
			'hp': 97,
			'atk': 132,
			'def': 77,
			'spa': 62,
			'spd': 67,
			'spe': 43
		},
		'weight': 180.0
	},
	'Crabrawler': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 47,
			'atk': 82,
			'def': 57,
			'spa': 42,
			'spd': 47,
			'spe': 63
		},
		'weight': 7.0,
		'canEvolve': true
	},
	'Cutiefly': {
		'type1': 'Bug',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 40,
			'atk': 45,
			'def': 40,
			'spa': 55,
			'spd': 40,
			'spe': 84
		},
		'weight': 0.2,
		'canEvolve': true
	},
	'Dartrix': {
		'type1': 'Grass',
		'type2': 'Flying',
		'baseStats': {
			'hp': 78,
			'atk': 75,
			'def': 75,
			'spa': 70,
			'spd': 70,
			'spe': 52
		},
		'weight': 16.0,
		'canEvolve': true
	},
	'Decidueye': {
		'type1': 'Grass',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 78,
			'atk': 107,
			'def': 75,
			'spa': 100,
			'spd': 100,
			'spe': 70
		},
		'weight': 36.6,
	},
	'Dewpider': {
		'type1': 'Water',
		'type2': 'Bug',
		'baseStats': {
			'hp': 38,
			'atk': 40,
			'def': 52,
			'spa': 40,
			'spd': 72,
			'spe': 27
		},
		'weight': 4.0,
		'canEvolve': true
	},
	'Dhelmise': {
		'type1': 'Ghost',
		'type2': 'Grass',
		'baseStats': {
			'hp': 70,
			'atk': 131,
			'def': 100,
			'spa': 86,
			'spd': 90,
			'spe': 40
		},
		'weight': 210.0,
		'gender': 'genderless'
	},
	'Drampa': {
		'type1': 'Normal',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 78,
			'atk': 60,
			'def': 85,
			'spa': 135,
			'spd': 91,
			'spe': 36
		},
		'weight': 185.0,
	},
	'Diglett-Alola': {
		'type1': 'Ground',
		'type2': 'Steel',
		'baseStats': {
			'hp': 10,
			'atk': 55,
			'def': 30,
			'spa': 35,
			'spd': 45,
			'spe': 90
		},
		'weight': 1.0,
		'isAlternateForme': true,
		'canEvolve': true
	},
	'Dugtrio-Alola': {
		'type1': 'Ground',
		'type2': 'Steel',
		'baseStats': {
			'hp': 35,
			'atk': 100,
			'def': 60,
			'spa': 50,
			'spd': 70,
			'spe': 110
		},
		'weight': 66.6,
		'isAlternateForme': true
	},
	'Exeggutor-Alola': {
		'type1': 'Grass',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 95,
			'atk': 105,
			'def': 85,
			'spa': 125,
			'spd': 75,
			'spe': 45
		},
		'weight': 415.6,
		'isAlternateForme': true
	},
	'Fomantis': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 40,
			'atk': 55,
			'def': 35,
			'spa': 50,
			'spd': 35,
			'spe': 35
		},
		'weight': 1.5,
		'canEvolve': true
	},
	'Geodude-Alola': {
		'type1': 'Rock',
		'type2': 'Electric',
		'baseStats': {
			'hp': 40,
			'atk': 80,
			'def': 100,
			'spa': 30,
			'spd': 30,
			'spe': 20
		},
		'weight': 20.3,
		'isAlternateForme': true,
		'canEvolve': true
	},
	'Golem-Alola': {
		'type1': 'Rock',
		'type2': 'Electric',
		'baseStats': {
			'hp': 80,
			'atk': 120,
			'def': 130,
			'spa': 55,
			'spd': 65,
			'spe': 45
		},
		'weight': 316.0,
		'ability': 'Galvanize',
		'isAlternateForme': true
	},
	'Golisopod': {
		'type1': 'Bug',
		'type2': 'Water',
		'baseStats': {
			'hp': 75,
			'atk': 125,
			'def': 140,
			'spa': 60,
			'spd': 90,
			'spe': 40
		},
		'weight': 108.0
	},
	'Graveler-Alola': {
		'type1': 'Rock',
		'type2': 'Electric',
		'baseStats': {
			'hp': 55,
			'atk': 95,
			'def': 115,
			'spa': 45,
			'spd': 45,
			'spe': 35
		},
		'weight': 110.0,
		'isAlternateForme': true,
		'canEvolve': true
	},
	'Grimer-Alola': {
		'type1': 'Poison',
		'type2': 'Dark',
		'baseStats': {
			'hp': 80,
			'atk': 80,
			'def': 50,
			'spa': 40,
			'spd': 50,
			'spe': 25
		},
		'weight': 42.0,
		'isAlternateForme': true,
		'canEvolve': true
	},
	'Greninja-Ash': {
		'type1': 'Water',
		'type2': 'Dark',
		'baseStats': {
			'hp': 72,
			'atk': 145,
			'def': 67,
			'spa': 153,
			'spd': 71,
			'spe': 132
		},
		'weight': 40.0,
		'ability': 'Battle Bond',
		'isAlternateForme': true
	},
	'Grubbin': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 47,
			'atk': 62,
			'def': 45,
			'spa': 55,
			'spd': 45,
			'spe': 46
		},
		'weight': 4.4,
		'canEvolve': true
	},
	'Gumshoos': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 88,
			'atk': 110,
			'def': 60,
			'spa': 55,
			'spd': 60,
			'spe': 45
		},
		'weight': 14.2,
		'formes': ['Gumshoos', 'Gumshoos-Totem']
	},
	'Gumshoos-Totem': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 88,
			'atk': 110,
			'def': 60,
			'spa': 55,
			'spd': 60,
			'spe': 45
		},
		'weight': 60.0,
		'isAlternateForme': true
	},
	'Guzzlord': {
		'type1': 'Dark',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 223,
			'atk': 101,
			'def': 53,
			'spa': 97,
			'spd': 53,
			'spe': 43
		},
		'weight': 888.0,
		'ability': 'Beast Boost',
		'gender': 'genderless'
	},
	'Hakamo-o': {
		'type1': 'Dragon',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 55,
			'atk': 75,
			'def': 90,
			'spa': 65,
			'spd': 70,
			'spe': 65
		},
		'weight': 47.0,
		'canEvolve': true
	},
	'Incineroar': {
		'type1': 'Fire',
		'type2': 'Dark',
		'baseStats': {
			'hp': 95,
			'atk': 115,
			'def': 90,
			'spa': 80,
			'spd': 90,
			'spe': 60
		},
		'weight': 83.0
	},
	'Jangmo-o': {
		'type1': 'Dragon',
		'baseStats': {
			'hp': 45,
			'atk': 55,
			'def': 65,
			'spa': 45,
			'spd': 45,
			'spe': 45
		},
		'weight': 29.7,
		'canEvolve': true
	},
	'Jumbao': {
		'type1': 'Grass',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 92,
			'atk': 63,
			'def': 97,
			'spa': 124,
			'spd': 104,
			'spe': 96
		},
		'weight': 600
	},
	'Kartana': {
		'type1': 'Grass',
		'type2': 'Steel',
		'baseStats': {
			'hp': 59,
			'atk': 181,
			'def': 131,
			'spa': 59,
			'spd': 31,
			'spe': 109
		},
		'weight': 0.1,
		'ability': 'Beast Boost',
		'gender': 'genderless'
	},
	'Komala': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 65,
			'atk': 115,
			'def': 65,
			'spa': 75,
			'spd': 95,
			'spe': 65
		},
		'weight': 19.9,
	},
	'Kommo-o': {
		'type1': 'Dragon',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 75,
			'atk': 110,
			'def': 125,
			'spa': 100,
			'spd': 105,
			'spe': 85
		},
		'weight': 78.2,
		'formes': ['Kommo-o', 'Kommo-o-Totem']
	},
	'Kommo-o-Totem': {
		'type1': 'Dragon',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 75,
			'atk': 110,
			'def': 125,
			'spa': 100,
			'spd': 105,
			'spe': 85
		},
		'weight': 207.5,
		'ability': 'Overcoat',
		'isAlternateForme': true
	},
	'Litten': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 45,
			'atk': 65,
			'def': 40,
			'spa': 60,
			'spd': 40,
			'spe': 70
		},
		'weight': 4.3,
		'canEvolve': true
	},
	'Lunala': {
		'type1': 'Psychic',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 137,
			'atk': 113,
			'def': 89,
			'spa': 137,
			'spd': 107,
			'spe': 97
		},
		'weight': 120.0,
		'ability': 'Shadow Shield',
		'gender': 'genderless'
	},
	'Lurantis': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 70,
			'atk': 105,
			'def': 90,
			'spa': 80,
			'spd': 90,
			'spe': 45
		},
		'weight': 19.5,
		'formes': ['Lurantis', 'Lurantis-Totem']
	},
	'Lurantis-Totem': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 70,
			'atk': 105,
			'def': 90,
			'spa': 80,
			'spd': 90,
			'spe': 45
		},
		'weight': 58.0,
		'ability': 'Leaf Guard',
		'isAlternateForme': true
	},
	'Lycanroc': {
		'type1': 'Rock',
		'baseStats': {
			'hp': 75,
			'atk': 115,
			'def': 65,
			'spa': 55,
			'spd': 65,
			'spe': 112
		},
		'weight': 25.0,
		'formes': ['Lycanroc', 'Lycanoc-Dusk', 'Lycanroc-Midnight']
	},
	'Lycanroc-Dusk': {
		'type1': 'Rock',
		'baseStats': {
			'hp': 75,
			'atk': 117,
			'def': 65,
			'spa': 55,
			'spd': 65,
			'spe': 110
		},
		'weight': 25.0,
		'ability': 'Tough Claws',
		'isAlternateForme': true
	},
	'Lycanroc-Midnight': {
		'type1': 'Rock',
		'baseStats': {
			'hp': 85,
			'atk': 115,
			'def': 75,
			'spa': 55,
			'spd': 75,
			'spe': 82
		},
		'weight': 25.0,
		'isAlternateForme': true
	},
	'Magearna': {
		'type1': 'Steel',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 80,
			'atk': 95,
			'def': 115,
			'spa': 130,
			'spd': 115,
			'spe': 65
		},
		'weight': 80.5,
		'gender': 'genderless'
	},
	'Mareanie': {
		'type1': 'Poison',
		'type2': 'Water',
		'baseStats': {
			'hp': 50,
			'atk': 53,
			'def': 62,
			'spa': 43,
			'spd': 52,
			'spe': 45
		},
		'weight': 8.0,
		'canEvolve': true
	},
	'Marowak-Alola': {
		'type1': 'Fire',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 60,
			'atk': 80,
			'def': 110,
			'spa': 50,
			'spd': 80,
			'spe': 45
		},
		'weight': 34.0
	},
	'Marowak-Alola-Totem': {
		'type1': 'Fire',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 60,
			'atk': 80,
			'def': 110,
			'spa': 50,
			'spd': 80,
			'spe': 45
		},
		'weight': 98.0,
		'ability': 'Rock Head',
		'isAlternateForme': true
	},
	'Marshadow': {
		'type1': 'Fighting',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 90,
			'atk': 125,
			'def': 80,
			'spa': 90,
			'spd': 90,
			'spe': 125
		},
		'weight': 22.2,
		'gender': 'genderless'
	},
	'Meowth-Alola': {
		'type1': 'Dark',
		'baseStats': {
			'hp': 40,
			'atk': 35,
			'def': 35,
			'spa': 50,
			'spd': 40,
			'spe': 90
		},
		'weight': 4.2,
		'isAlternateForme': true,
		'canEvolve': true
	},
	'Mimikyu': {
		'type1': 'Ghost',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 55,
			'atk': 90,
			'def': 80,
			'spa': 50,
			'spd': 105,
			'spe': 96
		},
		'weight': 0.7,
		'formes': ['Mimikyu', 'Mimikyu-Totem']
	},
	'Mimikyu-Totem': {
		'type1': 'Ghost',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 55,
			'atk': 90,
			'def': 80,
			'spa': 50,
			'spd': 105,
			'spe': 96
		},
		'weight': 2.8,
		'isAlternateForme': true
	},
	'Minior': {
		'type1': 'Rock',
		'type2': 'Flying',
		'baseStats': {
			'hp': 60,
			'atk': 100,
			'def': 60,
			'spa': 100,
			'spd': 60,
			'spe': 120
		},
		'weight': 0.3,
		'formes': ['Minior', 'Minior-Meteor'],
		'gender': 'genderless'
	},
	'Minior-Meteor': {
		'type1': 'Rock',
		'type2': 'Flying',
		'baseStats': {
			'hp': 60,
			'atk': 60,
			'def': 100,
			'spa': 60,
			'spd': 100,
			'spe': 60
		},
		'weight': 40.0,
		'isAlternateForme': true
	},
	'Morelull': {
		'type1': 'Grass',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 40,
			'atk': 35,
			'def': 55,
			'spa': 65,
			'spd': 75,
			'spe': 15
		},
		'weight': 1.5,
		'canEvolve': true
	},
	'Mudbray': {
		'type1': 'Ground',
		'baseStats': {
			'hp': 70,
			'atk': 100,
			'def': 70,
			'spa': 45,
			'spd': 55,
			'spe': 45
		},
		'weight': 110.0,
		'canEvolve': true
	},
	'Mudsdale': {
		'type1': 'Ground',
		'baseStats': {
			'hp': 100,
			'atk': 125,
			'def': 100,
			'spa': 55,
			'spd': 85,
			'spe': 35
		},
		'weight': 920.0,
	},
	'Muk-Alola': {
		'type1': 'Poison',
		'type2': 'Dark',
		'baseStats': {
			'hp': 105,
			'atk': 105,
			'def': 75,
			'spa': 65,
			'spd': 100,
			'spe': 50
		},
		'weight': 52.0,
		'isAlternateForme': true
	},
	'Naganadel': {
		'type1': 'Poison',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 73,
			'atk': 73,
			'def': 73,
			'spa': 127,
			'spd': 73,
			'spe': 121
		},
		'weight': 150.0,
		'ability': 'Beast Boost',
		'gender': 'genderless'
	},
	'Necrozma': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 97,
			'atk': 107,
			'def': 101,
			'spa': 127,
			'spd': 89,
			'spe': 79
		},
		'weight': 230.0,
		'ability': 'Prism Armor',
		'formes': ['Necrozma', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra'],
		'gender': 'genderless'
	},
	'Necrozma-Dawn-Wings': {
		'type1': 'Psychic',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 97,
			'atk': 113,
			'def': 109,
			'spa': 157,
			'spd': 127,
			'spe': 77
		},
		'weight': 350.0,
		'ability': 'Prism Armor',
		'isAlternateForme': true,
		'gender': 'genderless'
	},
	'Necrozma-Dusk-Mane': {
		'type1': 'Psychic',
		'type2': 'Steel',
		'baseStats': {
			'hp': 97,
			'atk': 157,
			'def': 127,
			'spa': 113,
			'spd': 109,
			'spe': 77
		},
		'weight': 460.0,
		'ability': 'Prism Armor',
		'isAlternateForme': true,
		'gender': 'genderless'
	},
	'Necrozma-Ultra': {
		'type1': 'Psychic',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 97,
			'atk': 167,
			'def': 97,
			'spa': 167,
			'spd': 97,
			'spe': 129
		},
		'weight': 230.0,
		'ability': 'Neuroforce',
		'isAlternateForme': true,
		'gender': 'genderless'
	},
	'Nihilego': {
		'type1': 'Rock',
		'type2': 'Poison',
		'baseStats': {
			'hp': 109,
			'atk': 53,
			'def': 47,
			'spa': 127,
			'spd': 131,
			'spe': 103
		},
		'weight': 55.5,
		'ability': 'Beast Boost',
		'gender': 'genderless'
	},
	'Ninetales-Alola': {
		'type1': 'Ice',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 73,
			'atk': 67,
			'def': 75,
			'spa': 81,
			'spd': 100,
			'spe': 109
		},
		'weight': 19.9,
		'ability': 'Snow Warning',
		'isAlternateForme': true
	},
	'Oranguru': {
		'type1': 'Normal',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 90,
			'atk': 60,
			'def': 80,
			'spa': 90,
			'spd': 110,
			'spe': 60
		},
		'weight': 76.0,
		'canEvolve': true
	},
	'Oricorio': {
		'type1': 'Fire',
		'type2': 'Flying',
		'baseStats': {
			'hp': 75,
			'atk': 70,
			'def': 70,
			'spa': 98,
			'spd': 70,
			'spe': 93
		},
		'weight': 3.4,
		'ability': 'Dancer',
		'formes': ['Oricorio', 'Oricorio-Pa\'u', 'Oricorio-Pom-Pom', 'Oricorio-Sensu'],
	},
	'Oricorio-Pa\'u': {
		'type1': 'Psychic',
		'type2': 'Flying',
		'baseStats': {
			'hp': 75,
			'atk': 70,
			'def': 70,
			'spa': 98,
			'spd': 70,
			'spe': 93
		},
		'weight': 3.4,
		'ability': 'Dancer',
		'isAlternateForme': true
	},
	'Oricorio-Pom-Pom': {
		'type1': 'Electric',
		'type2': 'Flying',
		'baseStats': {
			'hp': 75,
			'atk': 70,
			'def': 70,
			'spa': 98,
			'spd': 70,
			'spe': 93
		},
		'weight': 3.4,
		'ability': 'Dancer',
		'isAlternateForme': true
	},
	'Oricorio-Sensu': {
		'type1': 'Ghost',
		'type2': 'Flying',
		'baseStats': {
			'hp': 75,
			'atk': 70,
			'def': 70,
			'spa': 98,
			'spd': 70,
			'spe': 93
		},
		'weight': 3.4,
		'ability': 'Dancer',
		'isAlternateForme': true
	},
	'Pajantom': {
		'type1': 'Dragon',
		'type2': 'Ghost',
		'baseStats': {
			'hp': 84,
			'atk': 133,
			'def': 71,
			'spa': 51,
			'spd': 111,
			'spe': 101
		},
		'weight': 3.1,
		'ability': 'Comatose'
	},
	'Palossand': {
		'type1': 'Ghost',
		'type2': 'Ground',
		'baseStats': {
			'hp': 85,
			'atk': 75,
			'def': 110,
			'spa': 100,
			'spd': 75,
			'spe': 35
		},
		'weight': 250.0,
	},
	'Passimian': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 100,
			'atk': 120,
			'def': 90,
			'spa': 40,
			'spd': 60,
			'spe': 80
		},
		'weight': 82.8,
	},
	'Persian-Alola': {
		'type1': 'Dark',
		'baseStats': {
			'hp': 65,
			'atk': 60,
			'def': 60,
			'spa': 75,
			'spd': 65,
			'spe': 115
		},
		'weight': 33.0,
		'isAlternateForme': true
	},
	'Pheromosa': {
		'type1': 'Bug',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 71,
			'atk': 137,
			'def': 37,
			'spa': 137,
			'spd': 37,
			'spe': 151
		},
		'weight': 25.0,
		'ability': 'Beast Boost',
		'gender': 'genderless'
	},
	'Pikipek': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 35,
			'atk': 75,
			'def': 30,
			'spa': 30,
			'spd': 30,
			'spe': 65
		},
		'weight': 1.2,
		'canEvolve': true
	},
	'Poipole': {
		'type1': 'Poison',
		'baseStats': {
			'hp': 67,
			'atk': 73,
			'def': 67,
			'spa': 73,
			'spd': 67,
			'spe': 73
		},
		'weight': 1.8,
		'ability': 'Beast Boost',
		'canEvolve': true,
		'gender': 'genderless'
	},
	'Popplio': {
		'type1': 'Water',
		'baseStats': {
			'hp': 50,
			'atk': 54,
			'def': 54,
			'spa': 66,
			'spd': 56,
			'spe': 40
		},
		'weight': 7.5,
		'canEvolve': true
	},
	'Primarina': {
		'type1': 'Water',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 80,
			'atk': 74,
			'def': 74,
			'spa': 126,
			'spd': 116,
			'spe': 60
		},
		'weight': 44.0
	},
	'Pyukumuku': {
		'type1': 'Water',
		'baseStats': {
			'hp': 55,
			'atk': 60,
			'def': 130,
			'spa': 30,
			'spd': 130,
			'spe': 5
		},
		'weight': 1.2,
	},
	'Raichu-Alola': {
		'type1': 'Electric',
		'type2': 'Psychic',
		'baseStats': {
			'hp': 60,
			'atk': 85,
			'def': 50,
			'spa': 95,
			'spd': 85,
			'spe': 110
		},
		'weight': 21.0,
		'isAlternateForme': true
	},
	'Raticate-Alola': {
		'type1': 'Dark',
		'type2': 'Normal',
		'baseStats': {
			'hp': 75,
			'atk': 71,
			'def': 70,
			'spa': 40,
			'spd': 80,
			'spe': 77
		},
		'weight': 25.5,
		'isAlternateForme': true
	},
	'Raticate-Alola-Totem': {
		'type1': 'Dark',
		'type2': 'Normal',
		'baseStats': {
			'hp': 75,
			'atk': 71,
			'def': 70,
			'spa': 40,
			'spd': 80,
			'spe': 77
		},
		'weight': 105.0,
		'ability': 'Thick Fat',
		'isAlternateForme': true
	},
	'Rattata-Alola': {
		'type1': 'Dark',
		'type2': 'Normal',
		'baseStats': {
			'hp': 30,
			'atk': 56,
			'def': 35,
			'spa': 25,
			'spd': 35,
			'spe': 72
		},
		'weight': 3.8,
		'isAlternateForme': true,
		'canEvolve': true
	},
	'Ribombee': {
		'type1': 'Bug',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 60,
			'atk': 55,
			'def': 60,
			'spa': 95,
			'spd': 70,
			'spe': 124
		},
		'weight': 0.5,
		'formes': ['Ribombee', 'Ribombee-Totem']
	},
	'Ribombee-Totem': {
		'type1': 'Bug',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 60,
			'atk': 55,
			'def': 60,
			'spa': 95,
			'spd': 70,
			'spe': 124
		},
		'weight': 2.0,
		'ability': 'Sweet Veil',
		'isAlternateForme': true
	},
	'Rockruff': {
		'type1': 'Rock',
		'baseStats': {
			'hp': 45,
			'atk': 65,
			'def': 40,
			'spa': 30,
			'spd': 40,
			'spe': 60
		},
		'weight': 9.2,
		'canEvolve': true
	},
	'Rowlet': {
		'type1': 'Grass',
		'type2': 'Flying',
		'baseStats': {
			'hp': 68,
			'atk': 55,
			'def': 55,
			'spa': 50,
			'spd': 50,
			'spe': 42
		},
		'weight': 1.5,
		'canEvolve': true
	},
	'Salandit': {
		'type1': 'Poison',
		'type2': 'Fire',
		'baseStats': {
			'hp': 48,
			'atk': 44,
			'def': 40,
			'spa': 71,
			'spd': 40,
			'spe': 77
		},
		'weight': 4.8,
		'canEvolve': true
	},
	'Salazzle': {
		'type1': 'Poison',
		'type2': 'Fire',
		'baseStats': {
			'hp': 68,
			'atk': 64,
			'def': 60,
			'spa': 111,
			'spd': 60,
			'spe': 117
		},
		'weight': 22.2,
		'formes': ['Salazzle', 'Salazzle-Totem']
	},
	'Salazzle-Totem': {
		'type1': 'Poison',
		'type2': 'Fire',
		'baseStats': {
			'hp': 68,
			'atk': 64,
			'def': 60,
			'spa': 111,
			'spd': 60,
			'spe': 117
		},
		'weight': 81.0,
		'ability': 'Corrosion',
		'isAlternateForme': true
	},
	'Sandshrew-Alola': {
		'type1': 'Ice',
		'type2': 'Steel',
		'baseStats': {
			'hp': 50,
			'atk': 75,
			'def': 90,
			'spa': 10,
			'spd': 35,
			'spe': 40
		},
		'weight': 40.0,
		'isAlternateForme': true,
		'canEvolve': true
	},
	'Sandslash-Alola': {
		'type1': 'Ice',
		'type2': 'Steel',
		'baseStats': {
			'hp': 75,
			'atk': 100,
			'def': 120,
			'spa': 25,
			'spd': 65,
			'spe': 65
		},
		'weight': 55.0,
		'isAlternateForme': true
	},
	'Sandygast': {
		'type1': 'Ghost',
		'type2': 'Ground',
		'baseStats': {
			'hp': 55,
			'atk': 55,
			'def': 80,
			'spa': 70,
			'spd': 45,
			'spe': 15
		},
		'weight': 70.0,
		'canEvolve': true
	},
	'Shiinotic': {
		'type1': 'Grass',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 60,
			'atk': 45,
			'def': 80,
			'spa': 90,
			'spd': 100,
			'spe': 30
		},
		'weight': 11.5,
	},
	'Silvally': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Bug': {
		'type1': 'Bug',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Dark': {
		'type1': 'Dark',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Dragon': {
		'type1': 'Dragon',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Electric': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Fairy': {
		'type1': 'Fairy',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Fighting': {
		'type1': 'Fighting',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Fire': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Flying': {
		'type1': 'Flying',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Ghost': {
		'type1': 'Ghost',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Grass': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Ground': {
		'type1': 'Ground',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Ice': {
		'type1': 'Ice',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Poison': {
		'type1': 'Poison',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Psychic': {
		'type1': 'Psychic',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Rock': {
		'type1': 'Rock',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Steel': {
		'type1': 'Steel',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Silvally-Water': {
		'type1': 'Water',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 95
		},
		'weight': 100.5,
		'ability': 'RKS System',
		'gender': 'genderless'
	},
	'Solgaleo': {
		'type1': 'Psychic',
		'type2': 'Steel',
		'baseStats': {
			'hp': 137,
			'atk': 137,
			'def': 107,
			'spa': 113,
			'spd': 89,
			'spe': 97
		},
		'weight': 230.0,
		'ability': 'Full Metal Body',
		'gender': 'genderless'
	},
	'Stakataka': {
		'type1': 'Rock',
		'type2': 'Steel',
		'baseStats': {
			'hp': 61,
			'atk': 131,
			'def': 211,
			'spa': 53,
			'spd': 101,
			'spe': 13
		},
		'weight': 820.0,
		'ability': 'Beast Boost',
		'gender': 'genderless'
	},
	'Steenee': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 52,
			'atk': 40,
			'def': 48,
			'spa': 40,
			'spd': 48,
			'spe': 62
		},
		'weight': 8.2,
		'canEvolve': true
	},
	'Stufful': {
		'type1': 'Normal',
		'type2': 'Fighting',
		'baseStats': {
			'hp': 70,
			'atk': 75,
			'def': 50,
			'spa': 45,
			'spd': 50,
			'spe': 50
		},
		'weight': 6.8,
		'ability': 'Fluffy',
		'canEvolve': true
	},
	'Tapu Bulu': {
		'type1': 'Grass',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 70,
			'atk': 130,
			'def': 115,
			'spa': 85,
			'spd': 95,
			'spe': 75
		},
		'weight': 45.5,
		'ability': 'Grassy Surge',
		'gender': 'genderless'
	},
	'Tapu Fini': {
		'type1': 'Water',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 70,
			'atk': 75,
			'def': 115,
			'spa': 95,
			'spd': 130,
			'spe': 85
		},
		'weight': 21.2,
		'ability': 'Misty Surge',
		'gender': 'genderless'
	},
	'Tapu Koko': {
		'type1': 'Electric',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 70,
			'atk': 115,
			'def': 85,
			'spa': 95,
			'spd': 75,
			'spe': 130
		},
		'weight': 20.5,
		'ability': 'Electric Surge',
		'gender': 'genderless'
	},
	'Tapu Lele': {
		'type1': 'Psychic',
		'type2': 'Fairy',
		'baseStats': {
			'hp': 70,
			'atk': 85,
			'def': 75,
			'spa': 130,
			'spd': 115,
			'spe': 95
		},
		'weight': 18.6,
		'ability': 'Psychic Surge',
		'gender': 'genderless'
	},
	'Togedemaru': {
		'type1': 'Electric',
		'type2': 'Steel',
		'baseStats': {
			'hp': 65,
			'atk': 98,
			'def': 63,
			'spa': 40,
			'spd': 73,
			'spe': 96
		},
		'weight': 3.3,
		'ability': 'Lightning Rod',
		'formes': ['Togedemaru', 'Togedemaru-Totem']
	},
	'Togedemaru-Totem': {
		'type1': 'Electric',
		'type2': 'Steel',
		'baseStats': {
			'hp': 65,
			'atk': 98,
			'def': 63,
			'spa': 40,
			'spd': 73,
			'spe': 96
		},
		'weight': 13.0,
		'ability': 'Sturdy',
		'isAlternateForme': true
	},
	'Torracat': {
		'type1': 'Fire',
		'baseStats': {
			'hp': 65,
			'atk': 85,
			'def': 50,
			'spa': 80,
			'spd': 50,
			'spe': 90
		},
		'weight': 25.0,
		'canEvolve': true
	},
	'Toucannon': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 80,
			'atk': 120,
			'def': 75,
			'spa': 75,
			'spd': 75,
			'spe': 60
		},
		'weight': 26.0
	},
	'Toxapex': {
		'type1': 'Poison',
		'type2': 'Water',
		'baseStats': {
			'hp': 50,
			'atk': 63,
			'def': 152,
			'spa': 53,
			'spd': 142,
			'spe': 35
		},
		'weight': 14.5,
	},
	'Trumbeak': {
		'type1': 'Normal',
		'type2': 'Flying',
		'baseStats': {
			'hp': 55,
			'atk': 85,
			'def': 50,
			'spa': 40,
			'spd': 50,
			'spe': 75
		},
		'weight': 14.8,
		'canEvolve': true
	},
	'Tsareena': {
		'type1': 'Grass',
		'baseStats': {
			'hp': 72,
			'atk': 120,
			'def': 98,
			'spa': 50,
			'spd': 98,
			'spe': 72
		},
		'weight': 47.2,
		'ability': 'Queenly Majesty'
	},
	'Turtonator': {
		'type1': 'Fire',
		'type2': 'Dragon',
		'baseStats': {
			'hp': 60,
			'atk': 78,
			'def': 135,
			'spa': 91,
			'spd': 85,
			'spe': 36
		},
		'weight': 212.0,
		'ability': 'Shell Armor'
	},
	'Type: Null': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 95,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 95,
			'spe': 59
		},
		'weight': 120.5,
		'ability': 'Battle Armor',
		'canEvolve': true,
		'gender': 'genderless'
	},
	'Vikavolt': {
		'type1': 'Bug',
		'type2': 'Electric',
		'baseStats': {
			'hp': 77,
			'atk': 70,
			'def': 90,
			'spa': 145,
			'spd': 75,
			'spe': 43
		},
		'weight': 45.0,
		'ability': 'Levitate',
		'formes': ['Vikavolt', 'Vikavolt-Totem']
	},
	'Vikavolt-Totem': {
		'type1': 'Bug',
		'type2': 'Electric',
		'baseStats': {
			'hp': 77,
			'atk': 70,
			'def': 90,
			'spa': 145,
			'spd': 75,
			'spe': 43
		},
		'weight': 147.5,
		'ability': 'Levitate',
		'isAlternateForme': true
	},
	'Vulpix-Alola': {
		'type1': 'Ice',
		'baseStats': {
			'hp': 38,
			'atk': 41,
			'def': 40,
			'spa': 50,
			'spd': 65,
			'spe': 65
		},
		'weight': 9.9,
		'isAlternateForme': true,
		'canEvolve': true
	},
	'Wimpod': {
		'type1': 'Bug',
		'type2': 'Water',
		'baseStats': {
			'hp': 25,
			'atk': 35,
			'def': 40,
			'spa': 20,
			'spd': 30,
			'spe': 80
		},
		'weight': 12.0,
		'ability': 'Wimp Out',
		'canEvolve': true
	},
	'Wishiwashi': {
		'type1': 'Water',
		'baseStats': {
			'hp': 45,
			'atk': 140,
			'def': 130,
			'spa': 140,
			'spd': 135,
			'spe': 30
		},
		'weight': 0.3,
		'formes': ['Wishiwashi', 'Wishiwashi-School']
	},
	'Wishiwashi-School': {
		'type1': 'Water',
		'baseStats': {
			'hp': 45,
			'atk': 140,
			'def': 130,
			'spa': 140,
			'spd': 135,
			'spe': 30
		},
		'weight': 78.6,
		'isAlternateForme': true
	},
	'Xurkitree': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 83,
			'atk': 89,
			'def': 71,
			'spa': 173,
			'spd': 71,
			'spe': 83
		},
		'weight': 100.0,
		'ability': 'Beast Boost',
		'gender': 'genderless'
	},
	'Yungoos': {
		'type1': 'Normal',
		'baseStats': {
			'hp': 48,
			'atk': 70,
			'def': 30,
			'spa': 30,
			'spd': 30,
			'spe': 45
		},
		'weight': 6.0,
		'canEvolve': true
	},
	'Zeraora': {
		'type1': 'Electric',
		'baseStats': {
			'hp': 88,
			'atk': 112,
			'def': 75,
			'spa': 102,
			'spd': 80,
			'spe': 143
		},
		'weight': 44.5,
		'ability': 'Volt Absorb'
	},
	'Zygarde-10%': {
		'type1': 'Dragon',
		'type2': 'Ground',
		'baseStats': {
			'hp': 54,
			'atk': 100,
			'def': 71,
			'spa': 61,
			'spd': 85,
			'spe': 115
		},
		'weight': 33.5,
		'ability': 'Power Construct',
		'isAlternateForme': true,
		'gender': 'genderless'
	},
	'Zygarde-Complete': {
		'type1': 'Dragon',
		'type2': 'Ground',
		'baseStats': {
			'hp': 216,
			'atk': 100,
			'def': 121,
			'spa': 91,
			'spd': 95,
			'spe': 85
		},
		'weight': 610.0,
		'ability': 'Power Construct',
		'isAlternateForme': true,
		'gender': 'genderless'
	}
});

const POKEDEX = [[], RBY, GSC, ADV, DPP, BW, XY, SM];
const POKEDEX_BY_ID = [];

for (let pokedex of POKEDEX) {
  let map = {};
  for (let p of Object.keys(pokedex)) {
    let v = pokedex[p];
    v.name = p; // NOTE: we are OK with mutation here.
    map[util.toID(p)] = v;
  }
  POKEDEX_BY_ID.push(map);
}

exports.POKEDEX = POKEDEX;
exports.POKEDEX_BY_ID = POKEDEX_BY_ID;

