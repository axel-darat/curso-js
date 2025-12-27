// DECLARACION DE FUNCIONES: function declaration

// Función nombrada -> Named function
function suma() {
    console.log('sumando...');
}

suma();

// Función anónima -> Anonymous function
const anonFunc = function() {
    console.log('función anónima');
}

anonFunc();


// Expresión de funciones -> function expression

// Anonymous function expression
let resta = function () { 
    console.log('restando');
}

resta();

// Named function expression
const multiplica = function multi () {
    console.log('multiplicando');
}

multiplica();

// Fat arrow function (siempre es anónima)
const divide = () => {
    console.log('dividiendo');
}

divide();