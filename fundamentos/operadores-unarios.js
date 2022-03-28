// incremento e decremento 

let num1 = 1
let num2 = 2

num1++ //incremento pós fixado ~ possui prioridade menor
console.log(num1) //2 
--num1 //decremento pré fixado ~ possui prioridade maior
console.log(num1) //1

console.log(++num1 === num2--) //true, pois ++ foi executado antes da comparação, e o -- foi executado depois da comparação [código complicado, evitar incremento dentro de comparação]

// é como se estivesse sido comparado 2 === 2 pra depois ficar 2 === 1, que é o que acontece se der log em num1 === num2
console.log(num1 === num2)