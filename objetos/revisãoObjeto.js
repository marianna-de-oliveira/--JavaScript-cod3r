// coleção dinamica de pares chave/valor
const produto = new Object
//criação de pares
produto.nome = "cadeira"
produto['marca do produto'] = 'genérica'
produto.preco = 220

console.log(produto)
// exclusão de par
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            logradouro: "rua ABC",
            numero: 123
        }
    },
    condutores: [{ //array de objetos
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 41
    }],
    calcularValorSeguro: function () {
        // ...
    }
}

// acessando atributos com notação ponto
carro.proprietario.endereco.numero = 1000
// pode fazer pela notação colchetes tambem
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

//deleta tudo o que está abaixo
delete carro.condutores
delete carro.calcularValorSeguro
console.log(carro)

console.log(carro.condutores) // dá undefined, não gera erro
console.log(carro.condutores.length) // isso gera erro, pq se condutores não está definido, o tamanho não existe