function similares(obj1, obj2) {
    let distintos = false;
    for (let llave in obj1) {
        if (obj1[llave] !== obj2[llave]) {
            distintos = true;
        }
    }
    return !distintos;
}

let resultado = similares(
    { id: 1, name: 'Nico' },
    { id: 1, name: 'Nico' },
);

console.log(resultado);


// FORMA MENOS ENREDADA
// function sonSimilares(objeto1, objeto2) {
//     // Recorremos cada propiedad del primer objeto
//     for (let propiedad in objeto1) {
//         // Si encontramos una sola diferencia, ya no son similares
//         if (objeto1[propiedad] !== objeto2[propiedad]) {
//             return false; 
//         }
//     }
    
//     // Si el bucle termina sin encontrar fallas, son similares
//     return true;
// }

// let resultado = sonSimilares(
//     { id: 1, name: 'Nico' },
//     { id: 1, name: 'Nico' }
// );

// console.log(resultado); // true