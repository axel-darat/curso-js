function Usuario() {
    this.id = 1;
    this.name = 'Nicolas';

    let log = function() {
        console.log('logging...');
    }

    this.guardar = function () {
        log()
        console.log('Guardando...');
    }
}

const usuario = new Usuario();
