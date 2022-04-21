class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

// como definir que uma classe/função tem outra como protótipo ~ usando a palavra extends
class Pai extends Avo{
    constructor(sobrenome, profissao = 'Professor'){
        super (sobrenome) //  usada para acessar o objeto pai de um objeto, em outros casos, é usada para acessar a classe pai de uma classe.
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)