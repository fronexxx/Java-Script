// Написати функцію обміну валюти
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
}

let currencyArray = [
    {currency: 'USD', value: 41},
    {currency: 'EUR', value: 45}
];
let result = exchange(45000, currencyArray, 'USD');
console.log(result);
let result2 = exchange(45000, currencyArray, 'EUR');
console.log(result2)
