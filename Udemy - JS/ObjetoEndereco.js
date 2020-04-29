let endereco = {
    rua : '= Rua1',
    numero : '= numero',
    cep : '= cep'
};

function exibirEndereco(endereco){
    for(let chave in endereco){
        console.log(chave,endereco[chave]);
    }
}

exibirEndereco(endereco);