function NumeroNegativos(numeros){
    let numerosNegativos = 0
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] < 0){
            numerosNegativos++
        }
    }
    console.log(`Existem ${numerosNegativos} números negativos`)
}

vetor = [-1,2,3,4,5,6,7,-8,9,-10]
NumeroNegativos(vetor)