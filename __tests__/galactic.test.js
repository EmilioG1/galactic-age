
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
    expect(Math.floor(newAge.planetAge('venus'))).toEqual(53);
  });

//   test('should return life expectancy on mars', () => {
//     let marsAge = new AgeCalc(30);
//     expect(Math.floor(marsAge.mars.mars).toEqual(34));
//   })
});