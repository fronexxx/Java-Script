// Task-6
let input = document.getElementById('xxx');
let resultDiv = document.getElementById('result');
input.oninput = function () {
    resultDiv.innerText = +this.value * 2.2;
}

// Task-7



function addToLocalStorage(arrayName, objToAdd) {
    let lsItem = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error('No such array');
    }
    let array = JSON.parse(lsItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('sessionsList', {});
