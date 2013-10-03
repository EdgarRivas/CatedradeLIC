//Nuevo buscador
function buscar(){
	var busqueda = document.searcher.txtB.value;
	var windo = window.open();
	var nudoc = windo.document.open("text/html", "replace");
	<!--alert("Ha buscado: " + busqueda);
	var data = new Array(38);
	var dats = new Array(38);
	var dati = new Array(38);
	<!--aqui se llena la tabla-->
	//tablets
	data[0] = "HP: Slate 7 | Tablets";
	dats[0] = "paginas/tabs/t1.html";
	dati[0] = "img/tablets/t1.jpg";
	data[1] = "Lenovo: A3000 | Tablets";
	dats[1] = "paginas/tabs/t2.html";
	dati[1] = "img/tablets/t2.jpg";
	data[2] = "ZTE: V98 | Tablets";
	dats[2] = "paginas/tabs/t3.html";
	dati[2] = "img/tablets/t3.jpg";
	data[3] = "Lenovo: S6000 | Tablets";
	dats[3] = "paginas/tabs/t4.html";
	dati[3] = "img/tablets/t4.jpg";
	data[4] = "Sony: Xperia Z | Tablets";
	dats[4] = "paginas/tabs/t5.html";
	dati[4] = "img/tablets/t5.png";
	data[5] = "Samsung: Galaxy Note 8.0 | Tablets";
	dats[5] = "paginas/tabs/t6.html";
	dati[5] = "img/tablets/t6.jpg";
	data[6] = "Razer Edge Pro | Tablets";
	dats[6] = "paginas/tabs/t7.html";
	dati[6] = "img/tablets/t7.jpg";
	data[7] = "Samsung: Galaxy Tab 2 | Tablets";
	dats[7] = "paginas/tabs/t8.html";
	dati[7] = "img/tablets/t8.jpg";
	data[8] = "Google: Nexus 10 | Tablets";
	dats[8] = "paginas/tabs/t9.html";
	dati[8] = "img/tablets/t9.jpg";
	data[9] = "Apple: iPad 4 | Tablets";
	dats[9] = "paginas/tabs/t10.html";
	dati[9] = "img/tablets/t10.jpg";
	//consolas
	data[10] = "Microsoft: xBox 360 | Consola | Juegos";
	dats[10] = "paginas/cons/n1.html";
	dati[10] = "img/cons/n1.jpg";
	data[11] = "Sony: Play Station 3 | Consola | Juegos";
	dats[11] = "paginas/cons/n2.html";
	dati[11] = "img/cons/n2.jpg";
	data[12] = "Nintendo: Wii | Consola | Juegos";
	dats[12] = "paginas/cons/n3.html";
	dati[12] = "img/cons/n3.png";
	data[13] = "Microsoft: xBox one | Consola | Juegos";
	dats[13] = "paginas/cons/n4.html";
	dati[13] = "img/cons/n4.jpg";
	data[14] = "Sony: Play Station 4 | Consola | Juegos";
	dats[14] = "paginas/cons/n5.html";
	dati[14] = "img/cons/n5.jpg";
	data[15] = "Nintendo: Wii U | Consola | Juegos";
	dats[15] = "paginas/cons/n6.html";
	dati[15] = "img/cons/n6.jpg";
	data[16] = "Nvidia: SHIELD | Consola | Juegos";
	dats[16] = "paginas/cons/n7.html";
	dati[16] = "img/cons/n7.png";
	data[17] = "Nintendo: 3DS | Consola | Juegos";
	dats[17] = "paginas/cons/n8.html";
	dati[17] = "img/cons/n8.png";
	//ordenadores
	data[18] = "Toshiba: Satellite U945-S439 | Ordenador | Computadora | PC";
	dats[18] = "paginas/comp/o1.html";
	dati[18] = "img/ord/o1.jpg";
	data[19] = "HP: Pavilion g7-2270us | Ordenador | Computadora | PC";
	dats[19] = "paginas/comp/o2.html";
	dati[19] = "img/ord/o2.jpg";
	data[20] = "Apple: MacBook Pro | Ordenador | Computadora | PC";
	dats[20] = "paginas/comp/o3.html";
	dati[20] = "img/ord/o3.jpg";
	data[21] = "Alienware: M17x | Ordenador | Computadora | PC";
	dats[21] = "paginas/comp/o4.html";
	dati[21] = "img/ord/o4.jpg";
	data[22] = "Samsung: ATIV One 7 | Ordenador | Computadora | PC";
	dats[22] = "paginas/comp/o5.html";
	dati[22] = "img/ord/o5.jpg";
	data[23] = "Lenovo: ThinkCentre Edge 92z | Ordenador | Computadora | PC";
	dats[23] = "paginas/comp/o6.html";
	dati[23] = "img/ord/o6.jpg";
	data[24] = "HP: Z420 | Ordenador | Computadora | PC";
	dats[24] = "paginas/comp/o7.html";
	dati[24] = "img/ord/o7.jpg";
	data[25] = "Falcon: Northwest Fragbox | Ordenador | Computadora | PC";
	dats[25] = "paginas/comp/o8.html";
	dati[25] = "img/ord/o8.jpg";
	data[26] = "Apple: iMac 27-Inch | Ordenador | Computadora | PC";
	dats[26] = "paginas/comp/o9.html";
	dati[26] = "img/ord/o9.jpg";
	data[27] = "Gateway: DX4870-UB2B | Ordenador | Computadora | PC";
	dats[27] = "paginas/comp/o10.html";
	dati[27] = "img/ord/o10.jpg";
	//Celulares
	data[28] = "Samsung: Galaxy S4 | SmartPhone | Celular | Telefono";
	dats[28] = "paginas/cels/c1.html";
	dati[28] = "img/cels/c1.jpg";
	data[29] = "Apple: iPhone5 | SmartPhone | Celular | Telefono";
	dats[29] = "paginas/cels/c2.html";
	dati[29] = "img/cels/c2.jpg";
	data[30] = "Alcatel: One Touch Idol Ultra | SmartPhone | Celular | Telefono";
	dats[30] = "paginas/cels/c3.html";
	dati[30] = "img/cels/c3.jpg";
	data[31] = "Sony: Xperia ZL | SmartPhone | Celular | Telefono";
	dats[31] = "paginas/cels/c4.html";
	dati[31] = "img/cels/c4.png";
	data[32] = "BlakBerry: BlackBerry 10.0 | SmartPhone | Celular | Telefono";
	dats[32] = "paginas/cels/c5.html";
	dati[32] = "img/cels/c5.jpg";
	data[33] = "HTC: Touch Diamond | SmartPhone | Celular | Telefono";
	dats[33] = "paginas/cels/c6.html";
	dati[33] = "img/cels/c6.jpg";
	data[34] = "Apple: iPhone 4S | SmartPhone | Celular | Telefono";
	dats[34] = "paginas/cels/c7.html";
	dati[34] = "img/cels/c7.jpg";
	data[35] = "LG: Optimus L7 | SmartPhone | Celular | Telefono";
	dats[35] = "paginas/cels/c8.html";
	dati[35] = "img/cels/c8.jpg";
	data[36] = "LG: Optimus L9 | SmartPhone | Celular | Telefono";
	dats[36] = "paginas/cels/c9.html";
	dati[36] = "img/cels/c9.jpeg";
	data[37] = "Samsung: Galaxy SIII (S3) | SmartPhone | Celular | Telefono";
	dats[37] = "paginas/cels/c10.html";
	dati[37] = "img/cels/c10.jpg";
	
	if (busqueda.length < 2 || busqueda.length > 35) {
		alert("Las busquedas deben tener al menos 2 caracteres y no más de 35.");
		return false;
	}
	
	nudoc.open();
	//Escribiré la pagina completa :)
	nudoc.write("<!DOCTYPE html>");
	nudoc.write("<html lang=\"es\">");
	nudoc.write("<head>");
	nudoc.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />");
	nudoc.write("<link href=\"../../css/estilo.css\" rel=\"stylesheet\" type=\"text/css\">");
	nudoc.write("<title>Buscar: " + busqueda + "</title>");
	nudoc.write("</head>");
	nudoc.write("<body>");
	nudoc.write("<table align=\"center\" id=\"supermain\"><tr><td>");
	nudoc.write("<header><nav><table align=\"center\"><tr><td id=\"indexmejorado\">");
	nudoc.write("<img src=\"../../img/logo.png\" id=\"logox\" height=\"150\" width=\"270\"></td>");
	nudoc.write("<td><img id=\"slid1\" src=\"../../img/iPod-Touch-5G(banner).png\"></td>");
	nudoc.write("</tr></table><table align=\"center\"><tr><td><ul id=\"menuu\">");
	nudoc.write("<li><a href=\"../../index.html\">Inicio</a></li>");
	nudoc.write("<li><a href=\"../../paginas/categ.html\">Categorias</a>");
	nudoc.write("<ul><li><a href=\"../../paginas/smaFo.html\">SmartPhones</a></li>");
	nudoc.write("<li><a href=\"../../paginas/table.html\">Tablets</a></li>");
	nudoc.write("<li><a href=\"../../paginas/pcs.html\">Ordenadores</a></li>");
	nudoc.write("<li><a href=\"../../paginas/games.html\">Consolas</a></li>");
	nudoc.write("</ul></li><li><a href=\"../../paginas/proms.html\">Promociones</a></li>");
	nudoc.write("<li><a href=\"../../paginas/us.html\">Nosotros</a></li></ul></td></tr></table></nav></header>");
<!--	alert("la busqueda: " + busqueda + " devolvio:");
	nudoc.write("<p>Resultados de la busqueda: " + busqueda + "<br></p>")
	nudoc.write("<table align=\"center\"><tr>");
	
	var cont = 0;
	var trdo = 0;
	
	for (var i = 0; i<38; i++) {
		strma = data[i].toLowerCase();
		strnam = data[i];
		struri = dats[i];
		imguri = dati[i];
		strbu = busqueda.toLowerCase();
		if(strma.indexOf(strbu)!=-1){
			<!--alert(data[i]);
			//nudoc.write("<td><a id=\"resultado\" href=\"" + struri + "\">" + strnam + "</a></td>");
			nudoc.write("<td id=\"proms\"><img id=\"mages\" src=\"../../" + imguri + "\"><br><br>" + strnam + "<br><p id=\"bb\"><a href=\"../../" + struri + "\">Ver</a></p></td>");
			cont += 1;
			trdo += 1;
		}
		if (trdo == 3){
			nudoc.write("</tr><tr>");
			trdo = 0;
		}		
	}
	if (trdo < 3){
		nudoc.write("</tr>");
	}
	
	if (cont == 0) {
			nudoc.write("<tr><td>NO SE ENCONTRÓ RESULTADOS PARA SU BUSQUEDA.</td></tr>");
	}
	
	nudoc.write("</table>");
	
	nudoc.write("<footer><hr align=\"center\" color=\"#999999\" size=\"1\" /><p>&copy; 2013 ProDamnSoft&trade; | Todos los derechos reservados | Lenguaje Interpretado al cliente</p><p><a href=\"../../contacto.html\">Contactenos</a> | <a href=\"../../politics.html\">Pol&iacute;tica del sitio</a> | <a href=\"../../us.html\">Nosotros</a> | <a href=\"../../help.html\">Ayuda</a></p></footer>");
	
	nudoc.write("</td></tr></table>");
	nudoc.write("</body>");
	nudoc.write("</html>");
	
	return true;
}