console.log(typeof Object) // function
console.log(typeof new Object) // object ~ pois foi criado um objeto a partir de uma função

const Cliente = function () {}
console.log(typeof Cliente) // function
console.log(typeof new Cliente) //object

class Produto {} // es2015 (es6)
console.log(typeof Produto) // function
console.log(typeof new Produto()) // object

// objetos são criados a partir de funções 