//npm i --save axios 
//npm init

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const resgataChinesesF = funcionario => funcionario.pais === 'China' && funcionario.genero === 'F'? true:false
const menorSalario = (func,funcAtual) => { return func.salario < funcAtual.salario ? func : funcAtual}

const requisicao = axios.get(url).then(response => {
  const funcionarios = response.data

  const result = funcionarios.filter(resgataChinesesF).reduce(menorSalario)
  console.log(result)
})
