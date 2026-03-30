// Personaje de TV

let nombre = "Walter White";
let serie = "Breaking Bad";
let edad = 52;

let personaje = {
    nombre: "Walter White",
    serie: "Breaking Bad",
    //key: value,
    //propiedad
    edad: 52,
}; //objeto literal

console.log(personaje);
console.log(personaje.edad);
console.log(personaje['edad']);

personaje.edad = 13;
personaje['edad'] = 16;

console.log(personaje.edad);