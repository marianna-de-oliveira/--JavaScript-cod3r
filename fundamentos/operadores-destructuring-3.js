// usando numa função
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 10, min: 40 }
console.log(rand(obj)) //roda um valor entre 10 e 40, definido em obj
console.log(rand({ min: 955 })) // roda a partir de 955
console.log(rand({})) // fica rodando entre 0 e 1000
console.log(rand()) // erro, pois nao tem nada definido 