const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

// sendo var, imprime para todos o valor 10, independente do indice procurado na array
funcs[2]()
funcs[8]() 