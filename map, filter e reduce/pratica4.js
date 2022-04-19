function somar_valores(lista) {
    return lista.reduce((ant, atual) => ant + atual)
}

const lista_valores = [1,2,3,4,5]

console.log(somar_valores(lista_valores))

function calcular (saldo, lista) {
    return lista.reduce(function(acumulador, atual) {
        console.log(acumulador)
        console.log(atual)
        return acumulador - atual.preco
    }, saldo)
    
}

const lista = [
    {
        name: 'sabao',
        preco: 30
    },

    {
        name: 'cereal',
        preco: 12
    },

    {
        name: 'coca-cola',
        preco: 6
    }
]

const saldo_disp = 10

console.log(calcular(saldo_disp, lista))