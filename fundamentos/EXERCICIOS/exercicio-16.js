// Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

function calcBasica(num1, operador, num2) {
    switch (operador) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'invalida'
    }
}

console.log(calcBasica(1, '+', 1)) //2
console.log(calcBasica(1, '-', 1)) //0
console.log(calcBasica(1, '*', 1)) //1
console.log(calcBasica(1, '/', 1)) //1
console.log(calcBasica(1, ';', 1)) //invalido