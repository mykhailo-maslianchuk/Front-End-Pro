'use strict';

document.getElementById("editButton").addEventListener("click", function () {
    const selectedID = localStorage.getItem("selectedProductID");
    const products = JSON.parse(localStorage.getItem("products") || "[]");

    const exists = products.find(p => p.id == selectedID);

    if (selectedID && exists) {
        window.location.href = "edit.html";
    } else {
        alert("Немає вибраного товару для редагування.");
    }
});
