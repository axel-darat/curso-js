function createUsuario(name) {
    return {
        id: Math.random(),
        name: name,
    };
}

let user = createUsuario('Juanito');
let user2 = createUsuario('Peter');
console.log(user, user2);