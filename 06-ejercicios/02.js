function Usuario(name) {
    return {
        id: Math.random(),
        name,
    };
}

let user = new Usuario('Felipe');
let user2 = new Usuario('Chanchito');
console.log(user, user2);
