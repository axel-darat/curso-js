const letras = ['a', 'b', 1, 'c', 'd', 1];

/**
    DEVUELVE ÍNDICE SIEMPRE Y CUANDO SE ENCUENTRE
    DENTRO DEL ARRAY
 */
console.log(letras.indexOf('c'));

// ENCUENTRA PRIMER ELEMENTO DEL ARRAY
console.log(letras.indexOf(1));

// ENCUENTRA ÚLTIMO ELEMENTO DEL ARRAY
console.log(letras.lastIndexOf(1));

console.log(letras.indexOf(1) !== -1);

console.log(letras.includes('d'));