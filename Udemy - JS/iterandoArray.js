const numeros = [1,2,3,4,5];

// for(numero of numeros){
//     console.log(numero);
// }

numeros.forEach(function(numero){
    console.log(numero);
});
console.log();
numeros.forEach((numero,indice) => console.log(numero,indice));