const saludo = "Hola Mundo!";

const despedida = new String("Chao Mundo :^)") ;

console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
// Retorna el índice
console.log(saludo.indexOf("N")); //-1 NO ENCONTRADO / Case Sensitive
console.log(saludo.indexOf("n")); // 7

// Retorna si incluye o no el string
console.log(saludo.includes("Mundo"));

// Remplaza string o parte de este en una copia
console.log(saludo.replace("Mundo", "Pepe"));

// Retorna el string en minúsculas 
console.log(saludo.toLowerCase());

// Retorna el string en MAYÚSCULAS
console.log(saludo.toUpperCase());

console.log(saludo.substring(0, 3));

// Trim quita espacios de izquierda y/o derecha. No dentro del String
const espacios = "  h o l a   m u n d o  ";
console.log(espacios.trim());
console.log(espacios.trimEnd());
console.log(espacios.trimStart());