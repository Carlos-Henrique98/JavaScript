
SomarNumeros(20);
function SomarNumeros(numeros){
    let numerosMultiplos3 = 0;
    let numerosMultiplos5 = 0;
    for(let i = 0; i <= numeros; i++)
    {
        if(i % 3 === 0)
        {
            numerosMultiplos3 += i;
        }
        if(i % 5 === 0)
        {
            numerosMultiplos5 += i;
        }
    }
    console.log(numerosMultiplos5 + numerosMultiplos3);

}