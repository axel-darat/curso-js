const saludo = "Hola mundo!";

const despedida = new String("Chao mundo!");

console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
console.log(saludo.indexOf("Mu"));
console.log(saludo.indexOf("mu"));
console.log(saludo.includes("mundo"));
console.log(saludo.includes("Mundo"));

// genera un nuevo string
console.log(saludo.replace("mundo", "xd"), saludo);

console.log(saludo.substring(0, 3));
console.log(saludo.substr(0, 4)); // en desuso