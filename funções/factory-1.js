// função que retorna um objeto
// modo ERRADO de fazer
const prod1 = {
    nome: '...',
    preco: 20
}


const prod2 = {
    nome: '...',
    preco: 20
}

// modo certo, usando factory (se traduzir é 'fábrica', ou seja, vai repetir do mesmo jeito que uma fabrica faz peças)

function criarPessoa(){
    return {
        nome: 'Marianna',
        sobrenome: 'Duarte'
    }
}

console.log(criarPessoa())