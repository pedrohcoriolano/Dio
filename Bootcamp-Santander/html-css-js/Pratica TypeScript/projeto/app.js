"use strict";
var botao = document.querySelector('#botao');
var num1 = document.querySelector('#input1');
var num2 = document.querySelector('#input2');
function somarNumeros(n1, n2) {
    return n1 + n2;
}
if (botao) {
    if (num1 && num2) {
        botao.addEventListener('click', () => {
            console.log(somarNumeros(Number(num1.value), Number(num2.value)));
        });
    }
}
