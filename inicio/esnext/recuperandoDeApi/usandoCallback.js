//sem promises (callback)

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    http.get(url, resolve => {
      let resultado = ''

      resolve.on('data', dados => {
        resultado += dados
      })

      resolve.on('end', () => {
        callback(JSON.parse(resultado))
      })
    } )
}


let nomes = []
getTurma('A', alunos => {
  //console.log(alunos) 
  nomes = nomes.concat(alunos.map(a=> `A: ${a.nome}`))
  getTurma('B', alunos => {
    nomes = nomes.concat(alunos.map(a=> `B: ${a.nome}`))
    getTurma('C', alunos => {
      nomes = nomes.concat(alunos.map(a=> `C: ${a.nome}`))
      console.log(nomes)
    })
  })

})