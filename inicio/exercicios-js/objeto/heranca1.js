const ferrari = {
    modelo: 'F40',
    velMax:  340
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

// o objeto criado tem uma referencia para o seu prototipo
// para não ter reuso! usar herança. dddddddd