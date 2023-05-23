const fs = require('fs')

const produto = {
  nome: 'Celular',
  preco: 1249.99,
  desconto: 0.15
}

//criação de um arquivo (posso criar um objeto no modo JSON)!

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
  console.log(err ? err : 'Arquivo Salvo')
})