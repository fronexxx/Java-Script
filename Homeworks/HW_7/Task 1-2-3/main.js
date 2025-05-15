// Task-1
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user = new User(1, 'Kokos', 'Kokosova', 'qwe@gmail.com', '0678901234');
console.log(user);

let users = [
    new User(4, 'nika', 'ogneva', 'nika@gmail.com', '0777777654'),
    new User(3, 'petya', 'petrov', 'zxc@gmail.com', '0888887654'),
    new User(5, 'name', 'surname', 'sss@gmail.com', '0555557654'),
    new User(2, 'vasya', 'vasyov', 'asd@gmail.com', '0999997654'),
    new User(6, 'nastya', 'nastyova', 'dfg@gmail.com', '0678765432'),
    new User(8, 'kolya', 'kolyan', 'kolich@gmail.com', '0665557654'),
    new User(1, 'Kokos', 'Kokosova', 'qwe@gmail.com', '0678901234'),
    new User(7, 'sofi', 'solovyova', 'sofiya@gmail.com', '0555557654'),
    new User(10, 'named', 'surnamed', 'lkj@gmail.com', '0555557654'),
    new User(9, 'inna', 'solovey', 'inna@gmail.com', '0988986755')

];
console.log(users);

// Task-2
const filterUsers = users.filter(user => user.id % 2 === 0);
console.log(filterUsers);

// Task-3
console.log(users.sort((user1, user2) => user1.id - user2.id));


