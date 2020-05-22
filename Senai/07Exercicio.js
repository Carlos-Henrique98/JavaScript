//Crie um método chamado `mostrarPeso`, que retorne a frase:
//- "Eu peso [PESO]Kg."

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

for(let pesoPessoa of pessoa){
    console.log(`Eu peso ${pesoPessoa.peso}Kg!`)
}

//Eu peso 89kg!