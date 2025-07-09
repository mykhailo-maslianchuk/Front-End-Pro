'use strict';

const user = {
    firstName: 'Mykhailo',
    lastName: `Maslianchuk`,
    age: 21,
}

const userInfo = function (...args) {
    console.log(`User: ${this.firstName} ${this.lastName}`);
    console.log(`Age: ${this.age}`);
    console.log(`Arguments: ${args}`);
};

const call = function (func, context, ...args) {
    context.func = func;
    context.func(...args);
    delete context.func;
};

const apply = function (func, context, argsArray) {
    context.func = func;
    context.func(...argsArray);
    delete context.func;
}

const bind = function (func, context, ...bindArgs) {
    return function (...callArgs) {
        context.func = func;
        context.func(...bindArgs, ...callArgs);
        delete context.func;
    };
};


// Додаємо власний метод myCall до всіх функцій через Function.prototype
Function.prototype.funCall = function (context, ...args) {
    // Якщо context не передано або він null/undefined — використовуємо глобальний обʼєкт (window)
    context = context || window;

    // this — це функція, до якої застосовано myCall
    // Тимчасово додаємо цю функцію як метод у context
    context._tempFunc = this;

    // Викликаємо функцію через обʼєкт > тому this всередині буде = context
    context._tempFunc(...args); // передаємо всі аргументи через кому

    // Прибираємо тимчасову функцію з context після виклику
    delete context._tempFunc;
}

// Додаємо власний метод myApply до всіх функцій
Function.prototype.funApply = function (context, argsArray) {
    // Якщо context не переданий — використовуємо window як this
    context = context || window;

    // this — функція, до якої ми застосували myApply
    // Додаємо її тимчасово як метод обʼєкта
    context._tempFunc = this;

    // Викликаємо функцію через обʼєкт, розпилюючи масив аргументів
    context._tempFunc(...argsArray);

    // Видаляємо тимчасову функцію, щоб не залишити слід
    delete context._tempFunc;
}

Function.prototype.funBind = function (context, ...bindArgs) {
    // this — це функція, до якої застосовано .myBind()
    const originalFunc = this;

    return function (...callArgs) {
        // Якщо context не передано — глобальний об'єкт
        context = context || window;
        // Створюємо унікальний ключ (щоб не перезаписати нічого в context)
        const tempKey = Symbol();
        // Тимчасово додаємо функцію в об’єкт
        context[tempKey] = originalFunc;
        // Викликаємо з усіма аргументами
        const result = context[tempKey](...bindArgs, ...callArgs);
        // Видаляємо тимчасову функцію
        delete context[tempKey];
        // Повертаємо результат
        return result;
    };
};


call(userInfo, user, 1,2,3,4)
console.log(`\n`);
apply(userInfo, user, [1,2,3,4])
console.log(`\n`);
const boundWithSimpleBind = bind(userInfo, user, 1,2,3,4)
boundWithSimpleBind();
console.log(`\n`);
userInfo.funCall(user, 1,2,3,4);
console.log(`\n`);
userInfo.funApply(user, [1,2,3,4]);
console.log(`\n`);
const boundWithFunBind = userInfo.funBind(user, 1,2,3,4);
boundWithFunBind();







