// Case 1

const talkAfter = (sec,phrase) => {
    // Some Asynchronous operation
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(phrase)
            //reject(phrase)
        }, sec * 1000)
    })
}

talkAfter(3, 'Its a Resolve Promise')
    .then(resolve => resolve.concat(' - OK!'))
    .then(resolveAndAdded => console.log(resolveAndAdded))
    .catch(e => console.log(e)) // if the reject function was activated 

// Case 2
// HTTP Request
const http = require('http');

const getClass = param => {
    const url = `http://files.cod3r.com.br/curso-js/turma${param}.json`
    return new Promise((resolve, reject) => {
        http.get(url,res => {
            let result = ''
            
            res.on('data', dados => {
                result += dados
            })

            res.on('end', ()=>{
                try{
                    resolve(JSON.parse(result))
                } catch (e){
                    reject(e)
                }
            })
        })
    })
}

let nomes = []
getClass('A').then( result => {
    nomes = nomes.concat(result.map(a => `A: ${a.nome}`))
    getClass('B').then( result => {
            nomes = nomes.concat(result.map(a => `B: ${a.nome}`))
            getClass('C').then( result => {
                nomes = nomes.concat(result.map(c =>`C: ${c.nome}`))
                console.log(nomes)
            } )
        })
    }
)

// Case 3 

Promise.all([getClass('A'), getClass('B'), getClass('C')])
    .then(turmas => [].concat(...turmas))
    .then(turmas => turmas.map(alunos => alunos.nome))
    .then(turmas => console.log(turmas))
    .catch(e => console.log(e.message))