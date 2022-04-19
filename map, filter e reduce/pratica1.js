const maca = {
    value: 2,
}

const orange = {
    value: 3,
}

const lista_valores = [1,2,3,4,5]

function mapcomthis (lista, valor) {

    return lista.map(function (item) {

        return item * this.value

    }, valor)
}

console.log(mapcomthis(lista_valores, orange))