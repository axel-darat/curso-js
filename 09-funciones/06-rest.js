const suma = (a, b, ...rest) => {
    console.log(rest);
}


// function suma(a, b, ...rest) {
//     console.log(rest);
// }

suma(1, 2, 3, 4, 5, 6);

const logMsg = (desc, ...msgs) => {
    for (let msg of msgs) {
        console.log(desc, msg);
    }
}

// logMsg('Servidor', 'Error 1', 'Petición aceptada', 'Socket activo');

let mensajes =['Servidor', 'Error 1', 'Petición aceptada', 'Socket activo'];
logMsg('Cliente móvil:', ...mensajes);