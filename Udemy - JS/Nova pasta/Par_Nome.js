const saudacao = 'Opa'

function exec(){
    const saudacao = 'Falaa'
    return saudacao
}

const cliente =  {
    nome : 'Pedro',
    idade : 19,
    peso : 98,
    endereco : {
        logradouro : 'Rua dos Coroas',
        numero : 120
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);