console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3 

// o principal é o module.exports

module.exports = {estou: 'publico'} // se for um novo objeto deve ser sempre no module.exports
 