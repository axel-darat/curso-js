const user = { id: 1 };

/**
 * Al definir a "user" como constante nos permite añadir
 * nuevas propiedad pero no modificar las propiedad existentes
 * EJ: si modificaramos el "id" nos mostraría un error
 */

user.name = 'Axel';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

/**
 * FREEZE CONGELA EL OBJETO Y NO PERMITE
 * MODIFICAR NI AÑADIR NUEVAS PROPS
 */
// const user1 = Object.freeze({ id: 1 });
/**
 * SEAL PERMITE MODIFICAR PROPIEDADES
 * EXISTENTES PERO NO PERMITE AÑADIR
 * NUEVAS PROPIEDADES
 */
const user1 = Object.seal({ id: 1 });

user1.name = 'Nico';
user1.id = 2;
console.log(user1);