//representação de objeto começa com {}
//pode-se ter objetos dentro deles
const prod1 = {}; //objeto literal vazio

// atribuição de valores de forma dinamica
prod1.nome = "celular";
prod1.valor = 4999.9;
prod1["Desconto grande"] = 0.4; //é possivel criar um identificador com mais de uma palavra, mas o ideal é evitar

console.log(prod1);

// criando um objeto ja com valores atribuidos
const prod2 = {
	nome: "Camisa polo",
	preco: 79.9,
};
console.log(prod2);

// pode-se ter objetos aninhados, sempre asbendo que objetos sao uma coleção de pares chave/valor, sendo chave o identificador e valor, o valor definido, sendo que valores podem ser number, string, função...

//JSON não é a mesma coisa que um objeto js, JSON é uma forma textual para contato entre sistemas (front e back)
