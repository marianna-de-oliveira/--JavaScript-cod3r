// Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’

function num(numero) {
    switch (numero) {
        case 0:
            console.log('Zero')
            break;

        case 1:
            console.log('Um')
            break;

        case 2:
            console.log('Dois')
            break;

        case 3:
            console.log('Três')
            break;

        case 4:
            console.log('Quatro')
            break;

        case 5:
            console.log('Cinco')
            break;

        case 6:
            console.log('Seis')
            break;

        case 7:
            console.log('Sete')
            break;

        case 8:
            console.log('Oito')
            break;

        case 9:
            console.log('Nove')
            break;

        case 10:
            console.log('Dez')
            break;

        default:
            console.log('Numero fora do intervalo')
            break;
    }
}

// nesse caso não precisava do console.log, visto que ele ja tá dentro do case, mas eu ja tinha feito certo, meu erro foi no console.log na hora de exibir, o que printava um "undefined" antes da resposta

num(0)
num(1)
num(2)
num(3)
num(4)
num(5)
num(6)
num(7)
num(8)
num(9)
num(10)
num(11)