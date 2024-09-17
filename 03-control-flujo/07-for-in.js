//Nos sirve para iterar las propiedades de un objeto
let user = {
    id: 1,
    name:"Soft",
    age: 25,
};

for (let propiedad in user) {
   console.log(propiedad, user[propiedad]);
}

let animales = ["Dragon", "Salmon", "Gato"];
    for (let indice in animales) {
        console.log(indice, animales[indice]);

}