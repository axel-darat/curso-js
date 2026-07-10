// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

// Personaje en objeto
let personaje = {
    nombre: 'Tanjiro',
    anime: 'Demon Slayer',
    edad: 16,
};

console.log(personaje);
console.log(personaje['nombre']);

personaje.edad = 32;
console.log(personaje.edad);

delete personaje.anime;

console.log(personaje);