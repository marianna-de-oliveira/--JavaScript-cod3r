/*
Escreva um algoritmo que leia o código de um aluno e suas tres notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as outras restantes, 3. Mostre o código do aluno, suas tres notas, a média calculada e uma mensagem "APROVADO" se a media for maior ou igual a 5 ou REPROVADO se a media for menor que 5. Repita a operação até que o código lido seja negativo.
*/

// solução: criar um array de notas, colocar as notas dentro, usar o metodo .sort para ver a ordem e, assim, definir qual nota tem qual peso.
// multiplicar na variavel média final e exibir no console
function aprovadoOuReprovado(codigo, nota1, nota2, nota3) {
  let notas = []
  notas.push(nota1)
  notas.push(nota2)
  notas.push(nota3)
  // .sort = método para ver qual é o maior dos valores
  notas.sort((a, b) => (a < b ? 1 : -1))

  // media ponderada = equivalente a soma dos pesos das notas
  let mediaFinal = (notas[0] * 4 + (notas[1] * 3 + notas[2] * 3)) / 10

  console.log(
    `Código do aluno ${codigo}, Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}. ${
      mediaFinal > 5 ? 'Aprovado' : 'Reprovado'
    }`
  )
}

aprovadoOuReprovado(123, 0, 4, 3)
