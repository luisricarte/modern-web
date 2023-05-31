const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')


function lerArquivo(caminho) {
  return new Promise((resolve,reject) => {
    fs.readFile(caminho, (err,conteudo) => {

      resolve(conteudo.toString())

    })
  })
}


lerArquivo(caminho)
  .then(conteudo => console.log(conteudo))
