// let email = 'axel@correo.com';
// let name = 'Axel';
// let direccion = {
//     calle: 'Queen st',
//     numero: 15,
// };

let user = {
    email: 'axel@correo.com',
    name: 'Axel',
    direccion: {
        calle: 'Queen st',
        numero: 15,
    },
    activo: true,
    recuperarClave: function recuperarClave() {
        console.log('Recuperando clave...');
    },
};

console.log(user);