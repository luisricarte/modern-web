const porta = 3003

const express = require('express')
const app = express()


app.get('/produtos', (req, res, next) => {
  res.send({ name: 'Notebook', preco: 123.42}) // converter para JSON (método send)

})



app.listen(porta, () => {
  console.log(`Servidor executando na porta localhost:${porta}.`)
})