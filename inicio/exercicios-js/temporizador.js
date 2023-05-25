const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/1 * * * * *', () => {console.log('Executando Tarefa 1!', new Date().getSeconds())}) 
// */5 = de 5 em 5 segundos
// 1'* = MINUTO, 2'* = HORA, 3* = DIA DO MÊS, 4'* =MÊS, 5'* = DIA DA SEMANA

setTimeout(() => {
  console.log('Cancelando Tarefa 1!')
  tarefa1.cancel()
}, 20000) // cancela a tarefa 1 após 20 segundos

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] // segunda a sexta
regra.hour = 22
regra.second = 30


const tarefa2 = schedule.scheduleJob(regra, () => {
  console.log('Executando Tarefa 2!', new Date().getSeconds()) // executa sempre no segundo regra.second da  hora regra.hour
})