export default class AgeCalc {
  constructor(age) {
    this.lifeExpectancy = 80;
    this.earth = age;
    this.mercury = age;
    this.venus = age;
    this.mars = age;
    this.jupiter = age;
  }

  planetAge(x) {
    if (x === 'mercury') {
      return this.mercury / 0.24;
    } else if (x === 'venus') {
      return this.venus / 0.62;
    } else if (x === 'mars') {
      return this.mars / 1.88;
    } else if (x === 'jupiter') {
      return this.jupiter / 11.86;
    } else {
      return false;
    }
  }

  lifeLeft(p) {
    if (p === 'mercury') {
      return this.lifeExpectancy / 0.24;
    } else if (p === 'venus') {
      return this.lifeExpectancy / 0.62;
    } else if (p === 'mars') {
      return this.lifeExpectancy / 1.88;
    } else if (p === 'jupiter') {
      return this.lifeExpectancy / 11.86;
    } else {
      return false;
    }
  }

  finalAge(y) {
    if (y === 'mercury') {
      if (this.planetAge(y) < this.lifeLeft(y)) {
        return Math.floor(this.lifeLeft(y) - this.planetAge(y));
      } else {
        return Math.floor((this.lifeLeft(y) - this.planetAge(y)) * -1);
      }
    } else if (y === 'venus') {
      if (this.planetAge(y) < this.lifeLeft(y)) {
        return Math.floor(this.lifeLeft(y) - this.planetAge(y));
      } else {
        return Math.floor((this.lifeLeft(y) - this.planetAge(y)) * -1);
      }
    } else if (y === 'mars') {
      if (this.planetAge(y) < this.lifeLeft(y)) {
        return Math.floor(this.lifeLeft(y) - this.planetAge(y));
      } else {
        return Math.floor((this.lifeLeft(y) - this.planetAge(y)) * -1);
      }
    } else if (y === 'jupiter') {
      if (this.planetAge(y) < this.lifeLeft(y)) {
        return Math.floor(this.lifeLeft(y) - this.planetAge(y));
      } else {
        return Math.floor((this.lifeLeft(y) - this.planetAge(y)) * -1);
      }
    } else {
      return false;
    }
  }
  // marsAge() {
  //   if (this.mars < this.lifeExpectancy) {
  //     return Math.floor(this.lifeExpectancy - this.mars);
  //   } else {
  //     return Math.floor((this.lifeExpectancy - this.mars) * -1);
  //   }
  // }
  // mercury() {
  //   this.mercury /= 0.24;
  //   this.lifeExpectancy /= 0.24;
  //   }
  // }
  // venus() {
  //   this.venus /= 0.62;
  //   this.lifeExpectancy /= 0.62;
  //   if (this.venus < this.lifeExpectancy) {
  //     return Math.floor(this.lifeExpectancy - this.venus);
  //   } else {
  //     return Math.floor((this.lifeExpectancy - this.venus) * -1);
  //   }
  // }
  // jupiter() {
  //   this.jupiter /= 11.86;
  //   this.lifeExpectancy /= 11.86;
  //   if (this.venus < this.lifeExpectancy) {
  //     return Math.floor(this.lifeExpectancy - this.jupiter);
  //   } else {
  //     return Math.floor((this.lifeExpectancy - this.jupiter) * -1);
  //   }
  // }
}
