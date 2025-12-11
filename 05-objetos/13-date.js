const ahora = new Date();
console.log(ahora);
const fecha = new Date('December 12 1986 14:15 GMT-0300');
console.log(fecha);


const fecha2 = new Date(1321, 11, 2, 14, 15);
const fecha3 = new Date(1321, 11, 2, 14+15, 15);
console.log(fecha3);

console.log('datestring:', fecha3.toDateString());
console.log('ISOstring:', fecha3.toISOString());
console.log('timestring:', fecha3.toTimeString());

// fecha3.setFullYear(1978);

console.log(fecha3.setFullYear(1978))