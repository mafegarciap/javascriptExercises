var anioNacimiento= parseInt(prompt("Ingresa tu año de nacimiento"))
//console.log(anioNacimiento);

var anioactual= new Date().getFullYear();
//console.log(ANIOACTUAL); 

var edad

function calcularEdad(anioNacimiento) {
    edad= anioactual-anioNacimiento
    return edad
}

calcularEdad(anioNacimiento)

console.log("Tienes "+ edad+" años.")
 