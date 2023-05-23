const fs = require('fs')

// leitura síncrona...
// estratégia não muito interessante já que ele vai carregar todo o arquivo até ter uma resposta
// o que pode acabar pesando e demorando muito para receber uma resposta
// travar o event loop
const caminho = __dirname + '/arquivo.json'

const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(`síncrona: ${conteudo}\n`)

//leitura assíncrona...
fs.readFile(caminho, 'utf-8', (err, conteudo)=> {
  const config = JSON.parse(conteudo)
  console.log(`assíncrona: ${config.db.host}:${config.db.port}`)
})


const config = require('./arquivo.json')


console.log(config.db ,'\n')



fs.readdir(__dirname, (err,arquivos)=>{
  console.log('Conteúdo da pasta...')
  console.log(arquivos,'\n')
})