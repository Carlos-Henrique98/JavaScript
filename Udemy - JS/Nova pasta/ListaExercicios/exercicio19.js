function Lanchonete(codigo,quantidade){
    switch(codigo){
        case 100:
            return quantidade * 3
            break;
        case 200:
            return quantidade * 4
            break;
        case 300:
            return quantidade * 5.5
            break;
        case 400:
            return quantidade * 7.5
            break;
        case 500:
            return quantidade * 3.5
            break;
        case 600:
            return quantidade * 2.8
            break;
    }
}

console.log(`Cachorro Quente: R$${Lanchonete(100, 2)}`)
console.log(`Hambúguer Simples: R$${Lanchonete(200,2)}`)
console.log(`Cheeseburguer:R$${Lanchonete(300,4)}`)
console.log(`Bauru: R$${Lanchonete(400,5)}`)
console.log(`Refrigenrante: R$${Lanchonete(500,3)}`)
console.log(`Suco: R$${Lanchonete(600,2)}`)
