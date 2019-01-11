import {Field} from '../field';

test('Field defaults', () => {
  const f = new Field();
  expect(f.format).toBe('Singles');
  expect(f.terrain).toBe('');
  expect(f.weather).toBe('');
  expect(f.isGravity).toBe(false);
  expect(f.isSR).toBe(false);
  expect(f.spikes).toBe(0);
  expect(f.isReflect).toBe(false);
  expect(f.isLightScreen).toBe(false);
  expect(f.isProtected).toBe(false);
  expect(f.isAttackerSeeded).toBe(false);
  expect(f.isDefenderSeeded).toBe(false);
  expect(f.isForesight).toBe(false);
  expect(f.isHelpingHand).toBe(false);
  expect(f.isFriendGuard).toBe(false);
  expect(f.isAuroraVeil).toBe(false);
});
