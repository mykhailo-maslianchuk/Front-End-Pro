'use strict';

const form = document.getElementById('edit-form');
const titleInput = document.getElementById('edit-title');
const descInput = document.getElementById('edit-description');
const deadlineInput = document.getElementById('edit-deadline');

const urlParams = new URLSearchParams(window.location.search);
const itemId = Number(urlParams.get('id'));

const todos = JSON.parse(localStorage.getItem('todos')) || [];
const todo = todos.find(t => t.id === itemId);

if (!todo) {
    alert("Завдання не знайдено");
    window.location.href = 'index.html';
}

titleInput.value = todo.title;
descInput.value = todo.description;
deadlineInput.value = todo.dueDate;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    todo.title = titleInput.value.trim();
    todo.description = descInput.value.trim();
    todo.dueDate = deadlineInput.value;

    localStorage.setItem('todos', JSON.stringify(todos));
    window.location.href = 'index.html';
});
