
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
        valor =valor.replace(/%0D%0A/g, "specialJumpCharacter");

        asocGET[variable] = decodeURIComponent(valor); 
    } 
    return asocGET; 
}
function escribir(){
    var paresVarValor = leerGET();
    for (var key in paresVarValor) {
        //crea una referencia al contenedor al que esta asociado
        var contenedor = document.getElementById(key);
        if (key=="habilidades") {
            var arrHabilidades = paresVarValor[key].split("specialJumpCharacter");
            for (var iterador in arrHabilidades) {
                var nuevoLi= document.createElement("li");
                nuevoLi.innerText=arrHabilidades[iterador];
                contenedor.appendChild(nuevoLi);
            }
        } else if (key=="educacion") {
            if (paresVarValor[key]=="") {
                //si el elemento viene vacio, no lo mostrara
                document.getElementById("educacionEnunciado").style.display = "none";
            } else {
                //si no viene vacio lo separara en varias listas ordenadas, y agrega un salto de linea entre elementos
                var arrEstudios = paresVarValor[key].split("specialJumpCharacter");
                for (var iterador in arrEstudios) {
                    let saltoDeLinea = document.createElement("br");
                    var nuevaLi = document.createElement("li");
                    var nuevaUl= document.createElement("ul");
                    var arregloEstudio= arrEstudios[iterador].split("/");
                    for(var iterador2 in arregloEstudio){
                        var nuevaLi2= document.createElement("li");
                        nuevaLi2.innerText=arregloEstudio[iterador2];
                        nuevaUl.appendChild(nuevaLi2);
                    }
                    nuevaLi.appendChild(nuevaUl);
                    contenedor.appendChild(nuevaLi);
                    contenedor.appendChild(saltoDeLinea);
                }
            }
        } else if (key=="experiencia") {
            if (paresVarValor[key]=="") {
                //si el elemento viene vacio, no lo mostrara
                document.getElementById("experienciaEnunciado").style.display = "none";
            } else {
                //si no viene vacio lo separara en varias listas ordenadas, y agrega un salto de linea entre elementos
                var arregloExperiencias = paresVarValor[key].split("specialJumpCharacter");
                for (var iterador in arregloExperiencias) {
                    let saltoDeLinea = document.createElement("br");
                    var nuevaLi = document.createElement("li");
                    var nuevaUl= document.createElement("ul");
                    var arregloExperiencia= arregloExperiencias[iterador].split("/");
                    for(var iterador2 in arregloExperiencia){
                        var nuevaLi2= document.createElement("li");
                        nuevaLi2.innerText=arregloExperiencia[iterador2];
                        nuevaUl.appendChild(nuevaLi2);
                    }
                    nuevaLi.appendChild(nuevaUl);
                    contenedor.appendChild(nuevaLi);
                    contenedor.appendChild(saltoDeLinea);
                }
            }
        } else {
            //forma basica de escritura de los datos
            var texto = document.createTextNode(paresVarValor[key]);
            contenedor.appendChild(texto);
        }
    }
    
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
