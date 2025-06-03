'use strict';

const session ={
    userName: prompt(`Вкажіть ваше імʼя:`),
    userAge: +prompt(`Вкажіть ваш вік:`),
    userNotifications: confirm(`Увімкнути сповіщення ?`),
    userId: 1234567890123456789n,
    lastLogin: null,
    nickName: undefined,
    favoriteTech: [21, `Alice`, 15256778n],
        settings: {
            theme: `light`,
            autoLogin: false,
    }
}

const notificationEnabled = session.userNotifications === true ? alert(`Привіт, ${session.userName}! Ваш ID:${session.userId}`) : `Вимкнено`;
console.log(session);
console.log(`\n \n`);
console.log(`session.userName: ${session.userName} - Type: ${typeof session.userName}`);
console.log(`session.userAge: ${session.userAge} - Type: ${typeof session.userAge}`);
console.log(`session.userNotifications: ${session.userNotifications} - Type: ${typeof session.userNotifications}`);
console.log(`session.userId: ${session.userId} - Type: ${typeof session.userId}`);
console.log(`session.lastLogin: ${session.lastLogin} - Type: ${typeof session.lastLogin}`);
console.log(`session.nickName: ${session.nickName} - Type: ${typeof session.nickName}`);
console.log(`session.favoriteTech: ${session.favoriteTech} - Type: ${typeof session.favoriteTech}`);
console.log(`session.settings: ${session.settings} - Type: ${typeof session.settings}`);
console.log(`session.settings.theme: ${session.settings.theme} - Type: ${typeof session.settings.theme}`);
console.log(`session.settings.autoLogin: ${session.settings.autoLogin} - Type: ${typeof session.settings.autoLogin}`);





