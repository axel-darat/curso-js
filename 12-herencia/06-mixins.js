function mixin(Ctr, ...args) {
    Object.assign(Ctr.prototype, ...args);
}

let vuela = {
    vuela() {
        console.log('volando');
    }
}

let nada = {
    nada() {
        console.log('nadando');
    }
}

let bano = {
    bano() {
        console.log('bañando');
    }
}

let camina = {
    camina() {
        console.log('caminando');
    }
}

// vuela, nada, camina, va al baño
function Pato () {
    this.name = 'Patito';
}

// Object.assign(Pato.prototype, vuela, nada, bano, camina);
mixin(Pato, nada, bano, camina, vuela);
let p = new Pato();


// camina, nada, va al baño
function Perro () {}
// Object.assign(Perro.prototype, nada, bano, camina);
mixin(Perro, nada, bano, camina);


// nada, val baño
function Pez () {}
Object.assign(Pez.prototype, nada, bano);
mixin(Pez, nada, bano);


// vuela pero no nada, camina ni va al baño
function Avion () {}

Object.assign(Avion.prototype, vuela);
mixin(Avion, vuela);
