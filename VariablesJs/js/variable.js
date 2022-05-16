// Js, no es fuertemente tipado
// Es un programa  .....
// para declarar variables utilizamos LET, VAR CONST
// No existen tipos de variables como C# (int, boolean, decimal, double, string)
// vamos a declarar con let, y var es solo para variables globales
// el punto y coma es opcional al final de línea

let name = 'Caro';
name = "Emilyn";
console.log();
console.log(name);


let salary = 1500
console.log(salary);

salary = "Manuela"
console.log(salary);

var genero = "Mero Macho";
console.log(genero);
 var genero = "Mera Señorita";
 console.log(genero);
 var genero = "No definido";
 console.log(genero);

 var genero = 2500;
 console.log("Me debe ", genero);



// document.write, para imprimir en la pag Html
// console.log es para imprimir en la consola
// document.writeln("Tu nota final es de" + notadef);
// document.writeln(`<br><br>Otra forma de imprimir la nota ${notadef}`)

/* Observaciones para la nota definitiva.
    Notadef 0  y 1.9 obs1
    Notadef 2  y 2.9 obs2
    Notadef 3  y 3.9 obs3
    Notadef 4  y 4.5 obs4
    Notadef 4.6  y 5 obs5
    Notadef >5 obs6 
    */
const obs1 = "Perdio, No puede recuperar";
const obs2 = "Perdio, Pero puede recuperar";
const obs3 = "Gano, Puedes mejorar";
const obs4 = "Felicitaciones...eatas cerca de ser excelente";
const obs5 = "Excelente trabajo";
const obs6 = "No puedes tener una nota superior de 5";

let n1=5, n2=5, n3=15;
let notadef;
notadef =(n1+n2+n3) / 3;
console.log(notadef);


document.writeln(`Nombre Estudiante: ${name} `);

if (notadef < 2)
    { document.writeln(`<p> <b>Observación: ${obs1} </p>`)}
else if(notadef <3)
        {document.writeln(`<p> <b>Observación: ${obs2}</p>`)}
else if(notadef <4)
            {document.writeln(`<p> <b>Observación: ${obs3}</p>`)}
else if(notadef < 4.6)            
                {document.writeln(`<p> <b>Observación: ${obs4}</p>`)}
else if(notadef <=5)
                    {document.writeln(`<p> <b>Observación: ${obs5} </p>`)}
else
    {document.writeln(`<p> <b>Observación: ${obs6}</p>`)}


//switch o Case
// digitar un nro de día y decir a que dia en letras pertenece
let dia = 17;

document.writeln(`<p><b> El nro es ${dia} </p></b>`)
switch(dia){
    case 1:{document.writeln("<p><b> Lunes </p></b>");break;}
    case 2:{document.writeln("<p><b> Martes </p></b>");break;}
    case 3:{document.writeln("<p><b> Miércoles </p></b>");break;}
    case 4:{document.writeln("<p><b> Jueves </p></b>");break;}
    case 5:{document.writeln("<p><b> Viernes </p></b>");break;}
    case 6:{document.writeln("<p><b> Sábado </p></b>");break;}
    case 7:{document.writeln("<p><b> Domingo </p></b>");break;}
    default: {document.writeln("<p><b> Error en el nro </p></b>");break;}
}


