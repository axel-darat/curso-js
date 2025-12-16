const letras = ['a', 'b'];

// Agregar al final del array
letras.push('c');

// Agregar al comienzo
letras.unshift('y', 'z');

letras.splice(4, 0, 1, 2);

console.log(letras);