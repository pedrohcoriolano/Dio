const mymap = new Map()

mymap.set('maça', 'Fruta');
mymap.set('banana', 'Fruta');
mymap.set('kiwi', 'Fruta');

console.log(mymap)

console.log(mymap.get('maça'))

mymap.delete('maça')

console.log(mymap)
console.log(mymap.get('maça'))