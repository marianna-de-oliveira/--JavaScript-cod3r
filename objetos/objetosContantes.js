// a constante pessoa aponta diretamente para um local da memória, o conteúdo entre conchetes não tem nada a ver com isso, voce pode alterar o conteúdo (no caso, nome), mas não pode alterar o nome da constante
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa) //Pedro

// pessoa = { nome: "Ana "} // gera erro, pois a atribuição está sendo feita numa constante, e uma constante não pode ser alterada

Object.freeze(pessoa) // congela o objeto, não deixa que haja alteração. vc nao pode alterar um atributo existente, não pode adicionar atributos e nem deletar um atributo ja criado
pessoa.nome = "Maria"
console.log(pessoa.nome)