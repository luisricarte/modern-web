const valor = {
    valorizao: 123,
    nome: 'nome do dado',
    some(){ return valorizao} // funções não são passadas para tipo JSON
}

console.log(JSON.stringify(valor))

console.log(JSON.parse('{ "a": 1 , "b": 2 , "c": 3}'))
//características relevantes: 
// deve ser iniciado com aspas simples e chaves '{}'
// os objetos devem ter > "a": VALOR (aspas duplas, nome. Dois pontos, valor.)
