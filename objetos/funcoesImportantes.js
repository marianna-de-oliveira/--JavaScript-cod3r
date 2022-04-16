const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //pegou as chaves do objeto
console.log(Object.values(pessoa)) // pegou os valores
console.log(Object.entries(pessoa)) // devolve um array com todos os subarrays que tem o valor de chave e depois valor
// como torna uma array, pode-se usar o forEach 
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

/*
outra forma que pode ser feito é usando destructuring, fica até melhor pra identificação
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
*/

Object.defineProperty(pessoa, 'dataNascimento', { //com esse metodo vc consegue definir as propriedades com mais clareza
    enumerable: true, //vai ser listado
    writable: false, //nao pode ser alterado, funciona tipo o freeze, se vc tentar alterar o que está escrito, simplesmente será ignorado
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017' //tentando reatribuir
console.log(pessoa.dataNascimento) //provando que foi falha a reatribuição
console.log(Object.keys(pessoa)) //mostrando que a propriedade foi listada

//object.assign (es2015) ~ concatenação de todos os objetos dentro do primeiro definido (?), transformando tudo em um objeto só
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 } //esse 'a' será sobrescrito
const obj = Object.assign(dest, o1, o2)
console.log(obj)

// ja foi visto antes
Object.freeze(obj)
obj.c = 1234
console.log(obj) 