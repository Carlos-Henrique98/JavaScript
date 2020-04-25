console.log(true && true);
console.log(false && true);
console.log(false && false);
console.log();
let maiorDeIdade = false;
let possuirCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuirCarteiraDeTrabalho;

console.log(podeAplicar);

console.log();
maiorDeIdade = false;
possuirCarteiraDeTrabalho = true;
podeAplicar = maiorDeIdade || possuirCarteiraDeTrabalho;
console.log(podeAplicar);

console.log();
let candidatoRecusado = !podeAplicar;

console.log(candidatoRecusado);
