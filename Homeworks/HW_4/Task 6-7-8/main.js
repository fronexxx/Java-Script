// Task 6
document.write('------ Task-6 ------')
function foobar(text) {
    document.write(`
                    <ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>
    
                    `)
}

foobar('hello world');
document.write('------ Task-7 ------')

// Task 7
function task(text2, counter) {
    document.write('<ul>')
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text2}</li>`);
    }

    document.write('</ul>')
}

task('hello okten', 4);

// Task-8
document.write('------ Task-8 ------')

function primitives(arrayOfPrimitives) {
    document.write('<ul>');
    for (let item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

primitives([55, true, 'hsjadg', 34, false]);

