/*
var http_request=false;
if(window.XMLHttpRequest){
    http_request= new XMLHttpRequest();
}else if(window.ActiveXObject){
    http_request=new ActiveXObject("Microsoft.XMLHTTTP");
}
http_request.onreadystatechange = function(){
    if(http_request.readystate==4){
        if(http_request.status==200){
            alert("<h1>ya hay respuesta del servidor</h1>");
        }
        else{
            alert("error en la peticion");
        }
    }
    else{
        console.log("procesando respuesta");
    }
    
}

http_request.open('GET',"https://www.unir.net/",false);
*/

$(document).ready(function(){
    let url="http://localhost/sesion11.php?variable1=hola";
    let parametros={
        var1:123,
        var2:'hola2'
    };

    $.post(url,parametros,function(data){
        alert(data);
    });
});