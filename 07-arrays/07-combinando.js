let arr1 = [1, 2];
let arr2 = [3, 4];

// crea un nuevo array (copia, no referencia al original)
let combinados = arr1.concat(arr2);
// console.log(combinados, arr1);

// método slice divide un array (desde, hasta)
let divididos = combinados.slice(1, 3);

console.log(divididos, combinados);
