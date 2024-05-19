class Avo {
  constructor(sobrenome){
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'Professor'){ //construtor do pai
    super(sobrenome) // chama o construtor da classe pai, nesse caso da classe Avo
    this.profissao = profissao
  }
}

class Filho extends Pai{
  constructor(){
    super('Silva')
  }
}

const filho = new Filho()
console.log(filho)