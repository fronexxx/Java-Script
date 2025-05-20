// Події

let target = document.getElementById('target');
// target.onclick = function (ev) {
//     console.log('click');
//     console.log(ev);
// }
//
//
//
// // target.onmousemove = function (ev) {
// //     console.log(ev.clientX, ev.clientY);
// //     let r = ev.clientX;
// //     let g = ev.clientX;
// //     let b = ev.clientY;
// //     this.style.background = `rgb(${r}, ${g}, ${b})`;
// // }
//
//
// // target.onclick = function () {
// //     console.log('context menu');
// // }
// // console.log(target);
//
// // target.addEventListener('click', function (ev){
// //     console.log('jsndjsn');
// // })
//
// target.onmouseover = function (){
//     console.log('mouse over');
// }
// target.onmouseleave = function (){
//     console.log('mouse leave');
// }

// let i1 = document.getElementById('i1');
// i1.oninput = function () {
//     target.innerText = this.value;
// }

let f1 = document.forms.f1;
f1.onsubmit = function (ev) {
    ev.preventDefault();
    console.log('hello');
    let user = {name: f1.username.value, email: f1.email.value};
    console.log(user);
}

window.onload = function () {
    console.log('loaded');
}

// document.onreadystatechange = function () {
//     if (document.readyState === 'interactive') {
//         document.body.innerText = 'loading...';
//     }
//     if (document.readyState === 'complete') {
//         document.body.innerText = 'loaded';
//     }
// }


// f1.username
