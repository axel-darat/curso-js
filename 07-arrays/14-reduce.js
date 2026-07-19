// const numeros = [1, 2, 3, 4];

// /**
//  * Reduce itera en los elementos
//  * 
//  * ej: 1 + 2 = 3
//  * 3 + 3 = 6
//  * 6 + 4 = 10
//  */

// const suma = numeros.reduce((acc, el) => {
//     return acc + el;
// }, 0);

// console.log(suma);

const anidado = [[1, 2], 3, [4, 5]];

/**
 * Método "Reduce" a través del método "concat" une
 * los elementos del array
 * a través de la iteración
 */

const plano = anidado
    .reduce((acc, el) => acc.concat(el), []);

console.log(plano);