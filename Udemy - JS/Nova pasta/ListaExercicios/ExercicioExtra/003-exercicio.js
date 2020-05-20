//Escreva uma função que verifique se o vetor de 
//habilidades passado possui a habilidade "JavaScript" e
//retorna um booleano true/false caso exista ou não.

function temHabilidade(habilidade){
    if(habilidade.indexOf("JavaScript")){
        return true
    }
    else{
        return false
    }
}

var habilidade = ["JavaScript", "ReactJS", "React Native"];
console.log(temHabilidade(habilidade))
