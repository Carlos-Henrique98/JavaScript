let permissao;
permissao = 'gerente';
switch(permissao){
    case'comum':
        console.log('Usuario comum!');
    break;

    case'gerente':
        console.log('Gerente');
    break;

    case'diretor':
        console.log('Diretor');
    break;

    default:
        console.log('Usuario Inválido!');
}