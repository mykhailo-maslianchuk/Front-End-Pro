'use strict';

function TodoItem(title, description, dueDate) {
    this.id = Date.now(); // унікальний ідентифікатор
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.createdAt = new Date().toISOString();
}

function TodoModel() {
    this.items = JSON.parse(localStorage.getItem('todos')) || [];

    this.addItem = function(todoItem) {
        this.items.push(todoItem);
        this.save();
    };

    this.deleteItem = function(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.save();
    };

    this.save = function() {
        localStorage.setItem('todos', JSON.stringify(this.items));
    };

    this.getAll = function() {
        return this.items;
    };
}


function TodoView() {
    const list = document.getElementById('todo-list');
    const form = document.getElementById('todo-form');
    const inputTitle = document.getElementById('todo-title');
    const inputDesc = document.getElementById('todo-description');
    const inputDeadline = document.getElementById('todo-deadline');

    this.clearForm = function () {
        inputTitle.value = '';
        inputDesc.value = '';
        inputDeadline.value = '';
    };

    this.renderItem = function (todoItem, onDelete) {
        const li = document.createElement('li');
        li.dataset.id = todoItem.id;

        li.innerHTML = `
            <div class="todo-text">
                <strong>${todoItem.title}</strong>
                <p>${todoItem.description}</p>
                <small>Дедлайн: ${todoItem.dueDate || '—'}</small><br>
                <small>Створено: ${new Date(todoItem.createdAt).toLocaleDateString()}</small>
            </div>
            <div class="todo-actions">
                <button class="edit-btn">Редагувати</button>
                <button class="delete-btn">Видалити</button>
            </div>
        `;

        li.querySelector('.delete-btn').addEventListener('click', () => {
            onDelete(todoItem.id);
        });

        li.querySelector('.edit-btn').addEventListener('click', () => {
            window.location.href = `edit.html?id=${todoItem.id}`;
        });

        list.appendChild(li);
    };

    this.clearList = function () {
        list.innerHTML = '';
    };

    this.renderAll = function (items, onDelete) {
        this.clearList();
        items.forEach(item => this.renderItem(item, onDelete));
    };

    this.getFormElements = function () {
        return { form, inputTitle, inputDesc, inputDeadline };
    };
}

function TodoController(model, view) {
    const { form, inputTitle, inputDesc, inputDeadline } = view.getFormElements();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = inputTitle.value.trim();
        const description = inputDesc.value.trim();
        const dueDate = inputDeadline.value;

        if (!title) {
            alert("Будь ласка, введіть назву завдання.");
            return;
        }

        const todo = new TodoItem(title, description, dueDate);
        model.addItem(todo);
        view.renderAll(model.getAll(), handleDelete);
        view.clearForm();
    });

    function handleDelete(id) {
        model.deleteItem(id);
        view.renderAll(model.getAll(), handleDelete);
    }

    view.renderAll(model.getAll(), handleDelete);
}


const model = new TodoModel();
const view = new TodoView();
const controller = new TodoController(model, view);
