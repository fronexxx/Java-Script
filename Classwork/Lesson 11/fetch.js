// fetch метод

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => {
//         //          Деструктиризація
//         for (const {name, username, email} of users) {
//             document.write(`<div>
//               Name: ${name}; Username ${username}; Email ${email};
// </div>`)
//         }
//     });


fetch('https://dummyjson.com/products?limit=10')
.then(value => value.json())
.then(res => {
    console.log(res)

    let {products} = res;
    document.write(`<div>`);
    for (const product of products) {
        document.write(`<div>`);
        document.write(`<p>${product.id}___${product.brand} - ${product.price} USD</p>`);
        document.write(`<img src="${product.thumbnail}" alt="">`);
        document.write(`</div>`);
    }
    document.write(`</div>`);
})




fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'BMW Pencil',
    })
})
    .then(res => res.json())
    .then(console.log);
