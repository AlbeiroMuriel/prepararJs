

function Sumar(){
    console.log(`La suma es: ${suma}`);
}

function Sumar2(nro1,nro2){
    let Sumi= nro1 + nro2;
    console.log(`La suma con parametros es : ${Sumi}`);
}

function ConRetorno(nro1, nro2){

    return nro1*nro2;
}

let nro1 = 10;
let nro2 = 20;
let suma = nro1 + nro2;
console.log(`La suma es: ${suma}`);

nro1 = 50;
nro2 = 100;
suma = nro1 + nro2;
Sumar()
nro1= 500;
nro2= 890;
Sumar2(nro1,nro2)
//console.log(`La suma es: ${suma}`);

// sin parametros


// llamar con retorno

let resultadMul = ConRetorno(nro1, nro2);
let mensaje = "Esto es una función con Retorno.... Resultado = "
console.log(`${mensaje} ${resultadMul}`);
