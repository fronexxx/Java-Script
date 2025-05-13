// Колода карт

let cardSuite = [

    {suit: 'spade', color: 'black'},
    {suit: 'heart', color: 'red'},
    {suit: 'diamond', color: 'red'},
    {suit: 'club', color: 'black'}

];
let values = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'];
let cards = [];

for (const suits of cardSuite) {
    for (const value of values) {
        cards.push({
            suite: suits.suit,
            value: value,
            color: suits.color
        });
    }
}
console.log(cards);

// Знайти піковий туз
let spadeAce = cards.find(card => card.suite === 'spade' && card.value === 'ace');
console.log(spadeAce);

// Всі шістки
let sixes = cards.filter(card => card.value === 6);
console.log(sixes);

// Всі червоні карти
let redCards = cards.filter(card => card.color === 'red');
console.log(redCards);

// всі бубни
let diamonds = cards.filter(card => card.suite === 'diamond');
console.log(diamonds);

// Всі хрести більше 9
let clubs = cards.filter(card => card.suite === 'club' &&  [9, 'jack', 'queen', 'king', 'ace'].includes(card.value));
console.log(clubs);
