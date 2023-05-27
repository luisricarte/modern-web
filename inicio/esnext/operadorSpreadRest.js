// operador ..rest(juntar) / spread (espalhar)
// usar rest como parâmetro de função

// usar spread como objeto
const funcionario = { nome: 'Maria', salario: 1234.5}
const clone = { ativo: true, ...funcionario} 

console.log(clone)
//{ ativo: true, nome: 'Maria', salario: 1234.5 }

// usar spread com array
const grupoA = ['Joao', 'duds', 'gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']

console.log(grupoFinal)
//[ 'Maria', 'Joao', 'duds', 'gloria', 'Rafaela' ]