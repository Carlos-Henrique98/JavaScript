//Crie uma funcao que verifica se um número inteiro
//passado como parâmetro é divisivel por 3 e retorne
//true ou false

function Divisivel(numero){
    if(numero % 3 == 0){
        return true
    }
    else{
        return false
    }
}

console.log(Divisivel(10))
console.log(Divisivel(9))
console.log(Divisivel(6))