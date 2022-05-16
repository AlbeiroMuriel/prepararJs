// visualizar todo el Document
console.log(document);

//acceder a un elemento
//querySelector() solo con etiquetas no para Id o Class
document.querySelector('h1') // Seleccionar el elemento o Objeto
console.log(document.querySelector('h1'));// Muestra el Objeto o elemto
document.querySelector('h1').textContent = "Hola bebe" // de esto forma podemos cambiar el contenido
document.querySelector("p").textContent = "parrafo de muestra"// si tengo varios elementos se lo cambia al primero

// acceder a varios elementos
// si es una Id colocamos //#
// si es una clase colocamos .
document.querySelector('#pDom').textContent = "Modificar el parrafo pDom";
document.querySelector('.parraf').textContent ='Modificar el parrafo de Arbol'

// ALL

document.querySelectorAll('.pAll').textContent ='Reemplazar todo'
console.log(document.querySelectorAll('.pAll'));



// utilizar el Id de los elementos.... segun la teoria es mas rápdio qu el anterior
// solo para ID
document.getElementById('pDom');
 



// elementos con variables
// los dos son muy similares... pero con inner puede colocar la etiqueta a modificar
let capturarP1 = document.getElementById('pDom') 


capturarP1.textContent= "Cambiando párrafo con una variable"
capturarP1.innerHTML="Texto cambiando con InnerHtml"
capturarP1.innerHTML='<b> texto en negrita...</b>'// solo se puede hacer con inner con textCon no funciona

console.log(capturarP1); // para ver consola las modificaciones


//document.querySelector('p').textContent = "Cambio el parrafo 1"




let p1="En caso de funciones sencillas, podemos incluirla dentro de la propiedad HREF del enlace o evento que la inicia, para ahorrarnos código. Para el ejemplo anterior, el código necesario seria el siguiente."
let p2="Una página web es un documento. Éste documento puede exhibirse en la ventana de un navegador o también como código fuente HTML. Pero, en los dos casos, es el mismo documento. El modelo de objeto de documento "

console.log(document.getElementById("hea_1"))

document.getElementById("pDom").innerHTML=p1
document.getElementById("pArbol").innerHTML=p2

document.querySelector('h1').textContent= "Ejemplo"
document.querySelector('header').textContent="Titulo 1"


//document.querySelector('#pArbol').textContent="Muestra"