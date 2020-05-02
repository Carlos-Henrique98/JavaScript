function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').nodeValue;
    ConvidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol','Jhonatan']
    if(ConvidadosCristian.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode Entrar!'
    }
    else
    {
        document.getElementById('PermissaoEntrada').innerText = 'Você não pode Entrar!'
    }
}