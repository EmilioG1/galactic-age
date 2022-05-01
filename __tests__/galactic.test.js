
import AgeCalc from './../src/galactic.js';

describe('AgeCalc', () => {
  let newAge = new AgeCalc(30);

  test('should return age in planet years', () => {
    expect(newAge.earth).toEqual(30);
    expect(Math.floor(newAge.planetAge('mercury'))).toEqual(125);
    expect(Math.floor(newAge.planetAge('venus'))).toEqual(48);
    expect(Math.floor(newAge.planetAge('mars'))).toEqual(15);
    expect(Math.floor(newAge.planetAge('jupiter'))).toEqual(2);
  
  });

  test('should return life expectancy for a specific planet', () => {
    expect(Math.floor(newAge.lifeLeft('mercury'))).toEqual(333);
    expect(Math.floor(newAge.lifeLeft('venus'))).toEqual(129);
    expect(Math.floor(newAge.lifeLeft('mars'))).toEqual(42);
    expect(Math.floor(newAge.lifeLeft('jupiter'))).toEqual(6);
  });

  test('should return false when planet name isnt listed', () => {
    expect(newAge.planetAge('saturn')).toBe(false);
    expect(newAge.lifeLeft('saturn')).toBe(false);
    expect(newAge.finalAge('saturn')).toBe(false);
  });

  test('should return final years left on planet', () => {
    expect(Math.floor(newAge.finalAge('mercury'))).toEqual(208);
    expect(Math.floor(newAge.finalAge('venus'))).toEqual(80);
    expect(Math.floor(newAge.finalAge('mars'))).toEqual(26);
    expect(Math.floor(newAge.finalAge('jupiter'))).toEqual(4);
  });


  test('should return final years left on jupiter for someone over their expected age', () => {
    let oldAge = new AgeCalc(100);
    expect(Math.ceil(oldAge.finalAge('jupiter'))).toEqual(1);
    expect(Math.ceil(oldAge.finalAge('mars'))).toEqual(10);
    expect(Math.ceil(oldAge.finalAge('venus'))).toEqual(32);
    expect(Math.ceil(oldAge.finalAge('mercury'))).toEqual(83);
  });
});
