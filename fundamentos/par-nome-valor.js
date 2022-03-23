// par nome/valor

const saudacao = 'opa' //contexto léxico 1 ~ é o local onde sua variavel foi definida

function exec() {
    const saudacao = 'fala' //contexto léxico 2 ~ é o local onde sua variavel foi definida
    return saudacao
}

//objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 123,
    }
}

console.log(saudacao) // opa
console.log(exec()) // fala
console.log(cliente) // { nome: 'Pedro', idade: 32, peso: 90, endereco: { logradouro: 'Rua ABC', numero: 123 } }