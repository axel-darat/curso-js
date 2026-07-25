function sumaTodo(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('El parámetro no es un array');
    }
    return arr.reduce((acc, el) => {
        if (typeof el !== 'number' || Number.isNaN(el)) {
            throw new Error(`Elemento "${el}" no es número`);
        }
        return acc + el;
    })
}
try {
    console.log(sumaTodo([1, 2, 3, 3]));
} catch (e) {
    console.log(e.message);
}

console.log('después del try catch');
