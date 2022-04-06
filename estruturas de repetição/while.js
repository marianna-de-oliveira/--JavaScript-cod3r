// é bom para quando vc nao sabe exatamente quantas vezes ele vai ficar repetindo

function geraInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0 //se for -1, ja começa como falso, entao nao entra no bloco de repetição

while (opcao != -1) { //enquanto essa condição for verdadeira, fique rodando esse código direto
    opcao = geraInteiroAleatorio(-1, 10)
    console.log(`Opção aleatória foi: ${opcao}.`)
}

console.log('Até a proxima') //quando a condição for falsa, vem para esse bloco