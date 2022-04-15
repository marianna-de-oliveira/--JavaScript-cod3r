// função autoinvocada (?) ~ fugir do escopo global no browser, transformando em escopo local
// IIFE ~ immediately invoked function expression
// exemplo: var, const e let declaradas dentro da função, só funcionam dentro da função
// basicamente: cria uma função anonima entre parenteses e invoca ela com () logo depois

(function () {
    console.log('Sera executado na hora!')
    console.log('Foge do escopo mais abrangente')
})() 