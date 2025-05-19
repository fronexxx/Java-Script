// shallow and deep copy

let user = {name: 'vasya',
    skills: ['html', 'js'],
    greeting() {}
};

// let userClone = {...user};
// console.log(user === userClone);
// console.log(user.skills === userClone.skills);

// let s = JSON.stringify(user); // convert to JSON

let userJsonClone = JSON.stringify(user);
console.log(userJsonClone);

let parse = JSON.parse(userJsonClone);
console.log(parse);
console.log(user);
console.log(user === parse);
console.log(user.skills === parse.skills);

let assign = Object.assign({}, user);
console.log(assign);
console.log(assign === user);
console.log(assign.skills === user.skills);
