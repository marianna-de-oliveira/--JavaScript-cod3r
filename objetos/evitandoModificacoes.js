// Object.preventExtensions ~ vc pode ate excluir atributos, mas nao pode adicionar

const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.00, tag: 'promo'
})

console.log('Extensivel: ', Object.isExtensible(produto)) // false
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal ~ selar, vc nao adiciona, nao exclui, mas consegue modificar os atributos existentes
const pessoa = { nome: 'Marianna', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa)) //true

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa) //nao deletou, não adicionou, apenas modificou o atributo idade

//Object.freeze = selado + valores constantes ~ completamente constante, nada muda, nada modifica, nada adiciona nem exclui