// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
// números de strings.

comparaTipo = function (a, b) {
    if (typeof a != "number") { //tipos a gente tem que colocar entre aspas
        console.log(`Primeiro numero (${a}) é uma string`)
    } else if (typeof b != "number") {
        console.log(`Segundo numero (${b}) é uma string`)
    } else {
        console.log(`Não é string`)
        return maiorOuMenor(a, b)
    }
}

maiorOuMenor = function (a, b) {
    if (a > b) {
        console.log(`${a} é maior que ${b}`)
    } else {
        console.log(`${a} é menor que ${b}`)
    }
}

comparaTipo('3', 4)
comparaTipo(4, '5')
maiorOuMenor(3, 4)
maiorOuMenor(4, 3)