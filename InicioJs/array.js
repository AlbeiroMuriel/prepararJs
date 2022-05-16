document.write("<h2> VECTORES O ARRAY </h2>");
document.write("<h3> VECTORES O ARRAY INDEXADOS</h3>");
document.write("<p>Los arrays indexados son aquellos que tinen una posición numerica, para hacer referencia al contenido");


let estudiantes = ["Andres", "Santiago", "Manuel", "Alexandra","Ana M","Mariana"];
console.log(estudiantes[3]);
console.log(estudiantes[0]);
//imprimir el vector en pantalla
document.write("<p> estudiantes <br>", estudiantes, "</p>")

document.write("<p>Imprimir el valor de la posición 3 ",estudiantes[3], "</p>")

document.write("<h3> Insertar elemento al vector. push </h3>");
document.write("estudiantes.push('Yesid')");

estudiantes.push("Yesid");
document.write("<p> estudiantes <br>", estudiantes, "</p>")

let ultimo = estudiantes.length;

document.write(`El tamaño del vector es de ${ultimo} elementos o valores`);

ultimo = estudiantes.length - 1;
estudiantes.push("Jose");

document.write("<p> estudiantes <br>", estudiantes, "</p>")
document.write(`<br> El ultimo elemento del array es ${estudiantes[estudiantes.length - 1]}`);

document.write("<h2>Array Asociativos </h2>");
document.write("<p>Estos no utilizan numeros para los indexes, sino letra o palabras </p>")

let AsocEstudiantes = new Array();
    AsocEstudiantes["Cedula"] = 123;
    AsocEstudiantes["Apellido"] = "Monsalve";
    AsocEstudiantes["Nombre"] = "Ana";
    AsocEstudiantes["Edad"]= 20;

    //insertar un nuevo elemento
    AsocEstudiantes["Cedula1"]=258
    AsocEstudiantes["Apellido1"]="Aguirre";
    AsocEstudiantes["Nombre1"]="kevin";
    AsocEstudiantes["Edad1"]= 25;
    

    console.log(AsocEstudiantes["Cedula"]);
    console.log(AsocEstudiantes["Apellido"]);
    console.log(AsocEstudiantes);

    for (let clave in AsocEstudiantes)
    {
        document.write("<h2>", clave, ":", AsocEstudiantes[clave], "</h2>" );
    }
// para (i=0; i<=10; i++)
    
