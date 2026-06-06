(function saludar(...rest) {
    console.log(this, rest);
}).bind({propiedad: 'hola mundo'})();