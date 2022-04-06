//

function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log("aprovado com " + nota)
    }
}

soBoaNoticia(8.1) //aparece a mensagem
soBoaNoticia(6.1) //não aparece

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1) //true
seForVerdadeEuFalo(' ') //true
seForVerdadeEuFalo('?') //true
seForVerdadeEuFalo([]) //true
seForVerdadeEuFalo([1, 2, 3]) //true
seForVerdadeEuFalo({}) //true

// os que não mostraram são falsos


// if 2 

function teste1(num) {
    if (num > 7)
        console.log(num) //relacionado a condição 
    console.log('Final') // passa a nao ser relacionado pois nao está entre {}
}

teste1(6)
teste1(8)

// o resultado exibirá, de acordo com a condição, apenas o primeiro console, pois, como não foi definido o bloco entre {}, o javascipt só considera a primeira sentença dada; como o segundo console foi dado "fora", ele é exibido tanto quando a condição é verdadeira quanto quando a condição é falsa.


function teste2(num) {
    if (num > 7)
        ;
    {
        console.log(num)
    }
}

teste2(6) //6
teste2(8) //8

// os dois valores serão exibidos pois, o ; determina o fim do bloco, logo, o bloco que está o console não é dependente da condição ser verdadeira ou não
// não use ; no final de uma condição!