/*
    funções executam algo baseado nos critérios definidos, como uma receita de bolo
    são blocos de código
    possuem um nome 
    recebe parametros de entrada
    executa algo baseado nos parametros 
    retorna algo, ou não
*/

// função sem retorno
function imprimirSoma(a, b) {
	console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); // pode passar um segundo valor vazio. o que acontece é que esse valor vazio se torna undefined e a soma de um numero e undefined é NaN
imprimirSoma(2, 3, 4, 5, 6, 7); // a função pega apenas os primeiros valores de acordo com os parametros da função e ignora os outros
imprimirSoma(); //NaN

//função com retorno
function soma(a, b = 0) {
	return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());

// armazenando função em uma variavel/constante
const imprimeSoma = function (a, b) {
	console.log(a + b);
};
imprimeSoma(2, 3);

//armazenando uma função arrow em uma variavel
const sum = (a, b) => {
	return a + b;
};
console.log(sum(1, 2));

// retorno implicito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const imprimir2 = (a) => console.log(a);
imprimir2("UHU!");
