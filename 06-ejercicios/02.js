function createUsuario(name) {
    return {
        id: Math.random(),
        name,
        
    };
}

let user1 = createUsuario('Felipe');
let user2 = createUsuario('Chanchito');
console.log(user1, user2);