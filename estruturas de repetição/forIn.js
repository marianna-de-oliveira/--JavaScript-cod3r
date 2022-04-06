// percorre os atributos de uma determinada estrutura, como um objeto e um array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7] // for in ele vai gerar o index de cada elemento

for (let i in notas) {
    console.log(i, notas[i]) // nesse caso está exibindo o indice E o valor da nota, pois foi solicitado
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

// o ideal é que, dentro do for, vc deixe setado o index/contador com let, pois, se vc for procurar i no código ele pode ser achado 
console.log(atributo) // gera um erro sem o let, pois essa variavel não existe fora do bloco