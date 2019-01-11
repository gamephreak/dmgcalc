import * as stats from '../stats';

test('stats display', () => {
  expect(stats.display(stats.HP)).toBe('HP');
  expect(stats.display(stats.ATK)).toBe('Atk');
  expect(stats.display(stats.DEF)).toBe('Def');
  expect(stats.display(stats.SPA)).toBe('SpA');
  expect(stats.display(stats.SPD)).toBe('SpD');
  expect(stats.display(stats.SPE)).toBe('Spe');
  expect(stats.display(stats.SPC)).toBe('Spc');
});

test('stats calc', () => {
  const rby: {[stat in stats.Stat]?: number} = {
    'hp': 403,
    'atk': 298,
    'def': 298,
    'spa': 298,
    'spd': 298,
    'spc': 298,
    'spe': 298
  };
  const adv: {[stat in stats.Stat]?: number} =
      {'hp': 404, 'atk': 328, 'def': 299, 'spa': 269, 'spd': 299, 'spe': 299};
  for (let gen = 1; gen <= 7; gen++) {
    for (const stat of stats.STATS[gen]) {
      const s = stats.CALC_STAT[gen](stat, 100, 31, 252, 100, 'Adamant');
      if (gen < 3) {
        expect(s).toBe(rby[stat]);
      } else {
        expect(s).toBe(adv[stat]);
      }
    }
  }

  // Shedinja
  expect(stats.CALC_STAT[7](stats.HP, 1, 31, 252, 100, 'Jolly')).toBe(1);
  // no nature
  expect(stats.CALC_STAT[7](stats.ATK, 100, 31, 252, 100)).toBe(299);
});

test('stats dvs', () => {
  for (let dv = 0; dv <= 15; dv++) {
    expect(stats.IVToDV(stats.DVToIV(dv))).toBe(dv);
  }

  expect(stats.getHPDV({
    'atk': stats.DVToIV(15),
    'def': stats.DVToIV(15),
    'spc': stats.DVToIV(15),
    'spe': stats.DVToIV(15)
  })).toBe(15);
  expect(stats.getHPDV({
    'atk': stats.DVToIV(5),
    'def': stats.DVToIV(15),
    'spc': stats.DVToIV(13),
    'spe': stats.DVToIV(13)
  })).toBe(15);
  expect(stats.getHPDV({
    'atk': stats.DVToIV(15),
    'def': stats.DVToIV(3),
    'spc': stats.DVToIV(11),
    'spe': stats.DVToIV(10)
  })).toBe(13);
});
