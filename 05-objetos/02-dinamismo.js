const user = { 
    id: 1,
};

user.name = 'axel';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();
console.log(user);


delete user.name;
delete user.guardar;

console.log(user);

// CONGELA Y NO PERMITE AÑADIR MÁS PROPIEDADES
const user1 = Object.freeze({ id: 1 });
// NO SE AÑADEN
user1.name = 'axel';
user1.id = 2;

console.log(user1);


// NO PERMITE AÑADIR MÁS PROPIEDADES PERO PERMITE MODIFICAR
// PROPIEDADES EXISTENTES
const user2 = Object.seal({ id: 1 });
user2.name = 'axel';
user2.id = 2;

console.log(user2);