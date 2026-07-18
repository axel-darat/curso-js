const usuarios = [
    { id: 1, name: 'Chanchito' },
    { id: 1, name: 'Felipe' },
    { id: 2, name: 'Feliz' },
];

// const resultado = usuarios.indexOf({ id: 1, name: 'Chanchito' });

// predicate = función que devuelve true o false
const resultado = usuarios.find(function (usuario) {
    return usuario.id === 1; // busca el primero
});
console.log(resultado);