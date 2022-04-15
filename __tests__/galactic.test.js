import { AgeCalc } from '../src/galactic.js';

describe('Age Calculator', () => {
  test('should return the inputted age on Earth', () => {
    const age = new AgeCalc(30);
    expect(age.earthAge).toEqual(30);
  });
});