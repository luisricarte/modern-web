function criarObjeto(nome, altura) { 
    return {
        nome: nome || 'João',
        altura: altura || 1.77,
    }
}

console.log(criarObjeto('teste'))