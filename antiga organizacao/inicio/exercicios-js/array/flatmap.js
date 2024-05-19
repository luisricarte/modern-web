const escola = [
  {
    nome: 'Turma M1',
    alunos: [
      {
        nome: 'Gustavo',
        nota: 7.1
      },
      {
        nome: 'Maria',
        nota: 5.2
      },
      {
        nome: 'Duds',
        nota: 7.0
      }
    ]
  },
  {
    nome: 'Turma M2',
    alunos: [
      {
        nome: 'Gustavo',
        nota: 6.2
      },
      {
        nome: 'Alanna',
        nota: 8.1
      },
      {
        nome: 'Alice',
        nota: 5.6
      }
    ]
  }
]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

notas1 = escola.map(getNotasDaTurma)

// Definindo Flat Map
Array.prototype.flatMap = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}


//usando o Flat Map
// ao invés de ter um Array de Arrays como resultado, posso usar o flat map
// para juntar os resultados

const notas2 = escola.flatMap(getNotasDaTurma)

console.log(notas2)