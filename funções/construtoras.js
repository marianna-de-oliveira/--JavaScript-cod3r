function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo pertencente apenas a função
    let velocidadeatual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeatual + delta <= velocidadeMaxima) {
            velocidadeatual += delta
        } else {
            velocidadeatual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeatual
    }
}

// para não usar var, usa-se this.algo para tornar o método publico, ou seja, executavel fora do escopo declarado
// declarar variaveis com let e constantes com const (obvio, mas sempre bom lembrar)

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())