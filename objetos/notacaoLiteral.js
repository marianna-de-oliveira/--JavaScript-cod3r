const a = 1
const b = 2
const c = 3

// se o que for usado no objeto ja tiver valor definido, não é necessário que haja essa "redeclaração"
const obj1 = { a: a, b: b, c: c }
// é possivel fazer dessa forma, ou, caso seja de sua vontade, alterar o valor DENTRO DO OBJETO
const obj2 = { a, b, c }
console.log(obj1, obj2)

// criação dinamica usando string
const nomeAttr = 'nota'
const valorAttr = 7.87

// criar o objeto vazio e depois atribuir algo pra ele de duas formas
const obj3 = {}
obj3[nomeAttr] = [valorAttr]
console.log(obj3)

const obj4 = { [nomeAttr]: [valorAttr] }
console.log(obj4)
