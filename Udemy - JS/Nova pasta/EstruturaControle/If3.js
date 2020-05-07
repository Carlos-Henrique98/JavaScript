function imprimirResultado(nota){
    if(nota >=7){
        console.log('Aprovado - Nota: ', nota)
    }
    else{
        console.log('Reprovado - Nota: ', nota)
    }
}

imprimirResultado(9)
imprimirResultado(2)
imprimirResultado('Epa')