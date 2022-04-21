console.log(typeof Array, typeof new Array, typeof [])
// pode colocar todos os tipos dentro do array, mas o certo é usar arrays homogeneos, do mesmo tipo.
// arrays tem "endereços" indexados, começados por 0 ~ Lua inicia com 1

let aprovados = new Array('Bia', 'Carlos', 'Ana') // com new
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // notação literal ~ mais recomendada
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined, pois não existe o elemento 3

// forma de adicionar um novo elemento dentro da array
aprovados[3] = 'Paulo' // assim é melhor pra substituir o valor que ja existe no indice
aprovados.push('Abia') //método que adiciona no final do array
console.log(aprovados.length) // tamanho do array ~ 5 

//se colocar um elemento num indice não existente e com uma distancia, ex [9]: Acontece que todos os outros indices que não tem conteúdo são === undefined.
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)

// metodo que altera o array sort() ~ não cria outro array
aprovados.sort()
console.log(aprovados)

// formas de excluir
delete aprovados[1] // esse elemento, no caso, vira undefined. nenhum item ocupa o lugar a não ser que seja preenchido
console.log(aprovados[1])
console.log(aprovados)

// splice () ~ serve para add elementos, remover elementos, e add e remover ao msm tempo
// parametros ~ indice - o qual deve iniciar a alterar a lista
//            ~ deleteCount - indica o numero de elementos que devem ser removidos, se n é especificado ou é maior que o numero de elementos da lista iniciando pelo indice, então todos os elementos serão deletados. se for 0, nenhum elemento é removido.
//            ~ para adicionar elementos a lista, é só colocar 'elemento1', ..., 'elementoN'
//            ~ o retorno é uma lista contendo os elementos removidos ou incluidos

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // começou no indice 1 e removeu apenas um elemento
console.log(aprovados)

// FATO IMPORTANTE: SE A ARRAY FOR DECLARADA NUMA CONSTANTE, NÃO SIGNIFICA QUE VOCE NÃO PODE ALTERAR O CONTEÚDO DENTRO DE [], APENAS QUE VC NAO PODE TRANSFORMAR ESSE ARRAY EM OUTRA COISA ~  AQUELA VARIAVEL APONTA PARA UM ENDEREÇO DE MEMORIA E NAO PODE SER TROCADO