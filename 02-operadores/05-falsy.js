// short-circuit

// Falso

let nombre = '';
let username = nombre || 'Anonimo';
console.log(username);

function fn1() {
    console.log('función 1');
    return false;
}

function fn2() {
    console.log('función 2');
    return true;
}

let x = fn1() && fn2();