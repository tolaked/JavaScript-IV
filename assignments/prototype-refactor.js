/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*

  In order to do these exercises you'll need your newly acquired knowledge on
  constructor functions, methods, prototypes and the `this` keyword.
  Here's an example of an exercise:

  TASK 0:

  - Build an Airplane constructor that takes a name.
  - Give airplanes the ability to take off and land.
  - If a plane takes off, its "isFlying" property is true.
  - If a plane lands, its "isFlying" property is false.

  SOLUTION CODE:*/

class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }

  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}
// HOW TO TEST OUR SOLUTION:
class Plane extends Airplane {
  constructor(name) {
    super(name);
    this.name = name;
  }
}

const jumbo = new Plane("Jumbo");
console.log(jumbo.name); // 'Jumbo'
console.log(jumbo.isFlying); // false
jumbo.takeOff();
console.log(jumbo.isFlying); // true
jumbo.land();
console.log(jumbo.isFlying); // false

/*
  
    TASK 1
  
    - Build a Person Constructor that takes name and age.
    - Give persons the ability to greet by returning a string stating name and age.
    - Give persons the ability to eat edibles.
    - When eating an edible, it should be pushed into a "stomach" property which is an array.
    - Give persons the ability to poop.
    - When pooping, the stomach should empty.
    */
class Person {
  constructor(name, age, stomach) {
    this.name = name;
    this.age = age;
    this.stomach = stomach;
  }
  greet() {
    console.log(`Hi my name is ${this.name} and I am ${this.age} years`);
  }
  eat(food) {
    this.stomach.push(food);
    console.log("I had " + this.stomach);
    console.log(`Hi my name is ${this.name} I will like to have ${food}`);
  }

  poop() {
    this.stomach = [];
    console.log("I have poo" + this.stomach);
  }
}

class Being extends Person {
  constructor(name, age, stomach) {
    super(name, age, stomach);
    this.name = name;
    this.age = age;
    this.stomach = stomach;
  }
}

const somebody = new Being("Tola", 70, []);
somebody.greet();
somebody.eat("Rice");
somebody.eat("beans");
somebody.poop([]);
// TASK 2

// - Build a Car constructor that takes model name and make.
// - Give cars the ability to drive a distance.
// - By driving a car, the distance driven should be added to an "odometer" property.
// - Give cars the ability to crash.
// - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
// - Give cars the ability to be repaired.
// - A repaired car can be driven again.

class Car {
  constructor(model, name, make, odometer) {
    this.model = model;
    this.name = name;
    this.make = make;
    this.odometer = 60;
  }

  drive(distance) {
    // canDrive = true;
    this.odometer += distance;
    console.log(`I have gone ${this.odometer}miles`);
  }

  crash(isCrashed) {
    isCrashed = true;
    if (isCrashed) {
      console.log(`I crashed at ${this.odometer}miles`);
    } else {
      console.log("You can drive");
    }
  }

  repaired(isRepaired) {
    isRepaired = true;
    if (isRepaired) {
      console.log(`Repaired, you can drive`);
    } else {
      console.log("Faulty!!!");
    }
  }
}

class Vehicle extends Car {
  constructor(model, name, make) {
    super(model, name, make);
    this.model = model;
    this.name = name;
    this.make = make;
  }
}

const Toyota = new Vehicle("2016", "Toyo", "Avalon");
Toyota.drive(20);
Toyota.crash();
Toyota.repaired();

// TASK 3

// - Build a Baby constructor that subclasses the Person built earlier.
// - Babies of course inherit the ability to greet, which can be strange.
// - Babies should have the ability to play, which persons don't.
// - By playing, a string is returned with some text of your choosing.

class Baby extends Person {
  constructor(name, age) {
    super(name, age);
    this.name = name;
    this.age = age;
  }
  play(playsound) {
    console.log(playsound);
  }

  greet(greetsound) {
    console.log(greetsound);
  }
}

const toddler = new Baby("Jane", 1);
toddler.play("kirirki");
toddler.greet("heeyyyh");
