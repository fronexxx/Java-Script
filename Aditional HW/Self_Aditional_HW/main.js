// let arr = [11, 22, 33];
//
// let number = arr.reduce((a, b) => a + b, 0) / arr.length;
// console.log(number);
//
//
// let array = [];
//
// array.push('new element1', 'new element2', 'new element3');
// // console.log(array.pop());
// console.log(array.unshift('new element0'));
// console.log(array.shift());
// // console.log(array.join(''));
// console.log(array);
//
// let numbers = [50, 33, 22, 44, 55, 43, 77, 88];
//
// let number1 = numbers.reduce((a, number) => {
//     if (number % 2 === 0){
//         a[0].push(number);
//     }else {
//         a[1].push(number);
//     }
//     return a;
// }, [[], []]);
// console.log(number1);
//
// let numbersSort = numbers.sort((a, b) => {
//     return a - b;
// });
//
// console.log(numbersSort);

// let now = new Date().getTime();
//
// let target = document.getElementById('target').innerText;
// let number = parseInt(target);
//
//
// let price = parseInt(localStorage.getItem('productPrice')) || number;
// let lastUpdate = parseInt(localStorage.getItem('lastReload')) || 0;
//
// if(now - lastUpdate >= 10000){
//     price += 10;
//     localStorage.setItem('productPrice', price);
//     localStorage.setItem('lastReload', now);
// }
//
// document.getElementById('target').innerText = price + ' UAH';

// let arr = [];
// let obj = {name: '', value: 3434};
// let obj2 = {name: 'hdvfchsch', value: 34};
// arr.push(obj);
// arr.push(obj2);
// console.log(arr);

// Знайти суму чисел в масиві
let numbers = [11, 22, 33, 44];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum / numbers.length);
