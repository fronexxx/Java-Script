// Функції масивів з колбеками

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

// users.forEach(function (value) {
//     console.log(value);
//
// });
//
// users.forEach(value => console.log(value));
//
//
// users.forEach(value => console.log(value.name));
//
// let filterRedUsers = users.filter(value => value.age > 30);
// console.log(filterRedUsers);
// console.log(users);
//
// users.map((value, index) => {
//         return {
//             id: index + 1,
//             name: value.name,
//             age: value.age,
//             status: value.status
//         }
// });
//
// let find = users.find(value => value.name === 'kokos');
// console.log(find);
//
// console.log(users.every(value => value.status));
// console.log(users.some(value => value.status));

// let sort = users.sort((u1, u2) => {
//     return u2.age - u1.age;
// });
// console.log(sort);

// let sort = users.sort((a, b) => {
//     if(a.name > b.name){
//         return 1;
//     }
//     if(a.name < b.name){
//         return -1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
// });
// console.log(sort);

console.log(users.reduce((accumulator, user) => {
    if (user.status) {
        accumulator[0].push(user);
    } else {
        accumulator[1].push(user);
    }

    return accumulator;
}, [[], []]));

console.log(users);
