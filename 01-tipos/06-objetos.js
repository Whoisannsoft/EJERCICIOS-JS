// Personaje de serie

let nombre = "Asuna";
let anime = "Sword Art online";
let edad = 16;

let personaje = {
    nombre: "Asuna",
    anime: "Sword Art online",
    edad: 16,
};

console.log (personaje);
console.log (personaje.nombre);
console.log (personaje["anime"]);

//cambiarle la propiedad

personaje.edad = 21;

//que pasa si quiero eliminar propiedades

delete personaje.anime;

console.log (personaje);