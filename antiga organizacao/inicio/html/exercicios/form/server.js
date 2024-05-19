const bodyParser = require('body-parser')
const express = require('express')
const app = express()


app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req,resp) =>{
  console.log(req.body)
  resp.send('PARABÉNS')
})

app.put('/usuarios/:id', (req,resp) =>{
  console.log(req.param.id)
  console.log(req.body)
  resp.send('PARABÉNS usuário alterado')
})
app.listen(5500)