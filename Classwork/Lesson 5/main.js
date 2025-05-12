// Замикання
function userBuilder(name, age) {
    let user = {name, age}
    return {
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;
        },
        setAge(age) {
            if (age > 0) {
                user.age = age;
            }
        }
    }
}

let builder = userBuilder('Ivan', 21);
console.log(builder);

console.log(builder.getName());
console.log(builder.getAge());
builder.setAge(-12);
console.log(builder.getAge());

