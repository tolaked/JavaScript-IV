// CODE here for your Lambda Classes

class Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }

  speak() {
    console.log(`Hello my name is ${this.name} I am from ${this.location} `);
  }
}

class Instructor extends Person {
  constructor(name, age, location, specialty, favLanguage, catchPhrase) {
    super(name, age, location);
    this.name = name;
    this.age = age;
    this.location = location;
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} received a perfect score on ${subject}`);
  }
}
const Lecturer = new Instructor(
  "Bony",
  40,
  "Lagos",
  "React",
  "Javascript",
  "Eat always"
);

Lecturer.demo("Array");
Lecturer.grade({ name: "Ade" }, "Array");

class Student extends Person {
  constructor(name, age, location, previousBackground, className, favSubjects) {
    super(name, age, location);
    this.name = name;
    this.age = age;
    this.location = location;
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
  }

  listsSubjects() {
    console.log(`${this.favSubjects}`);
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has began sprint challenge on a ${subject}`);
  }
}
const James = new Student("James", 20, "Lagos", "Trading", "WEBEU3", [
  "Javascript",
  "Python",
  "Ruby"
]);

James.listsSubjects();
James.PRAssignment("Ruby");
James.sprintChallenge("Ruby");
