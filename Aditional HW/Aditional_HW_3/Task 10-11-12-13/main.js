// Task-10
let Array = [];

Array[0] = 12;
Array[1] = true;
Array[2] = 'lksld';
Array[3] = true;
Array[4] = 15;
Array[5] = false;
Array[6] = null;
Array[7] = 'string';
Array[8] = 1;
Array[9] = undefined;

for (let i = 0; i < Array.length; i++) {
    console.log(Array[i]);
}
console.log(' ');

// Task-11
for (let i = 1; i <= 10; i++) {
    console.log('Крок:' + i);
    document.write('Крок:' + i + '<br>')
}
console.log(' ');

// Task-12
for (let i = 1; i <= 100; i++) {
    console.log('Крок:' + i);
    document.write('Крок:' + i + '<br>')
}

// Task-13
for (let i = 1; i <= 100; i += 2) {
    console.log('Крок:' + i);
    document.write('Крок:' + i + '<br>')
}
