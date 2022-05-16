// arruy indexados
console.log( "esta es array")

/* operaciones con array.
Crear un array = [Elementos]
let nomArray 
*/

let estudiantes = ["A","B","C"];
// Acceder a un elemento

// imprimir array
  console.log(estudiantes);

// acceder a un elemento
console.log(estudiantes[1]);

// primer elemento
console.log(estudiantes[0]);

// ultimo elemento del array .length -1
console.log(estudiantes.length);

ultimo = estudiantes[estudiantes.length-1]
console.log(ultimo);

// insertar un elemento al array push

estudiantes.push("Lili")
console.log(estudiantes);

//eliminar el ultimo elemento .pop
estudiantes.pop()
console.log(estudiantes);
//eliminar el primer elemento .shift
estudiantes.shift()
console.log(estudiantes);


/*Arrays asociativos en JavaScript
Un array asociativo es un array cuyos índices no son numéricos sinó cadenas de texto (claves). En JavaScript no existen realmente arrays asociativos pero podemos simularlos creando objetos y accediendo a sus propiedades.

Como declaramos un array asociativo
Se utilizan llaves {} para generar el array de elementos clave:valor. Podemos añadir elementos de dos maneras
*/

let estud = new Array();
    estud["Apellido"]="Muriel";
    estud["Nombre"]="Albeiro";
    estud["Cc"]=123
    // console.log(estud);
    estud["Apellido1"]="Velez";
    estud["Nombre1"]="jorge";
    estud["Cc1"]=124
    

//otra forma de llenar un array
// estud = {"Apellido2":"Vanegas","nombre2":"Lili","cc":258}

// recorrer el array


for(let clave in estud)
{
    console.log(clave + ":" + estud[clave]);
}
















