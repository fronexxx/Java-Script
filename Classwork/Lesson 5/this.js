// Функції в об'єктах та контекст this
let user = {
    name: 'vasya',
    age: 32,
    greeting: function (msg) {
        console.log(this);
        return `${msg} my name is ${this.name}`;
    },
    vitannya: (msg) => `${msg} my age is ${user.age}`
}
console.log(user.greeting('Hi'));
console.log(user.vitannya('Helo'));
