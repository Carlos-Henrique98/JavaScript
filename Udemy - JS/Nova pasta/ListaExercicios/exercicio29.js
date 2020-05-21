function IntervaloNumero(vetor){
    let qtdVetorD = 0;
    let qtdVetorF = 0;
    for(let i = 0; i< vetor.length;i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            qtdVetorD++;
        }
        else
        {
            qtdVetorF++
        }
    }

    return `Existem ${qtdVetorD} números dentro do intervalo
    Existem ${qtdVetorF} números fora do intervalo`
    
}

vetor = [ 5,6,11,12]
console.log(IntervaloNumero(vetor))