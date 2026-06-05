const config = {
    url: 'https://holamundo.io',
    direccion: {
        calle: 'hola mundo',
        numero: 80,
    }
}

function webserver(config) {
    const { url, ...rest } = config;
    return url;
}

console.log(webserver(config));