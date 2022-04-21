// como implementar um segundo for each

Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Marianna', 'Aldo', 'Daniel', 'Raquel']

// usando uma função callback, que pode receber a propria array como parametro
aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
})