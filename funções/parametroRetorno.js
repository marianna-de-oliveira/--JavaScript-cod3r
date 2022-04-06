// parametros e retornos são opcionais
// voce pode ter 3 parametros e passar só um, ou passar 5...

function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 4))
console.log(area(5, 5))