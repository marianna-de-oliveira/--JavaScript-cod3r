// significa içar na tradução literal
// geralmente as sentenças de código são lidas de cima para baixo, mas em javascript isso nao acontece 100%, pois quando se usa o VAR acontece o hoisting, a ide pega aquela variavel e joga ela pra cima 
// hoisting is a js's default behavior of moving declarations to de top

console.log('a = ', a); // a = undefined
var a = 2;
console.log('a = ', a); // a = 2

/*
o que aconteceu, em teoria, foi a mesma coisa que isso:
var a 
console.log('a = ', a); 
a = 2 
console.log('a = ', a);

e, caso esse bloco de código estivesse dentro de uma função, o resultado seria o mesmo
caso tentasse acessar a variavel fora do bloco da função, daria um erro de referencia, pois a variavel nao estava definida.

no caso da declaração da variavel ser com let, o hoisting não acontece, o resultado dá em erro 
console.log('a = ', a); 
let a  = 2 
console.log('a = ', a);
*/