var datos = new Array();
var inside = new Array();
var footer = new Array();

datos[0] = "../../css/estilo.css";
datos[1] = "../../scripts/lupa.js";
datos[2] = "../../scripts/busqueda2.js";
datos[3] = "../../img/logo.png";
datos[4] = "../../img/iPod-Touch-5G(banner).png"
datos[5] = "../../index.html";
datos[6] = "../../paginas/categ.html";
datos[7] = "../smaFo.html";
datos[8] = "../table.html";
datos[9] = "../pcs.html";
datos[10] = "../games.html";
datos[11] = "../proms.html";
datos[12] = "../us.html";

inside[0] = "Falcon Northwest Fragbox";
inside[1] = "../../img/ord/o8.jpg";
inside[2] = "Precio: $1575.00";
inside[3] = "Integracion: Fragbox";
inside[4] = "Procesador: Intel Core i7-4770K 3.5 GHz";
inside[5] = "Memoria RAM: 32GB DDR3";
inside[6] = "Disco Duro: 1920 GB";
inside[7] = "Sistema operativo: Windows 8";
inside[8] = "Tarjeta grafica: Nvidia GeForce GTX 780";
inside[9] = "Tiempo de env&iacute;o: 10-15 d&iacute;s";
inside[10] = "Env&iacute;o: $14.01";

footer[0] = "../cus.html";
footer[1] = "../politics.html";
footer[2] = "../us.html";
footer[3] = "../help.html"

document.write("<!DOCTYPE html><html lang=\"es\"><head><meta charset=\"utf-8\" />");
document.write("<title>GG-Sales: " + inside[0] + "</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />");
document.write("<link href=" + datos[0] + " rel=\"stylesheet\" type=\"text/css\">");
document.write("<script src=" + datos[1] + " type=\"text/javascript\"></script>");
document.write("<script src=" + datos[2] + " type=\"text/javascript\"></script></head>");
document.write("<body><table align=\"center\" id=\"supermain\"><tr><td><nav><table align=\"center\"><tr>");
document.write("<td id=\"indexmejorado\"><img src="+ datos[3] +" id=\"logox\" height=\"150\" width=\"270\"></td>");
document.write("<td><img id=\"slid1\" src=" + datos[4] + "></td>");
document.write("<td style=\"right:0px;\"><form name=\"searcher\" onSubmit=\"return buscar()\" autocomplete=\"off\">");
document.write("<input type=\"text\" name=\"txtB\" max=\"35\" min=\"3\"><input type=\"submit\" name=\"boton\" value=\"Buscar\"></form></td></tr></table>");
document.write("<table><tr><td><ul id=\"menuu\"><li><a href=" + datos[5] + ">Inicio</a></li>");
document.write("<li><a href="+ datos[6] +">Categorias</a><ul><li>");
document.write("<a href=" + datos[7] + ">SmartPhones</a></li><li><a href=" + datos[8] + ">Tablets</a></li>");
document.write("<li><a href=" + datos[9] + ">Ordenadores</a></li><li><a href=" + datos[10] + ">Consolas</a></li>");
document.write("</ul></li><li><a href=" + datos[11] + ">Promociones</a></li><li><a href=" + datos[12] + ">Nosotros</a></li></ul></td></tr></table></nav><br/></header>");
document.write("<section><center><table align=\"center\"><tr><td><img id=\"mage\" src="+ inside[1] +"></td>");
document.write("<td><p id=\"title\">" + inside[0] + "</p><center><div id=\"lupa\"><img id=\"mage0\" src="+ inside[1] +"></div></center><hr align=\"center\" color=\"#CCC\" size=\"1\">");
document.write("<p>" + inside[2] + "</br>" + inside[3] + "</br>" + inside[4] + "</br>" + inside[5] + "</br>" + inside[6] + "</br>" + inside[7] + "</br>" + inside[8] + "<br/>" + inside[9]);
document.write("</p><hr align=\"center\" color=\"#CCC\" size=\"1\"><p>" + inside[10] + "</p><p id=\"bb\"><a href=\"#\">Comprar</a></p></td></tr></table></center></section><footer><hr align=\"center\" color=\"#999999\" size=\"1\" />");
document.write("<p>&copy; 2013 ProDamnSoft&trade; | Todos los derechos reservados | Lenguaje Interpretado al cliente</p><p><a href=" + footer[0] + ">Contactenos</a> | <a href=" + footer[1] + ">Pol&iacute;tica del sitio</a> | <a href="+ footer[2] +">Nosotros</a> | <a href=" + footer[3] + ">Ayuda</a></p></footer></td></tr></table></body></html>");