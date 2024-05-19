//o for Of itera sobre valores. Legal para iterar sobre Map, Set etc.
// é o for elementos de python. 

for (let letra of "Cod3r") {
  console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
  console.log(i)
}

for (let assunto of assuntosEcma) { // é o For elementos de python, ele itera sobre os elementos e não sobre os índices
  console.log(assunto)
}

const assuntosMap = new Map ([
  ['Map', {abordado: true}],
  ['Set', {abordado: true}],
  ['Promises', {abordado: false}]
])

for (let assuntos of assuntosMap){
  console.log(assuntos[1])
}