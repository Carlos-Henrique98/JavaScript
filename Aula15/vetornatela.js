let num = [0,3,4,2,6,7]
// for (var posicao = 0; posicao < num.length; posicao++)
// {
//     console.log(`Na posição ${posicao} existe o elemento ${num[posicao]}`)
// }

for(let posicao in num){
    console.log(`O elemento na posição ${posicao} é o ${num[posicao]}`)
}
