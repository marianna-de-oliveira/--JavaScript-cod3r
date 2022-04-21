// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetir(e, rep) {
    return Array(rep).fill(e)
}

console.log(repetir("código", 2))
console.log(repetir(7, 5))

// e com isso, aprendemos: consulte sempre a documentação :) 