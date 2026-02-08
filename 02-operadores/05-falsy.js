// short-circuit

// Falso
// false
// 0
//  ''
// null
// undefined
// NaN

let nombre = 'Chanchito Feliz';
let username = nombre || 'Anónimo';
console.log(username);

// DECLARACIÓN DE FUNCIONES

function fn1() {
    console.log('soy funcion 1');
    return false;
}

function fn2() {
    console.log('soy funcion 2');
    return true;
}

// CORTO CIRCUITO AL HABER UN FALSO || SIGUE AL HABER UN VERDADERO

let x = fn1() && fn2();