const punto = {
    x: 10,
    y: 15,
    dibujar: function() {
        console.log('dibujando');
    }
};

delete punto.dibujar;
if ('dibujar' in punto) {
    punto.dibujar();
} else {
    console.log('No se encuentra propiedad "dibujar"');
}

console.log(Object.keys(punto));