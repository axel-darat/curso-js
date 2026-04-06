/**
 * NO RECOMENDABLE!
 * El array original sigue existiendo
 * Muy común
 */
// let arr = [1, 2];
// arr = [];

// let arr = [1, 2];
// let arr2 = arr;
// arr = [];

// console.log(arr2, arr);

// Asignar largo a cero en el Array
// Forma común
let arr = [1, 2];
arr.length = 0;
// console.log(arr);

// Desde el método esplice asignar a cero el valor del largo
// Más explícita
let arr2 = [1, 2];
arr2.splice(0, arr.length);
// console.log(arr2);

// Vaciar array con while y método pop.
// NO RECOMENDABLE.
// NO USAR JAMÁS!!!!! XXXXXX
let arr3 = [1, 2];
while (arr3.length > 0) {
    arr3.pop();
}
// console.log(arr3);
