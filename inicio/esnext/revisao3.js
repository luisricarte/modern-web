// ES8: Object.values / Object.entries

const obj = { a: 1, b: 2, c: 3}

console.log( Object.values(obj)) // retorna somente os valores
console.log( Object.entries(obj)) // retorna um array de arrays com os pares, chave na posição 0 e valor na posição 1

const nome = 'Carla'
const pessoa = {
  nome, ola() { return 'olá'}
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal { 

}
class Cachorro extends Animal {
  falar(fala= 'auau') {
    return fala}
}


console.log(new Cachorro().falar())