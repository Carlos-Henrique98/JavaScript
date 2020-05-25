//Agora, vamos deixar a brincadeira um pouco mais divertida! :D
//Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
//retornar a string:
//- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

//Só que, antes de retornar a string, você vai fazer algumas validações:
//- Se o `genero` de `pessoa` for "Feminino", a frase acima, no início da
//apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
//- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
//palavra "ano" ao invés de "anos", pois é singular;
// Se a quantidade de metros caminhados for igual a `1`, então a palavra que
//deve conter no retorno da frase acima é "metro" no lugar de "metros".
//- Para cada validação, você irá declarar uma variável localmente (dentro do
//método), que será concatenada com a frase de retorno, mostrando a resposta
//correta, de acordo com os dados inseridos no objeto.

let pessoa = [{
    nome: 'Astholpo',
    sobrenome: 'Pereira',
    genero: 'feminino',
    idade: 19,
    altura: 1.82,
    peso: 89,
    andando: false,
    caminhouQuantosMetros: 0
}];

let trocaLetra = `Olá, eu sou o ${dadoPessoa.nome}, tenho ${dadoPessoa.idade} anos, ${dadoPessoa.altura} ,meu peso é ${dadoPessoa.peso} e,só hoje, eu já caminhei ...`
function Apresentacao(){
    for(let dadoPessoa of pessoa){
        if(dadoPessoa.genero == 'feminino'){
            let resultadoLetra = trocaLetra.replace('o','a')
            console.log(resultadoLetra)
        }
        if(dadoPessoa.idade == 1){
            let resultadoIdade = trocaLetra.replace('anos', 'ano')
            console.log(resultadoIdade)
        }
        if(dadoPessoa.caminhouQuantosMetros == 1){
            let resultadoMetros = trocaLetra.replace('metros','metro')
            console.log(resultadoMetros)
        }
    }
}

Apresentacao()