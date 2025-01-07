function sumar(){
    const personas = [ {nombre:"soflan", edad: 19}, {nombre: "yeison",edad: 19}, {nombre:"chilemorron",edad: 20} ]
        let result = 0 ;
            for (const persona of personas ) {
             result+= persona.edad
            }
            console.log(result)
}

sumar();