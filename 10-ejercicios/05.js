function ordenar(texto, fn) {
    let resultado = texto.toLowerCase()
        .split('')
        .filter(x => x !== ' ')
        .sort()
        .join('');

    fn(resultado);
}

ordenar('Hola Mundo', console.log);