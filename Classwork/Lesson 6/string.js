// Функції string
let str = 'hello okten !!!';
console.log(str);
// let s = str.concat('!!!');
// console.log(s);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.startsWith('he'));
console.log(str.endsWith('en'));
console.log(str.substring(2, 7));
console.log(str.indexOf('o')); //  з ліва на право
console.log(str.lastIndexOf('o')); // З права на ліво
console.log(str.indexOf('o', 5));
console.log(str.charAt(8));
// console.log(str.replace('e', '!'))
console.log(str.replaceAll('e', '!'));
let split = str.split(' ');
console.log(split);
