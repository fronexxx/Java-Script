// Task-11
let sum = (arr) => {
    let basket = 0;
    for (let item of arr) {
        basket += item;
    }
    return basket;
}
console.log(sum([1, 2, 10]));

// Task-12
let swap = (arr, i1, i2) => {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 2));
