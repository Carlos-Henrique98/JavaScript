//Faça a `pessoa` fazer 3 aniversários.

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

function FazerAniversario(){
    for(let aniversario of pessoa){
        for(aniversario.idade = 19; aniversario.idade <= 22; aniversario.idade++){
            if(aniversario.idade == 19){
                console.log(`Idade Atual: ${aniversario.idade} anos!`)
            }
            else{
                console.log(`Idade futura: ${aniversario.idade} anos!`)  
            }
        }
    }
}
FazerAniversario()

