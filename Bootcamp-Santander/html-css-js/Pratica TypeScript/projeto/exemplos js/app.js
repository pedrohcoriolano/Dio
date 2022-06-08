var botao = document.querySelector('#botao')
var num1 = document.querySelector('#input1')
var num2 = document.querySelector('#input2')

botao.onclick = function () {
    let soma = Number(num1.value) + Number(num2.value)
    console.log(soma)
}