// Увімкнення строгого режиму — допомагає уникати помилок
'use strict';

//Ім'я користувача — рядковий тип (string)
const userName = `Mykhailo`;
    console.log(`Name: ${userName} - Type: ${typeof userName}`);

// Вік користувача — числовий тип (number)
const userAge = 21;
    console.log(`Age: ${userAge} - Type: ${typeof userAge}`);

//Верифікація користувача — булевий тип (boolean)
let userVerification = true;
    console.log(`Verification: ${userVerification} - Type: ${typeof userVerification}`);

//Поточна дата — об’єкт типу Date
let dataStr = new Date().toLocaleDateString();
    console.log(`Date: ${dataStr} - Type: ${typeof dataStr}`);

//ID користувача — великий тип даних BigInt
const idUser = 444n;
    console.log(`ID: ${idUser} - Type: ${typeof idUser}`);

//Промокод — спочатку null, потім змінюється на рядок
//Якщо промокод дорівнює null — promoCode = "немає" - рядковий тип (string)
//Інакше — привести його до рядка (string), зберігаючи введене значення
let promoCode = null;
    console.log(`Promo Code: ${promoCode} - Type: ${typeof promoCode}`)
    if (promoCode === null) {
        promoCode = `немає`;
    }else {
        promoCode = String(promoCode);
    }

//Резервне ім’я користувача — не задане (тип: undefined)
let reserveUserName = undefined;
    console.log(`Reserve Name: ${reserveUserName} - Type: ${typeof reserveUserName}`);

//Бонусний рахунок - числовий тип (number)
let bonusAccount = 300;
    console.log(`Bonus: ${bonusAccount} - Type: ${typeof bonusAccount}`);

// Підсумкова інформація
    console.log(`\nКористувач ${userName}, вік ${userAge}, має бонусів: ${bonusAccount}`);
    console.log(`Верифікація: ${userVerification}. Промокод: ${promoCode}`);
