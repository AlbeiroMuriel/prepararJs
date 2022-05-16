// compilado
// no es fuertemente tipado

// string - numeros - boolean

// var let

let name = "Albeiro muriel";
let nota1=1, nota2=3.5, nota3=4.3;
const PI = 3.1416;
const AUXTRANS = 102000;
let notaDef;

console.log('el valor de pi', PI);
salario = 908000;

notaDef = (nota1 + nota2 + nota3)/3;


//concatenar---> UNIR cadenas de texto o numero
// imprimir el nombre y un mensaje si gano o pedio
if (notaDef < 3)
    {
        console.log(`El estudiante con nonbre ${name} tiene una nota de ${notaDef}`);
        console.log("Perdio por la vagancia");
    }
else
    {
        console.log(`El estudiante con nonbre ${name} tiene una nota de ${notaDef}`);
        console.log("Felicitaciones Ganó se puede matricular");
    }

/* observaciones:
notas 0 - <2 Obs1
notas 2 - <3 obs2
notas 3 - <4 obs3
notas 4 - 4.5 obs4
notas 4.5 - <=5 obs5
notas > 5 obs6 */

let obs1 = "Perdio, no puede recuperar";
let obs2 = "Perdio, pero puede recuperar";
let obs3 = "Gano, pero puede mejorar";
let obs4 = "Felicitaciones... estas cerca de ser excelente";
let obs5 = "Excelente desempeño";
let obs6 = "Verifica la nota, no puede ser mayor de 5"

notaDef = 5.5;
document.write(`nomobre estudiante ${name}`);
document.write("<h3> Nombre Estudiante: " + name, "</h3>")
if (notaDef <=2)
    document.write("<p><b>OBSERVACION: </b>", obs1, "</p>");
else if (notaDef <=3)
        document.write("<p><b>OBSERVACION: </b>", obs2, "</p>");
else if (notaDef <=4)
        document.write("<p><b> OBSERVACION: </b>", obs3, "</p>");
else if (notaDef <=4.5)
        document.write("<p><b> OBSERVACION: </b>", obs4, "</p>");
else if (notaDef <=5)
        document.write("<p><b> OBSERVACION: </b>", obs5, "</p>");
else
        document.write("<p><b> OBSERVACION: </b>", obs6, "</p>");

// En Caso... 

document.write("<h2> INSTRUCCION EN CASE </h2>")

notaDef = 1;
document.write(`nomobre estudiante ${name}`);

switch (notaDef){
    case 1: document.write("<p><b> OBSERVACION: </b>", obs1, "</p>");
            break;
    case 2: document.write("<p><b> OBSERVACION: </b>", obs2, "</p>");
            break;
    case 3: document.write("<p><b> OBSERVACION: </b>", obs3, "</p>");
            break;
    case 4: document.write("<p><b> OBSERVACION: </b>", obs4, "</p>");
            break;
    case 5: document.write("<p><b> OBSERVACION: </b>", obs5, "</p>");
            break;
    default:
            document.write("<p><b> OBSERVACION: </b>", obs6, "</p>");
            break;
}
    
// ciclo for ()


for (i=0; i<9; i++)
{
        console.log(`el valor de es de ${i}`);
}


dias = [
        {cedula:112, nombre:'lunes'},
        {cedula:112, nombre:'martes'},
        {cedula:112, nombre:'mircoles'},
]
dias.map(function(dias){
        console.log("cedula: " + dias.cedula + " = " + dias.nombre);
});


