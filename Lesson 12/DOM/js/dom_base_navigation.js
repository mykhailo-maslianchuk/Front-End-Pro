/*
Що таке DOM?
DOM (Document Object Model) — це структура HTML-документа у вигляді дерева об’єктів.
Кожен тег, текст, атрибут — це об’єкти, з якими можна працювати через JavaScript.
Завдяки DOM, JavaScript "бачить" сторінку і може змінювати її вміст, структуру, стиль.
*/

/*
1. Як знайти елементи на сторінці?
Найпоширеніші методи пошуку:
    - getElementById("id") — шукає елемент за унікальним id
    - getElementsByTagName("tag") — повертає колекцію елементів за тегом (наприклад, всі <p>)
    - getElementsByClassName("class") — повертає колекцію елементів за класом
    - querySelector("cssSelector") — повертає ПЕРШИЙ елемент, що відповідає селектору
    - querySelectorAll("cssSelector") — повертає ВСІ елементи, що відповідають селектору
Приклад: Знаходимо заголовок за id "header"
*/

const header = document.getElementById("header");
console.log("Знайшли заголовок:", header);
// Знаходимо всі параграфи (колекція HTMLCollection)
const paragraphs = document.getElementsByTagName("p");
console.log("Всі параграфи:", paragraphs);
// Знаходимо перший елемент з класом "active"
const firstActive = document.querySelector(".active");
console.log("Перший активний елемент:", firstActive);
// Знаходимо всі елементи з класом "item"
const allItems = document.querySelectorAll(".item");
console.log("Всі елементи з класом item:", allItems);

/*
2. Навігація по DOM-дереву: як перейти від елемента до його родичів?
Кожен елемент має властивості, які показують родичів:
    - parentNode — батьківський елемент
    - children — колекція дочірніх елементів (тільки теги, без тексту)
    - firstElementChild — перший дочірній елемент
    - lastElementChild — останній дочірній елемент
    - previousElementSibling — попередній сусідній елемент на одному рівні
    - nextElementSibling — наступний сусідній елемент
Приклад: працюємо зі списком
*/
const list = document.getElementById("list");

console.log("Батько списку:", list.parentNode);
console.log("Діти списку:", list.children);
console.log("Перший пункт списку:", list.firstElementChild);
console.log("Останній пункт списку:", list.lastElementChild);

const firstListItem = list.firstElementChild;
console.log("Наступний після першого:", firstListItem.nextElementSibling);
console.log("Попередній після другого (має бути перший):", firstListItem.nextElementSibling.previousElementSibling);

/*
3. Як читати і змінювати вміст елемента?
    - textContent — текст всередині елемента (без тегів)
    - innerHTML — весь HTML всередині елемента (теги теж можна вставляти)
*/
// Читаємо текст параграфа
const para = document.querySelector("p.description");
console.log("Текст параграфа:", para.textContent);
// Змінюємо текст
para.textContent = "Текст параграфа змінено через JS";
// Вставляємо HTML (теги будуть інтерпретовані)
para.innerHTML = "<b>Текст із тегом &lt;b&gt;</b>";

/*
4. Робота з атрибутами елемента
Для доступу до атрибутів:
    - getAttribute("name") — отримати значення атрибуту
    - setAttribute("name", "value") — змінити або додати атрибут
    - removeAttribute("name") — видалити атрибут
*/
const link = document.getElementById("link");
// Отримуємо адресу
console.log("href посилання:", link.getAttribute("href"));
// Змінюємо адресу
link.setAttribute("href", "https://uk.wikipedia.org");
// Видаляємо атрибут target (щоб посилання відкривалося в цій вкладці)
link.removeAttribute("target");

// 5. Створення нових елементів і додавання їх у DOM
// Створюємо новий елемент через document.createElement
const newItem = document.createElement("li");
// Записуємо текст у цей елемент
newItem.textContent = "Новий пункт списку";
// Додаємо клас
newItem.classList.add("item");
// Додаємо новий пункт у кінець списку (list.appendChild)
list.appendChild(newItem);

// 6. Видалення елемента зі сторінки
// Щоб видалити елемент, викликаємо метод remove() у нього
// Видалимо перший пункт списку, якщо він є
if(list.firstElementChild) {
    list.firstElementChild.remove();
}


/*
//
7. Події, пов’язані з DOM
 - DOMContentLoaded — коли HTML повністю завантажений і розпарсений (ще до ресурсів)
 - load — коли сторінка і всі ресурси повністю завантажені
 - beforeunload — перед виходом або перезавантаженням сторінки (можна запитати підтвердження)
 Приклад:
*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM повністю завантажено!");
});

window.addEventListener("load", () => {
    console.log("Вся сторінка і ресурси завантажені!");
});

window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = ""; // Показує діалог підтвердження виходу
});

// --------------------------
// 8. Навігація по формі: focus і blur

const input = document.getElementById("inputName");

// Ставимо фокус на поле вводу (курсор)
input.focus();

// Відслідковуємо, коли поле втратить фокус
input.addEventListener("blur", () => {
    console.log("Поле вводу втратило фокус");
});

// --------------------------
// 9. Обробка подій на кнопках (створення, видалення, зміна тексту)

const btnAddItem = document.getElementById("btnAddItem");
btnAddItem.addEventListener("click", () => {
    const item = document.createElement("li");
    item.textContent = "Новий пункт списку (натиснуто кнопку)";
    item.classList.add("item");
    list.appendChild(item);
    console.log("Додано новий пункт списку");
});

const btnRemoveItem = document.getElementById("btnRemoveItem");
btnRemoveItem.addEventListener("click", () => {
    if(list.lastElementChild) {
        list.lastElementChild.remove();
        console.log("Видалено останній пункт списку");
    } else {
        console.log("Список порожній");
    }
});

const btnChangeText = document.getElementById("btnChangeText");
btnChangeText.addEventListener("click", () => {
    header.textContent = "Текст заголовка змінено кнопкою!";
    console.log("Заголовок змінено");
});
