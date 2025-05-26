'use strict';

const username = prompt("What's your name?");
const welcomeMessage = confirm("Show greetings?");

if (welcomeMessage) {
    const name = alert("Hello, " + username + " !");
}