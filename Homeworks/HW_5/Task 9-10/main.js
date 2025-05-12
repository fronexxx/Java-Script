// Task-9
let foobar = (users) => {
    for(let user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}

foobar(users = [
    {id: 1, name: 'kokos', age: 32},
    {id: 2, name: 'kokos', age: 32},
    {id: 3, name: 'kokos', age: 32},
    {id: 4, name: 'kokos', age: 32},
    {id: 5, name: 'kokos', age: 32},
]);

// Task-10
let arrayMinValues = (array) => {
    let min = array[0];
    for (let i = 1; i < array.length; i++){
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
let minValues = arrayMinValues([1, 2, -100, 4, 5]);
console.log(minValues);
