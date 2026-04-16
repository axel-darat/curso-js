const config = [
    'https://holamundo.io',
    145,
    80,
]


function webserver([url, ...rest]) {
    console.log(rest);
    return url;
}

console.log(webserver(config));
