import {calc} from '../index';

test(
    '+1 252 SpA Gengar @ Choice Specs [Focus Blast] vs. 0 HP / 172+ SpD Blissey --gen=4',
    () => {
      expect(
          calc(
              '+1 252 SpA Gengar @ Choice Specs [Focus Blast] vs. 0 HP / 172+ SpD Blissey --gen=4')
              .desc)
          .toBe(
              '+1 252 SpA Choice Specs Gengar Focus Blast vs. 0 HP / 172+ SpD Blissey: 362-428 (55.6 - 65.7%) -- guaranteed 2HKO after Leftovers recovery');
    });
