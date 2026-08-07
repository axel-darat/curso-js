let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');

// console.log(collection, list);

// let item1 = collection.namedItem('chanchito');
// let item2 = collection.item(3);
// let item3 = collection[3];

// collection.forEach(x => console.log(x));

// iterar elementos

// for (let el of collection){
//     console.log(el);
// }

// muestra obj
// Array.from(collection).forEach(x => console.log(x));

// muestra elemento
// [...collection].forEach(x => console.log(x));

// let item = list.item(3);
// let item2 = list[3];

// console.log(item, item2);

list.forEach(x => console.log(x));

// entries, keys y values

let entries = list.entries();
let keys = list.keys();
let values = list.values();

[...list].forEach(el => console.log(el));