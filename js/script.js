'use strict';

class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.marks = [];
        this.attendance = new Array(25).fill(null);
    }

    present() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.warn("⚠️ Всі 25 занять уже відмічені!");
        }
    }

    absent() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.warn("⚠️ Всі 25 занять уже відмічені!");
        }
    }

    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }

    getAverageMark() {
        if (this.marks.length === 0) return 0;
        const sum = this.marks.reduce((acc, val) => acc + val, 0);
        return sum / this.marks.length;
    }

    summary() {
        const avgMark = this.getAverageMark();
        const totalLessons = this.attendance.filter(val => val !== null).length;
        const visited = this.attendance.filter(val => val === true).length;
        const avgAttendance = totalLessons === 0 ? 0 : visited / totalLessons;

        if (avgMark > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgMark > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }

    info() {
        return `Ім'я: ${this.firstName} ${this.lastName}, Вік: ${this.getAge()}, Середній бал: ${this.getAverageMark().toFixed(2)}`;
    }
}


const student1 = new Student("Іван", "Петренко", 2003);
student1.marks.push(95, 100, 90);
student1.present();
student1.absent();
student1.present();
console.log(student1.info());
console.log("Підсумок:", student1.summary());

const student2 = new Student("Марія", "Коваленко", 2004);
student2.marks.push(70, 80, 60);
for (let i = 0; i < 10; i++) student2.present();
for (let i = 0; i < 5; i++) student2.absent();
console.log(student2.info());
console.log("Підсумок:", student2.summary());
