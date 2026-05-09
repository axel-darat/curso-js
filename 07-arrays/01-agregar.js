const letras = ['a', 'b'];

// Agregar al final del array
letras.push('c', 'd');

// Agregar al comienzo del array
letras.unshift('y', 'z');

// Agregar entre
// Primer parámetro señala posición (3)
// Segundo parámetro indica si se va a borrar algo
letras.splice(3, 0, 1, 2);

console.log(letras);