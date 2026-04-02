/**
 * Crear algoritmo que devuelva
 * el precio del producto
 * más impuesto
 */

function precioCompleto(precio, impuesto) {
    return precio + precio * impuesto;
}

let resultado = precioCompleto(1000, 0.19);
console.log(resultado);