function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
      
        imagem.src = 'img/fotomanha.png'
        document.body.style.background = "#e2ba09"
    }
    else if(hora >= 12 && hora < 18){
   
        imagem.src = 'img/fototarde.png'
        document.body.style.background = "#011bff"
    }
    else{
        imagem.src ='img/fotonoite.png'
        document.body.style.background = "#000"
    }
}
