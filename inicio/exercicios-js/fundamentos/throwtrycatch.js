let obj = { nome: 'duds'}

function trycatch(obj) {
  try{
    console.log(obj.nome.toUpperCase() + '!!')
  } catch(e){
    tratamentoDeErro(e)
  } finally {
    console.log('provavelmente vai dar certo')
  }
}

function tratamentoDeErro(error){
  throw new Error('ocasionou um erro!')
}


trycatch(obj)