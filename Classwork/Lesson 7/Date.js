// Дата
let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getSeconds());
console.log(now.getTime());

let date1 = new Date(1747299586737);
console.log(date1);
let date2 = new Date("October 14 1987 12:00:00");
console.log(date2);
let date3 = new Date("December 14 1990 12:00:00");
console.log(date3);
let date4 = new Date("January 19 2008 12:00:00");
console.log(date4);
date4.setDate(15);
console.log(date4);
