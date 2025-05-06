//<!--------------- Інкременти і декременти -------------------->


// let x = 0;
// x = x + 1;
// console.log(x);
// x++;
// console.log(x);
//
// x += 1;
// console.log(x);
//
// x = x - 1;
// console.log(x);
// x -= 1;
// console.log(x);
// x--;
// console.log(x);

// let a = 0;
// let b = a++;
// console.log(a, b);


//<!-------------------- Цикл for of ------------------------>

// let users = [
//     {name: 'vasya', age: '31', status: true},
//     {name: 'olya', age: '23', status: true},
//     {name: 'igor', age: '24', status: false},
//     {name: 'petya', age: '54', status: true},
//     {name: 'nastya', age: '13', status: true},
//     {name: 'oleg', age: '19', status: false},
//     {name: 'olya', age: '35', status: false},
//     {name: 'serj', age: '45', status: true},
//     {name: 'vanya', age: '16', status: false},
//     {name: 'yura', age: '32', status: false},
//     {name: 'sofiya', age: '29', status: true}
// ];
//
// debugger;
// for (let user of users) {
//     if (user.status) {
//         console.log(user);
//     }
// }

//<!-------------------- Цикл for ------------------------>

// let users = [
//     {name: 'vasya', age: '31', status: true},
//     {name: 'olya', age: '23', status: true},
//     {name: 'igor', age: '24', status: false},
//     {name: 'petya', age: '54', status: true},
//     {name: 'nastya', age: '13', status: true},
//     {name: 'oleg', age: '19', status: false},
//     {name: 'olya', age: '35', status: false},
//     {name: 'serj', age: '45', status: true},
//     {name: 'vanya', age: '16', status: false},
//     {name: 'yura', age: '32', status: false},
//     {name: 'sofiya', age: '29', status: true}
// ];
//
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     document.write(`<h3>${user.name} ${user.age}</h3>`)
//
// }

//<!-------------------- Цикл for in ------------------------>

// let user = {
//     name: 'vasya',
//     age: '31',
//     status: true,
//     skills: []
// }
// for (fieldName in user) {
//     console.log(fieldName, user[fieldName]);
// }

// let users = [
//     {name: 'vasya', age: '31', status: true},
//     {name: 'olya', age: '23', status: true},
//     {name: 'igor', age: '24', status: false},
//     {name: 'petya', age: '54', status: true},
//     {name: 'nastya', age: '13', status: true},
//     {name: 'oleg', age: '19', status: false},
//     {name: 'olya', age: '35', status: false},
//     {name: 'serj', age: '45', status: true},
//     {name: 'vanya', age: '16', status: false},
//     {name: 'yura', age: '32', status: false},
//     {name: 'sofiya', age: '29', status: true}
// ];
//
// for (const user of users) {
//     for (const fieldName in user) {
//         console.log(fieldName, user[fieldName]);
//     }
//     console.log('');
// }


//<!-------------------- Цикл While ------------------------>


// let users= [
//     {name: 'vasya', age: '31', status: true},
//     {name: 'olya', age: '23', status: true},
//     {name: 'igor', age: '24', status: false},
//     {name: 'petya', age: '54', status: true},
//     {name: 'nastya', age: '13', status: true},
//     {name: 'oleg', age: '19', status: false},
//     {name: 'olya', age: '35', status: false},
//     {name: 'serj', age: '45', status: true},
//     {name: 'vanya', age: '16', status: false},
//     {name: 'yura', age: '32', status: false},
//     {name: 'sofiya', age: '29', status: true}
// ];
//
// let i = 0;
// while (i < users.length){
//     let user = users[i];
//     document.write(`<h3>${user.name} ${user.age} ${user.status} </h3>`)
//     i++;
// }

do {
    console.log('do');
} while (true);
