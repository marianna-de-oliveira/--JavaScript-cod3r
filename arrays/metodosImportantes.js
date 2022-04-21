const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
//pop() ~ deleta o ultimo elemento
pilotos.pop()
console.log(pilotos)

// push() ~ adiciona um elemento na ultima posição do array
pilotos.push('Verstappen')
console.log(pilotos)

// shitf() ~ tira da primeira posição
pilotos.shift()
console.log(pilotos)

// unshift() ~ Adiciona um elemento no indice 0 do array
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice() adiciona e remove elementos
// adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa')
// a partir do indice 2, não remova nenhum e adicione 2 elementos. esses dois elementos ficarão ANTES do indice 2
console.log(pilotos)

// removendo 
pilotos.splice(3, 1)
// no indice 3, remova 1 array
console.log(pilotos)

// gera um novo array a partir do indice indicado, se colocar outro indice, ele pega a partir daquele primeiro elemento até o ultimo elemento selecionado -1
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)