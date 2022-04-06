// uma função é nada mais que uma "receita de bolo", pois, ela recebe parametros e retorna algo
// função em js é first-class object (citizens)
// higher-order function
// ou seja, a função é MUITO importante

//função literal
// pode receber valores e pode OU NÃO retornar um valor, caso vc nao retorne nada, a função retorna undefined. o bloco {} é obrigatório
function fun1() { }

//armazenar em uma variável 
//função anonima
const fun2 = function () { }

// armazenar dentro de um array 
// pode criar e executar dentro, como também pode chamar outras funções já criadas antes 
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](1, 2)) //3

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return "Oi!" }
console.log(obj.falar()) //Oi!

// passar função como parametro para outra função
function run(fun) {
    fun()
}
run(function () { console.log('Executando...') })

// uma função pode retornar/conter uma função 
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(5) //passa os parametros de todas as funções
const cincoMais = soma(2, 3) //mesmo resultado
cincoMais(5)