function suma(a, b, c) {
    console.log(arguments);
    return a + b + c ;
}

let resultado = suma(5, 6, 1, 2, 3,);

console.log(resultado);
console.log(typeof suma);