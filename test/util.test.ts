import * as util from '../util';

test('util toID', () => {
  expect(util.toID('Nature\'s Madness')).toBe('naturesmadness');
  expect(util.toID('10,000,000 Volt Thunderbolt'))
      .toBe('10000000voltthunderbolt');
});

test('util include', () => {
  expect(util.include(undefined, 'foo')).toBe(false);
  expect(util.include('foo', undefined)).toBe(false);
  expect(util.include('foo', 'fo')).toBe(true);
  expect(util.include('foo', 'fop')).toBe(false);
  expect(util.include('foo', '')).toBe(true);
  expect(util.include(['a', 'b'], 'b')).toBe(true);
  expect(util.include(['a', 'b'], 'c')).toBe(false);
});

test('util extend', () => {
  const obj1 = {a: 1, b: {c: 2}, d: {e: 3}, f: 4};
  const obj2 = {a: 2, b: {c: 3}, d: 4, e: {f: 5}};

  expect(util.extend(true, {}, obj1)).toEqual(obj1);
  expect(util.extend(true, {}, obj1, obj2))
      .toEqual({a: 2, b: {c: 3}, d: 4, e: {f: 5}, f: 4});
  expect(util.extend(true, {}, obj2, obj1))
      .toEqual({a: 1, b: {c: 2}, d: {e: 3}, e: {f: 5}, f: 4});
});
