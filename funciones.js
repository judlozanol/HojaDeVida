
function leerGET(){ 
    
    var cadGET = location.search.substr(1,location.search.length); 
    //rompe la cadena para separar pares variable=valor
    var arrGET = cadGET.split("&"); 
    var asocGET = new Array(); 
    var variable = ""; 
    var valor = "";
    //llena el arreglo asociativo
    for(i=0;i<arrGET.length;i++){ 
        var aux = arrGET[i].split("="); 
        variable = aux[0];
        valor = aux[1];
        valor =valor.replace(/\+/g, " ");
        valor =valor.replace(/%40/g, "@");

        asocGET[variable] = valor; 
    } 
    return asocGET; 
}
function escribir(){
    var paresVarValor = leerGET();
    
    for(var key in paresVarValor){
        var contenedor = document.getElementById(key);
        if(key=="habilidades"){
            var arrHabilidades = paresVarValor[key].split("%0D%0A");
            for(var iterador in arrHabilidades){
                var nuevoLi= document.createElement("li");
                //corregir caracteres especiales como tilde y ñ
                nuevoLi.innerText=arrHabilidades[iterador];
                contenedor.appendChild(nuevoLi);
            }
        } else{
            var texto = document.createTextNode(paresVarValor[key]);
            contenedor.appendChild(texto);
        }
    }
    //revisar esta funcion 
}

function transformarLista(){

}
function validarCampos(){
    if(document.getElementById("nombre").value==""){
        alert("El nombre no puede ser vacio.");
        document.getElementById("formHojaVida").action="captura.html";
        return;
    }
    if(document.getElementById("apellido").value==""){
        alert("El apellido no puede ser vacio.");
        document.getElementById("formHojaVida").action="captura.html";
        return;
    }
    if(document.getElementById("residencia").value==""){
        alert("El lugar de residencia no puede ser vacio.");
        document.getElementById("formHojaVida").action="captura.html";
        return;
    }
    if(document.getElementById("correo").value==""){
        alert("El correo no puede ser vacio.");
        document.getElementById("formHojaVida").action="captura.html";
        return;
    }
    if(document.getElementById("telCelular").value==""){
        alert("Ingrese un número de celular.");
        document.getElementById("formHojaVida").action="captura.html";
        return;
    }
    if(document.getElementById("perfil").value==""){
        alert("El perfil no puede ser vacio.");
        document.getElementById("formHojaVida").action="captura.html";
        return;
    } 
    if(document.getElementById("habilidades").value==""){
        alert("Ingrese al menos una habilidad.");
        document.getElementById("formHojaVida").action="captura.html";
        return;
    }alert("Formulario Enviado");
}
