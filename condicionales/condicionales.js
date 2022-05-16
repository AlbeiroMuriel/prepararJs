
let clave= 123;

if (clave == 123)
    {
        document.writeln("hola!")
        document.writeln("La contraseña es CORRECTA")}
    
else
    document.writeln("La contraseña es INCORRECTA 😁");


let nota= 6
if (nota >0 && nota <=5)
    if (nota <3)
        {document.writeln("<p>Perdio por Vago....</p>");}
        else if(nota <4)
            {document.writeln("<p>Gano... Pero puede mejorar</p>");}
                else if (nota <4.5)        
                    {document.writeln("<p>Sobresaliente</p>");}
                    else
                        {document.writeln("<p>ERES EXCELENTE</p>");}
else                        
    {document.writeln("<p>... la nota no esta en el rango</p>");}
                

  
document.writeln("<h1>Operadores Ternarios</h1>")


let resultado;
clave = 123;

resultado =  (clave == 123)? document.writeln("Clave Correcta"): document.writeln("Clave InCorrecta");

nota = 6;
nota = prompt("Nota Definitiva");
resultado = (nota < 3)? 'Perdio':
            (nota < 4)? 'Gano... Pero puede mejorar':
            (nota <4.5)?'Sobresaliente' :
            (nota <=5)? 'Excelente':'errror'

            console.log(resultado)
