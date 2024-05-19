//OBJECT - PREVENT EXTENSIONS 
const produto = Object.preventExtensions({
    nome: 'Qlquer', preco: 123, tag: 'promotion'
})

console.log('Extensível:', Object.isExtensible(produto)) // não posso adicionar novas chaves

produto.nome = 'Borracha' // posso alterar as chaves. Qlquer > Borracha
produto.desc = 'Borracha de descricao'
delete produto.tag // posso alterar as chaves.
console.log(produto)

//OBJECT - SEAL
const pessoa = {nome: 'juliana', idade: 35}
Object.seal(pessoa)

console.log( 'Selado?', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // não é possível adicionar novas chaves
delete pessoa.nome // não é possível alterar as chaves
pessoa.idade = 29 // a idade da pessoa foi alterada
console.log(pessoa)