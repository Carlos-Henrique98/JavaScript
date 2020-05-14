function criarProduto(nome, produto){
    return {
        nome,
        produto,
        desconto : 0.1
    }
}

console.log(criarProduto('Computador', 3000.00))
console.log(criarProduto('Notebook', 2500.00))