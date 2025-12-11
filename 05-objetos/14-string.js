const saludo = "Hola Mundo!";

const despedida = new String('Chao! :3');
console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
console.log(saludo.indexOf('Mu'));
console.log(saludo.indexOf('aoeu'));
console.log(saludo.includes(' Mundo'));
let nuevoSaludo = console.log(saludo.replace('Mundo', 'Axel'), saludo);
console.log(nuevoSaludo, saludo);
console.log(saludo.toLocaleLowerCase());
console.log(saludo.toLocaleUpperCase());

console.log(saludo.substring(0, 4));
console.log(saludo.substr(2, 4));

const espacios = "   Hola Mundo   !   "
console.log(espacios.trim(espacios.trim()));
console.log(espacios.trimStart());
console.log(espacios.trimEnd());