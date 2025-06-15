'use strict'

let result = ``;
for (let i = 10; i <= 20; i++) {
    result += i;
    if (i < 20) {
        result += `, `;
    }
}
console.log(`Числа від 10 до 20 = ${result}`);
console.log(`\n`);

for (let i = 10; i <= 20; i++) {
    let square = i * i; // знаходимо квадрат
    console.log(`Квадрат числа ${i} = ${square}`);
}

console.log(`\n`);
for (let i = 1; i <= 10; i++) {
    let result = 7 * i;
    console.log(`7 × ${i} = ${result}\n`);
}
console.log(`\n`);

let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(`Сума від 1 до 15 = ${sum}`);
console.log(`\n`);

let product = 1n; // використовуємо BigInt для великих чисел
for (let i = 15n; i <= 35n; i++) {
    product *= i; // перемножаємо всі числа
}
console.log(`Добуток від 15 до 35 = ${product}`);
console.log(`\n`);

for (let i = 1; i <= 500; i++) {
    sum += i;
}
let average = sum / 500;
console.log(`Середнє арифметичне від 1 до 500 = ${average}`);
console.log(`\n`);

let evenSum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    }
}
console.log(`Сума парних чисел від 30 до 80 = ${evenSum}`);
console.log(`\n`);

let multiples = [];
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        multiples += (`${i}, `);
    }
}
console.log(`Числа кратні 3 = ${multiples}`);
console.log(`\n`);

let number = 550;
let divisors = [];
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        divisors += (`${i}, `);
    }
}
console.log(`Дільники числа ${number} = ${divisors}`);
console.log(`\n`);

let evenSum = 0;
for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        evenSum += (`${i}, `);
    }
}
console.log(`Сума парних дільників: ${evenSum}`);





