// escopo: local que indica até onde a variavel seria visivel, acessavel. 
// o ideal é evitar usar variaveis de escopo global por questão de acontecer de serem alteradas em outros lugares, o que pode causar bugs e erros.

// var ~ declara uma variavel, opcionalmente, iniciando-a com um valor; os nomes, chamados identificadores, obedecem algumas regras. tem como características: ser de escopo global, de função, pode ser reatribuido e NÃO possui escopo de bloco. var não respeita o escopo do bloco, mesmo sendo declarada dentro de um bloco ela continua possuindo escopo global, diferente de const e let que respeitam o escopo de bloco

// let ~ declara uma variavel local de escopo do bloco, opcionalmente inicializando-a com um valor. tem como caraceristicas: não ser de escopo global, mas é de escopo função e bloco, e pode ser reatribuida.

// const ~ é uma constante, não pode ser reatribuida e deve ser inicializada com um valor. tem como caracteristicas: não ser de escopo global, mas é de escopo função e bloco, e não pode ser reatribuida.

// resumo: a unica com possibilidade de ser global é VAR; existe a possibilidade de var ter um escopo local em funções; const e let também respeitam o escopo local em funções. var e let podem sofrer reatribuições, ja o const não.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// exemplo prático de VAR em escopos diferentes


var numero = 1 //global
console.log('fora, antes de entrar no bloco = ', numero) // 1

{ //bloco
  var numero = 2
  console.log('dentro do bloco = ', numero) // 2
}

console.log('fora, depois de entrar do bloco = ', numero) // 2

function funcao() { //função
  var numero = 3
  console.log('dentro da função = ', numero)
}

funcao() // 3

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//exeplo prático de LET em escopos diferentes

