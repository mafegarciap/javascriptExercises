var peso= prompt("Ingresa tu peso")
var altura= prompt("Ingresa tu altura")

var bmi

function calcularBmi(peso, altura) {
    bmi= peso / (altura^2)
    return bmi
}

calcularBmi(peso, altura)

console.log("Tu BMI es "+ bmi)
 