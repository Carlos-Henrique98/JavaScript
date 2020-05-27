const alunos = [
    {nome : 'Joao', nota : 7.3, bolsistas : false},
    {nome : 'Maria', nota : 9.2, bolsistas : true},
    {nome : 'Pedro', nota : 9.8, bolsistas : false},
    {nome : 'Ana', nota : 8.7, bolsistas : true}
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
})

console.log(resultado)