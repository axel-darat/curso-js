const usuario = {
    nombre: 'Nicolas',
    ciudadanias: ['Chile', 'Colombia', 'New Zealand'],
    // mostrarCiudadanias() {
    //     this.ciudadanias.forEach(function (ciudadania) {
    //         console.log(this.ciudadania, ciudadania);
    //     });
    // }
    mostrarCiudadanias() {
        this.ciudadanias.forEach(ciudadania => {
            console.log(this.nombre, ciudadania);
        });
    }
};

usuario.mostrarCiudadanias();