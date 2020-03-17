var numero = document.getElementById("fnum")
var lista = document.getElementById("flista")
var res = document.getElementById("res")
var vetorValor = []

function isNumero(n)
{
    if(Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    }
    else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1)
    {
        return true
    }
    else{
        return false
    }
}

function Adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value,vetorValor))
    {
        vetorValor.push(Number(numero.value))
        var item = document.createElement("option")
        item.text = `Valor inserido foi ${numero.value}! `
        lista.appendChild(item)
        res.innerHTML = ""
    }
    else
    {
        window.alert("Valor já encontrado")
    }
    numero.value = ""
    numero.focus()

}

function Finalizar(){
    if(vetorValor.length == 0)
    {
        window.alert("Adicione valores!")
    }
    else{
        let total = vetorValor.length
        let maior = vetorValor[0]
        let menor = vetorValor[0]
        let soma = 0
        let media = 0
        for(let pos in vetorValor)
        {
            soma += vetorValor[pos]
            if(vetorValor[pos > maior])
            {
                maior = vetorValor[pos]
            }
            else{
                menor = vetorValor[pos]
            }
        }
        media = soma / total
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo temos ${total} elementos</p>`
        res.innerHTML += `<p>O maior valor é: ${maior}</p>`
        res.innerHTML += `<p>O menor valor é: ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é: ${soma}</p>`
        res.innerHTML += `<p> A média é igual a: ${media}`
    }
}
