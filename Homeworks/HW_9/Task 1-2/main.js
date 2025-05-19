// Task-1
document.write('Task-1')
let div = document.createElement('div');

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

let h3 = document.createElement('h3');
h3.innerText = 'lorem';
div.appendChild(h3);

let cloneDiv = div.cloneNode(true);
document.body.append(div, cloneDiv);

// Task-2
document.write('Task-2')
let arr = ['Main', 'Products', 'About Us', 'Contacts'];

let ul = document.createElement('ul');
ul.classList.add('menu');
for (const item of arr) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}

document.body.appendChild(ul);
