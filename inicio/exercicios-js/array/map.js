const nums = [1 , 2, 3, 4]

let resultado = nums.map(e => e*2)
//map não tem efeito colateral. Cria um novo array. 
console.log(nums)
console.log(resultado)
let real  = nums.map(e => `R$ ${e}`)
console.log(real)

//encadeando 
resultado = nums.map(e=>e*2).map(e=>`R$ ${parseFloat(e).toFixed(2).replace('.',',')}`)
console.log(resultado)