NumeroPrimo(15);

function NumeroPrimo(numero){
    for(let i = 2; i <= numero; i++){
        let Primo = true;
        for(let divisor = 2; divisor < i; divisor++){
            if(i % divisor == 0)
            {
                Primo = false;
                break;
            }
        }
        if(Primo){
            console.log(i);
        }


    }
}