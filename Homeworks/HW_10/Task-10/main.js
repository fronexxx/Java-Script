// Task-10
const items = Array.from({ length: 100 }, (value, i) => `Об'єкт ${i + 1}`);
let page = 0, perPage = 10;

const itemsDiv = document.getElementById('items');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function render() {
    itemsDiv.innerText = items;
}

prevBtn.addEventListener('click', () => {
    if (page > 0) page--;
    render();
});

nextBtn.addEventListener('click', () => {
    if ((page + 1) * perPage < items.length) page++;
    render();
});

render();
