function crearUsuario (name, email) {
   return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
          console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Axel', 'axel@correo.com');
let user2 = crearUsuario('Juan', 'juan@correo.com');

console.log(user1);
console.log(user2);