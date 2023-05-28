function falarDepoisDe(segundos, frase) {
  return new Promise((resolve,reject) => {

      setTimeout(() => {
        resolve(frase) // o resolve só aceita um único parâmetro
      }, segundos * 1000)

  })
}

falarDepoisDe(1, 'Testando!')
  .then(frase => frase.concat('estou ainda testando?'))
  .then(outraFrase => console.log(outraFrase))
  .catch(e => console.log(e)) // tratamento de erro em uma promise! 