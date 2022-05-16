let nombre = "Albeiro";
let salario = 15000;


console.log(nombre);
console.log(salario);

console.log("Tu nombre", nombre, " tu salario ", salario)
console.log(`tu nombre ${nombre} Tu salario  ${salario}`);

let nota1=4, nota2=4, nota3=3, notaDef;
notaDef = (nota1 + nota2 + nota3)/3;
if (notaDef < 3)
    console.log("Perdio");
else
    console.log("Gano");

if (notaDef < 1)
    console.log("Nota 1");
else if (notaDef < 2)
    console.log("Nota 2");
    else if(notaDef < 3)
        console.log("nota 3");
        else if (notaDef < 4)
            {console.log("Nota 4");
            console.log("muy bien");}
            else
            console.log("nota 5");

document.writeln(notaDef);
document.writeln(nombre);
document.writeln("<br/> tu nombre ", nombre, " tu nota definitiva ", notaDef )

notaDef = 1;

switch (notaDef){
    case 1: console.log("case nota 1");
            break;
    case 2: console.log("case nota 2");
            break;
    case 3: console.log("case nota 3");
            break;
    default:
            console.log("error");
            break
            
}


