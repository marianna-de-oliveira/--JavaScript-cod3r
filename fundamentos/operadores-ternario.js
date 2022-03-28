// expressao relacional ? verdadeiro : falso
const resultado = nota => { //em arrow function
    return nota >= 7 ? 'Aprovado' : 'Reprovado' 
} 
// outra opção é colocar, dá na mesma
// const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.1))

// const situacao = nota >=7 ? 'Aprovado' : 'Reprovado'
// prompt('De o valor da media: ')
// console.log(situacao(7.1))
// console.log(situacao(6.1))