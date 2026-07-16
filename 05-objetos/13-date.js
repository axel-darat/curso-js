const ahora = new Date();
// console.log(ahora);
const fecha = new Date('December  11  1986  14:15 GMT-0300');
// console.log(fecha);
// Mes Día Año

const fecha2 = new Date(1986, 11, 25, 14, 15);
const fecha3 = new Date(1986, 11, 25, 14+15, 15);
// console.log(fecha2);
// console.log(fecha3);
// Año Mes Día Hora Minuto


console.log('DateString: ', fecha3.toDateString());
// Se recomienda ISO STRING para mandar fechas a servidores
console.log('ToISOString: ', fecha3.toISOString());
console.log('ToISOString: ', fecha3.toISOString());
console.log('ToTimeString: ', fecha3.toTimeString());

fecha3.setFullYear(1973);
console.log(fecha3);