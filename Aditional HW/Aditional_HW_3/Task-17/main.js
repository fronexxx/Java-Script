// Task-17/a

// let arr = [];
// let index = 0;
//
// for (let i = 0; index < 50; i += 2) {
//     if (i % 2 === 0) {
//         arr[index] = i;
//         index++;
//     }
// }

//
// for (let i = 2; i <= 100; i += 2) {
//     arr.push(i);
//
// }
// console.log('Масив з 50 парних чисел', arr);

// Task-17/b

// let index2 = 0;

// for (let i = 1; i < 100; i += 2) {
//     if (i % 2 === 1) {
//         arr[index] = i;
//         index++;
//     }
// }

// Task-17/c
// for (let i = 0; i < 20; i++) {
//     arr[index] = Math.floor(Math.random() * 100);
//     index++;
// }

// Task-17/d
// for (let i = 0; i < 20; i++) {
//     arr[index] = Math.floor((Math.random() * 732) + 8);
//     index++;
// }
// console.log(arr);



// for (let i = 2; i < arr.length; i += 3) {
//     console.log(arr[i]);
// }

// Вивести кожен 3 елемент якщо він є парним і записати у новий масив
// let array = [];
// for (let i = 2; i < arr.length; i += 3) {
//    if (arr[i] % 2 === 0) {
//        array[array.length] = arr[i];
//    }
// }
// console.log(array);

// Вивести кожен елемент сусід якого є парним
// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// Середнє значення
// let arrSum = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
//
// for (let i = 0; i < arrSum.length; i++) {
//     sum += arrSum[i];
// }
// let average = sum / arrSum.length;
// console.log(average);

// Створити масив з рандомними значеннями помножити на 5 та записати у новий масив
// let arrRandom = [10, 2, 3, 5, 20, 40, 15];
// let result = [];
//
// for (let i = 0; i < arrRandom.length; i++) {
//     result[i] = arrRandom[i] * 5;
//     result[result.length] = result[i];
// }
// console.log(arrRandom);
// console.log(result);

// Створити масив з будь-яким значенням і якщо елемент є числом додати його в інший масив
let array = [50, true, 'jjj', null, false, 45, 10, 'kraken',];
let numArray = [];

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
        numArray[numArray.length] = array[i];
    }
}
console.log(numArray);
