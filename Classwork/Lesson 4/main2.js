// Доп інфа про ф-ії

// let user1 = {
//     id: 1,
//     name: 'vasya',
//     age: 23,
//     status: true
// };

function userFactory(id, name, age, status) {
    let user = {
        id: id,
        name: name,
        age: age,
        status: status
    };
    return user;
}

let u1 = userFactory(1, 'kokos', 23, true);
let u2 = userFactory(2, 'tomato', 33, false);
let u3 = userFactory(3, 'cucumber', 1, false);
let u4 = userFactory(4, 'baklazan', 12, true);
console.log(u1);
console.log(u2);
console.log(u3);
console.log(u4);
