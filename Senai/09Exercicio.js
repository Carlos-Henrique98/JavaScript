//Qual o nome completo da pessoa? (Use a instrução para responder e comentários
//inline ao lado da instrução para mostrar qual foi a resposta retornada)

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

// for(let nomeCompleto of pessoa){
//     console.log(`Nome Completo: ${nomeCompleto.nome} ${nomeCompleto.sobrenome}`)
// }

function nomeCompleto(){
    for(let nomeP of pessoa){
        console.log(`Nome Completo: ${nomeP.nome} ${nomeP.sobrenome}`)
    }
}
//Nome Completo: Astolpho Pereira