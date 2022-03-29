// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores

function divisao(num1, num2) {
    const resultado = num1 / num2
    const resto = num1 % num2
    return `Resultado = ${Math.floor(resultado)}, \nsendo o resto = ${resto}`
}

console.log(divisao(11, 4))