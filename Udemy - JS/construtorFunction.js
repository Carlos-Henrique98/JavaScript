//Criar um objeto postagem
//titulo,mensagem,autor,visualizacoes,comentarios,estaoaovivo

function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    visualizacoes = 10,
    comentarios = [],
    estaAoVivo = true
}

const postar = new Postagem('a', 'b', 'c');

console.log(postar);