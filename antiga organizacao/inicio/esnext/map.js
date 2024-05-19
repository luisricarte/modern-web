const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias.get('react').framework) // false
console.log(tecnologias.get('angular').framework) //true

const chavesVariadas = new Map([
  [function () {}, 'Função'],
  [{}, 'Objeto'],
  [123, 'Número']
])

chavesVariadas.forEach((valor,chave) => {
  console.log(chave,valor)
})

console.log(chavesVariadas.has(123)) // procura dentro do Mapa se existe a chave 123 - true
console.log(chavesVariadas.delete(123)) // retorna true se conseguiu - true
console.log(chavesVariadas.has(123)) // false 

console.log(chavesVariadas.size) // tamanho do Map - 2

chavesVariadas.set(123, 'a') // substituir o valor inicial
chavesVariadas.set(321, 'b') // adicionar valor no Map
console.log(chavesVariadas)



