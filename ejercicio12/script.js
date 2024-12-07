var pesoLb=parseFloat(prompt("Introduce tu peso en libras"))
var pesoKg

function conversorKgAlb(peso) {
    pesoKg= peso*0.453592
    return pesoKg
}

pesoKg=conversorKgAlb(pesoLb)

console.log(pesoKg);

 