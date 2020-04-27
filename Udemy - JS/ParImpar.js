ParImparNumero(6);

function ParImparNumero(numero){
    for(let i = 0; i <= numero; i++){
        if(i % 2 === 0){
            console.log(i,"- PAR");
        }
        else{
            console.log(i,"- IMPAR");
        }
    }
}