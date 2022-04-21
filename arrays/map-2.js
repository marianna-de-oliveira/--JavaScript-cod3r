const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// retornar um array apenas com os preços
// 1- transformar o json em objeto
const paraObjeto = json => JSON.parse(json)
// 2- do objeto, pegar apenas o preço
const apenasPreco = produto => produto.preco

// retornar um array apenas com os preços
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
