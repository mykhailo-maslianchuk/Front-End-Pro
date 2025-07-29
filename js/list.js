'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("productTableBody");

    function loadProducts() {
        const products = JSON.parse(localStorage.getItem("products") || "[]");
        tableBody.innerHTML = "";

        if (products.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="4" class="text-center">Товарів немає</td></tr>';
            return;
        }

        products.forEach(product => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${parseFloat(product.price).toFixed(2)} грн</td>
        <td>
          <button class="btn btn-warning btn-sm me-2" onclick="editProduct(${product.id})">Редагувати</button>
          <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Видалити</button>
        </td>
      `;
            tableBody.appendChild(tr);
        });
    }

    window.editProduct = function (id) {
        localStorage.setItem("selectedProductID", id);
        window.location.href = "edit.html";
    };

    window.deleteProduct = function (id) {
        let products = JSON.parse(localStorage.getItem("products") || "[]");
        products = products.filter(p => p.id !== id);
        localStorage.setItem("products", JSON.stringify(products));
        loadProducts();
    };

    loadProducts();
});
