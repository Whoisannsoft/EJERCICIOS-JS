// while
// do while    ----> nos permite calcular  como vamos a realizar una iteracion 
//for 

let animales = ["pez","perro","dragon"];

for (let animal of animales) {
    console.log(animal);
}

let i = 0;
while ( i < animales.length) {
    console.log(animales[i]);
    i++;
}