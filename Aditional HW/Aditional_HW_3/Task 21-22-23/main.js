// Task-21
let arr = ['a', 'b', 'c'];
let word = '';
for (let i = 0; i < arr.length; i++) {
    word += arr[i];
}
console.log(word);

// Task-22
let arr2 = ['a', 'b', 'c'];
let word2 = '';
for(let letters of arr2) {
    word2 += letters; // word2 = word2 + letters;
}
console.log(word2);

// Task-23
let arr3 = ['a', 'b', 'c'];
let word3 = '';

let i = 0;

while (i < arr3.length) {
    word3 = word3 + arr3[i]; // word3 += arr3[i];
    i++;
}
console.log(word3);
