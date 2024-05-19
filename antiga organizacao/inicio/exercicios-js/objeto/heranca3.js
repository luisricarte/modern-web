const pai =  {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'

console.log(filha1.nome, filha1.corCabelo)
console.log(`Nome da filha: ${filha1.nome}, cor do cabelo: ${filha1.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.values(filha1))

console.log(filha1)

const filha2 = Object.create(pai,{nome: {value:'Bia'}})


for(let key in filha1) {
    filha1.hasOwnProperty(key) ?
    console.log(`veio pelo prop obj ${key}`) : console.log(`veio pro herança ${key}`)
}