//A pessoa ainda está andando? (Use a instrução para responder e comentários
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

function andar(andando){
    for(let andarP of pessoa){
        let resultado = andarP.caminhouQuantosMetros + andando
        if(resultado > 0){
            return `Astholpo está andando!\nAndou ${andando} metros! \nR.:`+true
        }
        else
        {
            return 'Astholpo não está andando! R.:'+ false
        }
    }
}

console.log(andar(4))

//Astholpo está andando! R.:true