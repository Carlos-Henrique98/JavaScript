//Qual a altura da pessoa? (Use a instrução para responder e comentários
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

// for(let alturaPessoa of pessoa){
//     console.log(`${alturaPessoa.nome} ${alturaPessoa.sobrenome} tem ${alturaPessoa.altura}Cm`)
// }

function alturaPessoa(){
    for(let altura of pessoa){
    console.log(`${altura.nome} ${altura.sobrenome} tem ${altura.altura}Cm`)
    }
}

pesoPessoa()

//Astholpo Pereira tem 1.82cm