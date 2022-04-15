// função anonima é a função que não tem nome, só os parametros

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
// colocando uma função anonima como parametro, atenção aos parenteses
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

//colocando uma arrow function como parametro ~ arrow functions sempre são anonimas
imprimirResultado(3, 4, (x, y) => x * y)

// função anonima como atributo de objeto 
const pessoa = {
    falar: function () {
        console.log('Teste')
    }
}

pessoa.falar()