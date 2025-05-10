// Task-9
document.write('------ Task-9 ------');
function foobar(users) {
    for(let user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}

foobar(users = [
    {id: 1, name: 'kokos', age: 32},
    {id: 2, name: 'kokos', age: 32},
    {id: 3, name: 'kokos', age: 32},
    {id: 4, name: 'kokos', age: 32},
    {id: 5, name: 'kokos', age: 32}

]);

// Task-10
function arrayMinValues(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        let number = array[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(arrayMinValues([45, 12, 44, -11, 32, 10]));
