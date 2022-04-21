// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro

function simboloMais(rep) {
    return console.log('+'.repeat(rep))
}

simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"

/*
Resolução 2:
function simboloMais(quantidade) {
let resultado = ''
for(let i = 0; i < quantidade; i++)
resultado += '+'
return resultado
}

Resolução 2:
function simboloMais(quantidade) {
return Array(quantidade).fill('+').join('')
}
*/