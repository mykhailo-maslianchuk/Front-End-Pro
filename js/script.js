'use strict'

function removeByValue(arr, value) {
    let index = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        return arr;
    } else {
        for (let i = index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }

        arr.length = arr.length - 1;

        return arr;
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];

console.log(removeByValue(array, 5));
