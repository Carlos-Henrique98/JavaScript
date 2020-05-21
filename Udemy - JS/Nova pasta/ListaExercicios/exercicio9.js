function Notas(nota){
    let notaAluno = arredondar(nota)
    if(notaAluno < 40){
        console.log(`Reprovado com nota de: ${notaAluno}`)
    }
    else if(nota >= 40){
        console.log(`Aprovado com nota de: ${notaAluno}`)
    }
}

function arredondar(notas){
    if(notas % 5 > 2){
        return notas + (5 - (notas % 5))
    }
    else
    {
        return notas
    }
}

Notas(23)
