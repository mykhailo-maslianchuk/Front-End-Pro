// Увімкнення суворого режиму (помилки будуть видніші)
'use strict'

const user ={
    name: `Mykhailo`,
    age: 21,
    isOnline: false,
    friends: [`Nastia`, `Dmytro`, `Alyona`],
       settings: {
            theme: `light`,
            notifications: true,
       }
};

console.log(`user.name - Type: ${typeof user.name}`);
console.log(`user.age - Type: ${typeof user.age}`);
console.log(`user.isOnline - Type: ${typeof user.isOnline}`);
console.log(`user.friends - Type: ${typeof user.friends[0]}, ${typeof user.friends[1]}, ${typeof user.friends[2]}`);
console.log(`\n`);
console.log(`user.settings  - Type: ${typeof user.settings}`);
console.log(`user.settings.theme: - Type: ${typeof  user.settings.theme}`);
console.log(`user.settings.notifications: - Type: ${typeof user.settings.notifications}`);
console.log(`\n`);

if (user.isOnline) {
    user.isOnline = `Онлайн`
}else {
    user.isOnline = `Офлайн`
}

if (user.settings.notifications) {
    user.settings.notifications = ` Увімкнено`
}else {
    user.settings.notifications = ` Вимкнено`
}

let firstFriendName =  user.friends[0];
let notificationsEnabled = user.settings.notifications;

console.log(`Імʼя користувача: ${user.name}`);
console.log(`Кількість друзів: ${user.friends.length}`);
console.log(`Імʼя першого друга: ${firstFriendName}`);
console.log(`Яка тема увімкнена: ${user.settings.theme}`);
console.log(`Сповіщення: ${notificationsEnabled}`);