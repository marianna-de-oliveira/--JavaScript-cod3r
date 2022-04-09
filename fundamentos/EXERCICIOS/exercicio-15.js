// Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
// possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
// comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
// que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
// “Não trabalhamos com este tipo de automóvel aqui”.

function compraCarro(carro) {
    switch (carro) {
        case 'hatch':
            return "Compra efetuada com sucesso"
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            return "Tem certeza que prefere esse modelo?"
        default:
            return "Não trabalhamos com esse modelo aqui"
    }
}

console.log(compraCarro('hatch'))
console.log(compraCarro('sedans'))
console.log(compraCarro('motocicletas'))
console.log(compraCarro('caminhonetes'))
console.log(compraCarro('fusca'))