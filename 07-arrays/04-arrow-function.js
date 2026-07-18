// function hola() {
//     return 'Hola Mundo';
// }

const hola = () => {
    return 'Hola mundo!';
}

const hola2 = mensaje => {
    return mensaje + " " + "Hola mundo!";
}

const resultado = hola();
const resultado2 = hola2('pepe');
console.log(resultado);
console.log(resultado2);
