'use strict';

const filter = document.getElementById('filter');

const cards = document.querySelectorAll('.card');

filter.addEventListener('change', function () {

    const selectedCategory = this.value;

    cards.forEach(card => {

        const category = card.dataset.category;

        if (selectedCategory === 'all' || category === selectedCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
