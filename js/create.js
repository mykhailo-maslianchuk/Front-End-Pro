'use strict';

document.getElementById("productForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const priceInput = document.getElementById("price").value.trim();
    const price = parseFloat(priceInput);

    if (!title || !description || isNaN(price) || price < 0) {
        alert("Будь ласка, введіть коректні дані.");
        return;
    }

    const product = {
        id: Date.now(),
        title,
        description,
        price
    };

    const products = JSON.parse(localStorage.getItem("products") || "[]");
    products.unshift(product);
    localStorage.setItem("products", JSON.stringify(products));

    window.location.href = "list.html";
});
