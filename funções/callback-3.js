// exemplo de callback no browser, ou seja, copiar e colar no console
document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('O evento ocorreu')
}
// se der refresh na página, a função callback não estará registrada, ou seja, não vai disparar