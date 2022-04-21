// JavaScript Object Notation ~ é um formato textual
// ~ tem capacidade de ser lido por várias linguagens, serve para comunicaçao entre sistemas
// criação do e um objeto e conversão para json, sendo formato de dados, ele acaba excluindo a função

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
// stringify ~ objeto para json
console.log(JSON.stringify(obj)) // retornou apenas o que está antes da função, tornou em texto
//console.log(JSON.parse("{a:1, b:2, c:3}")) // gera erro ja no primeiro atributo
//console.log(JSON.parse('{ 'a': 1, 'b': 2, 'c': 3 }')) //também não é valido, pois todo nome de atributo deve ser delimitado por aspas duplas

// parse ~ texto para json
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // objeto gerado a partir de um texto
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) // pode ter isso tudo dento do arquivo JSON sem problema, mas atributos e strings tem que estar delimitado por aspas duplas, e funções são ignoradas 
//existem validadores, exemplo jsonlint.com, para saber se o JSON é de fato valido 