//Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
//comentários inline ao lado da instrução para mostrar qual foi a resposta
//retornada)

let pessoa = [{
    nome: 'Astholpo',
    sobrenome: 'Pereira',
    genero: 'masculino',
    idade: 19,
    altura: 1.82,
    peso: 89,
    andando: false,
    caminhouQuantosMetros: 0
}];

//Primeira Forma

// function idadeAtual(){
//     let idadeN = 3
//     for(let idadeNova of pessoa){
//         idadeN = idadeNova.idade + idadeN
//         return idadeN
//     }
// }

// console.log('Astholpo tem ' + idadeAtual()+ ' anos!')

//Segunda Forma

// function idadeAtual(){
//     for(let idadeNova of pessoa){
//         return  idadeNova.idade
//     }
// }

// let idade = 3
// console.log(`Astholpo tem ${idadeAtual() + idade} anos` )

//Terceira forma

function IdadeAtual(idade){
    for(let idadeNova of pessoa){
        return idadeNova.idade + idade
    }
}

console.log(`Astholpo tem `+ IdadeAtual(3) + ` anos`)

//Astholpo tem 22 anos