var num1=parseInt(prompt("Introduca un numero"))
var num2=parseInt(prompt("Introduca un segundo numero"))
var num3=parseInt(prompt("Introduca un tercer numero"))

var numMayor

function calcularMayor(num1,num2,num3) {
    if (num1 >= num2 && num1 >= num3) {
        numMayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        numMayor = num2;
    } else {
        numMayor = num3;
    }
    return numMayor
}

numMayor=calcularMayor(num1,num2,num3)



console.log("El numero mayor es: " +numMayor)



 