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

Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])        // resolve todas as promises (retorna quando todas 'resolverem')
  .then(turmas => [].concat(...turmas))                         // junta todos os alunos -
  .then(alunos => alunos.map(aluno => console.log(aluno.nome))) // acessa todos os alunos e printa os nomes


// -- minha solução utilizando apenas .map
  // .then(x => 
  //   x[2].map(x=>console.log(`C: ${x.nome}`),
  //   x[0].map(x=>console.log(`A: ${x.nome}`)), 
  //   x[1].map(x=>console.log(`B: ${x.nome}`)),
  // )) 

