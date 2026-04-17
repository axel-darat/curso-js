// Dentro de un objeto: this hace referencia a un objeto
// En una función: this hace referencia a obj window, global
// en "new": hace referencia al objeto que será creado

// const user = {
//     name: 'Nicolas',
//     login() {
//         console.log(this);
//     }
// };

// user.logout = function logout() {
//     console.log(this);
// }

// user.login();

// function log() {
//     console.log(this);
// }

// log();

function Log(mensaje) {
    this.mensaje = mensaje;
    console.log(this);
}
/**
 * 1. Se crea un objeto literal
 * 2. Se vincula este objeto a this
 * 3. Se vincula a un prototipo
 * 4. Si no retorna nada, retorna this
 */

const l = new Log('Hola Mundo');