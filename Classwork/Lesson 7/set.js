// Set

// let set = new Set();
// set.add('asd');
// set.add('qwe');
// set.add('asd');
// set.add('xxx');
// console.log(set);
// console.log(set.has('xxx'));
// set.delete('xxx');
// console.log(set);
// console.log(set.size);
//
// set.forEach(value => console.log(value))
//
// let arrayFromSet = Array.from(set);
// console.log(arrayFromSet);
let arr = [11, 22, 33, 11, 54, 55, 55, 65, 22];

let set = new Set(arr);
console.log(set);

let numbers = Array.from(set);
console.log(numbers);
for (const number of numbers) {
    if(number % 2 === 0) console.log(number);
}
