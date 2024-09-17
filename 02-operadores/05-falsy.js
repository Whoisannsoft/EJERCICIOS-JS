//short -circuit


//falso
//false
//0
//""                                 --->FALSY
//null
//undefined
//NaN                            

let nombre = "chanchito";
let username = nombre || "anonimo";

console.log(username);

function fn1(){
    console.log("soy funcion1");
    return false;
}
function fn2(){
    console.log("soy funcion2");
    return true;
}

let x = fn1() && fn2();