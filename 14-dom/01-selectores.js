// HTMLElement

let htmlElement = document.getElementById('cuerpo');

// HTMLCollection -> se parece a un array pero no lo es
let elementosRed = document.getElementsByClassName('red');

let elementosChanchito = document.getElementsByName("chanchito");

// HTMLCollection
let parrafos = document.getElementById('p');

let el = document.querySelector("#cuerpo");
let els = document.querySelectorAll('p');

console.log(els);

let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');
console.log(plive, pstatic);

let nuevoP = document.createElement('p');
document.body.append(nuevoP);

console.log(plive, pstatic)