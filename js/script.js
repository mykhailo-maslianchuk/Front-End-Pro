'use strict'

// 1. Ваша функція повинна працювати аналогічно методу array.shift
const arr= [`Михайло`,`Вероніка`,`Анастасія`,`Марія`,`Василь`,`Назар`];

const arrShift = (arr) => {
    if (arr.length === 0) return undefined;

    const firstElement = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    arr.length = arr.length - 1;
    return firstElement;
}
console.log(`Видалений елемент масиву: [ ${arrShift(arr)} ]`);
console.log(`Оновлений масив: [ ${arr.join(` | `)} ]`);

console.log(`------------------------------------------------------------------`)

//2 Ваша наступна функція повинна працювати аналогічно методу array.reverse

const  arrReverse =  (arr) => {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
    return (arr);
}

console.log(`Перевернутий масив: [ ${arrReverse(arr).join(` | `)} ]`);