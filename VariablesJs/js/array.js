// ciclo para o for
// for(inicio, hasta donde, incrementar)

let i;
document.write("<h2>Ciclo For, ejemplo </h2>")
for(i=0; i<10; i++){
    console.log(`El valor de i es ${i}`);
    document.write(`<p>El valor de i es ${i} </p>`);
}

document.write("<h2><center>Vectores o Array </center></h2>")
document.write("<h3>Array indexado y Array Asociativos</h2>")
document.write("<p>Indexado, contiene un index numerico </p>")
document.write("<p>Asociativo, contiene una clave</p>")

document.write("<p>Ejemplo de Array Indexado... </p>")
// vamos a definir el vector, array
estudiantes=["Carolina", "Daniel", "Edwin","Emilin","Evelyn"]
// cual es el tamaño de este array = es de 4, porque inicia en cero
document.write("<hr>")
document.write("<p>Estudiante: ",  estudiantes, "</p> <br>");
document.write("<p> La posicion nro 3 corresponde a ", estudiantes[3],"</p>");

document.write("<h3> Insertar elemento al final del array (push) </h3>")
estudiantes.push('Steven');
document.write("<p>Estudiante: ",  estudiantes, "</p> <br>");
estudiantes.push('Mafe');
// length, para saber el tamaño del vector,

let tamano = estudiantes.length -1
document.write("Tamaño del vector estudiantes ", tamano, "<br>")
document.write("en la Ultima posición del vector se encuentra ",estudiantes[tamano]);

document.write("<h2>Array Asociativos</h2>")

let AsocEstud = new Array(); // creando un array vacio, no son con numero sino con claves
    AsocEstud["Cedula"] = 123;
    AsocEstud["Apellidos"] ="Rodriguez";
    AsocEstud["Nombre"]="Pedro";
    AsocEstud["Edad"]= 19;
    AsocEstud["Email"]="pedro@gmail.com";

    let clave;
for (clave in AsocEstud){
    // document.write(`<p> ${clave} : ${AsocEstud[clave]} </p>`)
    document.write("<p>", clave, " : ",AsocEstud[clave], "</p>" )
}
// Insertar otro estudiante.
    AsocEstud["Cedula"] = 258;
    AsocEstud["Apellidos"] ="Sánchez";
    AsocEstud["Nombre"]="Daniela";
    AsocEstud["Edad"]= 15;
    AsocEstud["Email"]="Daniela@gmail.com";

// document.write("<p>Cedula: ", AsocEstud["Cedula"]);
// document.write("<p>Apellidos: ", AsocEstud["Apellidos"]);

document.write("<hr>")
//imprimir con un vector
for (clave in AsocEstud){
    // document.write(`<p> ${clave} : ${AsocEstud[clave]} </p>`)
    document.write("<p>", clave, " : ",AsocEstud[clave], "</p>" )
}







document.write("<br><br><br><br><br><br><br><br>");




