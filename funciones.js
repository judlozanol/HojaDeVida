
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
        valor =valor.replace("+"," ")
        asocGET[variable] = valor; 
    } 
    return asocGET; 
}
function escribir(){
    var paresVarValor = leerGET();
    var keys= Object.keys(paresVarValor);
    for(var key in keys){
        var nuevoParrafo = document.createElement('p');
        // Crear un nodo de texto para el párrafo
        var texto = document.createTextNode(paresVarValor["correo"]);

        // Agregar el nodo de texto al párrafo
        nuevoParrafo.appendChild(texto);

        // Obtener una referencia al contenedor div
        var contenedor = document.getElementById('perfil');

        // Agregar el párrafo como hijo del contenedor div
        contenedor.appendChild(nuevoParrafo);
    }
    //revisar esta funcion 
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
