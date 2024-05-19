// Case 3 

Promise.all([getClass('A'), getClass('B'), getClass('C')])
    .then(turmas => [].concat(...turmas))
    .then(turmas => turmas.map(alunos => alunos.nome))
    .then(turmas => console.log(turmas))
    .catch(e => console.log(e.message))