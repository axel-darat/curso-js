// Devuelve html element
let htmlElement = document.getElementById('cuerpo');

// Parece un array pero no lo es
let elementosRed = document.getElementsByClassName('red');

// Devuelve una node lists
let elementosChanchito = document.getElementsByName("chanchito");

// Devuelve html collection
let parrafos = document.getElementsByTagName('p');

// HTML Element <- sólo un elemento
let el = document.querySelector('#cuerpo');
// devuelve todos los elementos a través de una node list
let els = document.querySelectorAll('p');

let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');
console.log(plive, pstatic);

let nuevoP = document.createElement('p');
document.body.append(nuevoP);

console.log(plive, pstatic);