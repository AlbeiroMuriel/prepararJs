
function Sumar(){
    let suma;
    let vnro1 =Number(document.getElementById("nr1").value);
    let vnro2 =Number(document.getElementById("nr2").value);
    
    // var vresultado = document.getElementById("resultado");
    vnro1=5;vnro2=10;
    suma = vnro1 + vnro2;
    //document.getElementById("resultado").value=`la suma es ${suma}`;
     document.getElementById("resultado").value="la suma es " +suma;
    // vresultado.textContent="suma" + suma;
}

function Restar(){
    let resta;
    let vnro1 =Number(document.getElementById("nr1").value);
    let vnro2 =Number(document.getElementById("nr2").value);
    resta = vnro1 - vnro2;
    document.getElementById("resultado").value=resta;
}

function Dividir(){
    let divi;
    let vnro1 =Number(document.getElementById("nr1").value);
    let vnro2 =Number(document.getElementById("nr2").value);
     if (vnro2 == 0){
         document.getElementById("resultado").value="Error Div = 0";    
     }
     else
     {
        divi = vnro1 / vnro2;
        document.getElementById("resultado").value=divi;

     }
    
}
