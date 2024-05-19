class Lancamento { 
  constructor(nome = 'Genérico', valor = 0){
    this.nome = nome
    this.valor = valor
  }

}

class CicloFinanceiro {
  constructor(mes,ano) {
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }

  addLancamentos(...lancamentos){
    lancamentos.forEach(l => this.lancamentos.push(l))
  }

  sumario(){
    let valorConsolidado = 0 
    this.lancamentos.forEach(l=>{
      valorConsolidado+= l.valor
    })
    return `o valor final é de: ${valorConsolidado}`

  }
}


const salario = new Lancamento('Salário', 45003)
const contaDeLuz = new Lancamento('Conta de LUZ', -2123)

const contas = new CicloFinanceiro(6,2018)
contas.addLancamentos(salario,contaDeLuz)

console.log(contas.sumario())