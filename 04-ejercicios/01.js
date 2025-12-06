function cualEsMayor(a, b) {
    //SOLUCIÓN CON IF ELSE

    // if (a > b){
    //     return a;
    // }
    // else {
    //     return b;
    // }

    // SOLUCIÓN CON TERNARIO
    return (a > b) ? a : b;
}

let mayor = cualEsMayor(10, 5);

console.log(mayor);