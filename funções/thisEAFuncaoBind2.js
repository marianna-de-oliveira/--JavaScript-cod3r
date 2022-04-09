function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //a cada x millisegundos essa função vai ser executada, no caso 1000 ms = 1 s
}
// sem bind e sem a const self dá NaN

new Pessoa

//uma especie de contador de segundos 