function presiona1(){
    var nombre=document.getElementById("txtNombre").value;
    if(nombre.length==0){
        alert("no hay un nombre escrito aun");
        return;
    }
    if(document.getElementById("selEstadoCivil").value==-1){
        alert("Selecciona un estado civil");
        return;
    }
    
    document.getElementById("btnPresionar").textContent="registrar nuevo evento";

    const horaActual= new Date().toDateString();
    document.getElementById("bitacora").innerHTML+="\n<br/>" + document.getElementById("txtNombre").value + " - " + horaActual + "\n";

    objetoPersona={
        nombre:document.getElementById("txtNombre").value,
        edad:document.getElementById("txtEdad").value,
        estadoCivil:document.getElementById("selEstadoCivil").value,
        leyendacompleta:function(){
            return "Bienvenido " + objetoPersona.nombre + " , edad:" + objetoPersona.edad + " y estado civil " + objetoPersona.estadoCivil;
        }
    }

    alert(objetoPersona.leyendacompleta());

}