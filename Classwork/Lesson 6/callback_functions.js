// callback функції

// function foo(callback) {
//     console.log(callback());
// }
//
// foo(function () {
//     return 100
// })
//
// function calc(a, b, callback){
//     return callback(a, b);
// }
//
// console.log(calc(10, 20, (a, b) => {
//     return a + b;
// }));
// console.log(calc(10, 20, (a, b) => a - b));
// console.log(calc(10, 20, (a, b) => a / b));
// console.log(calc(10, 20, (a, b) => a + a * a / b));
// console.log(calc(10, 20, (a, b) => a / a * b));
// console.log(calc(10, 20, (a, b) => a * a / b));

// Додаткове пояснення

function filter(arr, callback) {
    let mass = [];
    for (const item of arr) {
        if (callback(item)) {
            mass[mass.length] = item;
        }
    }
    return mass;
}

console.log(filter([11, 22, 33, 44, 55], function (item) {
    return item % 2 === 0;
}));


let users = [
    {name: 'vasya', age: 43, status: true},
    {name: 'kokos', age: 30, status: true},
    {name: 'nata', age: 34, status: true},
    {name: 'valya', age: 33, status: false},
    {name: 'tomato', age: 32, status: true},
    {name: 'kira', age: 17, status: false},
    {name: 'oleg', age: 12, status: false},
    {name: 'serj', age: 21, status: true},
    {name: 'olya', age: 37, status: false},
    {name: 'nika', age: 30, status: true},
    {name: 'angel', age: 32, status: false},
];

console.log(filter(users, function (user) {
    return user.age !== 30;
}));
