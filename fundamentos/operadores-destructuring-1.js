// operador de desestruturação, ele tira da estrutura alguma coisa, recurso do ES 2015
// o que são estruturas? objetos, arrays, ou seja, vc pode tirar elementos dessas estruturas
// para usar para array, vc usa []. para usar para objetos, vc usa {}.

const pessoa = {
    nome: 'Marianna',
    idade: 25,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//destructuring ~ tira algum elemento 
const { nome, idade } = pessoa // "tire nome e idade do objeto pessoa"
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // "tire nome e idade do objeto e dê para esses elementos novos nomes (n para nome e i para idade")

// e se tirar um elemento que não existe dentro do objeto?
const { sobrenome, bemHumoraada = true } = pessoa // sobrenome acaba sendo undefined e bemHumorada acaba tendo, como padrão determinado, true
console.log(sobrenome, bemHumoraada)

// desestruturar um objeto dentro de outro objeto
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) // rua abc, 1000, undefined 

// cuidado para não acessar atributos aninhados que não existem, pois dá erro,  o ideal é ter certeza dos atributos para fazer isso

const { conta: { ag, num } } = pessoa
console.log(ag, num) //erro, pois não existe o atributo conta no objeto pessoa, muito menos os atributos ag e num no objeto conta