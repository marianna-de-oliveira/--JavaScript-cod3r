// Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
// o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
// "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
// inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
// considerando se numero é igual a minimo ou a maximo

function testaAiFilha(minimo, maximo, numero, inclusivo = false) { // a lógica tava certa, só que esqueci de dar valor padrao para inclusivo
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}

console.log(testaAiFilha(1, 10, 5)) // true, está entre os dois 
console.log(testaAiFilha(10, 100, 50)) // true, está entre os dois
console.log(testaAiFilha(16, 100, 160)) // false, passa o maximo
console.log(testaAiFilha(3, 150, 3)) // false, é igual ao minimo
console.log(testaAiFilha(3, 150, 3, true)) // true, pq o parametro inclusivo foi informado
