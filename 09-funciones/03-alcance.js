let afuera = 'estoy afuera';
function alcance() {
    console.log(afuera);
    afuera = 'estoy dentro';
    function saludo() {}    
    var vieja = 'ya no usar';
    let variable = 'Hola mundo';
    const constante = 'Hola mundo!';
}   

console.log(saludo);
console.log(vieja);
console.log(variable);
console.log(constante);
        
alcance();  

console.log(afuera);
alcance();

console.log(afuera);