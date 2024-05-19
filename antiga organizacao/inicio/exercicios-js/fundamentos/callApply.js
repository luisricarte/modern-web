function getPreco(imposto = 0, moeda = 'R$'){

    return `${moeda} ${this.preco * (1- this.desc) * (1+imposto)}`
}

const produto = {
    nome: 'Notebok',
    preco: 4589,
    desc: 0.15,
    getPreco,
}

const carro = {
    preco:23231,
    desc: 0.21
}

console.log(getPreco.call(carro)); //consigo atribuir o objeto carro como contexto de execução 
console.log(getPreco.apply(carro)); 
