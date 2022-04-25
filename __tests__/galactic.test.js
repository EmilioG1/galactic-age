
import { AgeCalc } from './../src/galactic.js';

describe('AgeCalc', () => {

  test('should return the inputted age on Earth', () => {
    const earthAge = new AgeCalc(30);
    expect(earthAge.age).toEqual(30);
  });

  test('should return the inputted age on mars', () => {
    const marsAge = new AgeCalc(33);
    expect(Math.floor(marsAge.mars)).toEqual(17);
  });

  test('should return the inputted age on jupiter', () => {
    const jupiterAge = new AgeCalc(30);
    expect(Math.floor(jupiterAge.jupiter)).toEqual(2);
  });

  test('should return the inputted age on mercury', () => {
    const mercuryAge = new AgeCalc(30);
    expect(Math.floor(mercuryAge.mercury)).toEqual(125);
  });

  test('should return the inputted age on venus', () => {
    const venusAge = new AgeCalc(33);
    expect(Math.floor(venusAge.venus)).toEqual(53);
  });

});