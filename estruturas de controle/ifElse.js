const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(6)
imprimirResultado('Epa!') //deveria ser um erro, mas "reprovou" pelo fato de js ser fracamente tipado

