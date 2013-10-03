// JavaScript Document
var addons = new Array();
addons[0] = "Nombre: ";
addons[1] = "Apellido: "
addons[2] = "Correo: ";
addons[3] = "Comentario: ";

window.onload = function(){
	var infoUs = document.getElementById("binps");
	infoUs.onclick = function() {
	   var frmUs=document.getElementById("frmCons");
	   nuevo(frmUs);
	} 
}

// Creando el nuevo objeto
function nuevo(frm){
	if(frm.name.value == "" || frm.last.value == "" || frm.ask.value == "" || frm.mail.value == "") {
		alert("Debe llenar todos los campos")
	} else {
		var usuario = new Object();
    	usuario.nombre = frm.name.value;
    	usuario.apellido = frm.last.value;
    	usuario.correo = frm.mail.value;
		usuario.coment = frm.ask.value;
    	showProperties(usuario);
	}
}

var inf = "Los datos son:\n";

function showProperties(objeto){
    for(var i in objeto){
		inf = inf + objeto[i] + "\n";
    }
	alert(inf);
	inf = "";
}