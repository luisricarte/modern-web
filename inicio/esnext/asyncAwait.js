//com promises

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve,reject) => {
      http.get(url, res => {
        let resultado = ''

      res.on('data', dados => {
        resultado += dados
      })

      res.on('end', () => {
          try{
            resolve(JSON.parse(resultado))
          } catch(e){
            reject(e)
          }
      })})
    })

}


// Recurso do ES8
// Objetivo de simplicar o uso de promises...
let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC) // acessa todos os alunos de todas as turmas e da concat
} // returna um objeto AsyncFunction

console.log(obterAlunos()
.then(alunos => alunos.map(aluno => aluno.nome))
.then(nomes => console.log(nomes)))

// acessa todos os alunos, depois acessa cada aluno e printa o nome