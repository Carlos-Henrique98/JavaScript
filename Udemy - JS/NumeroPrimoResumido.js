MostrarNumeroPrimo(20);

function MostrarNumeroPrimo(primo){
    for(let numero = 2; numero <= primo; numero++)
    {
        if(NumeroPrimo(numero)){
            console.log(numero);
        }
    }
}

function NumeroPrimo(numero){
    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor ==0){
            return false;
        }
    }
    return true;
}