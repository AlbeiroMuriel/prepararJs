function Calculos(){
   
 let p1='Peso insuficiente, visitar Nutricionista';
 let p2='Peso adecuado, rango normal';
 let p3='Sobrepeso, moderar la alimentación'; 
 let p4='Obesidad grado I. Empezar ejercicio de inmediato';
 let p5='Obesidad grado II. Solicitar cita con sicologo';
 let p6='Obecidad grado III, Visitar a GORDITOS DE CORAZON';
 let p7='Obecidad grado IV, Extrema... Ver programa... Kilos Mortales';

 let vpeso = Number(document.getElementById('peso').value)
 let vestatura= Number(document.getElementById('estatura').value)
 let imc = vpeso/ (vestatura*vestatura)
 
 if (imc <=18.5)
    document.getElementById('diagnostico').innerText= `el imc es de ${Intl.NumberFormat().format(imc)}; \nTu Diagnostico es ${p1}`;  
 else if (imc <=24.9) 
      document.getElementById('diagnostico').innerText= `el imc es de ${Intl.NumberFormat().format(imc)}; \nTu Diagnostico es ${p2}`;
  else if (imc <=29.9)
      document.getElementById('diagnostico').innerText= `el imc es de ${Intl.NumberFormat().format(imc)}; \nTu Diagnostico es ${p3}`;
  else if (imc <=34.9)
      document.getElementById('diagnostico').innerText= `el imc es de ${Intl.NumberFormat().format(imc)}; \nTu Diagnostico es ${p4}`;
  else if (imc <=39.9)
      document.getElementById('diagnostico').innerText= `el imc es de ${Intl.NumberFormat().format(imc)}; \nTu Diagnostico es ${p5}`;
  else if (imc <=49.9)
      document.getElementById('diagnostico').innerText= `el imc es de ${Intl.NumberFormat().format(imc)}; \nTu Diagnostico es ${p6}`;
      else
      document.getElementById('diagnostico').innerText= `el imc es de ${Intl.NumberFormat().format(imc)}; \nTu Diagnostico es ${p7}`;    
}