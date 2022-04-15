class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome} `)
    }
}

const p1 = new Pessoa("Marianna")
p1.falar()

// esse objeto tem noção do contexto lexico 
const pessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa ('Maryna')
ps.falar()
 