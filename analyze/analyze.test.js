import analyse from './analyze';

it('returns an Object with properties such as average, min, max, length', () => {
  const obj = analyse([1, 8, 3, 4, 2, 6]);
  expect.objectContaining({
    average: expect(obj.average).toBe(4),
    min: expect(obj.min).toBe(1),
    max: expect(obj.max).toBe(8),
    length: expect(obj.length).toBe(6),
  });
});