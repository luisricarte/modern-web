// tagged templates - processa o template dentro de uma função
const tag = (partes, ...valores) => {
  console.log(partes)
  console.log(valores)
  return 'outra coisa'
}

const aluno = 'GUi'
const situacao = 'aprovado'
console.log(tag `${aluno} está ${situacao}`)