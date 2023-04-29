const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // o último elemento é removido

pilotos.push(('Verstappen')) // adiciona na última posição
pilotos.shift() //remove o primeiro elemento
pilotos.unshift('Massa') //adiciona na primeira posição

//splice
pilotos.splice(2,0,'Bottas', 'Halmilton')
console.log(pilotos) //a partir do número 2, delete os próximos 0 e adicione 'Bottas' 
//e 'Halmilton'

const novoArray = pilotos.slice(2) //retorna um novo array a partir do índice N-1 
//retorna um novo array
//slice = pedaço
 
const testeSlice = pilotos.slice(1,4) //retorna um novo array incluindo o primeiro
// e não incluindo o último