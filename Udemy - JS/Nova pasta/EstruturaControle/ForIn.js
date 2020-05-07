let notas = [4.5,5.6,9.7,6.8]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome : 'Carlos',
    sobrenome : 'Henrique',
    idade : 19,
    peso : 98
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}