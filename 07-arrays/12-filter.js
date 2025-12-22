const usuarios = [
    { edad: 26, nombre: 'Axel' },
    { edad: 18, nombre: 'Pedro' },
    { edad: 49, nombre: 'Ricardo' },
    { edad: 58, nombre: 'Matias' },
    { edad: 17, nombre: 'Nicolas' },
];
// MUESTRA SÓLO USUARIOS MAYORES
const mayores = usuarios.filter(usuarios => usuarios.edad > 17);
// MUESTRA SÓLO USUARIOS MAYORES
const menores = usuarios.filter(usuarios => usuarios.edad < 18);
console.log('mayores: ', mayores);
console.log('menores: ', menores);