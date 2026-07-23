// function suma (a, b) {
//     return Array.from(arguments)
//         .reduce((acc, el) => acc + el);
// }

// Fat arrow functions no tienen arguments
// No tienen super ni this


const suma = (a, b) => {
    return Array.from(arguments)
        .reduce((acc, el) => acc + el);
}

console.log(suma(1, 2, 3, 4));
