'use strict';

const productId = parseInt(localStorage.getItem("selectedProductID"));
let products = JSON.parse(localStorage.getItem("products") || "[]");
const product = products.find(p => p.id === productId);

if (!product) {
    alert("Товар не знайдено.");
    window.location.href = "list.html";
}

document.getElementById("title").value = product.title;
document.getElementById("description").value = product.description;
document.getElementById("price").value = product.price;

document.getElementById("editForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const price = parseFloat(document.getElementById("price").value);

    if (!title || !description || isNaN(price) || price < 0) {
        alert("Будь ласка, введіть коректні дані.");
        return;
    }

    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
        products[index] = { ...products[index], title, description, price };
        localStorage.setItem("products", JSON.stringify(products));
    }

    window.location.href = "list.html";
});
