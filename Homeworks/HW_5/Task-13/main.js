// Task-13
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for(let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
}

let currencyArray = [
    {currency: 'USD', value: 41},
    {currency: 'EUR', value: 45}
];
// console.log(exchange(45000, currencyArray, 'USD'));
// console.log(exchange(45000, currencyArray, 'EUR'));

let result1 = exchange(45000, currencyArray, 'USD');
console.log(result1);
let result2 = exchange(45000, currencyArray, 'EUR');
console.log(result2)
