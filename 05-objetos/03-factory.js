// let user = {
//     id: 1,
//     email: 'axel@darat.com',
//     name: 'Axel',
//     activo: true,
//     recuperarClave: function () {
//         console.log('Recuperando clave...');
//     },
// };

function crearUsuario(name, email) {
    return {
        id: Math.random,
        email,
        name,
        activo: true,
        recuperarClave: function ()  {
            console.log('Recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Axel', 'axel@darat.com');

console.log(user1);