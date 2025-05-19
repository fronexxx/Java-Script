// Descriptors

let user = {
    firstName: 'Taras',
    lastName: 'Shevchenko'
}

// // user.firstName = 'asdasd'
// // console.log(user);
// //
// for (const userKey in user) {
//     console.log(userKey);
// }

Object.defineProperty(
    user,
    'id',
    {
        value: 100500,
        writable: false,
        enumerable: false,
        configurable: true
    }
);

console.log(user);
user.id = 100501;
console.log(user);
for (const userKey in user) {
    console.log(userKey);
}

Object.defineProperty(
    user,
    'id',
    {
        value: 200500,
        writable: false,
        enumerable: false,
        configurable: false
    }
);
console.log(user);
