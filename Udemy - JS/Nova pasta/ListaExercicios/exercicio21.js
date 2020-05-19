function PlanoSaude(idade){
    if (idade < 10){
        return 'Crianças com menos de 10 anos \nPagam\nR$80,00'
    }
    else if(idade >= 10 && idade <= 30){
        return 'Conveniados com idade entre 10 e 30 anos \nPagam\nR$50,00'
    }
    else if(idade > 30 && idade < 60){
        return 'Conveniados com idade acima de 30 e até 60 anos\nPagam\nR$95,00'
    }
    else if(idade > 60){
        return 'Conveniados acima de 60 anos \nPagam\nR$130,00'
    }
}

console.log(PlanoSaude(5))
console.log()
console.log(PlanoSaude(34))
console.log()
console.log(PlanoSaude(15))