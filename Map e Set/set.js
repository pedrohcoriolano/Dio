const lista = [1,1,2,2,3,4,5,6,7,8,2,1]

const lista_set = new Set(lista)

console.log(lista)

console.log(lista_set)

lista_set.add(25)

console.log(lista_set)

console.log(lista_set.has(5))

lista_set.delete(1)

console.log(lista_set)