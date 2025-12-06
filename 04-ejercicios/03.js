/**
 * INDICE DEBE VALIDAR QUE NO SEA MENOR
 * A CERO Y QUE EL ELEMENTO EXISTA EN EL ARRAY
 */

let resultado = getByIdx([1,2], 1);

function getByIdx(arr, idx) {
    if (idx < 0 || arr.length <= idx) {
        return 'Elemento no existe';  
    }
    return arr[idx];
}

console.log(resultado);