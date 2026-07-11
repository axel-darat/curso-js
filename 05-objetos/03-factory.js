// let user1 = {
//     id: 1,
//     email: 'axel@correo.com',
//     name: 'Axel',
//     activo: true,
//     recuperarClave: function() {
//         console.log('Recuperando clave');
//     },
// };

// let user2 = {
//     id: 2,
//     email: 'vicente@correo.com',
//     name: 'Vicente',
//     activo: false,
//     recuperarClave: function() {
//         console.log('Recuperando clave');
//     },
// };

function crearUsuario(name, email) {
    return {
        id: Math.random(),
        name,
        email,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Axel', 'axel@correo.cl');
console.log(user1);