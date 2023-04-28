let aprovados =  new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

//array = ['elemento1', 'elemento2']

console.log(aprovados[0])
console.log(aprovados[1])

aprovados.push('elemnto') // adiciona ao final
console.log(aprovados)

aprovados.sort() // serve para ordenar o Array

console.log(aprovados) //função sort() contém efeito colateral

aprovados.splice(1,2,'elemento1','elemento2') // parametros: 
//1 - a partir do índice X
//2 - exclua os Y elementos seguintes
//3 [...] N - e coloque no lugar os elementos seguintes

console.log(aprovados)