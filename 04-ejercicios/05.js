/**
 * Crear algoritmo que devuelva número
 * menor y mayor de un array.
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function getMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (num of arr) {
        min = min < num ? min : num;
        max = max > num ? max : num;
    }
    return [min, max];
}

let numbers = getMinMax(array);
console.log(numbers);