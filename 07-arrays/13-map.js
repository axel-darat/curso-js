const usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernando' },
];

const lista = usuarios
    .filter(usuarios => usuarios.edad > 17)
    .map(usuarios => `<li>${usuarios.nombre}</li>`);

const html = `<ol>${lista.join('')}</ol>`

console.log(html);

// const mapped = usuarios.map(usuarios => {
//     return {
//         ...usuarios,
//         mayor: usuarios.edad > 17,
//     }
// });

// console.log(mapped);