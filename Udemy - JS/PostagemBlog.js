//Exercicio - Objeto de postagem de blog que conter
//as seguintes propriedades
//postagem
/*
titulo
mensagem
vizualizaçoes
comentarios
    (autor, mensagem)
estaAovivo
*/

let postagem = {
    titulo : 'titulo',
    mensagem : 'mensagem',
    autor : 'autor',
    vizualizaçoes : 10,
    comentarios : [
        {
            autor : 'autor1', mensagem : 'mensagem'
        },
        {
            autor : 'autor1', mensagem : 'mensagem'
        }
    ],
    AoVivo : true
}

console.log(postagem);