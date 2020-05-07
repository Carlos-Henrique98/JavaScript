function numeroAleatorio(inicio,fim){
    const valor = Math.random() * (fim - inicio) +inicio
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = numeroAleatorio(-1,10)
    console.log(`O número escolhido foi: ${opcao}.`)
}

console.log('Até a proxima')