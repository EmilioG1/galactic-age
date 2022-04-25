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
  mercury() {
    this.lifeExpectancy /= 0.24;
    if (this.mercury < this.lifeExpectancy) {
      return Math.floor(this.lifeExpectancy - this.mercury);
    } else {
      return Math.floor((this.lifeExpectancy - this.mercury) * -1);
    }
  }
  venus() {
    this.lifeExpectancy /= 0.62;
    if (this.venus < this.lifeExpectancy) {
      return Math.floor(this.lifeExpectancy - this.venus);
    } else {
      return Math.floor((this.lifeExpectancy - this.venus) * -1);
    }
  }
  jupiter() {
    this.lifeExpectancy /= 11.86;
    if (this.venus < this.lifeExpectancy) {
      return Math.floor(this.lifeExpectancy - this.jupiter);
    } else {
      return Math.floor((this.lifeExpectancy - this.jupiter) * -1);
    }
  }
}
