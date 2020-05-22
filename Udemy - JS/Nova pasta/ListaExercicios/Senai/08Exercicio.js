//Crie um método chamado `mostrarAltura` que retorne a frase:
//- "Minha altura é [ALTURA]m."

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

for(let alturaPessoa of pessoa){
    console.log(`Minha altura é ${alturaPessoa.altura}m. `)
}

//Minha altura é 1.82m.