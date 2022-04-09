// Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:

// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function salarioNovo(plano, salarioAtual) {

    switch (plano) {
        case 'a':
            return salarioAtual * 1.1
        case 'b':
            return salarioAtual * 1.15
        case 'c':
            return salarioAtual * 1.2
        default:
            return 'tem algo errado, tente novamente'
    }
}

console.log(salarioNovo('a', 1000))
console.log(salarioNovo('b', 1000))
console.log(salarioNovo('c', 1000))
console.log(salarioNovo('d', 1000))
