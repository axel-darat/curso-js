// let numeros = [15, 10, -3];

// numeros.sort();
// numeros.reverse();

// console.log(numeros);

// let letras = ['z', 'a', 'd'];

// letras.sort();

// console.log(letras);


// let conMayusculas = ['z', 'A', 'd'];

// conMayusculas.sort((a, b) => {
//     /**
//      * a antes de b => -1
//      * b antes de a => 1
//      * si son iguales => 0
//      */

//     let alower = a.toLowerCase();
//     let blower = b.toLowerCase();

//     if (alower < blower) {
//         return -1;
//     }
//     if (blower < alower) {
//         return 1;
//     }
//     return 0;
// });
// console.log(conMayusculas);


let usuarios = [
    { edad: 15, nombre: 'Felipe' },
    { edad: 30, nombre: 'Gonzalo' },
    { edad: 27, nombre: 'Manuel' },

];

usuarios.sort((a, b) => {
    /**
    //      * a antes de b => -1
    //      * b antes de a => 1
    //      * si son iguales => 0
    //      */
    if (a.edad < b.edad) {
        return -1;
    }
    if (b.edad < a.edad) {
        return 1;
    }
    return 0;
})

console.log(usuarios);