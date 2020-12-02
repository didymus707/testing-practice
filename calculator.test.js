import calculator from './calculator';

it('adds', () => {
  expect(calculator().add(1, 1)).toBe(2);
  expect(calculator().subtract(3, 1)).toBe(2);
  expect(calculator().multiply(2, 1)).toBe(2);
  expect(calculator().divide(2, 1)).toBe(2);
});