// Task-9

// const now = Date.now();
// let price = parseInt(localStorage.getItem('price')) || 100;
// const lastUpdate = parseInt(localStorage.getItem('lastUpdate')) || 0;
//
//
// if (now - lastUpdate >= 10000) {
//     price += 10;
//     localStorage.setItem('price', price);
//     localStorage.setItem('lastUpdate', now);
// }
//
// document.getElementById('price').innerText = price + ' UAH';


let now = new Date().getTime();

let target = document.getElementById('target').innerText;
let number = parseInt(target);


let price = parseInt(localStorage.getItem('productPrice')) || number;
let lastUpdate = parseInt(localStorage.getItem('lastUpdate')) || 0;

if (now - lastUpdate >= 10000) {
    price += 10;
    localStorage.setItem('productPrice', price);
    localStorage.setItem('lastUpdate', now);
}

document.getElementById('target').innerText = price + ' UAH';
