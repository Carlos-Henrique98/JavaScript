//Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
//com as distâncias diferentes passadas por parâmetro.

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
        return andarP.caminhouQuantosMetros + andando
    }
}

console.log(`Astholpo andou ${andar(4)} metros`)