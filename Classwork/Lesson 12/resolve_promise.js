// проміси resolve


// setTimeout( () => {
//     let x = 1;
//     console.log(x);
//     setTimeout(() => {
//         x++;
//         console.log(x);
//         setTimeout(() => {
//             x++;
//             console.log(x);
//         }, 1000);
//     }, 1000);
// }, 1000);

new Promise((resolve) => {
    setTimeout(() => {
        x = 1;
        console.log(x);
        resolve(x);
    }, 1000);
})
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                value++;
                console.log(value);
                resolve(value);
            }, 1000);
        });
    })
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                value++;
                console.log(value);
                resolve(value);
            }, 1000);
        })
    })
    .then((value) => {
        setTimeout(() => {
            value++;
            console.log(value);
        }, 1000);
    });
