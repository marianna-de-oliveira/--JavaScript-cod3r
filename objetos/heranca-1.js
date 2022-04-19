const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.__proto__) // __proto__ é para acessar o prototitpo deesse objeto, o objeto pai. se achou no pai, retorna, senão, continua procurando na cadeia de elementos de prototipos

console.log(ferrari.__proto__ === Object.prototype) // true
console.log(volvo.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__) // null, pois já é o pai dos pais 

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto) // function function
console.log(Object.prototype, MeuObjeto.prototype)