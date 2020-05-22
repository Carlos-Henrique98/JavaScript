//Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
//alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
//for chamado.

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


pessoa.fazerAniversario = function(idade){
    pessoa.idade = pessoa.idade + idade
}

pessoa.fazerAniversario(1)

console.log(pessoa.idade)






