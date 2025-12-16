// function hola() {
//     return 'Hola mundo';
// }

// const resultado = hola();

// las fat arrow functions son anónimas
const hola = () => {
    return 'Hola Mundo';
}

const holaReturnImplicito = () => 'Hola Mundo desde return implícito';

const resultado = hola();
const resultado2 = holaReturnImplicito();

console.log(resultado);
console.log(resultado2);