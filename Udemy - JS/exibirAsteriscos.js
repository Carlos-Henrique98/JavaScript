exibirAsteriscos(6);

function exibirAsteriscos(linhas){
    let soma = '';
    for(let linha = 1; linha <= linhas;linha++){
        soma += '*';
        console.log(soma);
    }

}