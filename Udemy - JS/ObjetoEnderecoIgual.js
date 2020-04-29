function endereco(rua,numero,cep){
    this.rua = rua;
    this.numero = numero;
    this.cep = cep;
}

const endereco1 = new endereco('Rua1', 'Numero1','Cep1');
const endereco2 = new endereco ('Rua2', 'Numero2', 'Cep2');

function PropriedadesIguais(endereco1,endereco2){
    return endereco1.rua === endereco2.rua &&
    endereco1.numero === endereco2.numero &&
    endereco1.cep === endereco2.cep;
}

console.log(PropriedadesIguais(endereco1,endereco2));

function EnderecoIguais(endereco1,endereco2){
    return endereco1 === endereco2;
}

console.log(EnderecoIguais(endereco1,endereco2));