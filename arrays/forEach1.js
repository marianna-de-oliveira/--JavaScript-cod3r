// percorrer por cada item de um array
// dentro do forEach tem um laço for, esse laço vai percorrer todos os itens do array e vai printar no console o resultado da função especificada para cada elemento
const aprovados = ['Marianna', 'Aldo', 'Daniel', 'Raquel']

// usando uma função callback, que pode receber a propria array como parametro
// aprovados.forEach(function (nome, indice) {
    //     console.log(`${indice + 1} - ${nome}`)
    // })
    
// função callback, que pode receber a propria array como parametro
aprovados.forEach(function (nome, indice, array) {
    console.log(`${indice + 1} - ${nome}`)
    console.log(array)
})

// usando arrow function
aprovados.forEach(nome => console.log(nome))

// armazenando em uma constante e passando como parametro pro forEach
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)