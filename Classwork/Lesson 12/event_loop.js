// event loop


// console.log('1');
//
// setTimeout(function () {
//     console.log('hi');
// }, 1000)
//
// setTimeout(function () {
//     console.log('hello');
// }, 200)
//
//
//
//
// console.log('2');


let i = 0;

while (i < 5) {
    run(i);
    i++;
}

function run(i) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

let a = 10

while (a >= 0) {
    run(a);
    a--;
}

