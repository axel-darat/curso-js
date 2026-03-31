function suma(a, b) {
    console.log(arguments);
    return a + 2 - b;
}

let resultado = suma(5, 6);
console.log(resultado);
console.log(typeof suma);
