// function calc(a, b) {
//     let result = a + b;
//     return result;
// }
// r1 = calc(1, 2);
// r2 = calc(455, 37);
// console.log(r1, r2);

// 100000 pdv warTax

// function percentage(sum, per) {
//     return sum / 100 * per;
// }
//
// function tax(sum) {
//     return sum - percentage(sum, 20) - percentage(sum, 1.5);
// }
//
// let number = tax(10000);
// console.log(number);
//
//
// let number2 = tax(100000);
// console.log(number2);

function userFilter(users) {
    let filteredUsers = [];
    for (const user of users) {
        if (user.age > 28) {
            filteredUsers.push(user);
        }
    }
    return filteredUsers;
}
let users = [
    {id: 1, name: 'Ivan', age: 21, status: true},
    {id: 2, name: 'jnsjn', age: 19, status: true},
    {id: 3, name: 'lmck', age: 29, status: false},
    {id: 4, name: 'lsmcms', age: 23, status: true},
    {id: 5, name: 'Ikjd', age: 27, status: false},
    {id: 6, name: 'dljc', age: 32, status: true},
    {id: 7, name: 'kdjmklc', age: 23, status: false},
    {id: 8, name: 'Ivandodkvj', age: 20, status: true},
    {id: 9, name: 'dvmdkmoian', age: 23, status: false}
]
let filter = userFilter(users);
console.log(filter);
