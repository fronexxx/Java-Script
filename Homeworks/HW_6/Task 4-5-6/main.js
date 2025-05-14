// Task-4/Почистити стрінгу від зайвих пробілів
 let str = '   dirty string   ';
let s = str.trim();
console.log(s);

// Task-5/Написати функцію яка перетворює рядок на масив слів
function stringToArray(str) {
    if (str) {
        let split = str.split(' ');
        return split;
    }
    return ['']
}
console.log(stringToArray('Ревуть воли як ясла повні'));

// Task-6/За допомоги map перетворити всі об'єкти в масиві на стрінгові
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let strings = numbers.map(number => number + '');
console.log(strings);
