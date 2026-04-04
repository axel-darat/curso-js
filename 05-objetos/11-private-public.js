function Usuario() {
    let = 1;
    this.name = 'Nicolás';
    let log = function() {
        console.log('logging...');
    }

    this.guardar = function () {
        log();
        console.log('guardando...');
    }
}

const usuario = new Usuario();
usuario.guardar();