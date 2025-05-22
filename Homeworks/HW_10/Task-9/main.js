// Task-9

const now = Date.now();
let price = parseInt(localStorage.getItem('price')) || 100;
const lastUpdate = parseInt(localStorage.getItem('lastUpdate')) || 0;


if (now - lastUpdate >= 10000) {
    price += 10;
    localStorage.setItem('price', price);
    localStorage.setItem('lastUpdate', now);
}

document.getElementById('price').textContent = price + ' UAH';

