// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente.

function valorTotalLanche(codigo, quantidade, valor) {
    switch (codigo) {
        case 100:
            valor = 3
            return valor * quantidade

        case 200:
            valor = 4
            return valor * quantidade

        case 300:
            valor = 5.5
            return valor * quantidade

        case 400:
            valor = 7.5
            return valor * quantidade

        case 500:
            valor = 3.5
            return valor * quantidade

        case 600:
            valor = 2.8
            return valor * quantidade

        default:
            console.log(`O produto de código ${codigo} não existe`)
            break;
    }
}

console.log(valorTotalLanche(100, 2))
console.log(valorTotalLanche(200, 2))
console.log(valorTotalLanche(300, 2))
console.log(valorTotalLanche(400, 2))
console.log(valorTotalLanche(500, 2))
console.log(valorTotalLanche(600, 2))
console.log(valorTotalLanche(700, 2))
