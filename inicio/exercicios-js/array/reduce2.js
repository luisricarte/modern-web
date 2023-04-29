const alunos = [
    { nome: 'João', nota: 7.3 , bolsista: false},
    { nome: 'Luis', nota: 2.1 , bolsista: false},
    { nome: 'Lucas', nota: 4.2 , bolsista: false},
    { nome: 'Maria', nota: 8.1 , bolsista: true},
]


// Desafio 1 : Todos os alunos são bolsistas? 
const resultado = alunos.map(alunos=>alunos.bolsista).reduce((resultado,bolsista)=> resultado&&bolsista)
console.log(resultado)
// Desafio 2 : Algum aluno é bolsista?
const algumBolsista = alunos.map(alunos=>alunos.bolsista).reduce((resultado,bolsista)=> resultado||bolsista)
console.log(algumBolsista)