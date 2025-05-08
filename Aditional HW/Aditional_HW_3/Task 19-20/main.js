// Task-19
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of arr) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

// Task-20
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];
for(let i = 0; i < arr2.length; i++) {
    newArray[newArray.length] = arr2[i];
}
console.log(newArray);
