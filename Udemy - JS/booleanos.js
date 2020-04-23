console.log(`os verdadeiros...`)
console.log(!!3)
console.log(!!-1)
console.log(!!``)
console.log(!!`texto`)
console.log(!![])

console.log(`os falsos...`)
console.log(!!10)
console.log(!!``)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log(`pra finalizar...`)
console.log(!!(`` || null || 0 || ``))

let nome = `Lucas`
console.log(nome || `Desconhecido`)