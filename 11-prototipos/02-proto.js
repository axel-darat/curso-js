function User() {
    this.name = 'hola mundo';
    // Método de instancia
    this.logger = function () {
        console.log('loggeando...');
        this.login();
    }
}

const user1 = new User();
const user2 = new User();

// Método de prototipo
User.prototype.login = function () {
    console.log('iniciando sesión', this.name);
}


User.prototype.toString = function () {
    console.log('Usuario:', this.name);
}

console.log(user1.login());