// diferença entre usar callback ou não

// ideia é gerar um novo array com todas as notas menores do que 7 
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem usar callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1) //6.5, 5.2, 3.6

// com callback
// função que filtra uma array de acordo com uma condição
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

// mais funcional ainda ~ usando arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

// usando de forma que eu consiga reutilizar a condição em várias funções é colocando a condição numa constante
const notasMenoresQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenoresQue7)
console.log(notasBaixas4)