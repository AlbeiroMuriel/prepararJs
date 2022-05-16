/*document.writeln("<br> <h1> VECTORES O ARRAY </h1>")

document.write("<h2>Array Indexado </h2>")

document.write("<p>Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables. </p> <br> <h2>Crear un Array </h2>");
document.write("<p>Crear un array let nombreArray = ['texto', 123]  </p>"); 

let estudiantes =["David", "Briana", "Anderson","Angie", "Alexandra"];

console.log(estudiantes);

document.write("Imprimir el contenido del Vector <br>")
document.write(estudiantes);
document.write("<br> <br>");


document.write("Imprimir la posición nro 3, del Vector ")
console.log(estudiantes[3]);

document.write("<br>Nombre del Estudiante ", estudiantes[3]);

console.log(estudiantes.length);
document.write("<br><br>El tamaño del vector es ", estudiantes.length, " elementos");

//acceder al ultimo elemento del array
let ultimo = estudiantes[estudiantes.length-1]
document.write("<br> En la ultima posición se encuentra ", ultimo);

document.write("<h3>Insertar elemento en la posición </h2>")
estudiantes.push("Juan Pablo");
document.write(estudiantes);
//acceder al ultimo elemento del array
ultimo = estudiantes[estudiantes.length-1]
document.write("<br>En la ultima posición se 
encuentra ", ultimo);
*/
document.write("<h2>Array Asociativo </h2>");
document.write("Un array Asociarivo se diferencia del uno indexado, porque no utiliza numeros para las posiciones, sino texto. El termino de asociativo no es de Js.")

let estud = new Array();
    estud["Cedula"]=123;
    estud["Apellido"]="Muñoz";
    estud["Nombre"]="Sneider";
    // ingresar elemento
    estud["Cedula1"]=124;
    estud["Apellido1"]="Valderrama";
    estud["Nombre1"]="juan José";

document.write("<br>", estud["Cedula"]);

//recorrer el vector

for(let clave in estud)
{
    document.write("<br>", clave + ":" + estud[clave]);
}