function paimpar(n){
    if(n % 2 == 0){
        return `O número ${n} é PAR`
    }
    else{
        return `O número ${n} é IMPAR`
    }
}
let res = paimpar(11) 
console.log(res)