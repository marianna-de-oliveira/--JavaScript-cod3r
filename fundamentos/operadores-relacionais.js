// por ser fracamente tipada, existe uma "pegadinha", entre ser igual e identico
// operadores relacionais só tem 2 valores, true e false
// o melhor é usar ===
console.log('01)', 1 == '1') // compara o valor apenas
console.log('02)', 1 === '1') // compara o valor E o tipo
console.log('03)', 3 != '3') // != > diferente ~ lembrando, tudo que tem ! no começo é negação.
console.log('03)', 3 !== '3') // leva em consideração o tipo e o valor

console.log('05)', 3 < 2) //menor que
console.log('06)', 3 > 2) //maior que
console.log('07)', 3 <= 2) //menor ou igual
console.log('08)', 3 >= 2) // maior ou igual

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 == d2)
console.log('10)', d1 === d2)
console.log('11)', d1.getTime() == d2.getTime())
console.log('12)', d1.getTime() === d2.getTime())

console.log('13)', undefined == null)
console.log('14)', undefined === null)