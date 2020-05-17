//Crie uma função que recebe dois parametros, base e expoente
//e retorne a base elevada ao expoente

function numeroElevado(base,expoente){
    resultado = base ** expoente
    return resultado
}

console.log(numeroElevado(2,3))

function numeroElevado1(base,expoente){
    let resultado = Math.pow(base,expoente)
    return resultado
}

console.log(numeroElevado1(5,2))