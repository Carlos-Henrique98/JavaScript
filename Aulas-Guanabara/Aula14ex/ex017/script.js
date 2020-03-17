function tabuada(){
    var numero = document.getElementById("txtnumber")
    var tabuada = document.getElementById("seltab")

    if(numero.value.length == 0){
        window.alert("Insira um número!")
    }
    else{
        var n = Number(numero.value)
        var c =1 
        tabuada.innerHTML = ""
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    }
  
}