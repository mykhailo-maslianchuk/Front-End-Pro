'use strict';


const arr = [1, 5, 6, null, NaN, `Mykhailo`]

const filter = (arr) => {
    let sumNum = 0
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === `number` && !isNaN(arr[i])) {
            sumNum += arr[i];
        }
    }
    console.log(sumNum);
    }

filter(arr);

console.log(`_________________________________________________________`);

const doMath = (x, znak, y) => {
    if(typeof x === 'number' && typeof y === 'number') {
        switch (znak) {
            case `+`: console.log(`${x} + ${y} = ${x + y}`);
            break;
            case `-`: console.log(`${x} - ${y} = ${x - y}`);
            break;
            case `*`: console.log(`${x} * ${y} = ${x * y}`);
            break;
            case `/`: console.log(`${x} / ${y} = ${x / y}`);
            break;
            case `%`: console.log(`${x} % ${y} = ${x % y}`);
            break;
            case `^`: console.log(`${x} ** ${y} = ${x ** y}`);
            break;
            default: `Ви не ввели оператор обчислення.`;
        }
    }
    return null;
}

doMath(15, `/`, 3)

console.log(`_________________________________________________________`);

'use strict';

function createComplexArray() {
    let mainArray = [];

    let mainLength = Number(prompt(`Введіть кількість елементів основного масиву:`));

    for (let i = 0; i < mainLength; i++) {
        let element = prompt(`Введіть елемент ${i + 1} основного масиву: `);
        mainArray.push(element);
    }

    let innerCount = Number(prompt('Скільки внутрішніх масивів хочете додати?'));

    for (let j = 0; j < innerCount; j++) {
        let innerLength = Number(prompt(`Введіть кількість елементів для внутрішнього масиву ${j + 1} :`));
        let innerArray = [];

        for (let k = 0; k < innerLength; k++) {
            let innerElement = prompt('Введіть елемент #' + (k + 1) + ' для внутрішнього масиву #' + (j + 1) + ':');
            innerArray.push(innerElement);
        }

        mainArray.push(innerArray);
    }

    return mainArray;
}

console.log(createComplexArray());

//let result = createComplexArray();
//console.log('Результат введення користувача:',typeof result);






// const twoDimensionalArray = () => {
//     let arr = prompt(`Вкажіть довжину основного масиву:`);
//     let emptyArr = [];
//     for (let i = 0; i < arr; i++) {
//         emptyArr[i] = 1 + i;
//     }
//     arr = prompt(`Вкажіть довжину внутрішнього масиву:`);
//     let internalArr = [];
//     for (let i = 0; i < arr; i++) {
//         internalArr[i] = 1 + arr[i];
//     }
//     return emptyArr;
// }
//
// console.log(twoDimensionalArray());
