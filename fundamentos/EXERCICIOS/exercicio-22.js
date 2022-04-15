// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function calcularValor(mes, valor) {
    if (mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + 0.05) ** atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(12, 100))


// js sass ts react/angular banco de dados acessibilidade no html ~ 7-2-1 % 10 horas no seu dia 7 estudar codando lendo e codando por exemplo, 2 proximas 2 hoas das 10 fazer networking (linkedin, github, yt, se organizar, etx) 1 se posicionar como psofissioal de ti, criar um marketing e se vender

//backend ~ interações nao visiveis, banco de dados