const notas = [9.0,4.5,3.4,6.9,8.9,9.9]

//Sem CallBack
const notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com CallBack
const notasBaixas2 = notas.filter(function (notas){
    return notas < 7
})

console.log(notasBaixas2)


//Com CallBack
const notasMenorQ7 = notas => notas < 7
const notasBaixa3 = notas.filter(notasMenorQ7)
console.log(notasBaixa3)