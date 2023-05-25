const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res) => {
  res.send(database.getProdutos()) // converter para JSON (método send)

})

app.get('/produtos/:id', (req, res) => { // :id - acessa o parâmetro id.
  res.send(database.getProduto(req.params.id)) // converter para JSON (método send)
  //!! o :id fica dentro de req.params -> nesse caso, req(uest).params.id
})

app.post('/produtos', (req,res) => {
  const produto = database.salvarProduto({
    nome: req.body.nome, //passa no body do post um objeto com nome e preco
    preco: req.body.preco
  })
  res.send(produto) //retorna o objeto criado
  //JSON
})

app.put('/produtos/:id', (req,res,next) => { 
  const produto = database.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
    id: req.params.id,
  })
  res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) =>{
  const produto = database.excluirProduto(req.params.id)
  res.send(`o produto excluído foi: ${produto.nome}`)
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta localhost:${porta}.`)
})



// app.get('/produtos', (req, res, next) => {
//   console.log('Middleware 1...')
//   next() // a ordem importa! 
//   // se eu chamar a primeira requisição, como ele não tem 'next()' ele só vai executar a resposta de baixo.

// })


// app.use() 
// sempre vai respoder! (qualquer que seja)
