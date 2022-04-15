
import AgeCalc from './src/galactic.js';

describe('AgeCalc', () => {

  test('should return the inputted age on Earth', () => {
    const earthAge = new AgeCalc(30);
    expect(earthAge).toEqual(30);
  });
});

