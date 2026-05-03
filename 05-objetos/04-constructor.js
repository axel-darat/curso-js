// { id: 1, recuperarClave: function (){} }

function Usuario() {
    this.id = Math.random();
    this.recuperarClave = function () { // método
        console.log('Recuperando clave...');
    }
}

let usuario = new Usuario();

console.log(usuario);