const _ = require('../../usandoModulosTerceiros')
const moduloA = require('../../nodeA')
_.teste

const c = require('./pastaC/index')
console.log(c.ola2)

const http = require('http')
http.createServer((req,res) => {
  res.write('Bom dia!')
  res.end()
}).listen(8080)