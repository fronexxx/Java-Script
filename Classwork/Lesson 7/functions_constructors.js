// Функції конструктори

// function User(name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
// }
//
// let user1 = new User('kokos', 23, true);
// console.log(user1);

// function User(name, age, status, wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife
// }
//
// console.log(new User('kokos', 23, true, {name: 'kira', age: 17, status: false}));

function User(name, age, status, wifeName, wifeAge) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = {wifeName, wifeAge};
    this.greeting = function () {
        console.log('Hello');
    }
}

console.log(new User('kokos', 23, true, 'kira', 17));
