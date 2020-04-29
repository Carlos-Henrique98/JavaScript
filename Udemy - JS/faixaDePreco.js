//Faixa de Preco
//Crie um array de objetos de faixa de preço para que ela
//possa ser usado em um site igual o mercado livre

let objetos = [
    {tooltip:'até R$700,00', minimo: 0, maximo: 700},
    {tooltip:'R$700,00 a R$1000,00', minimo:700, maximo:1000},
    {tooltip:'R$1000,00 em R$5000,00', minimo: 1000, maximo:5000}
];

function PrecoObjetos(tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

console.log(objetos);
console.log(PrecoObjetos);

/* OUTRO JEITO*/

console.log();
function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixa = [
    new FaixaPreco('até R$330 a R$1000', minimo = 330, maximo = 1000),
    new FaixaPreco('R$1000 a R$2000', minimo = 1000, maximo = 2000),
    new FaixaPreco('R$2000 a R$5000', minimo = 2000, maximo = 5000)
]; 

console.log(faixa);
console.log(FaixaPreco);