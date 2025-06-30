'use strict';

const arr = [10, 20, 25, 30, 40, 20, 50];
let value = 20;

// indexOf()
const indexOf = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
};

const index = indexOf(arr, value);

console.log(`Поточний масив: [ ${arr.join(' | ')} ]`);

if (index !== -1) {
    console.log(`Елемент: ${value}`);
    console.log(`Індекс елемента в масиві: ${index}`);
} else {
    console.log(`Елемент "${value}" не знайдено в масиві.`);
}

console.log(`-----------------------------------------------`);
// lastIndexOf()

const lastIndexOf = (arr, value) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
};

const indexlastIndexOf = lastIndexOf(arr, value);

console.log(`Поточний масив: [ ${arr.join(' | ')} ]`);

if (indexlastIndexOf !== -1) {
    console.log(`Елемент: ${value}`);
    console.log(`Індекс елемента в масиві: ${indexlastIndexOf}`);
} else {
    console.log(`Елемент "${value}" не знайдено в масиві.`);
}

console.log(`-----------------------------------------------`);
// find

const find = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            return arr[i];
        }
    }
    return undefined;
};

const resultFind = find(arr, value);

console.log(`Поточний масив: [ ${arr.join(' | ')} ]`);
console.log(`Перший елемент в масиві більший за ${value}: ${resultFind}`);

console.log(`-----------------------------------------------`);

// findIndex

const findIndex = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            return i;
        }
    }
    return -1;
}

const indexfindIndex = findIndex(arr, value);

console.log(`Масив: [ ${arr.join(' | ')} ]`);

if (indexfindIndex !== -1) {
    console.log(`Елемент більший за ${value} знайдено на позиції ${indexfindIndex} — це ${arr[indexfindIndex]}`);
} else {
    console.log(`Елемент більший за ${value} не знайдено.`);
}

console.log(`-----------------------------------------------`);

// includes

const includes = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}
const isIncluded = includes(arr, value);

console.log(`Поточний масив: [ ${arr.join(' | ')} ]`);

console.log(`Перевіряємо, чи містить масив значення: ${value}`);

if (isIncluded) {
    console.log(`Так! Масив містить значення "${value}"`);
} else {
    console.log(`Ні, масив не містить значення "${value}"`);
}

//every
console.log(`-----------------------------------------------`);

const every = (arr, value)  => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= value) {
            return false;
        }
    }
    return true;
}
value = 9
const resultEvery = every(arr, value);

console.log(`Поточний масив: [ ${arr.join(' | ')} ]`);
console.log(`Чи всі елементи більші за ${value} ? > ${resultEvery ? 'Так' : 'Ні'}`);

//some

console.log(`-----------------------------------------------`);

function some(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            return true;
        }
    }
    return false;
}
value = 49
const resultSome =  some(arr, value)
console.log(`Поточний масив: [ ${arr.join(' | ')} ]`);
console.log(`Чи є хоча б один елемент більший за ${value} ? > ${resultSome ? 'Так' : 'Ні'}`);