const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 43141, fragil: true},
    { nome: 'Copo de Vidro', preco: 222, fragil: true},
    { nome: 'Copo de Plástico', preco: 15, fragil: false}
]

console.log('Produtos Frágeis:',produtos.filter(p => p.fragil===true?true:false))
console.log('Produtos Caros (Valor maior ou igual a R$ 500,00)', produtos.filter(p => p.preco>=500?true:false))