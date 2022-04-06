let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global) //true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // deixou de ser true por causa do bind
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // a arrow é mais forte
comparaComThisArrow(module.exports)