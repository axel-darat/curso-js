// let email = 'axel@correo.cl'
// let name = 'axel';
// let direccion = {
//     calle: 'calle falsa',
//     numero: 123,
// };

let user = {
    email: 'axel@correo.cl',
    name: 'axel',
    direccion: {
        calle: 'calle falsa',
        numero: 123,
    },
    activo: true,
    recuperarClave: function () {
        console.log('Recuperando clave...');
    },
};

console.log(user);