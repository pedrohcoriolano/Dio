"use strict";
var botao = document.querySelector('#botao');
var num1 = document.querySelector('#input1');
var num2 = document.querySelector('#input2');
function somarNumeros(n1, n2, DevePrintar, drase) {
    var resultado = n1 + n2;
    if (DevePrintar) {
        console.log(frase + resultado);
    }
}
let DevePrintar = true;
let frase = 'O resultado foi: ';
if (botao) {
    if (num1 && num2) {
        botao.addEventListener('click', () => {
            somarNumeros(Number(num1.value), Number(num2.value), DevePrintar, frase);
        });
    }
}
