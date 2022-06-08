interface animal  {
    nome: string,
    tipo: 'terrestre' | 'aquatico',
    domestico: boolean,
}

interface Felino extends animal {
    visao_noturna: boolean,

}

interface canino extends animal {
    tamanho: 'pequeno' | 'medio'| 'grande',
}

type animal_domestico = canino | Felino

const animal: animal_domestico = {
    nome: 'cachorro',
    tipo: "terrestre",
    domestico: true,
    tamanho: 'pequeno',
}