'use strict';

function Student(firstName, lastName, birthYear){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.marks = [];
    this.attendance = new Array(25).fill(null);

    this.present = function() {
        if (!this.attendance.includes(null)) {
            console.warn("Всі 25 занять уже відмічені!");
            return;
        }

        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === null) {
                this.attendance[i] = true;
                break;
            }
        }
    };

    this.absent = function() {
        if (!this.attendance.includes(null)) {
            console.warn("Всі 25 занять уже відмічені!");
            return;
        }

        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === null) {
                this.attendance[i] = false;
                break;
            }
        }
    };

    this.getAge =  function() {
        return new Date().getFullYear() - this.birthYear;
    }

    this.getAverageMark =  function() {
        if(this.marks.length === 0) return 0;
        let sum = this.marks.reduce((total, val) => total + val, 0);
        return sum / this.marks.length;
    }

    this.summary = function (){
        let avgMark = this.getAverageMark();

        let total = this.attendance.filter(val => val !== null).length;
        let visited = this.attendance.filter(val => val === true).length;
        let avgVisit = total === 0 ? 0 : visited / total;

        if (avgMark > 90 && avgVisit > 0.9) {
            return "Молодець!";
        } else if (avgMark > 90 || avgVisit > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
    this.info = function (){
        let totalLessons = this.attendance.length;
        let visited = this.attendance.filter(val => val === true).length;
        let visitRate = totalLessons === 0 ? 0 : (visited / totalLessons * 100).toFixed(2);

        return `Імʼя: ${this.firstName} ${this.lastName}\nВік: ${this.getAge()}\nСередній бал: ${this.getAverageMark().toFixed(2)}\nВідвідування: ${visited}/${totalLessons} (${visitRate}%)`
    }
}

let student_1 = new Student('John', 'Doe', 2005);
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.absent()
student_1.marks.push(20, 40, 60, 100)
console.log(student_1.info())

let student_2 = new Student('Mykhailo', 'Maslianchuk', 2004);
student_2 .present()
student_2.present()
student_2.present()
student_2.present()
student_2.absent()
student_2.present()
student_2.present()
student_2.marks.push(20, 40, 60, 80)
console.log(student_2.info())