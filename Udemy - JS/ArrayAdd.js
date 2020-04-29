const numeros = [1,2,3];

//Insercao de numero no inicio
numeros.unshift(0);
console.log(numeros);

//Meio
//(posicao do elemento,escolher elemento,inserir elemento)
numeros.splice(1,0,'a');
console.log(numeros);

//Final
numeros.push(5);
console.log(numeros);