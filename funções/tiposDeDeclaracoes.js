console.log(soma(1, 2))
// function declaration ~ dessa forma, pode-se chamar a função mesmo antes de ter declarado ela
function soma(a, b) {
    return a + b
}

// function expression ~ pecisa declarar primeiro, senao dá erro
const sub = function (x, y) {
    return x - y
}
console.log(sub(2, 1))

// named function expression ~ pouco usada ~ também não funciona sem declarar primeiro
const mult = function mult(x, y) {
    return x * y
}
console.log(sub(2, 1))