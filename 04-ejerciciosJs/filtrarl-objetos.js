const productos_de_comida = [ {nombre: "Panela", precio: 50}, {nombre: "Agua", precio: 60}, {nombre: "Arroz", precio: 70}, {nombre: "dulces", precio: 40}   ];
const productos_de_limpieza = [ {nombre: "soflan", precio: 70}, {nombre: "Jabon", precio: 90}, {nombre: "limpido", precio: 30}, {nombre: "esponja", precio: 40}   ];
function filtro( array ) {
    const result = [];
       for (const producto of array) {
        if (producto.precio > 50) {
            result.push (producto)
        }
       }
       console.log(result)
       return result
     }
     filtro (productos_de_comida) 
     filtro (productos_de_limpieza) 