// Fat arrow functions
// No tiene Arguments
// No tienen super y this
const suma = (a, b) => {
    return Array.from(arguments).reduce((acc, el) => acc + el);
    // return a + b;
    // console.log(arguments);
    // let total = 0;
    // for (let valor of arguments) {
    //     total += valor;
    // }
    // return total;
}

console.log(suma(1, 2, 3, 4, 5));