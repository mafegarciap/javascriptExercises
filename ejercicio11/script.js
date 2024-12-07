var base=parseFloat(prompt("Introduce el valor de la base del triangulo"))
var altura=parseFloat(prompt("Introduce el valor de la altura del triangulo"))

var superficie
var perimetro

function superficieTriangulo(base,altura) {
    superficie=(base * altura) / 2
    return superficie
}

/*var hipotenusa
function calculoHipotenusa(base, altura) {
    hipotenusa=Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2))
    return hipotenusa
}
hipotenusa=calculoHipotenusa(base,altura)*/

function perimetroTriangulo(base, altura, hipotenusa) {
    var hipotenusa=Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2))
    perimetro= hipotenusa+base+altura
    return perimetro
}



superficie= superficieTriangulo(base, altura)

perimetro= perimetroTriangulo(base, altura)

console.log("superficie: "+ superficie);
console.log("perimetro: "+ perimetro);



 