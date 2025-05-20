// Task-3
let someForm = document.forms.someForm;
let target = document.getElementById('target');

someForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let nameValue = someForm.name.value;
    let surnameValue = someForm.surname.value;
    let ageValue = +someForm.age.value;
    let obj = {nameValue, surnameValue, ageValue};
    console.log(obj);
    target.innerText = `name: ${obj.nameValue}; surname: ${obj.surnameValue}; age: ${obj.ageValue};`;
});

// Task-4
let currentNumber = +localStorage.getItem('number');
currentNumber += 1;
localStorage.setItem('number', currentNumber);

document.getElementById('number').innerText = currentNumber;
