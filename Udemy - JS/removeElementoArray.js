const numeros = [1,2,3,4,5,6];

//Final
const ultimo = numeros.pop();
console.log(ultimo); 
console.log(numeros);
console.log();
//Inicio
const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);
console.log();

//Meio
const meio = numeros.splice(2,1);
console.log(meio);