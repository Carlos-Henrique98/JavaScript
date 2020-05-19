function Funcionario(planoT,salario){
    switch(planoT){
        case 'A':
            console.log(salario + (salario * 10/100))
            break;
        case 'B':
            console.log(salario + (salario * 15/100))
            break;
        case 'C':
            console.log(salario + (salario * 20/100))
            break;
    }
}

Funcionario('A',2000)
Funcionario('B', 3000)
Funcionario('C',1500)