// Класи та наслідування

// class User {
//
//
//     constructor(username, age) {
//         this.username = username;
//         this.age = age;
//     }
//
//     // static greeting(text) {
//     //     console.log(this);
//     //     return `${text} hi! My name is ${this.name}`;
//     // }
//
//     work(text) {
//
//         return `${text}`;
//     }
// }
//
// // let user = new User('kokos', 23);
// // console.log(user);
// // console.log(user.greeting('YoYoYO'));
//
// // console.log(User.greeting());
//
// class Customer extends User {
//
//
//     constructor(username, age, password) {
//         super(username, age);
//         this.password = password;
//     }
// }
//
// let customer = new Customer('vasya', 23, '1234');
// console.log(customer);
// console.log(customer.work('bla-bla-bla-bla'));
// console.log(customer.work('hahahhaaha'));


function User(name, age) {
    this.name = name;
    this.age = age;
}

function Customer(name, age, password) {
    User.apply(this, arguments);
    this.password = password;
}
let customer = new Customer('vasya', 23, '1234');
console.log(customer);
