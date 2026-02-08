let user = {
    id: 1,
    name: 'Axel',
    age: 26,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ['Conejo', 'Ratón', 'Murciélago'];

for (let indice in animales) { // se recomienda usar for of para revisar índices de los arrays
    console.log(indice, animales[indice]);
}