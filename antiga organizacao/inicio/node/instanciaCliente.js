const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()

const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()

console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorC.valor, contadorD.valor)
// quando se trata de OBJETOS, caso voce altere-o será salvo independente da const utilizada.
// porém, quando se trata de funções elas são criadas no momento. Não tendo salvo chamadas anteriores.


