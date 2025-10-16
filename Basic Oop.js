class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  start() {
    console.log(`${this.brand} is starting at speed ${this.speed} km/h`);
  }
}

const car1 = new Car("Toyota", 120);
car1.start();
