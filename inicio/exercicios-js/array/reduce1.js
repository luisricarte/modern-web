const alunos = [
    { nome: 'João', nota: 7.3 , bolsista: false},
    { nome: 'Luis', nota: 2.1 , bolsista: true},
    { nome: 'Lucas', nota: 4.2 , bolsista: false},
    { nome: 'Maria', nota: 8.1 , bolsista: true},
]
let valorInicial = 0 
const resultado = alunos.map(a => a.nota)
.reduce(function(acumulador,atual) {
    console.log(acumulador,atual)
    return acumulador + atual //preciso dar return, não posso usar arrow.
}, valorInicial) //posso passar um valor inicial. 
// serve como um acumulador, somando todos os elementos percorridos no array.

console.log(resultado)