'use strict'

console.log(`1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).`);
let resultNamSrc = ``;
for (let i = 20; i <=30; i += 0.5){
    resultNamSrc += i;
    if(i < 30){
        resultNamSrc += `, `;
    }
}
console.log(`   Числа від 20 до 30: ${resultNamSrc}`);
console.log(`\n`);
console.log(`2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.`);
const usdUah = 27;
for(let i = 10; i <= 100; i += 10){
    let convUsdUah = i * usdUah;
    console.log(`   ${i} USD = ${convUsdUah} UAH`);
}
console.log(`\n`);
console.log(`3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.`);
const N = 5000;
for (let i = 1; i <= 100; i++) {
    let squareResult = i * i;
    if  (squareResult <= N ) {
        console.log(`   ${i}^2 = ${squareResult}`);
    }
}
console.log(`\n`);
console.log(`4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе)`)
let simpleNumber = 22
let isPrime = true;
if (simpleNumber <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(simpleNumber); i++) {
        if (simpleNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(`Число ${simpleNumber} — просте (ділиться тільки на 1 і себе)`);
} else {
    console.log(`Число ${simpleNumber} — не є простим (має інші дільники)`);
}
console.log(`\n`)
console.log(`5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).)`);
let target = 81;
let isPowerOfThree = false;
for (let power = 0; ; power++) {
    let result = 3 ** power;
    if (result === target) {
        console.log(`   Число ${target} = 3^${power} можна отримати`);
        isPowerOfThree = true;
        break;
    }
    if (result > target) {
        break;
    }
}
if (!isPowerOfThree) {
    console.log(`   Число ${target} не можна отримати шляхом зведення 3 у деякий ступінь`);
}




