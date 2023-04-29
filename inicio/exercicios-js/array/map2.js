const carrinho = [
    '{ "nome": "Borracha" , "preco": 3.45 }', 
    '{ "nome": "Cadernoa" , "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Canetas", "preco": 7.50}'
]

// Retornar o array com apenas os preços.
const object = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(carrinho=>JSON.parse(carrinho)).map(carrinho => carrinho.preco)
console.log(resultado)

