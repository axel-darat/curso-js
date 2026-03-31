let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
};

for (let prop in user) {
    console.log(prop,':',user[prop]);
}

// PARA ACCEDER A ELEMENTOS DE UN ARRAY SE USA FOR OF.
// ESTE FOR IN ES SÓLO ILUSTRATIVO DADO QUE HAY GENTE QUE LO USA
let animales = ['perro', 'iguana', 'lagarto'];

for (let indice in animales) {
    console.log(indice, animales[indice]);
}