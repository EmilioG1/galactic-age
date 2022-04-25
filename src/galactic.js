export class AgeCalc {
  constructor(age) {
    this.age = age;
    this.lifeExpectancy = 80;
    this.earth = 1;
    this.mercury = this.age / 0.24;
    this.venus = this.age / 0.62;
    this.mars = this.age / 1.88;
    this.jupiter = this.age / 11.86;
  }
  mars() {
    this.lifeExpectancy /= 1.88;
    if (this.mars < this.lifeExpectancy) {
      return Math.floor(this.lifeExpectancy - this.mars);
    } else {
      return Math.floor((this.lifeExpectancy - this.mars) * -1);
    }
  }
}
