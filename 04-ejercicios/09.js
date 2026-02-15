/**
 * Crear un algoritmo que devuelva un array
 * de objetos en base a pares
 */

let pairs = [
    [1, { name: "Axel" }],
    [2, { name: "Roberto" }],
    [3, { name: "Gato" }],
];

let array = [{
    id: 1,
    name: "Axel",
}, {
    id: 2,
    name: "Roberto",
}, {
    id: 3,
    name: "Gato",
}];

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);