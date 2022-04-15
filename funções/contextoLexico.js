// contexto no qual as coisas foram declaradas na linguagem
const valor = 'Global'
function minhaFuncao() {
    console.log(valor)
}
minhaFuncao()

function exec() {
    const valor = 'Local'
    minhaFuncao()
}
exec()

// por causa do contexto lexico, o que foi executado foi a escrita "Global", pois quando a função é declarada em js, ela não tem apenas seu conteudo interno, parametros e instruções, ela tbm tem consciencia do contexto que ela foi declarada