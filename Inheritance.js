class Person {
  constructor(name) {
    this.name = name;
  }
  display() {
    console.log(`Name: ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
  showGrade() {
    console.log(`${this.name}'s grade is ${this.grade}`);
  }
}

const s1 = new Student("Arham", "A");
s1.display();
s1.showGrade();
const p1 = new Person("John");
p1.display();