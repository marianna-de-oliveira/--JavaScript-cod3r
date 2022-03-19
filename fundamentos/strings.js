/* formas de delimitar string
'string aqui'
"string aqui"
``string aqui`` ~ template string
*/

const escola = "Marianna";
//teste de métodos de strings
console.log(escola.charAt(4)); //indica o caracter que está no indice indicado, no caso, no indice 4. lembrando que indice começa contando a partir de 0, logo o que será exibido é o caracter (a)
console.log(escola.charCodeAt(3)); //exibe o valor do caracter na tabela unicode
console.log(escola.indexOf("M")); //saber onde está o digito indicado
console.log(escola.substring(1)); //exibe o que está a partir do indice indicado até o final
console.log(escola.substring(0, 4)); // exibe o que está entre os valores de indice indicados, excluindo o ultimo
console.log("Escola ".concat(escola).concat("!")); //concatenação, same as: console.log("Escola " + escola + "!");
console.log(escola.replace("a", "4"));
console.log("Mari, Anna, Ir, Vim".split(",")); // transforma a string em array
