// Маніпуляції DOM елементами

// let target = document.getElementById('target');
// console.log(target.innerText);
// // target.innerText = 'New Text';
// target.style.background = 'silver';
//
// // console.log(target.classList.item(0));
// // // console.log(target.classList.contains('asd'));
// // target.classList.toggle('asd');
// // console.log(target.classList);
// // console.log(target.getAttribute('xxx'));
//
// target.classList.add('foo');
// target.classList.add('bar');
//
// // console.log(target.getAttribute('id'));
// // console.log(target.getAttribute('class'));
// // console.log(target.getAttribute('style'));
// // target.setAttribute('id', 'wsfbwsbfl');
//
// // console.log(target.previousElementSibling);
// // console.log(target.nextElementSibling);
// // console.log(target.children); // HTML
// // console.log(target.childNodes); // NODE
//
// // target.innerHTML = '<b>Hello</b>';
// console.log(target.outerHTML);

let colectionOfDiv = document.getElementsByClassName('point');

for (const divElement of colectionOfDiv) {
    divElement.innerText = 'New Text';
    divElement.classList.add('foo');
    divElement.style.background = 'silver';
}

