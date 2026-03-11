function crearUsuario(name, email) {
    return {
        email: email,
        name: name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('axel', 'axel@correo.cl');
let user2 = crearUsuario('pedro', 'pedro@correo.cl');

console.log(user1, user2);