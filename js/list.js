const productsBody = document.getElementById('productsBody');

let products = JSON.parse(localStorage.getItem('products')) || [];

products = products.reverse();

function createProductRow(product) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td><button class="btn btn-warning btn-edit" data-id="${product.id}">Редагувати</button></td>
        <td><button class="btn btn-danger btn-delete" data-id="${product.id}">Видалити</button></td>`

    return tr;
}

productsBody.innerHTML = '';

products.forEach(product => {
    const tr = createProductRow(product);
    productsBody.appendChild(tr);
});

function renderTable() {
    productsBody.innerHTML = '';
    products.forEach(product => {
        const tr = createProductRow(product);
        productsBody.appendChild(tr);
    });
}

renderTable();

productsBody.addEventListener('click', function(event) {
    if(event.target.classList.contains('btn-delete')) {
        const idToDelete = Number(event.target.dataset.id);

        products = products.filter(product => product.id !== idToDelete);

        localStorage.setItem('products', JSON.stringify(products));

        renderTable();
    }
});
