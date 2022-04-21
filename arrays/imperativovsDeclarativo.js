// o modo declarativo permite vc dividir o código em varias funções que poderão ser reutilizadas mais pra frente, ja no modo imperativo vc faz tudo ao mesmo tempo e acaba precisando fazer mais vezes 
// imperaivo ensina exatamente os passos, sem deixar um detalhe faltando ~ o foco do como tem que ser feito
// declarativo o que importa é O QUE tem que ser feito

const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)