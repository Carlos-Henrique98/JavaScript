//Crie um método chamado `nomeCompleto`, que retorne a frase:
//- "Olá! Meu nome é [NOME] [SOBRENOME]!"

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

function nomeCompleto(){
    for(let nome of pessoa){
        console.log(`Olá! Meu nome é ${nome.nome} ${nome.sobrenome}!`)
    }
}

nomeCompleto()
//Olá, Meu nome é Astholpo Pereira!