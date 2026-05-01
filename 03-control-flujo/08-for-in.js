let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
};

for (let prop in user) {
    console.log(prop, ':', user[prop]);
}

// NO USAR (pero existe)
let animales = ['Chanchito feliz', 'Dragón', 'Canguro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}