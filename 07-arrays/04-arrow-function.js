// function hola() {
//     return 'Hola Mundo!';
// }

// fat arrow function con return implícito
const hola = () => 'Hola Mundo!'; 

const resultado = hola();

console.log(resultado);

// Fat Arrow Function con Return explícito
const hola2 = () => {
    return 'Hola Mundo!';
}

const resultado2 = hola2();

console.log(resultado2);


const hola3 = mensaje => mensaje + 'Hola Mundo';

const hola4 = mensaje => {
    return mensaje + 'Hola Mundo';
} 
