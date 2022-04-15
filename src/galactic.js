export class AgeCalc {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    const earth = 1;
    const mercury = 0.24;
    const venus = 0.62;
    const mars = 1.88;
    const jupiter = 11.86;
  }
  whatAge() {
    let mercuryAge = this.age * mercury;
    let venusAge = this.age * venus;
    let marsAge = this.age * mars;
    let jupiterAge = this.age * jupiter;

  }
}
