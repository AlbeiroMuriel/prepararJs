//ID-- Identificadaor y debe ser unico en el HTML

//Modificar el contenido de las etiquetas
//debe declarar variables para manipular su contenido


let vtit1 =document.getElementById("titulo1");
let vh2_1 =document.getElementById("h2_1");
let vp1 = document.getElementById("p1");


vtit1.textContent = "INTRODUCCION AL DOM DE JavaScript";

vh2_1.textContent = "Que es DOM";

vp1.innerHTML = "<br><hr> El modelo de objeto de documento (DOM) es una interfaz de programación para los documentos HTML y XML. Facilita una representación estructurada del documento y define de qué manera los programas pueden acceder, al fin de modificar, tanto su estructura, estilo y contenido.";

let vimg = document.getElementById("idom");
vimg.src="img/dom2.png"


