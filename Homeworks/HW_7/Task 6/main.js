// Task-6
function Car(model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год.`)
    };
    this.info = function () {
        for (let key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (speed) {
        if (speed > 0) this.maxSpeed += speed;
    };
    this.changeYear = function (year) {
        if (year > 1815) this.year = year;
    };
    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
    };

}

let car = new Car('BMW', 'BMW', 2018, 250, 1.6);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2019);
car.addDriver({name: 'Ivan', age: 25, gender: 'male'});
console.log(car);
