'use strict'

function greetUser(from, text){
    alert(`${text}, ${from}!`)
}

let userName = prompt('Вкажіть будь ласка ваше імʼя: ');
if (userName === null || userName === '') {
    alert(`Шкода, що Ви не захотіли вказати своє імʼя.`);
    userName = `Користувач не вказав імʼя.`;
}else if(!isNaN(userName)){
    alert(`Ви ввели некоректне значення!\nВведіть ваше імʼя не в числовому значенні.`);
    userName = prompt('Ваше імʼя ?');
    if (!isNaN(userName) || userName === null  || userName === '') {
        alert(`Шкода, що Ви не захотіли вказати своє імʼя.`);
        userName = `Користувач не вказав імʼя`;
    }
}

const messageWelcome = `Привіт`

greetUser(userName, messageWelcome);







