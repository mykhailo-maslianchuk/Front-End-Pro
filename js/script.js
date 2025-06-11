'use strict'

alert(`Введіть будь ласка ваші данні:`);
let userName = prompt('Ваше імʼя ?');
    if (userName === null || userName === '') {
        alert(`Шкода, що Ви не захотіли вказати своє імʼя.`);
        userName = `Користувач не вказав імʼя.`;
    }else if(!isNaN(userName)){
        alert(`Ви ввели некоректне значення!\nВведіть ваше імʼя не в числовому значенні.`);
        userName = prompt('Ваше імʼя ?');
        if (!isNaN(userName) || userName === null  || userName === '') {
            alert(`Шкода, що Ви не захотіли вказати своє імʼя.`);
            userName = `Користувач не вказав імʼя.`;
        }
    }

let userAge = +prompt(`Ваш вік ?`);
    if (userAge === 0 || userAge === '') {
        alert(`Шкода, що Ви не захотіли вказати свій вік.`);
        userAge = `Користувач не вказав кількість`;
    }else  if(isNaN(userAge)) {
        alert(`Ви ввели некоректне значення!\nВведіть ваш вік в числовому значенні.`);
        userAge = +prompt(`Ваш вік ?`);
        if (isNaN(userAge) || userAge === 0  || userAge === '') {
            alert(`Шкода, що Ви не захотіли вказати свій вік.`);
            userAge = `Користувач не вказав кількість`;
        }
    }

let userResidenceCity = prompt(`Ваше місто проживання ?`);
    if (userResidenceCity === null || userResidenceCity === '') {
        alert(`Шкода, що Ви не захотіли вказати своє місто.`);
        userResidenceCity = `Користувач не вказав місто проживання.`;
    }else if(!isNaN(userResidenceCity)){
        alert(`Ви ввели некоректне значення!\nВведіть ваше місто не в числовому значенні.`);
        userResidenceCity = prompt(`Ваше місто проживання ?`);
        if (!isNaN(userResidenceCity) || userResidenceCity === null  || userResidenceCity === '') {
            alert(`Шкода, що Ви не захотіли вказати своє місто.`);
            userResidenceCity = `Користувач не вказав місто проживання.`;
        }
    }

     switch (userResidenceCity) {
         case `Київ`:{
             userResidenceCity = `Ти живеш у столиці України, столицею якої є місто Київ.`;
            break;
         }
         case `Вашингтон`:{
             userResidenceCity = `Ти живеш у столиці США, столицею якої є місто Вашингтон.`;
             break;
         }
         case `Лондон`:{
            userResidenceCity = `Ти живеш у столиці Англії, столицею якої є місто Лондон.`;
            break;
         }
         default:{

         }
     }

alert(`Імʼя користувача: ${userName}\nВік користувача: ${userAge} років.\nМісто проживання: ${userResidenceCity}`)

let userFavoriteSport = prompt(`Ваш улюблений вид спорту ?`);
    if (userFavoriteSport === null || userFavoriteSport === '') {
        alert(`Шкода, що Ви не захотіли вказати свій улюблений вид спорту.`);
    }else if(!isNaN(userFavoriteSport)) {
        alert(`Ви ввели некоректне значення!\nВведіть ваш вид спорту не в числовому значенні.`);
        userFavoriteSport = prompt(`Ваш улюблений вид спорту ?`);
        if (!isNaN(userFavoriteSport) || userFavoriteSport === null || userFavoriteSport === '') {
            alert(`Шкода, що Ви не захотіли вказати свій улюблений вид спорту.`);
        }
    }

    // switch(userFavoriteSport) {
    //     case `Боротьба`:{
    //         userFavoriteSport = `Жан Беленюк`;
    //         break;
    //     }
    //     case `Футбол`:{
    //         userFavoriteSport = `Олександр Зінченко`;
    //         break;
    //     }
    //     case `Бокс`:{
    //         userFavoriteSport = `Олександр Усик`;
    //         break;
    //     }
    //     default:{
    //
    //     }
    // }

    switch (true){
        case userFavoriteSport === `Боротьба`:{
            userFavoriteSport = `Жан Беленюк`;
            confirm(`Круто! Хочеш стати таким як ${userFavoriteSport} ?`);
            break;
        }
        case userFavoriteSport === `Бокс`:{
            userFavoriteSport = `Олександр Усик`;
            confirm(`Круто! Хочеш стати таким як ${userFavoriteSport} ?`);
            break;
        }
        case userFavoriteSport === `Футбол`:{
            userFavoriteSport = `Олександр Зінченко`;
            confirm(`Круто! Хочеш стати таким як ${userFavoriteSport} ?`);
            break;
        }
        case userFavoriteSport === null || userFavoriteSport === '':{
            userFavoriteSport = `Користувач не вказав улюблений вид спорту.`;
            confirm(userFavoriteSport);
            break;
        }
        default: {
            alert(`Ваш улюблений вид спорту ${userFavoriteSport}!`);
        }
    }



