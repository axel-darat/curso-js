let el = document.createElement('p');

el.innerText = "Elemento creado";

document.body.append(el);

// el.innerText = "<ul><li>Hola Mundo</li></ul>";
// el.innerHTML = "<ul><li>Hola Mundo</li></ul>";

el.style = 'background-color: red; font-weight: bold;';
el.className = 'parrafo';
el.id = 'mi-parrafo';
// lo siguiente no sirve
// el.miPropiedad = 'mi propiedad';

el.setAttribute('miPropiedad', 'mi propiedad');
el.getAttribute('miPropiedad');
el.hasAttribute('miPropiedad');