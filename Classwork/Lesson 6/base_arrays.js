// Базові функції масивів
let arr = [];
console.log(Array.isArray(arr));
// arr[arr.length] = 10;
console.log(arr.push('New Element1'));
console.log(arr.push('New Element2'));
console.log(arr.push('New Element3'));
console.log(arr.push('New Element4'));
console.log(arr.push('New Element5'));
console.log(arr);

console.log(arr.pop());
console.log(arr);

console.log(arr.unshift('!!!'));
console.log(arr);

console.log(arr.shift());
console.log(arr);

let join = arr.join('; ');
console.log(join);

let nums = [11, 22, 33];
let concat = arr.concat(nums);
console.log(concat);

console.log(arr);

console.log(nums.reverse());

console.log(concat);
let slice = concat.slice(0, 4);
console.log(slice);
console.log(concat);

// let splice = concat.splice(0, 2, 'jscbnsih', '^%$^$^', '!!!');
// console.log(splice);
// console.log(concat);

// console.log(concat.splice(concat.indexOf(11), 1));

console.log(concat.includes(22));
console.log('hello okten'.includes('ok'));
