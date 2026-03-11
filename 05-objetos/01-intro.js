let email = 'axel@darat.dev';
let name = 'Axel';
let direccion = {
    calle: 'Queen st',
    numero: 15,
};

let user = {
    email: 'axel@darat.dev',
    direccion: {
        calle: 'Queen St',
        numero: 15,
    },
    activo: true,
    recuperarClave: function recuperarClave() {
        console.log('recuperando clave...');
    },
};

console.log(user);

// LLAMAR FUNCIÓN A TRAVÉS DEL OBJETO
user.recuperarClave();