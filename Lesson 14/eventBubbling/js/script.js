"use strict";

// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 20,
//     ages: [10, 20, 30],
//     hairColor: '#000',
//     email: 'john@gmail.com',
//     phone: 123123
// }
//
// const getBirthYear = ({age}) => {
//     const currentYear = new Date().getFullYear();
//     return currentYear - age;
// }
//
// console.log(getBirthYear(user));
// const email = 'vova@gmail.com';
// const {email: userEmail, phone: userPhone} = user;
//
// console.log(userEmail, email, userPhone)


const list = document.querySelector('[data-list]');
const container = document.querySelector('.container');

list.addEventListener('click', ({target}) => {
    if(target.nodeName && target.nodeName !== 'LI' ) return;
    console.log('event triggered on LIST element', target.innerHTML)
})


container.addEventListener('click', ({target}) => {
    console.log('event triggered on CONTAINER element', target)
})
