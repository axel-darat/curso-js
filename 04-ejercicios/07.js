/**
 * Crear algoritmo que devuelva
 * el precio del producto
 * más impuesto
 */

// FUNCIÓN

// function precioCompleto(precio, impuesto) {
//     return precio + precio * impuesto;
// }

// FAT ARROW FUNCTION

const precioCompleto = (precio, impuesto) => precio + precio * impuesto;

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);