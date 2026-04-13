// Declaración de funciones: Function Declaration

// Función nombrada -> Named Function
function suma() {
    console.log('sumando...');
}

// Función anónima -> Anonymous Function
// function () {
//     console.log('función anónima');
// }

// Expresión de funciones -> function expression

const resta = function () { // Anonymous function expression
    console.log('restando');
}

const multiplica = function multi () { // named fuction expression
    console.log('multiplicando');
}

const divide = () => { // anónima
    console.log('dividiendo');
}

console.log(resta);