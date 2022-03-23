const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

// sendo let, imprime o valor no momento da execução, pois o valor é atualizado a cada iteração
funcs[2]() // 2
funcs[8]() // 8
funcs[9]() 