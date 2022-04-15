// formas diferentes de se executar uma função em js
function getPreco(imposto = 0, moeda = 'R$:') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco())
// se colocar direto console.log(getPreco()) o resultado vai ser um NaN, pois o preco e o desconto no contexto da function não estão definidos.

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco()) //chamando a função atraves de um objeto

// com call e apply
const carro = {
    preco: 49990,
    desc: 0.2
}

// a diferença entre usar call e apply é a forma que são dados os parametros
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) //primeiro  o objeto q vai ser usado como contexto da função e depois os parametros da função
console.log(getPreco.apply(carro, [0.17, '$'])) // primeiro vc chama o objeto, igual o call, mas na hora dos parametros, são colocados como um array 