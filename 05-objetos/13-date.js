const ahora = new Date();

// console.log(ahora);
const fecha = new Date('December 11 1986 14:15 GMT-0300');
console.log(fecha);

const fecha2 = new Date(1986, 11, 25, 14, 15);
console.log(fecha2);

const fecha3 = new Date(1986, 11, 25, 14+15, 15);
console.log(fecha3);

console.log('datestring', fecha3.toDateString());
console.log('ISOString', fecha3.toISOString());
// USAR ISO STRING PARA MANDAR AL BACKEND(sv)
console.log('TimeString', fecha3.toTimeString());

fecha3.setFullYear(1994);
console.log(fecha3);