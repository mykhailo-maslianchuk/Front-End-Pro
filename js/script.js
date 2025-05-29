// Увімкнення суворого режиму (помилки будуть видніші)
'use strict'

// Запит імені
let userName = prompt(`Вкажіть ваше імʼя:`)
    userName = String(userName);
    console.log("Ім'я:", userName, typeof userName);

///️ Запит віку
let userAge = prompt(`Вкажіть ваш вік:`)
    userAge = Number(userAge);
    console.log("Вік:", userAge, typeof userAge);

// Підтвердження участі
let userValidation = confirm(`Підтвердіть будь ласка участь:`)
    if (userValidation === true) {
        userValidation = `Участь підтверджено`;
    }else{
        userValidation = `Відмова`;
    }

// Унікальний ідентифікатор
const idUser = 123456789647564756n;

// Промокод не заданий
let bonusCode = null;

// Резервне ім’я не задане
let secondName = undefined;

//Показ повідомлення користувачу
alert(`Привіт, ${userName}!\nТвій вік: ${userAge}\nТвій статус: ${userValidation}`)
