// Faça um algoritmo que calcule o fatorial de um número.
// 3! = 3.2.1 = 6

function fazFatorial(numero) {
    if (numero == 0) {
        return 1
    } else {
        return numero * fazFatorial(numero - 1)
    }
}

console.log(fazFatorial(0))
console.log(fazFatorial(3))