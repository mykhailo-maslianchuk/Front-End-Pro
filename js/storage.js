'use strict';

function saveToStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function loadFromStorage() {
    try {
        return JSON.parse(localStorage.getItem('users')) || [];
    } catch {
        return [];
    }
}
