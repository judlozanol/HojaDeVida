function agregarNacimiento(){
    var fecha = document.createElement("input");
    var lugar= document.createElement("input");
    var textFecha= document.createElement("li");
    var textLugar= document.createElement("li");

    textFecha.textContent="Fecha de Nacimiento:";
    textLugar.textContent="Lugar de Nacimiento:";
    fecha.type = "date";
    fecha.name = "fechaNacimiento";
    fecha.placeholder = "Ingrese su fecha de nacimiento";
    lugar.type = "text"
    lugar.name ="lugarNacimiento"
    lugar.placeholder = "Ingrese su lugar de nacimiento";

    document.getElementById("elementosAdicionales").appendChild(textFecha);
    document.getElementById("elementosAdicionales").appendChild(fecha);
    document.getElementById("elementosAdicionales").appendChild(textLugar);
    document.getElementById("elementosAdicionales").appendChild(lugar);

    document.getElementById("agregarNacimiento").style.display ="none";

}