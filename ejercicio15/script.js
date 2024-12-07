var categoriaTrabajador=prompt("Introduce la categoria del trabajador")
var sueldoTrabajador=parseFloat(prompt("Introduce el sueldo del trabajador"))

var porcentajeAumento=0.15
var sueldoConAumento

function aumentoSueldo(sueldo) {
    sueldoConAumento= (sueldo*porcentajeAumento) + sueldo
    return sueldoConAumento
}

sueldoConAumento=aumentoSueldo(sueldoTrabajador)

alert("La categoria del trabajador es: " + categoriaTrabajador +" y su sueldo es: "+sueldoConAumento )



 