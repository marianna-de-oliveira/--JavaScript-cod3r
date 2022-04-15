// usando notação literal (que é diferente de JSON)
const obj1 = {}
console.log(obj1)

// operador new Object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funcoes construtoras "autoral"
function Produto(nome, preco, desc) {
    this.nome = nome // com this vira algo publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}



const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
// se eu quiser alterar o NOME do produto, eu posso, pois graças ao .this o atributo está visivel FORA do escopo de bloco da função, porem se eu quiser alterar preco ou desc não será possivel, pois só estão disponiveis dentro da função
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// funcao factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() { //calcular o salario baseado nas faltas
            return (salarioBase / 30) /*descobrindo o valor do dia*/ * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)