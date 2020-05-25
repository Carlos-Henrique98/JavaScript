const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
//console.log(pilotos)
pilotos.pop()
console.log(pilotos)

pilotos.push('Verstappen') //adiciona na ultima posicao
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')//adiciona na primeira posicao
console.log(pilotos)

pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3,1) //remove o massa
console.log(pilotos)

const algunsPilotos = pilotos.splice(2) //novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.splice(1,4)
console.log(algunsPilotos2)