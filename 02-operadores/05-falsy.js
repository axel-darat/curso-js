// short-circuit

// Falso
// false
// 0
// ''
// null
// undefined
// NaN

let nombre = 'Chanchito feliz';
let username = nombre || 'Anónimo';

console.log(username);

function fn1() {
    console.log('soy función 1');
    return true;
}

function fn2() {
    console.log('soy función 2');
    return true;
}

let x = fn1() && fn2();

console.log(x);