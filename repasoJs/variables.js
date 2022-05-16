// No es fuertemente tipado
// NO es un lenguaje compilado

/* variables en c#
    string name;
    int salary;
    float interest;
*/
/*
let name ="Yuliana";
let salario = 1500000;
const AUXTRANS = 102000;
const SMLV = 908000;
let bonificacion=0, retencion=0, totalPagar;

// concatenar forma 1
console.log(name);
console.log(salario);
console.log('Empleado ' + name + "\nTiene un salario de "+ salario + "\nValor del día " + salario/30);

// concatenar forma 2  alt ->96
console.log(`Empleado ${name} \nTiene un salario de ${salario} \nValor día de ${salario/30}`);

// imprimir en el navegador
document.writeln("Empleado ", name);
document.writeln('<br>', "Tu salario es de ", salario);

// condicional simple

// mensaje que diga si tiene derecho al auxilio de transporte

if (salario <= SMLV *2)
    {
        document.writeln("Tiene derecho al Auxilio de transporte");
        document.writeln("<br>El valor del Auxilio es de ", AUXTRANS);
        document.writeln("<br>Total a pagar ", salario + AUXTRANS)
    }
else
    document.writeln("NO Tiene derecho al Auxilio de transporte");

// Condicional Anidado
/* salario <= 1000000 -> 100%
           <= 2000000 -> 40%
           <= 3000000 -> 20%
           <= 4000000 -> 10%
           <= 5000000 -> 5%
           >  5000000 -> retener el 7%
    imprimir nombre, salario, bonificación o retención Y total a pagar.
*/
/*

document.writeln("<br><br><br>**************** BONIFICACION *************");

salario = 5000001;
if (salario <= 1000000)
    bonificacion = salario;    
else if (salario <= 2000000)
        bonificacion = salario * 40/100;
else if (salario <= 3000000)
        bonificacion = salario * 20/100;
else if (salario <= 4000000)
        bonificacion = salario  *10/100;
else if (salario <= 5000000)
        bonificacion = salario * 5/100;
    else
        retencion = salario * 7/100;

document.writeln(Number.parseFloat(salario).toFixed(2));
        salario
totalPagar = salario + bonificacion - retencion
document.writeln(`<br>Empleado ${name} <br> Su salario es de ${salario} <br>Tiene una Bonificación de ${bonificacion} <br> Retención del ${retencion} <br>Total a Pagar ${totalPagar}`  )


document.writeln("<br><br><br>**************** EnCaso o Switch *************");

/* Mi vacuna
    1 Primera Etapa > 85
    2 Segunda Etapa > 70
    3 Tercera Etapa > 50 
    4 Cuarta Etapa > 30
    5 Quinta los que faltan    
    */
/*
let opc = 0;

switch (opc){
    case 1: document.writeln("<br> Perteneces a la primera etapa");
            break;
    case 2: document.writeln("<br> Perteneces a la segunda etapa");
            break;
    case 3: document.writeln("<br>Perteneces a la tercera etapa");
            break;
    case 4: document.writeln("<br>Perteneces a la cuarta etapa");
            break;
    case 5: document.writeln("<br>Perteneces a la Quinta etapa que son los faltan");
            break;
    default : document.writeln("<br> Error en la Opcion");
            break;
}

/*Un prestamista, tiene las siguientes condiciones para cobrar el interes de un prestamo
Prestamo, dias
si dias <= 30 Interes = 1.5%
si dias <0 60 Interes = 2.5%
si dias <= 90 Interes = 5%
si dias <= 120 Interes = 10%
si dias > 120 Interes = 20%

Imprimir el nombre, el valor del prestamo, el interes, el valor del interes y el total a pagar.*/

/*
document.writeln("<br><br><br> *********************EJERCICIO*********************");
let nombre = "Juan David Arteaga Gonzalez";
let valorPrestamo = 2000000;
let dias = 110;
let interes, inter;
if (dias <= 30 ){
    interes = valorPrestamo * 1.5/100;
    inter = "1.5%";
}
else if (dias <= 60){
    interes = valorPrestamo * 2.5/100;
    inter = "2.5%";
}
    else if (dias <= 90){
        interes = valorPrestamo * 5/100;
        inter = "5%";
    }
        else if (dias <= 120){
            interes = valorPrestamo * 10/100;
            inter = "10%";
        }
            else if (dias > 120){
                interes = valorPrestamo * 20/100
                inter = "20%";
            }

document.writeln(`<br>Nombre: ${nombre} <br>Valor prestamo: ${valorPrestamo} <br>El Valor del Interes es del ${inter} <br>Total de interes: ${interes} <br>Total de la deuda; ${valorPrestamo + interes}`)
*/

