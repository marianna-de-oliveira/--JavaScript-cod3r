const pessoa = {
    saudacao: "bom dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //undefined ~ conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // faz com que sempre aponte para um determinado componente
falarDePessoa()