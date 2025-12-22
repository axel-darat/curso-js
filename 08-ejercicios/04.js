const usuarios = [
    { edad: 17, nomnbre: 'Nico', plan: 'premium' },
    { edad: 13, nomnbre: 'Chanchito', plan: 'free' },
    { edad: 32, nomnbre: 'Fernando', plan: 'premium' },
    { edad: 25, nomnbre: 'Felipe', plan: 'gold' },
];

function cuantosPremium(users) {
    return users.reduce((acc, el) =>
        el.plan !== 'free' ? acc + 1 : acc, 0);
}

function cuantosMayores(users) {
    return users.reduce((acc, el) => 
        el.edad > 17 ? acc + 1 : acc, 0);
}

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));