const moduloA = require('./nodeA')
const moduloB = require('./nodeB')

console.log(moduloA.ola)
console.log(moduloA.ateLogo)
console.log(moduloA.bemVindo) // acessando os itens que foram exportados 
// de diferentes maneiras.
console.log(moduloA)

//Módulo B
console.log(moduloB.bomdia)
console.log(moduloB.boaNoite())
console.log(moduloB)
// "apenas o que voce exporta pra fora que é visível para fora."