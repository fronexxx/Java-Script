let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// Перебрати циклом while
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// };

// Перебрати циклом for
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// Перебрати циклом while та вивести числа тільки з непарним індексом
// let i = 1;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i += 2;
// }

// Перебрати циклом for та вивести числа тільки з непарним індексом
// for (let i = 1; i < arr.length; i += 2) {
//     console.log(arr[i]);
// }

// Перебрати циклом while та вивести числа тільки парні значення
// let i = 0;
// while (i < arr.length) {
//      if (arr[i] % 2 === 0) {
//           console.log(arr[i]);
//      }
//      i++;
// }

// Перебрати циклом for та вивести числа тільки парні значення
// for (let i = 0; i < arr.length; i++) {
//      if (arr[i] % 2 === 0) {
//           console.log(arr[i]);
//      }
// }

// Замінити кожне число, кратне 3, на слово "okten"
// for (let i = 0; i < arr.length; i++) {
//      if (arr[i] % 3 === 0) {
//           arr[i] = 'okten';
//      }
// }
// console.log(arr);

// Вивести масив у зворотньому порядку
// console.log(arr.reverse());

// Перебрати циклом while в зворотньому циклі
// let i = arr.length - 1;
// while (i >= 0) {
//      console.log(arr[i]);
//      i--;
// }

// Перебрати циклом for в зворотньому циклі
// for (let i = arr.length - 1; i >= 0; i--) {
//      console.log(arr[i]);
// }

// Перебрати циклом while та вивести числа тільки з непарним індексом в зворотньому циклі
// let i = arr.length - 1;
// while (i >= 1) {
//      console.log(arr[i]);
//      i-=2;
// }

// Перебрати циклом for та вивести числа тільки з непарним індексом в зворотньому циклі
// for (let i = arr.length - 1; i >= 1; i -= 2) {
//      console.log(arr[i]);
// }

// Перебрати циклом while та вивести числа тільки парні значення в зворотньому циклі

// let i = arr.length - 1;
// while (i >= 0) {
//      if (arr[i] % 2 === 0) {
//           console.log(arr[i]);
//
//      }
//      i--;
// }

// Перебрати циклом for та вивести числа тільки парні значення в зворотньому циклі
// for (let i = arr.length - 1; i >= 0; i--) {
//      if (arr[i] % 2 === 0) {
//           console.log(arr[i]);
//      }
// }

// Замінити кожне число, кратне 3, на слово "okten" в зворотному циклі
for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 3 === 0) {
          arr[i] = 'okten';
     }
}
console.log(arr.reverse());
