// devuelve string
const saludo = "Hola Mundo!";
// índice parte con base a 0 -> 0 1 2 3 4 5 6 7 8 9 10 11
// devuelva object
const despedida = new String("Chao mundo! :(");

console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
// INDEXOF returns INDEX (0 1 2 3 4 "5 Mu is in 5")
console.log(saludo.indexOf("Mu"));
console.log(saludo.indexOf("aoeu"));

// INCLUDES returns TRUE OF FALSE
console.log(saludo.includes("Mu"));
// CASE SENSITIVE
console.log(saludo.includes("mu"));
console.log(saludo.includes("aoeu"));

// Remplaza texto seleccionado
console.log(saludo.replace("Mundo", "Pepe"));
// Also case sensitive
console.log(saludo.replace("mundo", "Pepe"));

// GENERA COPIA NO MODIFICA REFERENCIA
let saludoModificado = saludo.replace("Mundo", "Pepe");
// Para guardar se debe crear variable que guarde modificación
console.log(saludo);
console.log(saludoModificado);

console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());

console.log(saludo.substring(0, 4));
console.log(saludo.substr(2, 5)); // Deprecado

const espacios = "    Hola   Mundo!   ";
console.log(espacios.trim()); // elimina espacio de inicio y fin de string
console.log(espacios.trimStart()); // elimina sólo espacios de inicio
console.log(espacios.trimEnd()); // elimina sólo espacio de fin

