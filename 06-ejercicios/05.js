let objeto = {
    id: 1,
    name: false,
    login: function () {},
    logout: function () {},
}

let propiedad = 'name';

function tieneProp(obj, propiedad) {
    let props = Object.keys(obj);

    for (let prop in props) {
        
    }
}

console.log(tieneProp(objeto, propiedad));