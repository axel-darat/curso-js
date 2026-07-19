const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premiun' },
    { edad: 13, nombre: 'Piggy', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
    { edad: 32, nombre: 'Fernando', plan: 'free' },
];

function groupBy(arr, prop) {
    return arr.reduce((acc, el) => {
        let valor = el[prop];

        acc[valor] = acc[valor] ? acc[valor] : [];
        acc[valor].push(el);
        return acc;
    }, {});
}

const grouped = groupBy(usuarios, 'plan');
console.log({ grouped });
