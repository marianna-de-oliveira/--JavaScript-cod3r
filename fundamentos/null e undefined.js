// atribuição por referencia, que aponta para o espaço da memória, e atribuição por valor 

let valor //declarada, porém não inicializada
console.log(valor) //undefined

valor = null //não possui valor e nem endereço de memória
console.log(valor) 
// console.log(valor.toString()) ~ gera erro, pois não é possivel transformar em string algo vazio 

/* quando sua intenção é zerar uma variavel de valor de referencia, o ideal é definir null */

const produto = {}
console.log(produto.preco) //undefined, pois não foi definido nenhum valor para essa chave
console.log(produto)

produto.preco = 3.60
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)