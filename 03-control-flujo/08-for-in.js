let user = {
    id: 1,
    name: 'chanchito feliz',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}


// NO USAR FOR OF PARA VER ELEMENTOS DE UN ARRAY, USAR FOR OF
let animales = ["Chanchito feliz", "Dragon", "Canguro"];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}