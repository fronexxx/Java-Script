// Новий синткасис об'єктів та дестриктуризація

// let name = 'vasya';
// let age = 25;
// let user = {
//     name,
//     age,
//     foo() {
//         console.log(this);
//     },
// };
// console.log(user);
// user.foo();

// let user = {
//     name: 'vasya',
//     age: 25,
//     foo() {
//         console.log('foo');
//     },
// };
//
// let {status} = user;
// console.log(status);

// let {name, foo} = user;
// console.log(name);
// foo();
// // console.log(age);
//
// function asd({name}) {
//     console.log(name);
// }
//
//
// let obj = {id: 1, name: 'petya', x: 'slmdkcsm'};
// asd(obj);

// let name = 'vasya';
// let age = 25;
// let user = {
//     name,
//     age,
//     foo() {
//         console.log(this);
//     },
//     wife: {name: 'anna', age: 23}
// };
// console.log(user);
// user.foo();
//
// let {name: userName, age: userAge, wife: {name: wifeName}, wife} = user;
// console.log(name);
// console.log(userName, userAge);
// console.log(wife);
// console.log(wifeName);


// let [a, , c] = [11, 22, 33];
// console.log(a, c);

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let [{name, age}, user2] = users;
console.log(name, age);
console.log(user2);
