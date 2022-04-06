let contador = 1 //declaração

while (contador <= 10) { //expressão
    console.log(`Contador = ${contador}`)
    contador++ //incremento
}

for (let i = 1; i <= 10; i++) { //basicamente a mesma coisa do exemplo acima
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) { //exibindo os valores de uma array colocando o tamanho do array como condição determinante de quantas vezes vai se repetir
    console.log(`nota = ${notas[i]}`)
}

// o ideal é que, dentro do for, vc deixe setado o index/contador com let, pois, se vc for procurar i no código ele pode ser achado 
console.log(i) // gera um erro sem o let, pois essa variavel não existe fora do bloco

