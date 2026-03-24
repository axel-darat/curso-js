const nombre = "Axel";
const plantilla = `
Hola! ${nombre}
 Jeje!! "comillas dobles"
 comillas 'simples'
\\
`

console.log(plantilla);

function FnPlantilla(nombre) {
    return `
Hola! ${nombre}
 Jeje!! "comillas dobles"
 comillas 'simples'
`
}

console.log(FnPlantilla('El pepe'));