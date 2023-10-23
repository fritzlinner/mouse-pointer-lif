class Person {
    constructor(foreName = 'Anonymus') {
        this.foreName = foreName
    }
    speak(text) {
console.log(text)
    }
    tellMeYourName() {
        this.speak("My name is" + this.foreName)
    }
}
class Student extends Person {
    constructor(foreName = 'Anonymus') {
        this.foreName = foreName
        super(foreName);
        if (Math.random() < 0.7) {
            this.isFunny = false;
        } else {
            this.isFunny = true;
        }
        this.studentNumber = Math.round(Math.random()*10000000);
}
}
class School {
    constructor(size) {
this.students = []
for (let i = 0; i < size; i++) {
    this.student[i] = new student()
}
    }
}

const myschool = new School(10)
for (let i = 0; i < myschool.students.length; i++) {
  myschool.students[i].tellMeYourName()
    
}