let books = [
    {
        title: 'JavaScript',
        pages: 100,
        authors: ['name', 'surname'],
        genre: ['Programming']
    },
    {
        title: 'JavaScript',
        pages: 455,
        authors: ['name'],
        genre: ['Programming', 'Programming']
    },
    {
        title: 'pythonhuh',
        pages: 435,
        authors: ['name', 'surname', 'username'],
        genre: ['Programming']
    },
    {
        title: 'pythonandjahndj',
        pages: 200,
        authors: [ 'surname', 'username'],
        genre: ['Programming', 'Programming', 'something']
    }
];

// З найбільшою кількістю сторінок
let maxPagesBook = books[0];
for (let book of books) {
    if (book.pages > maxPagesBook.pages) {
        maxPagesBook = book;
    }
}
console.log('Найбільша кількість сторінок', maxPagesBook.pages);

// З найбільшою кількістю жанрів
let maxGenresBook = books[0];
for (let book of books) {
    if (book.genre > maxGenresBook.genre) {
        maxGenresBook = book;
    }
}
console.log('Найбільша кількість жанрів', maxGenresBook.genre.length);

// З найдовшою назвою
let longestTitleBook = books[0];
for (let book of books) {
    if (book.title.length > longestTitleBook.title.length) {
        longestTitleBook = book;
    }
}
console.log('Найдовша назва', longestTitleBook.title);

// Книжки які писали два автори
let twoAuthorsBooks = [];
let index = 0;

for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 2) {
        twoAuthorsBooks[index] = books[i];
        index++;
    }
}
console.log('Книги двох авторів', twoAuthorsBooks.length);

// Книжки які писали два автори
let oneAuthorBooks = [];
index = 0;

for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 1) {
        oneAuthorBooks[index] = books[i];
        index++;
    }
}
console.log('Книги одного автора', oneAuthorBooks.length);
