// Dentro de un obj: this hace referencia al obj
//  En una función this hace referencia al obj Window, global
// Si se usa new hace referencia al objeto que será creado

// const user = {
//     name: "Nicolás",
//     login() {
//         console.log(this);
//     }
// };

// user.logout = function logout () {
//     console.log(this);
// }

// user.login();
// user.logout();

// function log() {
//     console.log(this);
// }

// log();

function Log(mensaje) {
    this.mensaje = mensaje;
    console.log(this);
}


/**
 * se crea un objeto literal
 * se vincula este objeto a this
 * se vinsula el prototipo
 * si no retorna nada, entonces retorna this
*/

const l = new Log('Hola mundo');
