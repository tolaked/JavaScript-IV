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

  PRAssignment(student) {
    console.log(
      `${student.name} has submitted a PR for ${student.favSubjects[0]}`
    );
  }

  sprintChallenge(student) {
    console.log(
      `${student.name} has began sprint challenge on a ${
        student.favSubjects[2]
      }`
    );
  }

  graduate() {
    this.grade >= 70
      ? console.log(`Congratulations ${this.name}, you have graduated.`)
      : console.log(
          `Sorry, ${
            this.name
          }, you cannot graduate at this time, you do not meet the cut off.`
        );
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
James.PRAssignment(James);
James.sprintChallenge(James);

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

  grade(student) {
    console.log(
      `${student.name} received a perfect score on ${student.favSubjects[0]}`
    );
  }

  addOrSub(student) {
    let previousScore = student.grade;
    let random = Math.floor(Math.random() * 15 + 1);
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    random = random * plusOrMinus;

    let newScore = student.grade + random;

    student.grade = newScore;

    plusOrMinus >= 1
      ? console.log(`Added ${random} points to ${previousScore} new score is ${newScore}
    `)
      : console.log(`Removed ${random} points from ${previousScore} new score is ${newScore}
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
Lecturer.grade(James);
Lecturer.addOrSub(James);
James.graduate();

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

  debugsCode(student) {
    console.log(
      `${this.name} debugs ${student.name}'\s code on ${student.favSubjects[1]}`
    );
  }
}
const TL = new PM("Anna", 30, "Europe", "WEBEU2", "Gabe");
TL.standUp("general");
TL.debugsCode(James);
