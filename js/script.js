'use strict'

console.log(`1. Вивести на сторінку в один рядок через кому числа від 10 до 20.`);
let resultNamSrc = ``;
    for (let i = 10; i <=20; i++){
        resultNamSrc += i;
            if(i < 20){
                resultNamSrc += `, `;
            }
    }
console.log(`   Числа від 10 до 20: ${resultNamSrc}`);
console.log(`\n`);
console.log(`2. Вивести квадрати чисел від 10 до 20.`);
let resultNamSquare = 0;
    for (let i = 10; i <= 20; i++){
        console.log(`   Квадрат числа: ${i} = ${resultNamSquare = i * i}`);
    }
console.log(`\n`);
console.log(`3. Вивести таблицю множення на 7.`);
for(let i = 1; i <= 10; i++){
    let multiTableSeven = 7 * i;
    console.log(`   7 × ${i} = ${multiTableSeven}`)
}
console.log(`\n`);
console.log(`4. Знайти суму всіх цілих чисел від 1 до 15.`);
let resultSum = 0;
    for (let i =1; i <= 15; i++){
        resultSum += i;
    }
console.log(`   Сума від 1 до 15: ${resultSum}`);
console.log(`\n`);
console.log(`5. Знайти добуток усіх цілих чисел від 15 до 35.`);
let product = 15n;
    for (let i = 16n; i <= 35n; i++) {
        let prevProduct = product;
        product *= i;
        console.log(`   ${prevProduct} × ${i} = ${product}`);
    }
console.log(`\n`);
console.log(`6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.`);
let namSum = 0;
let namConst = 0;
    for (let i = 1; i <= 500; i++) {
        namSum += i;
        namConst++;
 }
let average = namSum / namConst;
console.log(`   Середнє арифметичне значення: ${average}`);
console.log(`\n`);
console.log(`7. Вивести суму лише парних чисел в діапазоні від 30 до 80.`);
let evenSum = 0;
    for (let i = 30; i <= 80; i++) {
        if (i % 2 === 0) {
            evenSum += i;
        }
    }
console.log(`   Сума парних чисел: ${evenSum}`);
console.log(`\n`);
console.log(`8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.`)
let multiples = [];
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        multiples += (`${i}, `);
    }
}
console.log(`   Числа кратні 3: ${multiples}`);
console.log(`\n`);
console.log(`9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.`)
let naturalNum = 550;
let divisors = [];
    for (let i = 1; i <= naturalNum; i++) {
        if (naturalNum % i === 0) {
            divisors += (`${i}, `);
        }
    }
console.log(`   Дільники числа ${naturalNum} = ${divisors}`);
console.log(`\n`);
console.log(` 10. Визначити кількість його парних дільників.`)
let evenDivisorCount = 0;
let evenDivisorSum = 0;
let evenDivisors = ``;
    for (let i = 1; i <= naturalNum; i++) {
        if (naturalNum % i === 0 && i % 2 === 0) {
            evenDivisors += (`${i}, `);
            evenDivisorCount++;
            evenDivisorSum += i;
        }
}
console.log(`   Парні дільники: ${evenDivisors}`);
console.log(`   Кількість парних дільників: ${evenDivisorCount}`);
console.log(`\n`);
console.log(` 11. Знайти суму його парних дільників.`)
console.log(`   Сума парних дільників: ${evenDivisorSum}`);
console.log(`\n`);
console.log(`12 Надрукувати повну таблицю множення від 1 до 10.`);
for (let i = 1; i <= 10; i++) {
    console.log(`\nМноження на ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`   ${i} × ${j} = ${i * j}`);
    }
}






