// Prototyping

let base =  {
    id: 1,
    name: 'kokos'
};

let copy = Object.create(base);
copy.surname = 'kokosov';
copy.id = 100500;
console.log(base);
console.log(copy.hasOwnProperty('id'));
console.log(copy);
// console.log(copy.id, copy.name);

let obj = {};
obj.__proto__ = base;
console.log(obj);
