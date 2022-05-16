// acceder a un elemento del documento
//Tenemos dos h3?
// podemos acceder mediante de clases o Id
// si es un clase . si es id #
// document.querySelector('h1');
// console.log(document.querySelector('h3'));

// console.log(document.querySelector('.T3'));
// console.log(document.querySelector('#T3-1'));
// console.log(document.querySelector('#P1'));

// para los id... se recomienda get

document.getElementById('P1');

//modidificar un elemento
//se deben establecer variables o constantes

let capParra = document.getElementById('P1');
capParra.textContent = "modificando el contenido del parrafo de muestra"
let capTit3 = document.querySelector(".T3")
capTit3.textContent="<b>********* Modificando titulos</b>"
capTit3.innerHTML="********* Modificando titulos"
