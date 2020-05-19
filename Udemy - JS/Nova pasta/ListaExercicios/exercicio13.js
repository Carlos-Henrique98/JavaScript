function DiaSemana(dia){
    switch(dia){
        case 1:
            console.log('Domingo')
            break;

        case 2:
            return 'Segunda-Feira'
            break;
        
        case 3:
            return 'Terça-Feira'
            break;

        case 4:
            return 'Quarta-Feira'
            break;

        case 5:
            return 'Quinta-Feira'
            break;

        case 6:
            return 'Sexta-Feira'
            break;

        case 7:
            return 'Sabádo'
            break;
        
        default:
            return 'Dado Inválido'
            break;
    }
}

console.log(DiaSemana(2))