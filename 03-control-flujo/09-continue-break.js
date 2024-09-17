//break nos permite salirnos del loop
//continue nos permite saltarnos una iteracion
//Se pueden usar con cualquiero loops que se han visto

let i = 0;
while (i < 6) {
    i++;
    if (i === 2) {
        continue;
    }
    if (i === 4){
        break;
    }
    console.log(i);
}