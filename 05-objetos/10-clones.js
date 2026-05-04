let punto = {
    x: 10,
    y: 15,
};

let referencia = Object.assign(punto, {z: 20});
let clonePunto = Object.assign({}, punto, {z: 20});
// console.log(punto, clonePunto);
// console.log(referencia);

let copiaPunto = Object.assign({}, punto);
console.log(copiaPunto, punto);

let copia3 = { ...punto };

let copia4 = {};
for (let llave in punto) {
   copia4[llave] = punto[llave];
}

console.log(copia4);