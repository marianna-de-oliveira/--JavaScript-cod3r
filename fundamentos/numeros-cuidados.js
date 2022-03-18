console.log(7 / 0); // qualquer numero dividido por 0 não gera erro, sim infinity
console.log("10" / 2); // a linguagem converte o valor da string para um numero e realiza a operação, resultando em 5
console.log("10" + 2); //mas isso não acontece com a soma, pois o sinal de (+) indica concatenação, resultando em 102
console.log("10,2" + 2); //retorna NaN, pois ponto flutuante é considerado apenas com (.), quando se usa (,) considera-se uma string e não é possivel somar uma tring com um numero, gerando um erro
