// 1. Що таке BOM?
/*
BOM (Browser Object Model) — це набір об’єктів, які надає браузер для взаємодії з самим вікном браузера та його оточенням.
На відміну від DOM (Document Object Model), що працює з HTML-документом і його структурою, BOM працює з тим, що навколо документа: вікна, вкладки, адресна строка, історія браузера, браузерна інформація, таймери та інше.
BOM допомагає нам керувати браузером через JavaScript.
*/

// 2. Об’єкт window — глобальний об’єкт браузера
/*
window — це головний об’єкт у BOM, який представляє вікно або вкладку браузера.
Усі глобальні змінні та функції в JavaScript браузера автоматично стають властивостями об’єкта window.
Основні властивості window:
- window.document — доступ до DOM-дерева поточного HTML-документа.
- window.location — об’єкт, який містить інформацію про URL сторінки.
- window.navigator — інформація про браузер користувача.
- window.history — історія відвідувань сторінок у цій вкладці.

Основні методи window:
- alert(message) — показати модальне вікно з повідомленням.
- confirm(message) — показати вікно підтвердження (питання з кнопками "ОК" і "Відміна").
- prompt(message, default) — запросити у користувача введення тексту.
- open(url, target, features) — відкрити нове вікно або вкладку.
- close() — закрити вікно.
- setTimeout(callback, ms) — виконати функцію один раз через ms мілісекунд.
- setInterval(callback, ms) — виконувати функцію кожні ms мілісекунд.
- clearTimeout(id) та clearInterval(id) — скасувати таймери.
*/

// Приклади використання window:
// Приклад 1: Вивести у консоль об’єкт document (DOM-дерево сторінки)
console.log(window.document);
// Приклад 2: Показати повідомлення у вікні alert
window.alert("Привіт! Це alert-вікно");
// Приклад 3: Запитати підтвердження у користувача
const confirmed = window.confirm("Ви дійсно хочете видалити цей файл?");
if (confirmed) {
    console.log("Користувач підтвердив дію");
} else {
    console.log("Користувач відмінив дію");
}
// Приклад 4: Запросити у користувача ім'я за допомогою prompt
const name = window.prompt("Введіть ваше ім'я:", "Гість");
console.log(`Привіт, ${name}`);

// Приклад 5: Виконати код через 3 секунди
window.setTimeout(() => {
    console.log("Це повідомлення через 3 секунди");
}, 3000);

// Приклад 6: Виводити повідомлення кожну секунду
const intervalId = window.setInterval(() => {
    console.log("Повідомлення кожну секунду");
}, 1000);

// Зупинити інтервал через 5 секунд
window.setTimeout(() => {
    window.clearInterval(intervalId);
    console.log("Інтервал зупинено");
}, 5000);

// 3. Об’єкт navigator
/*
Об’єкт navigator містить інформацію про браузер користувача, операційну систему, мову та інші характеристики.

Властивості:
- navigator.userAgent — рядок, який описує браузер і ОС.
- navigator.language — мова інтерфейсу браузера.
- navigator.platform — платформа (операційна система).
- navigator.onLine — логічне значення, чи є інтернет-з’єднання.
*/

// Приклади:

console.log("Браузер:", navigator.userAgent);
console.log("Мова браузера:", navigator.language);
console.log("Платформа:", navigator.platform);
console.log("Онлайн статус:", navigator.onLine);

// 4. Об’єкт location
/*
Об’єкт location відповідає за адресу сторінки (URL) і навігацію.

Основні властивості location:

Властивість     | Опис                        | Приклад
--------------- | --------------------------- | ----------------------
href            | Повний URL                  | https://example.com/page
protocol        | Протокол (http:, https:)   | https:
host            | Хост і порт                | example.com:8080
hostname        | Тільки доменне ім’я        | example.com
port            | Порт                       | 8080
pathname        | Шлях                       | /page
search          | Параметри запиту (query)   | ?id=123&sort=asc
hash            | Хеш-фрагмент сторінки      | #section2

Методи location:
- assign(url) — завантажує нову сторінку.
- reload() — перезавантажує поточну сторінку.
- replace(url) — замінює поточний URL без збереження в історії.
*/

// Приклади:

console.log("Поточна адреса:", location.href);
console.log("Протокол:", location.protocol);
console.log("Хост:", location.host);
console.log("Шлях:", location.pathname);
console.log("Параметри:", location.search);
console.log("Хеш:", location.hash);

// Перехід на нову сторінку (розкоментуйте для активації)
// location.assign("https://www.google.com");

// Перезавантаження сторінки
// location.reload();

// Замінити URL без збереження в історії
// location.replace("https://www.example.com");

// 5. Об’єкт history
/*
Об’єкт history управляє історією переходів користувача в поточній вкладці.

Методи:
- back() — повернутися на попередню сторінку.
- forward() — перейти вперед.
- go(n) — перейти на n сторінок у історії (n може бути позитивним або від’ємним).
*/

// Приклади:

// Повернутися на попередню сторінку (наприклад, при натисканні кнопки)
// history.back();

// Перейти вперед
// history.forward();

// Перейти на 2 сторінки назад
// history.go(-2);

// 6. Діалогові вікна
/*
alert(message) — виводить повідомлення і чекає, поки користувач натисне ОК.

confirm(message) — виводить повідомлення з кнопками ОК і Відміна, повертає true або false.

prompt(message, default) — виводить повідомлення з полем введення, повертає введений текст або null.
*/

// Приклади:

// alert
alert("Це просте повідомлення!");

// confirm
const answer = confirm("Ви хочете продовжити?");
if (answer) {
    console.log("Користувач погодився");
} else {
    console.log("Користувач відмовився");
}

// prompt
const age = prompt("Введіть ваш вік:", "18");
if (age !== null) {
    console.log(`Ваш вік: ${age}`);
} else {
    console.log("Вік не введено");
}

// 7. Таймери: setTimeout та setInterval
/*
setTimeout(callback, delay)
Виконує функцію callback один раз через delay мілісекунд.

setInterval(callback, interval)
Виконує функцію callback кожні interval мілісекунд.

Скасування таймерів
- clearTimeout(id) — скасовує відкладений запуск.
- clearInterval(id) — зупиняє повторюваний інтервал.
*/

// Приклади:

// Виконати через 3 секунди
const timeoutId = setTimeout(() => {
    console.log("Виконано через 3 секунди");
}, 3000);

// Скасувати таймер через 1 секунду (тобто код не виконається)
setTimeout(() => {
    clearTimeout(timeoutId);
    console.log("Таймер скасовано");
}, 1000);

// Повторюване повідомлення кожну секунду
const setIntervalId = setInterval(() => {
    console.log("Це повідомлення кожну секунду");
}, 1000);

// Зупинити інтервал через 5 секунд
setTimeout(() => {
    clearInterval(setIntervalId);
    console.log("Інтервал зупинено");
}, 5000);

// 8. Відкриття і закриття вікон: window.open та window.close
/*
window.open(url, target, features) — відкриває нове вікно або вкладку.

url — адреса.

target — _blank для нової вкладки, або ім’я вікна.

features — рядок з налаштуваннями (розмір, положення і т.д.)

window.close() — закриває поточне вікно.
Закривати можна лише вікна, відкриті скриптом.
*/

// Змінна для зберігання посилання на відкрите вікно
let newWindow = null;

// Обробка натискання кнопки "Відкрити"
document.getElementById("openWindowBtn").addEventListener("click", () => {
    newWindow = window.open("https://www.google.com", "_blank", "width=600,height=400");
    console.log("Нове вікно відкрите");
});

// Обробка натискання кнопки "Закрити"
document.getElementById("closeWindowBtn").addEventListener("click", () => {
    if (newWindow && !newWindow.closed) {
        newWindow.close();
        console.log("Нове вікно закрите");
    } else {
        console.log("Вікно вже закрите або не було відкрито");
    }
});;

// 9. Події BOM: завантаження сторінки
/*
DOMContentLoaded — спрацьовує, коли весь HTML завантажений і розпарсений, але ресурси (зображення, стилі) можуть бути не завантажені.
load — повне завантаження сторінки, включно з усіма ресурсами.
beforeunload — перед закриттям/перезавантаженням сторінки. Можна попередити користувача.
*/

// Приклади:

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM повністю завантажено");
});

window.addEventListener("load", () => {
    console.log("Вся сторінка і ресурси завантажені");
});

window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = ""; // Показує браузерне вікно підтвердження виходу
});
