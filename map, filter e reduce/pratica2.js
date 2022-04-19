const lista = [1,2,3,4]

function mapsemthis (lista, num) {
    return lista.map((item) => item * num)
}

console.log(mapsemthis(lista, 10)) // resultado = [10, 20, 30, 40]