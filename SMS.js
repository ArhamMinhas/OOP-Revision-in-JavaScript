// 🎓 SCHOOL MANAGEMENT SYSTEM USING OOP

// 🧱 1. Base Class (Parent) → Inheritance Base
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`👤 Name: ${this.name}, Age: ${this.age}`);
  }
}

// 🧱 2. Student Class → Inherits from Person
class Student extends Person {
  #marks; // encapsulated (private)

  constructor(name, age, grade, marks) {
    super(name, age);
    this.grade = grade;
    this.#marks = marks;
  }

  // Getter and Setter (Encapsulation)
  getMarks() {
    return this.#marks;
  }

  setMarks(marks) {
    if (marks >= 0 && marks <= 100) {
      this.#marks = marks;
    } else {
      console.log("❌ Invalid marks!");
    }
  }

  // 🧱 Polymorphism (Overriding)
  displayInfo() {
    console.log(
      `🎒 Student: ${this.name}, Grade: ${this.grade}, Marks: ${this.#marks}`
    );
  }
}

// 🧱 3. Teacher Class → Inherits from Person
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // 🧱 Polymorphism (Overriding)
  displayInfo() {
    console.log(`📚 Teacher: ${this.name}, Subject: ${this.subject}, Age: ${this.age} `);
  }
}

// 🧱 4. School Class → Abstraction + Encapsulation
class School {
  #students = [];
  #teachers = [];

  addStudent(student) {
    this.#students.push(student);
  }

  addTeacher(teacher) {
    this.#teachers.push(teacher);
  }

  // Abstracted method — user doesn’t see internal loops
  showAllMembers() {
    console.log("🏫 --- School Members ---");
    this.#teachers.forEach((t) => t.displayInfo());
    this.#students.forEach((s) => s.displayInfo());
  }
}

const school = new School();

const teacher1 = new Teacher("Mr. Ali", 35, "Math");
const teacher2 = new Teacher("Ms. Sara", 29, "English");

const student1 = new Student("Arham", 17, "10th", 88);
const student2 = new Student("Hira", 16, "9th", 95);

// Add members to school (Encapsulation in action)
school.addTeacher(teacher1);
school.addTeacher(teacher2);
school.addStudent(student1);
school.addStudent(student2);

// Display everything (Abstraction + Polymorphism in action)
school.showAllMembers();

// Update student marks using encapsulation methods
student1.setMarks(92);
console.log(`✅ Updated Marks of ${student1.name}: ${student1.getMarks()}`);
