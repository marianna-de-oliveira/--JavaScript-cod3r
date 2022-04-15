let comparaComThis = function (param) {
    console.log(this === param)
}
//usando o objeto global
comparaComThis(global) //true

// se usar a mesma função no console do browser usando como parametro window, o resultado tbm será true, e como ela não sabe o que é global, dará um erro 

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // deixou de ser true por causa do bind
comparaComThis(obj) // pelo fato de ter o bind, dá true

//arrow function
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) //true ~ this === true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // a arrow é mais forte que o bind
comparaComThisArrow(module.exports)  //true

// this numa função arrow é associado ao contexto do qual a função  foi escrita
// mesmo tentando a mudança com o bind, não vai alterar 