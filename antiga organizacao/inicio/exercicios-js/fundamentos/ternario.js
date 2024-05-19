var nota = 7.0
var nfaltas = 17

var ortest = nota >= 7.0 || faltas(nfaltas)
var andtest = nota >= 7.0 && faltas(nfaltas)

function passou(nota){
  console.log( ortest ? 'Aprovado' : 'Reprovado')
  console.log( andtest ? 'Aprovado' : 'Reprovado')
}

passou(nota)

function faltas(nfaltas) {
  return nfaltas>= 16 ? false : true
}