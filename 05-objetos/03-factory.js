
function crearUsuario(name, email) {
    return {
        name,
        email,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Axel', 'axel@correo.com');
let user2 = crearUsuario('Jose', 'jose@correo.com');

console.table({user1, user2});