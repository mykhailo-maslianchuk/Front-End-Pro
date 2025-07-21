
// Тема: Створення, вставка, клонування, видалення елементів DOM


// Створення нового елемента з вказаним тегом
// Використовуємо метод document.createElement(tagName)

let div = document.createElement('div'); // Створюємо <div>
div.className = 'box';                   // Додаємо клас
div.id = 'mainBlock';                    // Додаємо id
div.innerHTML = 'Це створений елемент'; // Вміст HTML
console.log(div);                        // Виводимо елемент в консоль

// Створення текстового вузла (без тегів, просто текст)
let textNode = document.createTextNode('Просто текст без тегів');
console.log(textNode);

// Приклад створення повідомлення з HTML
let message = document.createElement('div');
message.className = "alert";
message.innerHTML = "<strong>Вітаю!</strong> Ви прочитали важливе повідомлення.";
console.log(message);

// Методи вставки елементів у DOM

//append() — додає елемент в кінець іншого елемента
document.body.append(div); // Додає наш div в кінець body

//prepend() — додає елемент на початок іншого елемента
// document.body.prepend(div);

//before() — вставляє елемент перед вказаним
// document.body.before(div);

//after() — вставляє елемент після вказаного
// document.body.after(div);

//replaceWith() — замінює елемент іншим
// document.body.replaceWith(div);


// setTimeout приклад вставки з затримкою:
setTimeout(function () {
    document.body.append(message); // Додаємо через 1 секунду
}, 1000);

// Видалення елементів з DOM

// remove() — видаляє елемент
setTimeout(function () {
    message.remove(); // Видалимо повідомлення через 5 секунд
}, 5000);

// Клонування вузлів

// Клонуємо вже існуючий елемент (з вмістом всередині — true)
const originalDiv = document.querySelector('div.alert'); // Знайшли елемент
if (originalDiv) {
    const clonedDiv = originalDiv.cloneNode(true); // Глибоке клонування
    document.body.append(clonedDiv);               // Додаємо копію в body

    console.log('Клон: ', clonedDiv);
    console.log('Порівняння об’єктів:', originalDiv === clonedDiv); // false
}

// Додатково: Як додати створений елемент до контейнера

/*
HTML:
<div class="container"></div>
*/

let container = document.querySelector('.container');
if (container) {
    let item = document.createElement('p');
    item.textContent = 'Я доданий параграф!';
    container.append(item);
}
