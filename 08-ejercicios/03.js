const usuarios = [
    { edad: 17, nomnbre: 'Nico', plan: 'premium' },
    { edad: 13, nomnbre: 'Chanchito', plan: 'free' },
    { edad: 32, nomnbre: 'Fernando', plan: 'free' },
    { edad: 25, nomnbre: 'Felipe', plan: 'gold' },
];

function getPaidUsers(users) {
    return users.filter( user => user.plan !== 'free');
}

console.log(getPaidUsers(usuarios));