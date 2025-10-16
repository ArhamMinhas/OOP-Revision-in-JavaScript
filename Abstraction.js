
class Vehicle {
  // "abstract" method simulation (JS doesn’t have true abstract classes)
  start() {
    throw new Error("Method 'start()' must be implemented.");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car starts with a key");
  }
}

class Bike extends Vehicle {
  start() {
    console.log("Bike starts with a button");
  }
}

const v = new Car();
v.start(); 
const b = new Bike();
b.start(); 