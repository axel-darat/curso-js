let obj = {};
let obj2 = new Object();

/**
 * new Array(); []
 * new String();
 * new Number();
 * new Boolean();
 */

function Usuario() {
    this.name = "Axel";
}

let user = new Usuario();
console.log(user.constructor);
console.log(user);

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(eval(s1), eval(s2));