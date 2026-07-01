// function User(name) {
//     this.name = name;
//     this.instancia = function () {}
// }

// User.prototype.login = function () {
//     console.log('Hola mundo!');
// }

class User {
    // Al usar constructor se añade al propio objeto
    constructor(name) {
        this.name = name;
        this.instancia = function() {};
    }

    activo = true;

    // FAF se añade a instancia y no prototipo
    logout = () => {
        console.log('logout');
    }

    // Método se añade al prototipo
    login () {
        console.log('Hola Mundo!');
    }
}
const u = new User('Chanchito feliz');

