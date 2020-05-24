//Qual o peso da pessoa? (Use a instrução para responder e comentários
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

// for(let pesoPessoa of pessoa){
//     console.log(`${pesoPessoa.nome} ${pesoPessoa.sobrenome} tem ${pesoPessoa.peso}Kg`)
// }

function pesoPessoa(){
    for(let pesoP of pessoa){
        console.log(`${pesoP.nome} ${pesoP.sobrenome} tem ${pesoP.peso}Kg`)
    }
}

pesoPessoa()

//Astholpo Pereira tem 89Kg!