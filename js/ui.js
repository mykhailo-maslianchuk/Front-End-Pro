'use strict';

function renderUsers() {
    const list = document.querySelector('[data-list]');
    list.innerHTML = '';
    const users = dataBase.getData();

    if (users.length === 0) {
        list.innerHTML = `<li class="list-group-item text-center">No contacts yet</li>`;
        return;
    }
    users.forEach(user => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex align-items-center justify-content-between';
        li.innerHTML = `
            <div class="text-black">
                <b>${user.firstName} ${user.lastName}</b>
                <br>
                <small>${user.phone}</small>
            </div>
            <button class="btn btn-danger btn-sm" data-id="${user.id}">Delete</button>
        `;
        list.appendChild(li);
    });
}

function showNotification(msg, type='success') {
    alert(msg);
}
