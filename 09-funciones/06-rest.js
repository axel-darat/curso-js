// REST DEBE SER EL ÚLTIMO PARÁMETRO
function suma(a, b, ...rest) {
    console.log(rest);
}

// suma(1, 2, 3, 4, 5, 6);

const logMsg = (desc, ...msgs) => {
    for (let msg of msgs) {
        console.log(desc, msg);
    }
}

// logMsg('Servidor:', 'Error 1', 'Petición aceptada', 'socket activo');

let mensajes = ['Error 1', 'Petición aceptada', 'socket activo'];
logMsg('Cliente móvil:', ...mensajes);1