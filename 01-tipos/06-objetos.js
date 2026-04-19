// OBJETO LITERAL
let personaje = {
    nombre: "Tanjiro",
    anime: 'Demon Slayer',
    edad: 16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 13;
console.log(personaje.edad);
personaje["edad"] = 16;
console.log(personaje["edad"]);