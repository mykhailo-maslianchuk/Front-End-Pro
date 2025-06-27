'use strict';

const filter = () =>{
    let mainArr = [];
    let mainLength = Number(prompt(`Вкажіть кількість елементів масиву:`));

    for(let i = 0; i < mainLength; i++) {
        let element = prompt(`Вкажіть елемент ${i + 1} масиву:`);
        let parsed = Number(element);
        if(!isNaN(parsed) && element !== ``) {
            mainArr.push(parsed);
        }else {
            mainArr.push(element);
        }
    }

    if(mainArr.length > 1) {
        console.log(`Масив складається з таких елементів: [ ${mainArr.join(` | `)} ]`);
    }

    let sumNum = 0;
    let countNums = 0;

    for(let i = 0; i < mainArr.length; i++) {
        if(typeof mainArr[i] === 'number' && !isNaN(mainArr[i])) {
            sumNum += mainArr[i];
            countNums++;
        }
    }
    if (countNums > 0) {
        let average = sumNum / countNums;
        console.log(`Сума всіх введених чисел: ${sumNum}`);
        console.log(`Кількість введених чисел: ${countNums}`);
        console.log(`Середнє значення: ${average}`);
    } else {
        console.log('Чисел не введено.');
    }
}

//filter();

console.log(`-------------------------------------------------------`);

const doMath = () => {
    alert(`Для виконання математичної дії, будь ласка, введіть два числа та оберіть оператор обчислення (наприклад: +, -, *, /, %/ **).`);
    const x = Number(prompt(`Вкажіть будь ласка перше число:`));
    const y = Number(prompt(`Вкажіть будь ласка друге число:`));
    const znak = prompt(`Вкажіть будь ласка оператор дії: (+, -, *, /, %, **)`);

    if(!isNaN(x) && !isNaN(y)) {
        switch (znak) {
            case `+`:
                console.log(`${x} + ${y} = ${x + y}`);
                break;
            case `-`:
                console.log(`${x} - ${y} = ${x - y}`);
                break;
            case `*`:
                console.log(`${x} * ${y} = ${x * y}`);
                break;
            case `/`:
                if (y === 0){
                    console.log(`Ділення на нуль заборонено!`)
                }else {
                    console.log(`${x} / ${y} = ${x / y}`);
                }
                break;
            case `%`:
                console.log(`${x} % ${y} = ${x % y}`);
                break;
            case `**`:
                console.log(`${x} ** ${y} = ${x ** y}`);
                break;
            default: console.log(`Ви не ввели оператор обчислення.`);
        }
    }else{
        console.log(`Ви ввели некоректне значення!`);
    }
}

// doMath()

console.log(`-------------------------------------------------------`);

const createComplexArray = () => {
    let mainArray = [];

    let mainLength = Number(prompt(`Вкажіть кількість елементів основного масиву:`));
    for (let i = 0; i < mainLength; i++) {
        let element = prompt(`Вкажіть елемент ${i + 1} основного масиву:`)
        mainArray.push(element);
    }

    let innerCount = Number(prompt('Вкажіть кількість внутрішніх масивів:'));

    for (let j = 0; j < innerCount; j++) {
        let innerLength = Number(prompt(`Вкажіть кількість елементів внутрішнього масиву ${j + 1} :`));
        let innerArray = [];

        for (let n = 0; n < innerLength; n++) {
            let innerElement = prompt(`Введіть елемент ${n + 1} для внутрішнього масиву ${j + 1}:`);
            innerArray.push(innerElement);
        }
        mainArray.push(innerArray);
    }

    return mainArray;
}

// console.log(createComplexArray());
console.log(`-------------------------------------------------------`);

const removeChars = (str, charsToRemove) => {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];

        if (!charsToRemove.includes(currentChar)) {
            result += currentChar;
        }
    }

    return result;
};

const inputStr = prompt('Введіть рядок, з якого треба видалити символи:');
const charsStr = prompt('Введіть символи, які треба видалити (через кому):');
const charsArray = charsStr.split(',').map(s => s.trim());
const finalResult = removeChars(inputStr, charsArray);
console.log(`Результат: ${finalResult}`);

