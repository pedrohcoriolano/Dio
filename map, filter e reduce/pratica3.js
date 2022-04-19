const lista_numeros = [1,2,3,4,5,6,7,8,9,10]

function somente_pares(lista) {
    return lista.filter((item) => item % 2 == 0)
}

console.log(somente_pares(lista_numeros))