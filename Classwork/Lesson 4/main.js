// Базова інформація про функції

// function writer(productTitle, price, descr) {
//     document.write(
//         `
//     <div>
//         <h3>${productTitle} ${price}</h3>
//         <p>${descr}</p>
//     </div>
//
//     `
//     )
// }
//
// writer('milk', 32, 'some milk');
//
// //.....
//
// writer('bread', 12, 'dlknjfkn fjkfna kahuhda')

function printerArray(array) {
    for (const item of array) {
        console.log(item);
    }
}

let users = [
    {name: 'vasya', age: '31', status: true},
    {name: 'vsya', age: '31', status: true},
    {name: 'vaa', age: '31', status: true},
    {name: 'asya', age: '31', status: true},
    {name: 'vasa', age: '31', status: true},
    {name: 'vas', age: '31', status: true}
];
printerArray(users);

let productsArray = [
    {
        title: 'milk',
        price: 32,
        descr: 'some milk'
    },
    {
        title: 'bread',
        price: 32,
        descr: 'some milk'
    },
    {
        title: 'meat',
        price: 32,
        descr: 'some milk'
    }
];
printerArray(productsArray);
