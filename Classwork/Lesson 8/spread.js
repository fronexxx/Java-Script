// Spread

// let user = {
//     name: 'Ivan',
//     age: 21
// };
//
// let user2 = user;
// user3 = {
//     name: 'Ivan',
//     age: 21
// }
// user2.age = 22;
//
// console.log(user);
// console.log(user === user2);
// console.log(user === user3);

// let user = {
//     name: 'Ivan',
//     age: 21
// };
//
// let userCopy = {...user, status: true, skills: ['asd', 'qwe']};
// console.log(userCopy === user);
// console.log(userCopy.age = 17);
// console.log(userCopy);
// console.log(user);


let nums = [11, 22, 33];
let nums2 = [...nums];
console.log(nums2 === nums);
