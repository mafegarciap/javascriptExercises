var matriculaEstudiante=prompt("Introduzca la matricula de estudiante")
var nota1 = parseFloat(prompt("Introduzca la primera calificación"))
var nota2 = parseFloat(prompt("Introduzca la segunda calificación"))
var nota3 = parseFloat(prompt("Introduzca la tercera calificación"))
var nota4 = parseFloat(prompt("Introduzca la cuarta calificación"))
var nota5 = parseFloat(prompt("Introduzca la quinta calificación"))

var promedioEstudiante= (nota1+nota2+nota3+nota4+nota5)/5


function estaAprobado(promedioEstudiantes) {
    if(promedioEstudiantes>7){
        return "aprobado"
    }else{
        "desaprobado"
    }
}

var aprobado= estaAprobado(promedioEstudiante)



console.log("La matricula del estudiante es: " +matriculaEstudiante + " el promedio es: "+promedioEstudiante +"y está: "+ aprobado )



 