// transformar a classe pessoa por uma função construtora

// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }
//     falar() {
//         console.log(`Meu nome é ${this.nome} `)
//     }
// }

// const p1 = new Pessoa("Marianna")
// p1.falar()


function Pessoa(nome) { //substitui a palavra Class pela function
    this.nome = nome // tira isso de dentro do constructor (inclusive das {}) ~ o que fez no constructor vai pra função, em resumo
    this.falar = function () {
        console.log(`Meu nome é ${this.nome} `)
    }
}

const p1 = new Pessoa("Marianna")
p1.falar()