const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 37, nombre: 'Nico', plan: 'premium' },
    { edad: 17, nombre: 'Nico', plan: 'free' },
    { edad: 25, nombre: 'Nico', plan: 'gold' },
];

function   cuantosPremium(usrs) {
    // return usrs.reduce((acc, el) => {
    //     if (el.plan !== 'free') {
    //         return acc + 1;
    //     }
    //     return acc;
    // }, 0);
    return usrs.reduce((acc, el) =>
        el.plan !== 'free' ? acc + 1 : acc, 0);
}

function cuantosMayores(usrs) {
    return usrs.reduce((acc, el) =>
        el.edad > 17 ? acc + 1 : acc, 0);
}

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));