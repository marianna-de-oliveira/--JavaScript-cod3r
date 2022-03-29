/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

JUROS SIMPLES
Montante = capital + (capital * juros * tempo)
M = c * (1 + ( i * n ))

JUROS COMPOSTOS
M = c (1+i)t


*/

function simples(capitalInicial, juros, tempo) {
    return `R$ ${capitalInicial + (capitalInicial * juros * tempo)}`
}

function composto(capitalInicial, juros, tempo) {
    const total = capitalInicial * (1 + juros) ** tempo
    return `R$ ${total.toFixed(2).replace('.', ',')}`
}

console.log(simples(100, 10 / 100, 2))
console.log(composto(100, 10 / 100, 2))