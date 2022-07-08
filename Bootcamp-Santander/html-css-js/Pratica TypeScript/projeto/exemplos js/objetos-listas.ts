const pessoa = {
    nome: 'Maria',
    idade: 28,
    profissao: 'Desenvolvedora',
}

const andre: {nome: string, idade: number, profissao: string} =  {
    nome: 'pedro',
    idade: 10,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} =  {
    nome: 'Paula',
    idade: 10,
    profissao: 'desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoradeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudantes extends Pessoa {
    materias: string[]
}

const mariana: Pessoa =  {
    nome: 'Mariana',
    idade: 25,
    profissao: Profissao.Desenvolvedora
}

const giovanna: Pessoa =  {
    nome: 'giovanna',
    idade: 21,
    profissao: Profissao.Atriz
}

const mylena: Estudantes =  {
    nome: 'mylena',
    idade: 20,
    profissao: Profissao.JogadoradeFutebol,
    materias: ['algebra', 'programação 1', 'logica digital']
}

const monica: Estudantes =  {
    nome: 'monica',
    idade: 20,
    materias: ['algebra', 'programação 1', 'logica digital']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item)
    }
}

listar(monica.materias)