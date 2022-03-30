// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.

function trueOrFalse(valor) {
    if (valor % 3 === 0) {
        return true
    } else {
        return false
    }
}

console.log(trueOrFalse(3))
console.log(trueOrFalse(2))
console.log(trueOrFalse(150))