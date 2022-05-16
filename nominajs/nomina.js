
function calcular(){

    /* D O M
        getElementById
        textContent
        innerHTML

        LET declarar variables
        const declarar constantes
    */
      let salariomes =Number(document.getElementById("salario").value);
      let horasem = Number(document.getElementById("nroHoras").value);

      let vlrdia = salariomes/30;
      let vlrhora = vlrdia/8;
      let pago = horasem * vlrhora;

     

      let lbl_dia = document.getElementById("lbldia");
      lbl_dia.textContent = "Valor del día: " + vlrdia;

      let lbl_hora = document.getElementById("lblhora");
      lbl_hora.textContent ="Valor de la hora: "+ vlrhora;

      let lbl_pago = document.getElementById("lblpago");
      lbl_pago.textContent = "Total a Pagar: " + pago;
}


