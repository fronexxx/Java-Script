// Task-11

let cardSuite = ['spades', 'hearts', 'diamonds', 'clubs'];
let values = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'];
let cards = [];

for (const suit of cardSuite) {
    for (const value of values) {
        cards.push({
            suite: suit,
            value: value
        });
    }
}
console.log(cards);

let suites = cards.reduce((acc, card) => {
    if (card.suite === 'spades') {
        acc.spades.push(card);
    }else if (card.suite === 'diamonds') {
        acc.diamonds.push(card);
    }else if (card.suite === 'hearts') {
        acc.hearts.push(card);
    }else if (card.suite === 'clubs') {
        acc.clubs.push(card);
    }
    return acc;
}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(suites);
