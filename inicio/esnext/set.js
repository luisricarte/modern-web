// não aceita repetição! /não indexada [não da pra acessar a posição]

const times = new Set()
times.add('Vasco')
times.add('Sao paulo').add('Palmeiras').add('Corinthians').add('Flamengo')
times.add('Vasco') // não será adicionado duas vezes

console.log(times)
