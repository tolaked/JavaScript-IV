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

const jumbo = new Airplane("Jumbo");
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
    this.stomach = food;
    console.log("I have " + this.stomach);
    console.log(`Hi my name is ${this.name} I will like to have ${food}`);
  }

  poop(stomach, food) {
    this.stomach = [];
  }
}

var somebody = new Person("Tola", 70);
somebody.greet();
somebody.eat("Rice");
somebody.poop([]);
// TASK 2
