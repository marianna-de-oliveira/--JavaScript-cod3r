// array 
const [a] = [10]
console.log(a)

// desestruturando a array e atribuindo os valores a varias variaveis
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//um array pode ter outros arrays aninhados, chamados matrizes
const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // primeiro elemento ignorado, segundo elemento é um array, primeiro elemento do segundo array é ignorado, e o segundo elemento do array é um array com o nome nota. em resumo "um array tem 2 arrays dentro", tradução da const " o primeiro elemento dessa arraya, vc ignora. entra no segundo elemento (que é outra array), ignora o primeiro elemento e define o segundo elemento com esses valores"
//fazer desestruturações de arrays não é algo tão ideal de ser feito, já em objetos faz mais sentido
console.log(nota) 