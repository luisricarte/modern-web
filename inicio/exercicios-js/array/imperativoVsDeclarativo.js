const alunos = [ 
  { nome: 'Joao', nota: 7.9},
  { nome: 'Maria', nota: 9.2},
  { nome: 'Aluno3', nota: 10.0},
  { nome: 'Aluno4', nota: 6.4},
]

//Abordagem imperativa

let total1 = 0
for (let i = 0; i < alunos.length; i++){
  total1 +=alunos[i].nota
}

console.log(total1 / alunos.length)

//Abordagem declarativa
const recuperaNotas = alunos => alunos.nota
const somaNotas = (atual,acumulador) => atual + acumulador
console.log(alunos.map(recuperaNotas).reduce(somaNotas)/alunos.length)
