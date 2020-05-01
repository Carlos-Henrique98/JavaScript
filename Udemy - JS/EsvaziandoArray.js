let numeros = [1,2,3,4,5,6];
let outros = numeros;

//numeros = [];
//console.log(outros);
//console.log();

//numeros.length = 0;
//console.log(numeros);
//console.log(outros);

numeros.splice(0,numeros.length);
console.log(numeros);
console.log(outros);

while(numeros.length > 0)
numeros.pop();
console.log(numeros);
console.log(outros);