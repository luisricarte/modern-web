function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Aula de Bem Vindo', 123)
const aula2 = new Aula('Aula de Aula 2 ', 321)

//simulando o new
function novaAula(...params) { // criando um objeto Aula
    const obj = {}
    obj.__proto__ = Aula.prototype
    Aula.apply(obj, params)
    return obj
}

function novo(f, ...params) { // criando um objeto De algum tipo.
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3  = novaAula( 'Bem vindo', 1231)
const aula4 = novo(Aula, 'Bem vindo 2', 123141)

console.log( aula3, aula4)