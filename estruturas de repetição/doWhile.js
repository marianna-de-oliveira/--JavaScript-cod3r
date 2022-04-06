//garante que pelo menos uma vez vai ser usado (mas quase nao é usado)

function geraInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 // nesse caso, pode colocar o opcao valendo -1, pois a verificação está abaixo do bloco, logo ela vai ser reproduzida pelo menos uma vez

//Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao, ou seja, fazendo assim: let opcao

do {
    opcao = geraInteiroAleatorio(-1, 10)
    console.log(`Opção aleatória foi: ${opcao}.`)
} while (opcao != -1)

console.log('Até a proxima')