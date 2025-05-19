// DOM Об'єктна модель документа та пошук елементів

// console.log(document.head.innerHTML);
// console.log(document.body.innerHTML);

// ID
// let ul1 = document.getElementById('list-1');
// console.log(ul1);


// Class
// let menuCollection = document.getElementsByClassName('menu');
// console.log(menuCollection);
//
// for (const menuCollectionElement of menuCollection) {
//     console.log(menuCollectionElement);
// }


// TAG
// let liList = document.getElementsByTagName('li');
// console.log(liList);
//
// let list1 = document.getElementById('list-1');
// console.log(list1);
// let list1liCollection = list1.getElementsByTagName('li');
// console.log(list1liCollection);


// console.log(document.querySelector('body .menu'));
// console.log(document.querySelectorAll('body .menu'));

let nodeListOf = document.querySelectorAll('#list-2 > li');
console.log(nodeListOf);

for (const node of nodeListOf) {
    console.log(node);
}

