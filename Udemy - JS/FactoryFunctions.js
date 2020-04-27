const celular ={
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria : 5000,
    ligar : function(){
        console.log("Fazendo ligação...");
    }
}

//Factory Functions

function CriarCelular(marcaCelular,tamanhoTela,capacidadeBateria,preco){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        preco,
        ligar(){
            console.log('Fazendo ligacao...');
        }
    }
}

const celular1 = CriarCelular('Iphone',5.5,5000,3600);
console.log(celular1);