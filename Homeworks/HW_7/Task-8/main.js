// Task-8
class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince{

    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let cinderellas = [
    new Cinderella('Cinderella', 32, 39),
    new Cinderella('Cinderella', 32, 38),
    new Cinderella('Cinderella', 32, 33),
    new Cinderella('Cinderella', 32, 36),
    new Cinderella('Cinderella', 32, 35),
    new Cinderella('Cinderella', 32, 34),
    new Cinderella('Cinderella', 32, 37),
    new Cinderella('Cinderella', 32, 36),
    new Cinderella('Cinderella', 32, 36),
    new Cinderella('Cinderella', 32, 35),
];

let prince = new Prince('Prince', 35, 37);

for (const cinderellaMain of cinderellas) {
    if (cinderellaMain.footSize === prince.shoeSize) {
        prince.wife = cinderellaMain;
    }
}
console.log(prince);

let cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.shoeSize);
prince.wife = cinderellaMain
console.log(prince);
