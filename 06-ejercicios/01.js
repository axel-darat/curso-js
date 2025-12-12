function Usuario(name) {
    this.id = Math.random();
    this.name = name;
}

let user1 = new Usuario('Felipe');
let user2 = new Usuario('Chanchito');
console.log(user1, user2);