/* DECLARAR LAS VARIABLES */

let vimage = document.getElementById("image");
let vparrafo1=document.getElementById("parrafo");
let vparrafo2=document.getElementById("parrafo");
let cambio= document.getElementById('img1');

function cambiarParr1(){
    vparrafo1.innerHTML = "Procesador Intel Core i9-10900K 3.70GHz / 5.30GHz / 10 Nucleos / 20 Hilos / Socket LGA1200 / Requiere disipador de calor / Intel 10TH Generación - BX8070110900K. <br> <br> <br> <b>Precio $ 2.999.999 </b>"      
}

function cambiarImg1(){    
    vimage.src="img/i9.jpg";       
    cambio.style.opacity=0.5;    
    
}
function cambiarParr2(){
    vparrafo1.textContent = "parrafo de muestra";
}

function cambiarImg2(){    
    vimage.src="img/i9_2.jpg";    
    cambio.style.opacity=1;    
}
