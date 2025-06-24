'use strict'

const arr = [1, 2, 3, -1, -2, -3]

function positiveNumbers(arr) {
    if (arr.length === 0) {
        return 'Масив порожній';
    }

    const exampleArr = [];


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            exampleArr.push(arr[i]);
        }
    }

    if (exampleArr.length > 0) {
        return exampleArr;
    } else {
        return null;
    }
}

console.log(positiveNumbers(arr));