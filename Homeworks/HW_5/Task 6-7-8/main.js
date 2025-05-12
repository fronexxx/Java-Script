// Task-6
let foobar = (text) => {
    document.write(`
              <ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
              </ul>
            `)
}
foobar('hello okten');

// Task-7
let foo = (text, counter) => {
    document.write('<ul>')
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);

    }


    document.write('</ul>')
}
foo('hello okten', 4);

// Task-8
let primitives = (arrayOfPrimitives) => {
    document.write('<ul>');
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }

    document.write('</ul>');

};

primitives([55, true, 'hsjadg', 34, false]);
