// Dentro de un obj: this hace referencia al obj
//  En una función this hace referencia al obj Window, global
// Si se usa new hace referencia al objeto que será creado

const user = {
    name: "Nicolás",
    login() {
        console.log(this);
    }
};

user.logout = function () {
    console.log(this);
}

user.login();