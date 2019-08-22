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

class Student extends Person {
  constructor(
    name,
    age,
    location,
    previousBackground,
    className,
    favSubjects,
    grade
  ) {
    super(name, age, location);
    this.name = name;
    this.age = age;
    this.location = location;
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
    this.grade = grade;
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
const James = new Student(
  "James Doe",
  20,
  "Lagos",
  "Trading",
  "WEBEU3",
  ["Javascript", "Python", "Ruby"],
  70
);

James.listsSubjects();
James.PRAssignment("Ruby");
James.sprintChallenge("Ruby");

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

  addOrSub(student) {
    let random = Math.floor(Math.random() * 15 + 1);
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    console.log(plusOrMinus);
    random = random * plusOrMinus;

    const newScore = student.grade + random;

    plusOrMinus >= 1
      ? console.log(`Added ${random} points to ${
          student.grade
        } new score is ${newScore}
    `)
      : console.log(`Removed ${random} points from ${
          student.grade
        } new score is ${newScore}
      `);
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
Lecturer.grade(James, "Array");
Lecturer.addOrSub(James);

class PM extends Person {
  constructor(name, age, location, gradClassName, favInstructor) {
    super(name, age, location);

    this.name = name;
    this.age = age;
    this.location = location;
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces ${channel} @channel standy time`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'\s code on ${subject}`);
  }
}
const TL = new PM("Anna", 30, "Europe", "WEBEU2", "Gabe");
TL.standUp("general");
TL.debugsCode({ name: "Tola" }, "JavaScript Callbacks");
