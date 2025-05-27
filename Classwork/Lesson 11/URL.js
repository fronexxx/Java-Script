// URL

let url = new URL('https://jsonplaceholder.typicode.com/posts');
url.searchParams.set('userId', 8);
url.searchParams.set('asd', 'kjsanbkjnb');
console.log(url.searchParams.get('asd'));
console.log(url.searchParams.has('userId'));


fetch(url)
    .then((value) => value.json())
    .then((value) => console.log(value));
