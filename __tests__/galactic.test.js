
import AgeCalc from './../src/galactic.js';

describe('AgeCalc', () => {
  let newAge = new AgeCalc(30);

  test('should return years in earth years', () => {
    expect(newAge.earth).toEqual(30);
  });

  test('should return the inputted age on mars', () => {
    expect(Math.floor(newAge.planetAge('mars'))).toEqual(15);
  });

  test('should return the inputted age on jupiter', () => {
    expect(Math.floor(newAge.planetAge('jupiter'))).toEqual(2);
  });

  test('should return the inputted age on mercury', () => {
    expect(Math.floor(newAge.planetAge('mercury'))).toEqual(125);
  });

  test('should return the inputted age on venus', () => {
    expect(Math.floor(newAge.planetAge('venus'))).toEqual(48);
  });

  test('should return life expectancy on mercury', () => {
    expect(Math.floor(newAge.lifeLeft('mercury'))).toEqual(333);
  });

  test('should return life expectancy on venus', () => {
    expect(Math.floor(newAge.lifeLeft('venus'))).toEqual(129);
  });

  test('should return life expectancy on mars', () => {
    expect(Math.floor(newAge.lifeLeft('mars'))).toEqual(42);
  });

  test('should return life expectancy on jupiter', () => {
    expect(Math.floor(newAge.lifeLeft('jupiter'))).toEqual(6);
  });

  test('should return final years left on mercury', () => {
    expect(Math.floor(newAge.finalAge('mercury'))).toEqual(208);
  });

  test('should return final years left on venus', () => {
    expect(Math.floor(newAge.finalAge('venus'))).toEqual(80);
  });

  test('should return final years left on mars', () => {
    expect(Math.floor(newAge.finalAge('mars'))).toEqual(26);
  });

  test('should return final years left on jupiter', () => {
    expect(Math.floor(newAge.finalAge('jupiter'))).toEqual(4);
  });

  test('should return final years left on jupiter for someone over their expected age', () => {
    let oldAge = new AgeCalc(85);
    expect(Math.floor(oldAge.finalAge('jupiter'))).toEqual();
  });
});