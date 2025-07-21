// Отримуємо доступ до кнопки з атрибутом data-btn-click-me
const btn = document.querySelector('[data-btn-click-me]');

// У цьому прикладі були два варіанти обробника, але останній перезаписує попередній
// btn.onclick = function() {
//     alert('Спасибо');
// };

// btn.onclick = function(event) {
//     console.log(event); // Виводимо всю інформацію про подію
//     console.log(event.target); // Виводимо сам елемент, на якому спрацювала подія
// };

// Отримуємо доступ до контейнера кнопок по атрибуту data-btn-toolbar
const btnToolbar = document.querySelector('[data-btn-toolbar]');

// Основна функція-обробник подій
const eventHandler = (event) => {
    // Якщо клік не по кнопці — нічого не робимо
    if (event.target.nodeName !== 'BUTTON') return;

    // Загальна реакція на натискання будь-якої кнопки
    console.log('Загальна функція для натискання на кнопку:', event.target);
}

// Спеціалізований обробник: залежно від назви кнопки
const anotherHandler = (event) => {
    // Перевіряємо name кнопки, по якій натиснули
    switch (event.target.name) {
        case 'add-btn':
            console.log('Adding new entity'); // Додавання
            break;
        case 'remove-btn':
            console.log('Remove entity'); // Видалення
            break;
        case 'edit-btn':
            console.log('Edit entity'); // Редагування
            break;
        default:
            // Якщо натиснули кнопку без відомого name — видаляємо eventHandler
            btnToolbar.removeEventListener('click', eventHandler);
            console.log('Dont know what to do! Слухач події eventHandler видалено.');
    }
}

// Додаємо два слухача подій на блок кнопок ===
// Перший слухач — загальна реакція на будь-яку кнопку
btnToolbar.addEventListener('click', eventHandler);

// Другий слухач — перевіряє конкретні name кнопок і виконує відповідні дії
btnToolbar.addEventListener('click', anotherHandler);
