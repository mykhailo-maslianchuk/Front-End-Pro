'use strict';
const user = {userName:`Mykhailo`};
function checkScopes(){

    for(let i = 0; i < 1; i++) {
        var a = `Я var`; // Функціональна область видимості (видна в усій функції)
        let b = `Я let`; // Блокова область видимості (видна лише в цьому for)
        const c = `Я const`; // Блокова область видимості (видна лише в цьому for)
        console.log(`Всередині циклу:`)
        console.log(`Вивід змінної var: ${a}`);
        console.log(`Вивід змінної let: ${b}`);
        console.log(`Вивід змінної const: ${c}`);
    }
    console.log(`Поза циклом:`)
    console.log(`Вивід змінної var: ${a}`); // Глобальна змінна, тому буде відображатись в консолі.

    try {
        console.log(`let: ${b}`);
    } catch {
        console.log('let: Недоступна за межами блоку for (ReferenceError)');
    }

    try {
        console.log(`const: ${c}`);
    } catch {
        console.log('const: Недоступна за межами блоку for (ReferenceError)');
    }
}

checkScopes()






