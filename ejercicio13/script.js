var sueldo=parseFloat(prompt("Introduce tu sueldo"))
var porcentajeAumento=0.15
var sueldoConAumento

function aumentoSueldo(sueldo) {
    sueldoConAumento= (sueldo*porcentajeAumento) + sueldo
    return sueldoConAumento
}

sueldoConAumento=aumentoSueldo(sueldo)

console.log(sueldoConAumento);

 