const usuarios = [
    { id: 1, name: 'Chanchito' },
    { id: 2, name: 'Chanchito' },
    { id: 2, name: 'Feliz' },
];

// const resultado = usuarios.indexOf({ id: 1, name: 'Chanchito' });

const resultado = usuarios.find(function (usuario) {
    return usuario.name === 'Chanchito';
});
console.log(resultado);