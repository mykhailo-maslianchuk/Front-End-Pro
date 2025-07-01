'use strict';

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

const arrPositives = arr.filter(num => num > 0);
const arrNegatives = arr.filter(num => num < 0);

const sum = (arr) =>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const sumPositives = sum(arrPositives);

const arrMaxValue = Math.max(...arr);
const arrMaxIdex = arr.indexOf(arrMaxValue);

const arrMinValue = Math.min(...arr);
const arrMinIdex = arr.indexOf(arrMinValue);

const arrEvenPositives = arr.filter(num => num > 0 && num % 2 === 0);
const sumArrEvenPositives = sum(arrEvenPositives);
const arrOddPositives = arr.filter(num => num > 0 && num % 2 !== 0);
const sumArrOddPositives = sum(arrOddPositives);

const arrProduct = arrPositives.reduce((acc, curr) => acc * curr, 1)

const  arrOnlyMax = arr.map(num => num === arrMaxValue ? num : 0)

console.log(`                          АНАЛІЗ МАСИВУ`                          )
console.log('-----------------------------------------------------------------');
console.log(`Поточний масив:\n[ ${arr.join(` | `)} ]`)
console.log('-----------------------------------------------------------------');
/*
1. Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
Знайти суму та кількість позитивних елементів.
*/
console.log(`Позитивні елементи:\n[ ${arrPositives.join(` | `)} ]`)
console.log(`Кількість позитивних елементів: ${arrPositives.length}`)
console.log(`Сума позитивних елементів: ${sumPositives}`)
console.log('-----------------------------------------------------------------');
//2. Знайти мінімальний елемент масиву та його порядковий номер.
console.log(`Мінімальний елемент: ${arrMinValue}\nПорядковий номер елементу: ${arrMinIdex}`)
console.log('-----------------------------------------------------------------');
//3. Знайти максимальний елемент масиву та його порядковий номер.
console.log(`Максимальний елемент: ${arrMaxValue}\nПорядковий номер елементу: ${arrMaxIdex}`)
console.log('-----------------------------------------------------------------');
//4. Визначити кількість негативних елементів.
console.log(`Кількість негативних елементів: ${arrNegatives.length}`)
console.log('-----------------------------------------------------------------');
// 5. Знайти кількість непарних позитивних елементів.
// 8. Знайти суму непарних позитивних елементів.
console.log(`Непарні позитивні елементи: [ ${arrOddPositives.join(` | `)} ]`)
console.log(`Кількість непарних позитивних елементів: ${arrOddPositives.length}`)
console.log(`Сума позитивних непарних елементів: ${sumArrOddPositives}`)
console.log('-----------------------------------------------------------------');
// 6. Знайти кількість парних позитивних елементів.
// 7. Знайти суму парних позитивних елементів.
console.log(`Парні позитивні елементи: [ ${arrEvenPositives.join(` | `)} ]`)
console.log(`Кількість парних позитивних елементів: ${arrEvenPositives.length}`)
console.log(`Сума позитивних парних елементів: ${sumArrEvenPositives}`)
console.log('-----------------------------------------------------------------');
// 9. Знайти добуток позитивних елементів.
console.log(`Позитивні елементи:\n[ ${arrPositives.join(` | `)} ]`)
console.log(`Добуток позитивних елементів: ${arrProduct}`)
console.log('-----------------------------------------------------------------');
// 10. Знайти найбільший серед елементів масиву, остальні обнулити.
console.log(`Масив, де залишено тільки найбільше число:\n[ ${arrOnlyMax.join(` | `)} ]`)




