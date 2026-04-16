// this hace referencia a un objeto
// en una func hace referencia a objeto window, global
// en new hace referencia a un objeto que será creado

const user = {
    name: 'Nicolas',
    login() {
        console.log(this);
    }
};

user.logout = function () {
    console.log(this);
}

// user.login();
user.logout();