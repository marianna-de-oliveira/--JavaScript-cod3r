const cumprimentar = function (nome) {
    console.log(`Olá ${nome}!`)
}
cumprimentar("Maria")
cumprimentar("Leo")

//Resolução 2

function cumprimentar2(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
}
console.log(cumprimentar2('Marianna'))

// Resolução 3
// function cumprimentar(nome) {
// return "Olá, " + nome + "!"