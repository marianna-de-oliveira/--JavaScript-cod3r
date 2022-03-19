//vetor, estrutura unidimenssional, lista indexada
// heterogeneo, fracamente tipado, cresce e diminui de forma flexivel, não tem um tamanho definido
const valores = [7.8, 8.9, 7.5, 9.3];

console.log(valores[0], valores[3]); //7.8, 9.3
console.log(valores[4]); //undefined

valores[4] = 10;
console.log(valores); //10

valores[10] = 6;
console.log(valores); //ele identifica que ficaram 5 posições vazias [ 7.8, 8.9, 7.5, 9.3, 10, <5 empty items>, 6 ]

console.log(valores.length); //quantos elementos tem no array

valores.push({ id: 3 }, false, null, "teste"); // adiciona valores
console.log(valores);

console.log(valores.pop()); // retira o ultimo elemento
// outra forma é usando delete valores[indice]

console.log(typeof valores); //array é do tipo object
