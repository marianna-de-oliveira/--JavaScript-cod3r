// é o escopo criado quando uma função é declarada
// esse escopo permite a função acessar e manipular variáveis externas à função
// ela tem memória do local de suas origens:
// se uma função foi criada dentro de outra função, mesmo que no escopo global haja uma variavel com o mesmo nome, o que será executado é o que está na função que envolve a segunda (imagina que dá pra desenhar)

const x = "Global"

function fora() {
    const x = 'Local'

    function dentro() {
        return x
    }

    return dentro
}

const minhafuncao = fora()
console.log(minhafuncao())