//Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
//da propriedade `andando` para o valor booleano que representa "falso".

let pessoa = [{
    nome : 'Astolpho',
    sobrenome : 'Pereira',
    genero : 'masculino',
    idade : 19,
    altura : 1.82,
    peso : 89,
    andando : false,
    caminhouQuantosMetros : 0
}];

function Parar(stop){
    for(let pararPessoa of pessoa){
        if(pararPessoa.andando != false){
            return true
        }
    }
}

console.log(Parar())
console.log(pessoa)