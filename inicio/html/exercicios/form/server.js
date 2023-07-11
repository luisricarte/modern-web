const bodyParser = require('body-parser')
const express = require('express')
const app = express()


app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req,resp) =>{
  console.log(req.body)
  resp.send('PARABÉNS')
})

app.listen(5500)