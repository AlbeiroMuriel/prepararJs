var name = "Albeiro"

function scopeGlobal(){
    let apellido = 'Muriel';
    return console.log('Nombre: ' + name + '\nApellido: ' + apellido);    
}

scopeGlobal();

// console.log("Nombre: " + name + "\nApellido: " + apellido);    
//GENERA UN ERROR, porque apellido es una variable local

// funcion anonima
let a=5
let b=10
let resultado = (a,b) => a+b
