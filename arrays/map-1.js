// mapear um array para um NOVO array do mesmo tamanho mas com os dados transformados 
// se o array original tem 6 elementos, o array com map tem a mesma quantidade de elementos

const nums = [1, 2, 3, 4, 5]

// map = for com propósito

let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// como cada map retorna um array, é possivel encadear varios arrays
// somou 10 ao elemento, multiplicou esse elemento por 3, exibiu esse elemento convertendo a exibição para real
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)