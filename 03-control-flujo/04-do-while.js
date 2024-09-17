let i = 2;
while (i < 2) {     //while primero analiza si se cumple la condicion y luego realiza el operativo
    if (i % 2 == 0){
        console.log("numero par", i);
    }
    i++;
}
do {
    if (i % 2 == 0){    //en Do while primero se hace la operacion y luego se ve si cumple la condicion
        console.log("numero par", i);     
    }
    i++;
} while (i < 2)

