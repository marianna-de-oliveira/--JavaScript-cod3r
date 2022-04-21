// filtra um array pra ter um "subarray" dependendo de uma determinada condição
const produtos = [
    { nome: "Borracha", preco: 600.45, fragil: true },
    { nome: "Caderno", preco: 1300.90, fragil: true },
    { nome: "Kit de lapis", preco: 410.22, fragil: true },
    { nome: "Caneta", preco: 70.50, fragil: false }
]

console.log(produtos.filter(function (p) {
    return p.preco > 40
}))

// return true ~ todos os elementos passam
// return false ~ nenhum elemento passa
// colocando x condição ~ apenas os itens que obedecerem aquela condição q serão exibidos

// dois jeitos de fazer a mesma coisa 
console.log(produtos.filter(function (p) {
    return p.preco > 500 && p.fragil
}))

// criar duas funções e usar o metodo filter para filtrar os acima de 500 reais && fragil = true
const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))