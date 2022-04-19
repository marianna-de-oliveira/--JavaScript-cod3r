function MeuObjeto() { }
console.log(MeuObjeto.prototype)

//todos os objetos criados a partir de uma função construtora apontam para o mesmo protótipo
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) //true
console.log(MeuObjeto.prototype === obj2.__proto__) //true 

MeuObjeto.prototype.nome = 'Marianna'
MeuObjeto.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Outro nome'
obj3.falar()

