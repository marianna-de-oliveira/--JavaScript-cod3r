// metodo get: le o valor de uma variavel
// metodo set: altera o valor de uma variavel

const sequencia = {
    _valor: 1, // o _ no começo é uma convenção de que essa variavel é para ser acessada apenas internamente dentro desse obj
    get valor() { return this._valor++ }, //get e set são funções que acessam o valor
    set valor(valor) { //precisa colocar o atributo
        if (valor > this._valor) { //não permite que a sequencia vá para atras
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // chamou os dois em ordem
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor) //continua acrescentando
sequencia.valor = 100
console.log(sequencia.valor, sequencia.valor) // ignorou totalmente o valor menor e seguiu a sequencia de onde estava