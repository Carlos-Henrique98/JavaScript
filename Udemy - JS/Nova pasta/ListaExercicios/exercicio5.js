//Substituir ponto por Virgula

function SubstituirPonto(valorDecimal){
    valorReais = `R$ ${valorDecimal.toFixed(2).toString().replace('.', ',')}` 
    console.log(valorReais)
}

SubstituirPonto(0.1 + 0.2)