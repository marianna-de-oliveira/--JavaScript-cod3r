// Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela:

// 1) crianças com menos de 10 anos pagam R$80;
// 2) conveniados com idade entre 10 e 30 anos pagam R$50;
// 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
// e 4) conveniados acima de 60 anos pagam R$130

function totalPlano(idade) {
    let valorBase = 100

    if (idade < 10) {
        total = valorBase + 80
    }

    if (idade >= 10 && idade <= 30) {
        total = valorBase + 50
    }

    if (idade > 30 && idade <= 60) {
        total = valorBase + 95
    }

    if (idade > 60) {
        total = valorBase + 130
    }

    return total
}

console.log(totalPlano(5))
console.log(totalPlano(25))
console.log(totalPlano(45))
console.log(totalPlano(75))

// deu certo, mas outra forma de declarar (e mais simples, seria usando if else e retornando apenas o total a ser pago)
// mas tudo bem, meu raciocinio foi o mesmo, o resultado no console foi o mesmo, só fui um pouco "falona" demais