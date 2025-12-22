// const numeros = [1, 2, 3, 4];
// const suma = numeros.reduce((acc, el) => {
//     return acc + el;
// }, 0);
// console.log(suma);

// const anidado = [[1, 2], 3, [4, 5]];
// const plano = anidado.reduce((acc, el) => acc.concat(el), []);
// console.log(plano);

const usuarios = [
    { edad: 26, nombre: 'Axel' },
    { edad: 16, nombre: 'Pedro' },
    { edad: 49, nombre: 'Ricardo' },
    { edad: 58, nombre: 'Matias' },
    { edad: 17, nombre: 'Nicolas' },
];

const indexado = usuarios.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {});

console.log(indexado);