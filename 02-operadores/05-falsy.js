// short-circuit

// Falso
// false
//  0
//  ''
//  null
// undef
// NaN

let nombre = '';
let username = nombre || 'Anónimo';
console.log(username);

function fn1() {
    console.log('soy funcion 1');
    return true;
}

function fn2() {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();