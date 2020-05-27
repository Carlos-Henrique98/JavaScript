const alunos = [
    { nome : 'João', nota : 7.3, bolsistas: false},
    { nome : 'Maria', nota : 9.2, bolsistas : true},
    { nome : 'Pedro' , nota : 9.8, bolsistas : false},
    { nome : 'Ana', nota : 8.7, bolsistas : true }
]

const todosBolsistas = (resultado, bolsistas) => resultado && bolsistas
console.log(alunos.map(a => a.bolsistas).reduce(todosBolsistas))

const algumBolsistas = (resultado, bolsistas) => resultado || bolsistas
console.log(alunos.map(a => a.bolsistas).reduce(algumBolsistas))