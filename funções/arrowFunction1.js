// tem duas funções:
// 1 - sintaxe reduzida
// 2 - tem o this associado ao contexto no qual a função foi escrita

// base
let dobro = function (a) {
    return 2 * a
}

// função arrow sempre é uma função anonima, então se voce quer chamar ela depois, voce tem que armazenar ela numa variavel
dobro = (a) => {
    return 2 * a
}

// retorno implicito, para funções de uma unica linha
dobro = a => 2 * a
console.log(dobro(Math.PI))

// se a função não tem parametros, é possivel fazer desse jeito, porem os parenteses tem que ficar, senão é erro de sintaxe
let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' 
console.log(ola())