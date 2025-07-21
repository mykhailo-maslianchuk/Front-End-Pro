'use strict';

//Отримання елементу за id
//Отримаємо блок з id="my-div" і збережемо його в змінну
const div = document.getElementById('my-div');
console.log(div);

//Зміна стилю елементу через JS
// Змінюємо фон усього body на рожевий
document.body.style.backgroundColor = 'pink';

//Робота з className
//Повністю перезаписуємо класи на "red", попередні видаляються
div.className = 'red';

//Додавання класів через classList
//Додаємо клас, не видаляючи інші
div.classList.add('example_1');

//Додаємо два класи
div.classList.add('example_2', 'example_3');

//Видалення класів
div.classList.remove('alice'); // Видаляємо один клас
div.classList.remove('vova', 'example_1'); // Видаляємо декілька класів одночасно

//classList.toggle — додає клас, якщо його немає, або видаляє, якщо є
//Кожні 2 секунди додається або видаляється клас 'red'
setInterval(() => {
    div.classList.toggle('red');
}, 2000);

//Отримання елементів за класом (повертає HTMLCollection)
const listItems = document.getElementsByClassName('list-numerable');
console.log(listItems); // HTMLCollection — схоже на масив, але це не масив
//Перетворення HTMLCollection у масив
console.log(Array.from(listItems));

//Перебір елементів з класом .list-numerable, які є <li>
//Змінюємо їхній текст на "Item N", де N — номер
for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].nodeName === 'LI') {
        listItems[i].innerHTML = 'Item ' + (i + 1);
    }
}

//Альтернатива — перебір через forEach після перетворення в масив
Array.from(listItems).forEach(item => {
    item.innerHTML = 'hello item'; // Змінюємо вміст кожного елементу
});

//Отримання всіх <li> елементів на сторінці
const listItemsAll = document.getElementsByTagName('li');
console.log(listItemsAll); // HTMLCollection всіх <li>
console.log(Array.from(listItemsAll)); // Перетворення у масив

//Фільтруємо тільки ті <li>, які знаходяться в <ul>
const liFromUl = Array.from(listItemsAll).filter((item) => {
    return item.parentElement.nodeName === 'UL';
});
console.log(liFromUl); // Тільки <li>, що знаходяться в <ul>

//Перебір усіх <li> та зміна стилю в залежності від батьківського елемента
for (let i = 0; i < listItemsAll.length; i++) {
    const parentTag = listItemsAll[i].parentElement.nodeName;

    if (parentTag === 'UL') {
        listItemsAll[i].style.backgroundColor = 'pink'; // Змінюємо фон
        listItemsAll[i].innerHTML += ' - UL'; // Додаємо текст
    }

    if (parentTag === 'OL') {
        listItemsAll[i].style.backgroundColor = 'red';
        listItemsAll[i].innerHTML += ' - OL';
    }
}

//querySelector — повертає перший елемент, що відповідає CSS-селектору
const querySelector = document.querySelector('li');
console.log(querySelector); // Перший <li> на сторінці

//querySelectorAll — повертає всі елементи, що відповідають селектору (NodeList)
const querySelectorAll = document.querySelectorAll('li');
console.log(querySelectorAll); // Всі <li> на сторінці

//Отримання елементів за атрибутом data-custom
const querySelectorAll2 = document.querySelectorAll('[data-custom]');
console.log(querySelectorAll2); // Усі елементи з атрибутом data-custom

//Отримання парних <li> всередині <ol>
const querySelectorAll3 = document.querySelectorAll('ol li:nth-child(even)');
console.log(querySelectorAll3); // Тільки парні <li> з <ol>

