const usuarios = [
    { id: 1, name: 'Chanchito' },
    { id: 2, name: 'Feliz' },
    { id: 3, name: 'Nujao' },
];

// const resultado = usuarios.indexOf({ id: 1, name: 'Chanchito' });

// const resultado = usuarios.find(function(usuario) {}
const resultado = usuarios.find(usuario =>
    // siempre arroja el primer resultado en caso de existir duplicidad
    usuario.id === 1);

console.log(resultado);