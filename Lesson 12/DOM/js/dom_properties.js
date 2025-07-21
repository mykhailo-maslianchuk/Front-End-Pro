/*

  РОБОТА З ВЛАСТИВОСТЯМИ DOM-ЕЛЕМЕНТІВ


Властивості — це характеристики об'єктів DOM, які відображають поточний стан елемента в пам'яті браузера.
Вони часто збігаються з атрибутами, але не є їхньою прямою копією.

Основні відмінності між атрибутами і властивостями:
- Атрибути зберігаються у HTML, властивості — у DOM-об’єкті.
- Властивості можуть змінюватися динамічно під час роботи JS.
- Зміна властивості часто відображає зміни в реальному стані елемента.

---

Приклади властивостей:
- `element.id` — id елемента
- `element.className` — рядок з класами
- `element.value` — значення для input, textarea
- `element.checked` — стан чекбокса (true/false)
- `element.disabled` — чи вимкнений елемент (true/false)

---

Як працювати з властивостями?

- Читати: `const val = element.value;`
- Записувати: `element.value = "Нове значення";`
- Перевіряти логічні властивості: `if(element.checked) {...}`

---

Приклад роботи з властивостями:

*/

// Знаходимо елемент input
const input = document.getElementById("myInput");

// Читаємо властивість value
console.log("Початкове значення input:", input.value);

// Змінюємо властивість value
input.value = "Новий текст";
console.log("Значення input після зміни:", input.value);

// Знаходимо чекбокс
const checkbox = document.getElementById("myCheckbox");

// Перевіряємо стан чекбокса
console.log("Чекбокс checked спочатку:", checkbox.checked);

// Вмикаємо чекбокс
checkbox.checked = true;
console.log("Чекбокс checked після зміни:", checkbox.checked);

// Робота з className
const div = document.getElementById("myDiv");
console.log("Початковий клас div:", div.className);

// Змінюємо клас
div.className = "new-class";
console.log("Новий клас div:", div.className);

/*
Для тестування необхідно мати у HTML елементи:

<input id="myInput" type="text" value="Початковий текст">
<input id="myCheckbox" type="checkbox">
<div id="myDiv" class="old-class">Текст</div>

Цей скрипт демонструє, як читати та змінювати властивості DOM-елементів через JavaScript.
*/
