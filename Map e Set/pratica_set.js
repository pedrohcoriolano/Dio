var myarray = [30, 30, 40, 5, 223, 2049, 3034, 5]

var lista = []

function valor_unico (lista) {
    const myset = new Set(lista)

    return [...myset]
}

console.log(valor_unico(myarray))