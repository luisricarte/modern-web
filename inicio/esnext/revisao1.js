//let e const 
//let = escopo de bloco!
//var não tem escopo de bloco!

{ let a = 3}
//console.log(a) ! erro

// Template String
const produto = "PRODUTO"
console.log(`${produto} é caro!`)

//Desctructuring

const [l, e, ...tras] = "Cod3r" // l = C, e = o, tras = ['d', '3', 'r']

const {idade: i, nome} = { nome: 'Ana', idade: 9}
console.log(i, nome )