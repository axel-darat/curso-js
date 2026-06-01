// Fat arrow functions

// No tienen ARGUMENTS
// super this
// FUNCIONES REDUCIDAS PARA FUNCIONES NORMALES
// SE RECOMIENDA USAR PARA OPERACIONES NO TODOS LOS CASOS.
const suma = (a, b) => {
    return Array.from(arguments)
        .reduce((acc, el) => acc + el);
}

console.log(suma(1, 2, 3, 4));