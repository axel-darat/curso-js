let el = document.createElement('p');

el.innerText = "Elemento creado";

document.body.append(el);

// el.innerText = "<ul><li>Hola mundo!</li></ul>";

el.style = "background-color: red; font-weight: bold;";
el.className = 'parrafo';
el.id = 'mi-parrafo';

// lo siguiente no sirve
// el.mipropiedad = 'mi propiedad';

// console.log(el);

el.setAttribute('mipropiedad', 'mi propiedad');
el.getAttribute('mipropiedad');
el.hasAttribute('mipropiedad');

