'use strict';

function handleDelete(e) {
    if (e.target.matches('[data-id]')) {
        const id = Number(e.target.getAttribute('data-id'));
        dataBase.deleteData({ id });
        saveToStorage(dataBase.getData());
        renderUsers();
        showNotification('Contact deleted!');
    }
}

function createUserInterface() {
    const form = document.querySelector('[data-form]');
    const submitBtn = form.querySelector('[type="submit"]');
    const inputs = Array.from(form.querySelectorAll('input'));

    const storedUsers = loadFromStorage();
    dataBase.loadAll(storedUsers);
    renderUsers();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const data = inputs.reduce((acc, {name, value}) => {
            acc[name] = value;
            return acc;
        }, {});

        form.reset();
        dataBase.setData(data);
        saveToStorage(dataBase.getData());
        renderUsers();
        showNotification('Contact added!');
        submitBtn.setAttribute('disabled', 'disabled');
        submitBtn.disabled = true;
    });

    const disabledHandler = () => {
        let isInputFilled = inputs.every(input => input.value.trim().length);
        if(isInputFilled) {
            submitBtn.removeAttribute('disabled')
            submitBtn.disabled = false;
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtn.disabled = true;
        }
    }
    form.addEventListener('input', disabledHandler);

    document.querySelector('[data-list]').addEventListener('click', handleDelete);
}

createUserInterface();
