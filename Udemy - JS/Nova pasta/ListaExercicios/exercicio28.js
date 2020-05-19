function VetorPar(numerosVetor){
    let quantidadePar = 0
    let quantidadeImpar = 0
    for(let i = 0; i < numerosVetor.lenght;i++){
        if(numerosVetor[i] % 2 == 0){
            quantidadePar++
        }
        else{
            quantidadeImpar++
        }
    }
    console.log(`Existem ${quantidadePar} números Pares e ${quantidadeImpar} números Impares`)
}

vetor = [1,2,3,4,5,6,7,8,9,10]
VetorPar(vetor)
