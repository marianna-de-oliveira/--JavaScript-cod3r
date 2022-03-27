// array
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) //roda um valor entre 50 e 40, de acordo com a condição dada na função
console.log(rand([992])) // roda a partir de 992 até 1000
console.log(rand([, 10])) // fica rodando entre 0 e 10
console.log(rand([])) // roda todos os elementos
console.log(rand()) //erro