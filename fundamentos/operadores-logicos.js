/* 

TABELA VERDADE (E) ~ para funcionar, é necessário que todos as condições sejam verdadeiras
v e v ~ v
v e f ~ f
f e ? ~ f

TABELA VERDADE (OU) ~ para funcionar, apenas é necessario que uma das condições seja verdadeira
v ou ? ~ v
f ou v ~ v
f ou f ~ f 

TABELA VERDADE (OU EXCLUSIVO) ~ para o ou exclusivo funcionar, obrigatóriamente os dois valores tem que ser diferentes
v xor v ~ f 
v xor f ~ v 
f xor v ~ v 
f xor f ~ f 

NEGAÇÃO LÓGICA (operador unário)
!v ~ f
!f ~ v

*/

// exercicio: determinar o que a pessoa vai fazer baseado nas condições dadas: se os dois trabalhos deram certo, ela compra uma tv de 50 polegadas e toma sorvete; ela toma sorvete se um dos dois trabalhos derem certo; ela compra a tv de 32 se apenas um dos trabalhos deu certo, e se nenhum dos trabalhos deu certo ela se mantém saudavel, pois não compra nem o sorvete e nem nenhuma das tvs

function compras(job1, job2) {
    const comprarSorvete = job1 || job2
    const comprarTV50 = job1 && job2
    //const comprarTV32 = !!(job1 ^ job2) //bitwise xor. usa-se as !! para converter para boolean
    const comprarTV32 = job1 != job2 //diferença tbm simula um ou exclusivo
    const manterSaudavel = !comprarSorvete //operador unário

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel } // criação mais inteligente de objetos, ecmascript 2015, como objetos precisam de chave e valor, ele cria um objeto com a chave sendo o nome daquela constante e o valor é o valor daquela constante de forma implicita
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false, false))