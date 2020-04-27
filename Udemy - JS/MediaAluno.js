const array = [70,70,80];

console.log(MediaDosAlunos(array))



function MediaDosAlunos(notas){
    let soma = 0;
    for(let valor of array){
        soma += valor;
    }
    const media = soma/(notas.length);

    if(media < 59){
        return 'F';
    }
    if(media < 69){
        return 'D';
    }
    if(media < 79){
        return 'C';
    }
    if(media < 89){
        return 'B';
    }
    return 'A';
}