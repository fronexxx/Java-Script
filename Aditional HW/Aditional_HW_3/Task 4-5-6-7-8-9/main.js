// Task-4
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let numbers of arr) {
    console.log(numbers);
}
console.log(' ');

// Task-5
let arrstr = ['ara', 'derfgb', 'thrc', 'thd', 'ethtr', 'ftrbh', 'fffg', 'hjj', 'gffffsi', 'fhbngbj'];
for (let str of arrstr) {
    console.log(str);
}
console.log(' ');

// Task-6
let mixarr = [1, 'ara', true, null, NaN, undefined, {value: 1}, []];
for (let mix of mixarr) {
    console.log(mix);
}
console.log(' ');

// Task-7
let mixedArr = [true, 'dsfcd', 90, 'lhkl', false, true, 66, 'jhsagcvh', false, 10];
// for (let mixed of mixedArr) {
//     if (typeof mixed === 'boolean') {
//         console.log(mixed);
//     }
// }

for (let i = 0; i < mixedArr.length; i++) {
    if (typeof mixedArr[i] === 'boolean') {
        console.log(mixedArr[i]);
    }
}
console.log(' ');

// Task-8
for(let mixedNum of mixedArr) {
    if (typeof mixedNum === 'number') {
        console.log(mixedNum);
    }
}
console.log(' ');

// Task-9
for(a = 0; a < mixedArr.length; a++) {
    if (typeof mixedArr[a] === 'string') {
        console.log(mixedArr[a]);
    }
}
