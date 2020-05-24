//Qual a idade da pessoa? (Use a instrução para responder e comentários
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

// for(let idadePessoa of pessoa){
//     console.log(`${idadePessoa.nome} ${idadePessoa.sobrenome} tem ${idadePessoa.idade} anos`)
// }

function idadePessoa(){
    for(let idadeP of pessoa){
        console.log(`${idadeP.nome} ${idadeP.sobrenome} tem ${idadeP.idade} anos`)
    }
}

idadePessoa()

//Astholpo Pereira tem 19 anos