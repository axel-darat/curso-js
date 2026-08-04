const u = new User('Chanchito Feliz');

function User(name) {
    this.name = name;
    this.instancia = function () {}
}

User.prototype.login = function ()  {
    console.log('Hola Mundo!');
}

// class User {
//     constructor(name) {
//         this.name = name;
//         this.instancia = function() {}
//     }

//     activo = true;

//     logout() {
//         console.log('logout');
//     }

//     login() {
//         console.log('Hola Mundo');
//     }
// }
2