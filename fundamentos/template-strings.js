const nome = "Marianna";
const concatenacao = "Olá " + nome + "!";
const template = `Olá ${nome}!`; //considera quebras de linha

console.log(concatenacao, template);

//expressoes
console.log(`1 + 1 = ${1 + 1}`);

// template string com arrow function
const up = (texto) => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);
