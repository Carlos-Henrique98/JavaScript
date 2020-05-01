//const primeiro = [1,2,3];
const primeiro = [{id:1}];
const segundo = [4,5,6];
primeiro[0].id = 10;

//Combinar
const combinado = primeiro.concat(segundo);
console.log(combinado);

//Dividir
const dividir = combinado.slice(0,3);
console.log(dividir);