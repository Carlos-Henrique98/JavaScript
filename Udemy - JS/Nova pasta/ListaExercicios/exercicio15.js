function Carro(nomeCarro){
    switch(nomeCarro){
        case 'hatch':
            console.log('Compra efetuada com sucesso!')
            break;
        case 'sedans':
            console.log('Tem certeza que não prefere este modelo?')
            break;
        case 'motocicletas':
            console.log('Tem certeza que não prefere este modelo?')
            break;
        case 'caminhotes':
            console.log('Tem certeza que não prefere este modelo?')
            break;
        default:
            console.log('Não trabalhamos com este tipo de automovel aqui!')
            break;
    }   
}

Carro('hatch')