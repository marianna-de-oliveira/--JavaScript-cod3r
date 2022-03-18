const peso1 = 1.0;
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));

const ava1 = 9.871;
const ava2 = 6.871;
const total = ava1 * peso1 + ava2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //para definir uma quantidade de casas decimais para exibir, basta utilizar a função toFixed(n)
console.log(media.toString(2)) //transforma para string, para passar para binário, é só colocar o numero 2 entre os parenteses
console.log(typeof media)
console.log(typeof Number) //number = tipo do dado; Number = função 