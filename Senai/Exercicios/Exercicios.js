/*
Declare uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `genero` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
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

console.log(pessoa)

//===============================================================================
/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

function fazerAniversario(idade){
    for(let aniversario of pessoa){
        return aniversario.idade += idade
    }
}
console.log()
console.log(`Idade: `+fazerAniversario(1))


//===============================================================================
/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.caminhouQuantosMetros =0,

pessoa.andar = function(QuantosMetros){
    pessoa.caminhouQuantosMetros = pessoa.caminhouQuantosMetros + QuantosMetros
}

pessoa.andar(2)

console.log(pessoa.caminhouQuantosMetros)

function Andar(){
    if(pessoa.caminhouQuantosMetros > 0){
        return true
    }
}

console.log(Andar())

//================================================================================
/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

function Parar(stop){
    for(let pararPessoa of pessoa){
        if(pararPessoa.andando != false){
            return true
        }
    }
}

//============================================================================
/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

function nomeCompleto(){
    for(let nome of pessoa){
        console.log(`Olá! Meu nome é ${nome.nome} ${nome.sobrenome}!`)
    }
}

nomeCompleto()

//============================================================================
/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

for(let idadePessoa of pessoa){
    console.log(`Olá, eu tenho ${idadePessoa.idade} anos!`)
}

//Olá, eu tenho 19 anos!

//============================================================================
/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
for(let pesoPessoa of pessoa){
    console.log(`Eu peso ${pesoPessoa.peso}Kg!`)
}

//Eu peso 89kg!

//============================================================================
/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
for(let alturaPessoa of pessoa){
    console.log(`Minha altura é ${alturaPessoa.altura}m.`)
}

//Minha altura é 1.82m.

//============================================================================
/*
Agora vamos trabalhar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

function nomeCompleto(){
    for(let nomeP of pessoa){
        console.log(`Nome Completo: ${nomeP.nome} ${nomeP.sobrenome}`)
    }
}
//Nome Completo: Astolpho Pereira

//============================================================================
/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
function idadePessoa(){
    for(let idadeP of pessoa){
        console.log(`${idadeP.nome} ${idadeP.sobrenome} tem ${idadeP.idade} anos`)
    }
}

idadePessoa()

//Astholpo Pereira tem 19 anos

//============================================================================
/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

function pesoPessoa(){
    for(let pesoP of pessoa){
        console.log(`${pesoP.nome} ${pesoP.sobrenome} tem ${pesoP.peso}Kg`)
    }
}

pesoPessoa()

//Astholpo Pereira tem 89Kg!

//============================================================================
/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

function alturaPessoa(){
    for(let altura of pessoa){
    console.log(`${altura.nome} ${altura.sobrenome} tem ${altura.altura}Cm`)
    }
}

pesoPessoa()

//Astholpo Pereira tem 1.82cm

//============================================================================
/*
Faça a `pessoa` fazer 3 aniversários.
*/

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

//============================================================================
/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

function IdadeAtual(idade){
    for(let idadeNova of pessoa){
        return idadeNova.idade + idade
    }
}

console.log(`Astholpo tem `+ IdadeAtual(3) + ` anos`)

//Astholpo tem 22 anos

//============================================================================
/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com as distâncias diferentes passadas por parâmetro.
*/

function andar(andando){
    for(let andarP of pessoa){
        return andarP.caminhouQuantosMetros + andando
    }
}

console.log(`Astholpo andou ${andar(3)} metros`)

//============================================================================
/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

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

//============================================================================
/*
Se a pessoa ainda está andando, faça-a parar.
*/
function PararDeAndar(andando){
    for(let andarP of pessoa){
       let resultado = andarP.caminhouQuantosMetros + andando 
       if(resultado > 0){
           console.log(`${andarP.nome} parou de andar!`)
           break;
       }
       else{
           console.log(`${andarP.nome} está parado!`)
       }
    }
}

PararDeAndar(3)

//============================================================================
/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

pessoa.parar = function(){
    console.log(this.andando = true)
}

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/



/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/



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