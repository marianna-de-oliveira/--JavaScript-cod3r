// dessa forma é possivel criar n produtos com n preços e ainda usar o desconto caso seja necessário 
// pode ter uma factory que retorna um conjunto de funções que vc pode abordar num objeto
function novoProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(novoProduto('carro', 10000))
console.log(novoProduto('casa', 30000))