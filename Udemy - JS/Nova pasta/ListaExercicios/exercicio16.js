function Calculadora(numero1,numero2,sinal){
    switch(sinal){
        case '+':
            console.log(numero1 + numero2)
            break;
        
        case '-':
            console.log(numero1 - numero2)
            break;

        case '*':
            console.log(numero1 * numero2)
            break;

        case '/':
            console.log(numero1 / numero2)
            break;
        
        default:
            console.log('Valor invalido')
            break;
    }
}

Calculadora(3,2,'+')
Calculadora(10,2,'*')
Calculadora(20,2,'/')
Calculadora(6,3,'-')