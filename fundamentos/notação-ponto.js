console.log(typeof console) //object
console.log(Math.ceil(6.2)) // 7

const obj1 = {}
obj1.nome = 'Bola'
// outra forma de fazer a mesma notação acima ~> obj1['nome'] = 'Bola' ~ semdo esta menos recomendado
console.log(obj1.nome) // Bola ~ notação mais recomendada

function Obj(nome) {
    this.nome = nome //cria um atributo publico
    this.exec = function () {
        console.log('Exec...') //cria um metodo publico
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome) // Cadeira
console.log(obj3.nome) // Mesa
obj3.exec() // Exec...

// sempre se acessa os membros de um objeto atraves de seu nome com uma notação ponto