var generare = document.getElementById('concepto').value;
function generar(){
    let mostrar = document.getElementById('todo')
    generare = document.getElementById('concepto').value;
    console.log(generare);

    while (mostrar.firstChild) {
        mostrar.removeChild(mostrar.firstChild);
    }

    for (let i = 1; i <= generare; i++) {
        var divmas = document.createElement("div")
        divmas.setAttribute("class","campos")
        divmas.setAttribute("id","contenido"+i)
        var img = document.createElement("img")
        img.setAttribute("src","image/borrar.png")
        img.setAttribute("class","icono")
        var input1 = document.createElement("button");
        input1.setAttribute("class","eliminar")
        input1.setAttribute("type","button")
        input1.setAttribute("id","eliminar"+i)
        input1.setAttribute("onclick",'eliminar('+i+')')
        input1.appendChild(img)
        var div1 = document.createElement("div")
        div1.setAttribute("class","datos")
            var p1 = document.createElement("p")
            var p1text = document.createTextNode("Cantidad")
            p1.appendChild(p1text)
            var inputcant = document.createElement("input")
            inputcant.setAttribute("type","text")
            inputcant.setAttribute("id","cantidad"+i)
        div1.appendChild(p1)
        div1.appendChild(inputcant)
    
        var div2 = document.createElement("div")
        div2.setAttribute("class","datos")
            var p2 = document.createElement("p")
            var p2text = document.createTextNode("Descripcion")
            p2.appendChild(p2text)
            var inputdes = document.createElement("input")
            inputdes.setAttribute("type","text")
        div2.appendChild(p2)
        div2.appendChild(inputdes)
        
        var div3 = document.createElement("div")
        div3.setAttribute("class","datos")
            var p3 = document.createElement("p")
            var p3text = document.createTextNode("Valor Unitario")
            p3.appendChild(p3text)
            var inputvalor = document.createElement("input")
            inputvalor.setAttribute("type","text")
            inputvalor.setAttribute("id","valor"+i)
        div3.appendChild(p3)
        div3.appendChild(inputvalor)
    
        var div4 = document.createElement("div")
        div4.setAttribute("class","datos")
            var p4 = document.createElement("p")
            var p4text = document.createTextNode("Importe")
            p4.appendChild(p4text)
            var inputimport = document.createElement("input")
            inputimport.setAttribute("type","text")
            inputimport.setAttribute("id","import"+i)
        div4.appendChild(p4)
        div4.appendChild(inputimport)
        divmas.appendChild(input1)
        divmas.appendChild(div1);
        divmas.appendChild(div2);
        divmas.appendChild(div3);
        divmas.appendChild(div4);
        mostrar.appendChild(divmas)
    }
}
function eliminar(valor){
    document.getElementById('contenido'+valor).remove();
}
function eliminare(num){
    document.getElementById('contenido'+num).remove();
}
function agregar(){
    generare++;
    let mostrar = document.getElementById('todo')
        var divmas = document.createElement("div")
        divmas.setAttribute("class","campos")
        divmas.setAttribute("id","contenido"+generare)
        var img = document.createElement("img")
        img.setAttribute("src","image/borrar.png")
        img.setAttribute("class","icono")
        var input1 = document.createElement("button");
        input1.setAttribute("class","eliminar")
        input1.setAttribute("value",'&#10008')
        input1.setAttribute("type","button")
        input1.setAttribute("id","eliminar"+generare)
        input1.setAttribute("onclick",'eliminar('+generare+')')
        input1.appendChild(img)
        var div1 = document.createElement("div")
        div1.setAttribute("class","datos")
            var p1 = document.createElement("p")
            var p1text = document.createTextNode("Cantidad")
            p1.appendChild(p1text)
            var inputcant = document.createElement("input")
            inputcant.setAttribute("type","text")
            inputcant.setAttribute("id","cantidad"+generare)
        div1.appendChild(p1)
        div1.appendChild(inputcant)
    
        var div2 = document.createElement("div")
        div2.setAttribute("class","datos")
            var p2 = document.createElement("p")
            var p2text = document.createTextNode("Descripcion")
            p2.appendChild(p2text)
            var inputdes = document.createElement("input")
            inputdes.setAttribute("type","text")
        div2.appendChild(p2)
        div2.appendChild(inputdes)
        
        var div3 = document.createElement("div")
        div3.setAttribute("class","datos")
            var p3 = document.createElement("p")
            var p3text = document.createTextNode("Valor Unitario")
            p3.appendChild(p3text)
            var inputvalor = document.createElement("input")
            inputvalor.setAttribute("type","text")
            inputvalor.setAttribute("id","valor"+generare)
        div3.appendChild(p3)
        div3.appendChild(inputvalor)
    
        var div4 = document.createElement("div")
        div4.setAttribute("class","datos")
            var p4 = document.createElement("p")
            var p4text = document.createTextNode("Importe")
            p4.appendChild(p4text)
            var inputimport = document.createElement("input")
            inputimport.setAttribute("type","text")
            inputimport.setAttribute("id","import"+generare)
        div4.appendChild(p4)
        div4.appendChild(inputimport)
        divmas.appendChild(input1)
        divmas.appendChild(div1);
        divmas.appendChild(div2);
        divmas.appendChild(div3);
        divmas.appendChild(div4);
        mostrar.appendChild(divmas);
        console.log(generare);
}
function recuperar(){
    let subtotal  = 0
    for (let x = 1; x <= generare; x++) {
        if (document.getElementById('contenido'+x) !== null) {
            let cant = parseInt(document.getElementById('cantidad'+x).value)
            let val = parseInt(document.getElementById('valor'+x).value)
            let impo = parseInt(document.getElementById('import'+x).value)
            subtotal += (cant*val)+impo;
            
        }else{
            console.log("no existe padre la seccion "+x)
        }
        let iva = subtotal*.16;
        let total = iva+subtotal;
        document.getElementById('subtotal').innerHTML = subtotal;
        document.getElementById('iva').innerHTML = iva;
        document.getElementById('total').innerHTML = total; 


    }
}