"use strict";
const pessoa = {
    nome: 'Maria',
    idade: 28,
    profissao: 'Desenvolvedora',
};
const andre = {
    nome: 'pedro',
    idade: 10,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 10,
    profissao: 'desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoradeFutebol"] = 3] = "JogadoradeFutebol";
})(Profissao || (Profissao = {}));
const mariana = {
    nome: 'Mariana',
    idade: 25,
    profissao: Profissao.Desenvolvedora
};
const giovanna = {
    nome: 'giovanna',
    idade: 21,
    profissao: Profissao.Atriz
};
const mylena = {
    nome: 'mylena',
    idade: 20,
    profissao: Profissao.JogadoradeFutebol,
    materias: ['algebra', 'programação 1', 'logica digital']
};
const monica = {
    nome: 'monica',
    idade: 20,
    materias: ['algebra', 'programação 1', 'logica digital']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
