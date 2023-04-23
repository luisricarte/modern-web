Object.prototype.attr0 = 'ATUALIZANDO.'
const avo = {attr1: 'A'} //object.prototype
const pai = {__proto__: avo, attr2: 'B'} //avo 
const filho = { __proto__: pai, attr3: 'C'} //pai

console.log(filho.attr1) //o filho herda do pai que herdou do avó.

console.log(filho.attr1, filho.attr2, filho.attr3)

console.log(filho.attr0) //consigo acessar pelo Object.prototype! 

const carro = {
    modelo: 'modelo padrão',
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
             this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `modelo: ${this.modelo}\nvelocidade atual: ${this.velAtual}Km/h \nvelocidade máxima: ${this.velMax}Km/h` 
    }
}
 
const ferrari = { 
    __proto__:carro,
    modelo: 'Carro Brabao',
    velMax: 340,
    velAtual: 120,
    
}

console.log(ferrari.acelerarMais(100));
console.log('|||||||||||||||||||||||||||||||||||||')
console.log(ferrari.status())

console.log('|||||||||||||||||||||||||||||||||||||')

const volvo = {
    __proto__:carro,
    modelo: 'modelo volvo',
    status(){
        return `Modelo Atual: ${this.modelo} ${super.status()}`
    } 
    // atualizou o this.modelo do super para o modelo definido no objeto atual.
    // a velocidade atual e máxima não foi utilizada do objeto super.
    
}

console.log(volvo.status())

console.log('|||||||||||||||||||||||||||||||||||||')
const fiat = {
    // não está sendo definido o SUPER DO OBJETO.

    modelo: 'modelo fiat',
    velAtual: 199,
    status(){
        return `Modelo Atual: ${this.modelo} ${super.status()}`
    } 
    //a definição do prototype é feito na função Object.setPrototypeOf()
}
Object.setPrototypeOf(fiat, carro)
console.log(fiat.status())