//Crie um método chamado `mostrarIdade`, que retorne a frase:
//- "Olá, eu tenho [IDADE] anos!"

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

for(let idadePessoa of pessoa){
    console.log(`Olá, eu tenho ${idadePessoa.idade} anos!`)
}

//Olá, eu tenho 19 anos!