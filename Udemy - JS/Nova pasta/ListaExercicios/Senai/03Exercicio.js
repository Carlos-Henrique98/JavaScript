//Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
//características:
//- Esse método deve receber por parâmetro um valor que representará a quantidade
//de metros caminhados;
//- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
//valor dessa propriedade a quantidade passada por parâmetro;
//- Ele deverá modificar o valor da propriedade `andando` para o valor
//booleano que representa "verdadeiro";

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

pessoa.andar = function(caminhouQuantosMetros){
    pessoa.caminhouQuantosMetros = pessoa.caminhouQuantosMetros + caminhouQuantosMetros
}

pessoa.andar(2)

console.log(pessoa.caminhouQuantosMetros)