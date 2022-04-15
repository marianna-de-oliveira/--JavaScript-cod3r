// "chamar de volta" ~ pesquisar no canal do leo o primeiro video dele 
// passar uma função para outra função e quando x coisa acontecer (geralmente uma repetição), a função passada será disparada 
// funções callback podem ser chamadas varias vezes ou somente uma vez, depende mais do contexto 

// no exemplo, o array foi percorrido 3x, logo o resultado da função callback foi repetido 3x, mostrando cada um dos elementos 

const fabricantes = ["mercedes", "audi", "bmw"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// resultado é chamar a função imprimir para cada elemento que for encontrando dentro do array, por isso o forEach
fabricantes.forEach(imprimir)

// como essa função apenas tem um parametro, o que será retornado é o primeiro parametro da função imprimir, que é o nome
fabricantes.forEach(function (fabricante) {
    console.log(fabricante)
})
// mesma função acima, mas em versão arrow fabricantes.forEach(fabricante => console.log(fabricante))
