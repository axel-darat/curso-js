function suma(a, b) {
    console.log(arguments);
    return a + b + 2;
}

let resultado = suma(10, 2);
console.log(resultado);
console.log(typeof suma);