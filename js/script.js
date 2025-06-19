// 'use strict'
//
// const padString = (str, number, symbol, left = false) => {
//     if(typeof str !== 'string') {
//         throw new Error('Ви вели не коректне значення!');
//     }
//     if(typeof number !== 'number' || isNaN(number) || !isFinite(number)) {
//         throw new Error('Ви вели не коректне значення!');
//     }
//     if(number === 0) return str;
//
//     if (typeof symbol !== `string` || symbol.length !== 1){
//         throw new Error('Ви вели не коректне значення!');
//     }
//     if(typeof left !== `boolean`){
//         throw new Error('Ви вели не коректне значення!');
//     }
//
//     if(number < 0) {
//         let result = ''
//         for(let i = 0; i < str.length; i++) {
//             if(left && i <= Math.abs(number) - 1) continue;                 // start
//             if(!left && i >= str.length - Math.abs(number) ) continue;      // end
//             result += str[i]
//         }
//         return result
//     }
//     let template = symbol.repeat(number);
//     return left ? template + str : str + template
// }
//
// const exampleStr = padString('hello', 3, '*', true);
// console.log(exampleStr)

const padString = (str, number, symbol, left = false) => {
    if (typeof str !== 'string' || typeof symbol !== 'string' || symbol.length !== 1 ||
        typeof number !== 'number' || !isFinite(number) || typeof left !== 'boolean') {
        throw new Error('Некоректні вхідні дані!');
    }

    if (number === 0) return str;

    if (number > 0) {
        const pad = symbol.repeat(number);
        return left ? pad + str : str + pad;
    }

    const abs = Math.abs(number);
    return left ? str.slice(abs) : str.slice(0, str.length - abs);
};

console.log(padString('hello', 3, '*', true));   // ***hello
console.log(padString('hello', 3, '*', false));  // hello***
console.log(padString('hello', -2, '*', true));  // llo
console.log(padString('hello', -2, '*', false)); // hel
