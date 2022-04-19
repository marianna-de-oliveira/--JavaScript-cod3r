// toda função tem um atributo .prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')  //separa os caracteres em array.inverte a ordem deles.junta os caracteres em uma string dnv
}
console.log('Marianna'.reverse())


Array.prototype.first = function () {
    return this[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())