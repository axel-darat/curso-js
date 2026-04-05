const saludo = "Hola Mundo!";

const despedida = new String("Chao Mundo! :(");
console.log(typeof saludo, typeof despedida);

console.log(saludo.length);
console.log(saludo.indexOf('Mu'));
console.log(saludo.indexOf('fds'));
console.log(saludo.includes("Hola"));
console.log(saludo.replace("Mundo", "El Pepe"));
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());

console.log(saludo.substring(0, 4));
console.log(saludo.substr(2, 4));

const espacios = "   Hola    Mundo!   ";
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());