'use strict';

const form = document.getElementById('productForm');
const titleProduct = document.getElementById('title');
const descriptionProduct = document.getElementById('description');
const priceProduct = document.getElementById('price');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const titleValue = titleProduct.value.trim();
    const descriptionValue = descriptionProduct.value.trim();
    const priceValue = +priceProduct.value;

    switch (true) {
        case titleValue === '':
            alert('Введіть назву товару!');
            break;
        case descriptionValue === '':
            alert('Введіть опис товару!');
            break;
        case isNaN(priceValue) || priceValue <= 0:
            alert('Введіть коректну ціну більшу за 0');
            break;
        default:
            const product = {
                id: Date.now(),
                title: titleValue,
                description: descriptionValue,
                price: priceValue
            };

            let products = JSON.parse(localStorage.getItem('products')) || [];
            products.push(product);
            localStorage.setItem('products', JSON.stringify(products));

            window.location.href = 'list.html';
    }
});
