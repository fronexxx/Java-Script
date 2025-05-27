// Task-1

let cartsDiv = document.getElementById('carts');

fetch('https://dummyjson.com/carts')
    .then((response) => response.json())
    .then((cartsObjects) => {
        let {carts} = cartsObjects;
        console.log(carts);


        for (const cart of carts) {
            let div = document.createElement('div');
            div.classList.add('cart-container');
            let divWithInfo = document.createElement('div');
            divWithInfo.innerText = `
            "id": ${cart.id},
            "total": ${cart.total},
            "discountedTotal": ${cart.discountedTotal},
            "userId": ${cart.userId},
            "totalProducts": ${cart.totalProducts},
            "totalQuantity": ${cart.totalQuantity},  
           `
            let h3 = document.createElement('h3');
            h3.innerText = 'Products';

            let ol = document.createElement('ol');
            for (const product of cart.products) {
                let li = document.createElement('li');
                let info = document.createElement('p');
                info.innerText = `
                 "id": ${product.id},
                 "title": ${product.title},
                 "price": ${product.price} $,
                 "quantity": ${product.quantity},
                 "total": ${product.total},
                 "discountPercentage": ${product.discountPercentage},
                 "discountedTotal": ${product.discountedTotal},
                 `

                let img = document.createElement('img');
                img.src = product.thumbnail;
                li.append(info, img);
                ol.appendChild(li)
            }
            div.append(divWithInfo, h3, ol);
            cartsDiv.appendChild(div);
        }
    });
